<template>
  <v-container>
    <v-row align="center">
      <v-col>
        <v-btn @click="generate(null)">Generate</v-btn>
        <v-btn class="ml-4" @click="download">Download</v-btn>
        <v-btn class="ml-4" @click="reset">Reset board</v-btn>
      </v-col>
    </v-row>
    <canvas ref="bingoCanvas" v-on:click="mouseClick"></canvas>
  </v-container>
</template>
<script>
import bingoLines from "@/assets/bingoLines.json";
export default {
  beforeMount() {
    window.addEventListener("beforeunload", this.preventNav);
    this.$once("hook:beforeDestroy", () => {
      window.removeEventListener("beforeunload", this.preventNav);
    });
  },

  beforeRouteLeave(to, from, next) {
    if (this.isPlaying) {
      if (!window.confirm("Abandon the game?")) {
        return;
      }
    }
    next();
  },

  mounted() {
    this.generate(null);
  },
  data: function () {
    return {
      isPlaying: false,
      table: [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
      ],
      tableText: [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
      ],
    };
  },
  methods: {
    reset: function () {
      this.isPlaying = false;
      for (let y = 0; y < 5; y++) {
        for (let x = 0; x < 5; x++) {
          this.table[y][x] = 0;
        }
      }
      this.table[2][2] = 1;
      this.generate(this.tableText);
    },
    checkBingo: function () {
      //check rows
      let colSums=[0,0,0,0,0];
      for (let y = 0; y < 5; y++) {
        let rowSum = 0;
        for (let x = 0; x < 5; x++) {
          rowSum+=this.table[y][x];
          colSums[x]+=this.table[y][x];
          if (colSums[x] === 5) {
            return true;
          }
        }
        if (rowSum===5) {
          return true;
        }
      }
      return false;
    },
    mouseClick: function (event) {
      if (event.offsetX && event.offsetY) {
        let x = event.offsetX - 44;
        let y = event.offsetY - 476;
        if (x > 0 && y > 0 && x < 909 && y < 1350) {
          this.isPlaying = true;
          let tableX = Math.ceil(x / 164) - 1;
          let tableY = Math.ceil(y / 164) - 1;
          this.table[tableY][tableX] = 1;
          {
            //draw
            const context = this.$refs.bingoCanvas.getContext("2d");

            context.font = "16pt Arial";
            let cellX = tableX*164+44;
            let cellY = tableY*164+475;
            let width = 161;
            context.beginPath();
            context.lineWidth="2";
            context.strokeStyle = "red";
            context.rect(cellX,cellY,width,width);
            context.stroke();
          }
          if (this.checkBingo()) {
            alert("Bingo!");
          }
        }
      }
    },
    generate(generatedLines = null) {
      if (this.isPlaying) {
        if (!window.confirm("Abandon the game?")) {
          this.reset();
          return;
        }
      }

      const context = this.$refs.bingoCanvas.getContext("2d");
      context.canvas.width = 909;
      context.canvas.height = 1350;
      context.font = "16pt Arial";
      context.fillStyle = "0,0,0";

      const bg = new Image();
      bg.onload = () => {
        context.drawImage(bg, 0, 0);

        const lines =
          generatedLines === null
            ? this.getRandomLines(bingoLines, 24)
            : generatedLines;

        const xOrigin = 45;
        const yOrigin = 480;
        const squareSide = 165;
        const textBoxPadding = 5;
        const textBox = 160;

        for (let line = 0; line < 5; line++) {
          for (let col = 0; col < 5; col++) {
            let text;
            if (generatedLines === null) {
              if (col === 2 && line === 2) {
                text = "Konlulu!";
              } else {
                text = lines.pop()[this.$i18n.locale];
              }
              this.tableText[line][col] = text;
            } else {
              text = this.tableText[line][col];
            }

            this.wrapText(
              context,
              text,
              xOrigin + squareSide * col + textBoxPadding,
              yOrigin + squareSide * line + squareSide / 2.5 + textBoxPadding,
              textBox,
              25
            );
          }
        }
      };
      bg.src = "/img/bingo_base.png";
    },
    getRandomLines(array, size) {
      if (array.length < size) {
        throw new Error(
          `Array doesn't have enough elements (${array.length}) for requested size (${size})`
        );
      }
      const lines = array.slice();
      const result = [];
      for (let i = 0; i < size; i++) {
        const rand = Math.trunc(Math.random() * lines.length);
        result.push(lines.splice(rand, 1)[0]);
      }
      return result;
    },

    wrapText(context, text, x, y, maxWidth, lineHeight) {
      const words = text.split(" ");
      let line = "";

      for (let n = 0; n < words.length; n++) {
        const testLine = line + words[n] + " ";
        const metrics = context.measureText(testLine);

        const testWidth = metrics.width;
        if (testWidth > maxWidth && n > 0) {
          context.fillText(line, x, y);
          line = words[n] + " ";
          y += lineHeight;
        } else {
          line = testLine;
        }
      }
      context.fillText(line, x, y);
    },
    download() {
      //
      var image = this.$refs.bingoCanvas
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream"); // here is the most important part because if you dont replace you will get a DOM 18 exception.
      window.location.href = image;
    },
  },
};
</script>