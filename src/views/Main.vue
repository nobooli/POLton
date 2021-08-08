<template>
  <v-container>
    <div class="title_card">
      <v-card>
          <v-card-title class="welcome-message">
            Congratulations on your 1st Anniversary Polka!
          </v-card-title>
          <v-card-title>
            座長、一周年おめでとうございます!
          </v-card-title>
      </v-card>
    </div>
    <div class="tent">
      <img :src="tent" 
        :srcset="tent_srcset"
        :sizes="tent_sizes">
    </div>
    <div class="navi-zains">
      <v-hover class="navi-zain">
        <a href="https://www.youtube.com/channel/UCK9V2B22uJYu3N7eR_BT9QA" id="flag-zain">
          <img :src="hovered_zain === -1 ? flag_hover : flag_idle"
            @mouseover="hovered_zain = -1"
            @mouseleave="hovered_zain = null"
            :srcset="hovered_zain === -1 ? flag_srcset_hover : flag_srcset"
            :sizes="zain_sizes">
        </a>
      </v-hover>
      <v-hover class="navi-zain" v-for="(link, i) in links"
      :key="i">
        <router-link :to="link.link">
          <img :id="link.id"
            :src="hovered_zain === i ? link.img_hover : link.img" 
            @mouseover="hovered_zain = i" 
            @mouseleave="hovered_zain = null"
            :srcset="hovered_zain === i ? link.srcset_hover : link.srcset"
            :sizes="zain_sizes">
        </router-link>
      </v-hover>
    </div>
  </v-container>
</template>

<script>
  export default {
    data: function() {
      return {
        hovered_zain: null,
        zain_sizes: "(max-width: 600px) 75px, (max-width: 1280px) 150px, 300px",
        flag_idle: "img/flag_idle_300.png",
        flag_hover: "img/flag_hover_300.png",
        flag_srcset: "img/flag_idle_75.png 75w, img/flag_idle_150.png 150w, img/flag_idle_300.png 300w",
        flag_srcset_hover: "img/flag_hover_75.png 75w, img/flag_hover_150.png 150w, img/flag_hover_300.png 300w",
        tent: "img/TEMT_WITH_BOWS_1000.png",
        tent_srcset: "img/TEMT_WITH_BOWS_250.png 250w, img/TEMT_WITH_BOWS_500.png 500w, img/TEMT_WITH_BOWS_1000.png 1000w",
        tent_sizes: "(max-width: 600px) 250px, (max-width: 1280px) 500px, 1000px",
        links: [
          { // trivia quiz
            link: "/Messages",
            img: "img/letter_idle_300.png",
            img_hover: "img/letter_hover_300.png",
            id: "letter-zain",
            srcset: "img/letter_idle_75.png 75w, img/letter_idle_150.png 150w, img/letter_idle_300.png 300w",
            srcset_hover: "img/letter_hover_75.png 75w, img/letter_hover_150.png 150w, img/letter_hover_300.png 300w"
          },
          { // gallery
            link: "/Presents",
            img: "img/gallery_idle_300.png",
            img_hover: "img/gallery_hover_300.png",
            id: "gallery-zain",
            srcset: "img/gallery_idle_75.png 75w, img/gallery_idle_150.png 150w, img/gallery_idle_300.png 300w",
            srcset_hover: "img/gallery_hover_75.png 75w, img/gallery_hover_150.png 150w, img/gallery_hover_300.png 300w"
          },
          { // soundboard
            link: "/Soundboard",
            img: "img/megaphone_idle_300.png",
            img_hover: "img/megaphone_hover_300.png",
            id: "megaphone-zain",
            srcset: "img/megaphone_idle_75.png 75w, img/megaphone_idle_150.png 150w, img/megaphone_idle_300.png 300w",
            srcset_hover: "img/megaphone_hover_75.png 75w, img/megaphone_hover_150.png 150w, img/megaphone_hover_300.png 300w"
          },
          { // Quiz
            link: "/Quiz",
            img: "img/quiz_idle_300.png",
            img_hover: "img/quiz_hover_300.png",
            id: "ball-zain",
            srcset: "img/quiz_idle_75.png 75w, img/quiz_idle_150.png 150w, img/quiz_idle_300.png 300w",
            srcset_hover: "img/quiz_hover_75.png 75w, img/quiz_hover_150.png 150w, img/quiz_hover_300.png 300w"
          }
        ]
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
.welcome-message {
  word-break: keep-all;
}

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

.title_card, .navi-zains, .tent {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>