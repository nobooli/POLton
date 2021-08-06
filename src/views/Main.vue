<template>
  <v-container>
    <v-row class="title_card">
      <v-card>
          <v-card-title>
            Congratulations on your 1st Anniversary Polka!
          </v-card-title>
          <v-card-title>
            ポルカ、一周年おめでとうございます!
          </v-card-title>
      </v-card>
    </v-row>
    <!-- <v-row>
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
    </v-row> -->
    <v-row>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-hover class="navi-zain">
        <a href="https://www.youtube.com/channel/UCK9V2B22uJYu3N7eR_BT9QA" id="flag-zain">
          <img :src="hovered_zain === -1 ? flag_hover : flag_idle"
            @mouseover="hovered_zain = -1"
            @mouseleave="hovered_zain = null">
        </a>
      </v-hover>
      <v-col v-for="(link, i) in links"
        :key="i"
        >
        <v-hover class="navi-zain">
          <!-- <svg :src="link.img"> -->
          <!-- <router-link v-if="i=4" @click.native="$topOfPage()">
            <img :src="hovered_zain === i ? link.img_hover : link.img" 
              @mouseover="hovered_zain = i" 
              @mouseleave="hovered_zain = null">
          </router-link> -->
          <router-link :to="link.link">
            <img :id="link.id"
              :src="hovered_zain === i ? link.img_hover : link.img" 
              @mouseover="hovered_zain = i" 
              @mouseleave="hovered_zain = null">
          </router-link>
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

  export default {
    data: function() {
      return {
        bigtop: bigtop,
        congrats_message: congrats_message,
        crowd: crowd,
        hovered_zain: null,
        flag_idle: "/img/flag_idle_150.png",
        flag_hover: "/img/flag_hover_150.png",
        links: [
          { // trivia quiz
            link: "/About",
            img: "/img/letter_idle_150.png",
            img_hover: "/img/letter_hover_150.png",
            id: "letter-zain"
          },
          { // gallery
            link: "/Presents",
            img: "/img/gallery_idle_150.png",
            img_hover: "/img/gallery_hover_150.png",
            id: "gallery-zain"
          },
          { // soundboard
            link: "/Soundboard",
            img: "/img/megaphone_idle_150.png",
            img_hover: "/img/megaphone_hover_150.png",
            id: "megaphone-zain"
          },
          { // top of page
            link: "#",
            img: "/img/ball_idle_150.png",
            img_hover: "/img/ball_hover_150.png",
            id: "ball-zain"
          }
        ],

      }
    },
    methods: {
      topOfPage() {
        window.scrollTo({
          top: 0, 
          left: 0, 
          behavior: 'smooth'
        });
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

.navi-zain {
  max-width: 10%;
  min-width: 50px;
}

.gallery-zain {
  min-width: 50px;
}
</style>