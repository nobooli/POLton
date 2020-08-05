<template>
  <v-container>
    <v-row align="center">
      <v-col>
        <v-btn @click="generate">Generate</v-btn>
        <v-btn class="ml-4" @click="download">Download</v-btn>
      </v-col>
    </v-row>
    <canvas ref="bingoCanvas"></canvas>
  </v-container>
</template>
<script>
import bingoLines from "@/assets/bingoLines.json";
export default {
  mounted() {
    this.generate();
  },
  methods: {
    generate() {
      const context = this.$refs.bingoCanvas.getContext("2d");
      context.canvas.width = 909;
      context.canvas.height = 1350;
      context.font = "16pt Arial";
      context.fillStyle = "0,0,0";

      const bg = new Image();
      bg.onload = () => {
        context.drawImage(bg, 0, 0);
        const lines = this.getRandomLines(bingoLines, 24);
        const xOrigin = 45;
        const yOrigin = 480;
        const squareSide = 165;
        const textBoxPadding = 5;
        const textBox = 160;
        for (let line = 0; line < 5; line++) {
          for (let col = 0; col < 5; col++) {
            let text;
            if (col === 2 && line === 2) {
              text = "Konlulu!";
            } else {
              text = lines.pop()[this.$i18n.locale];
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
    download(){
      //
      var image = this.$refs.bingoCanvas.toDataURL("image/png").replace("image/png", "image/octet-stream");  // here is the most important part because if you dont replace you will get a DOM 18 exception.
      window.location.href=image;
    }
  },
};
</script>