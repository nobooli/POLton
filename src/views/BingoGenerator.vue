<template>
  <v-container>
    <v-row align="center">
      <v-col class="text-center">
        <v-btn @click="generate(null)">Generate</v-btn>
        <v-btn class="ml-4" @click="download">Download</v-btn>
        <v-btn class="ml-4" @click="reset">Reset board</v-btn>
      </v-col>
    </v-row>
    <v-row align="center">
      <v-col class="text-center">
        <canvas class="d-inline" ref="bingoCanvas" v-on:click="mouseClick"></canvas>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import bingoLines from "@/assets/bingoLines.json";
export default {
  beforeRouteLeave(to, from, next) {
    if (this.isPlaying) {
      if (!window.confirm("Abandon the game?")) {
        return;
      }
    }
    next();
  },

  mounted() {
    for (const [index, line] of Object.entries(bingoLines)) {
      line.index = index;
    }
    window.addEventListener("beforeunload", this.preventNav);
    this.$once("hook:beforeDestroy", () => {
      window.removeEventListener("beforeunload", this.preventNav);
    });
    let restore;
    if (this.$route.query.lines) {
      restore = this.decodeList(this.$route.query.lines).map(
        (i) => bingoLines[i]
      );
    }
    this.generate(restore);
  },
  data() {
    return {
      isPlaying: false,
      bingoed: false,
      lines: [],
      table: [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
      ],
    };
  },
  methods: {
    reset() {
      this.isPlaying = false;
      this.bingoed = false;
      for (let y = 0; y < 5; y++) {
        for (let x = 0; x < 5; x++) {
          this.table[y][x] = 0;
        }
      }
      this.table[2][2] = 1;
      this.generate(this.lines);
    },
    checkBingo() {
      //check rows
      const colSums = [0, 0, 0, 0, 0];
      for (let y = 0; y < 5; y++) {
        let rowSum = 0;
        for (let x = 0; x < 5; x++) {
          rowSum += this.table[y][x];
          colSums[x] += this.table[y][x];
          if (colSums[x] === 5) {
            return true;
          }
        }
        if (rowSum === 5) {
          return true;
        }
      }
      return false;
    },
    mouseClick(event) {
      if (event.offsetX && event.offsetY) {
        const x = event.offsetX - 44;
        const y = event.offsetY - 476;
        if (x > 0 && y > 0 && x < 909 && y < 1350) {
          this.isPlaying = true;
          const tableX = Math.ceil(x / 164) - 1;
          const tableY = Math.ceil(y / 164) - 1;
          this.table[tableY][tableX] = 1;
          {
            //draw
            const context = this.$refs.bingoCanvas.getContext("2d");

            context.font = "16pt Arial";
            const cellX = tableX * 164 + 44;
            const cellY = tableY * 164 + 475;
            const width = 161;
            context.beginPath();
            context.lineWidth = "2";
            context.strokeStyle = "red";
            context.rect(cellX, cellY, width, width);
            context.stroke();
          }
          if (!this.bingoed && this.checkBingo()) {
            this.bingoed = true;
            alert("Bingo!");
          }
        }
      }
    },
    generate(generatedLines) {
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

        if (generatedLines) {
          this.lines = generatedLines;
        } else {
          this.lines = this.getRandomLines(bingoLines, 24);
          this.$router.push({
            query: { lines: this.encodeList(this.lines.map((l) => l.index)) },
          });
        }
        const linesCopy = this.lines.slice();
        const xOrigin = 45;
        const yOrigin = 480;
        const squareSide = 165;

        for (let line = 0; line < 5; line++) {
          for (let col = 0; col < 5; col++) {
            let text;
            if (col === 2 && line === 2) {
              text = "Konlulu!";
            } else {
              text = linesCopy.pop()[this.$i18n.locale];
            }
            this.wrapText(
              context,
              text,
              xOrigin + squareSide * col + squareSide / 2, // around horizontal center
              yOrigin + squareSide * line + squareSide / 2, //around vertical center
              squareSide,
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

    encodeList(array) {
      return btoa(array.join(","));
    },
    decodeList(encoded) {
      return atob(encoded).split(",");
    },

    wrapText(context, text, x, y, maxWidth, lineHeight) {
      const words = text.split(" ");
      const final = [];
      let line = "";
      let metrics;
      for (let n = 0; n < words.length; n++) {
        const testLine = line + words[n] + " ";
        metrics = context.measureText(testLine);

        const testWidth = metrics.width;
        if (testWidth > maxWidth && n > 0) {
          final.push(line);

          line = words[n] + " ";
        } else {
          line = testLine;
        }
      }
      final.push(line);
      const finalHeight = final.length * lineHeight;

      let yStart = y - finalHeight / 2;
      for (const text of final) {
        const xStart = x - context.measureText(text).width / 2;

        context.fillText(text, xStart, yStart);
        yStart += lineHeight;
      }
    },
    download() {
      var image = this.$refs.bingoCanvas
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
      window.location.href = image;
    },
  },
};
</script>