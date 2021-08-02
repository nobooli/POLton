<template>
  <v-container>
    <v-row>
      <v-spacer></v-spacer>
      <v-col>
          <p>Congratulations on your 1st Anniversary Polka!</p>
          <p>ポルカ、一周年おめでとうございます</p>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
    <v-row>
      <v-spacer></v-spacer>
      <v-col>
        <img :src="bigtop" />
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
    <v-row>
      <v-spacer></v-spacer>
      <v-col>
        <img :src="crowd" />
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
    <v-row>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-col v-for="(link, i) in links"
        :key="i"
        >
        <v-hover>
          <!-- <svg :src="link.img"> -->
          <a :href="link.link">
            <img :src="hovered_zain === i ? link.img_hover : link.img" 
              @mouseover="hovered_zain = i" 
              @mouseleave="hovered_zain = null">
          </a>
        </v-hover>
      </v-col>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
    </v-row>
  </v-container>
</template>

<script>
  import bigtop from "../assets/img/bigtop-tent.svg"
  import congrats_message from "../assets/img/congratulations-message.svg"
  import crowd from "../assets/img/crowd-of-zains.svg"
  import navi_zain from "../assets/img/navigation-menu-zain.svg"
  import navi_zain_flag from "../assets/img/navigation-menu-zain-flag.svg"

  export default {
    data: function() {
      return {
        bigtop: bigtop,
        congrats_message: congrats_message,
        crowd: crowd,
        hovered_zain: null,
        links: [
          { // youtube channel link
            link: "https://www.youtube.com/channel/UCK9V2B22uJYu3N7eR_BT9QA",
            img: navi_zain,
            img_hover: navi_zain_flag
          },
          { // trivia quiz
            link: "#",
            img: navi_zain,
            img_hover: navi_zain_flag
          },
          { // gallery
            link: "/Presents",
            img: navi_zain,
            img_hover: navi_zain_flag
          },
          { // soundboard
            link: "/Soundboard",
            img: navi_zain,
            img_hover: navi_zain_flag
          },
          { // top of page
            link: "#",
            img: navi_zain,
            img_hover: navi_zain_flag
          }
        ]
      }
    }
  }
</script>

<style>
.a {
  text-decoration: none;
}

.btn {
  max-width: 100%;
  word-wrap: break-word !important;
  word-break: break-all !important;
  white-space: normal !important;
  text-transform: none !important;
  display: inline-block;
}
</style>