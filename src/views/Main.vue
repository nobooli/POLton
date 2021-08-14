<template>
  <v-container>
    <Header
      :banner_image="banner"
      :title_text="title_text"
    ></Header>
    <br />
    <div class="tent" data-aos="zoom-in">
      <img :src="tent" 
        :srcset="tent_srcset"
        :sizes="tent_sizes">
    </div>
    <div data-aos="fade-down">
      <div class="navi-zains">
        <v-hover class="navi-zain">
          <a href="https://www.youtube.com/channel/UCK9V2B22uJYu3N7eR_BT9QA" id="flag-zain">
            <img :src="hovered_zain === -1 ? flag_hover : flag_idle"
              @mouseover="hovered_zain = -1"
              @mouseleave="hovered_zain = null"
              :srcset="hovered_zain === -1 ? flag_srcset_hover : flag_srcset"
              :sizes="zain_sizes"
              class="jumping-zain">
          </a>
        </v-hover>
        <v-hover class="navi-zain" v-for="(link, i) in links"
          :key="i" 
        >
          <router-link :to="link.link">
            <img :id="link.id"
              :src="hovered_zain === i ? link.img_hover : link.img" 
              @mouseover="hovered_zain = i" 
              @mouseleave="hovered_zain = null"
              :srcset="hovered_zain === i ? link.srcset_hover : link.srcset"
              :sizes="zain_sizes"
              class="jumping-zain">
          </router-link>
        </v-hover>
      </div>
    </div>
  </v-container>
</template>


<script>
import AOS from 'aos'
import Header from '../components/Header'

  export default {
    components: {
      Header
    },
    data: function() {
      return {
        banner: "img/omapol_1shuu.png",
        title_text: "filler",

        hovered_zain: null,
        zain_sizes: "(max-width: 600px) 75px, (max-width: 1280px) 150px, 300px",
        flag_idle: "img/flag_idle_300.png",
        flag_hover: "img/flag_hover_300.png",
        flag_srcset: "img/flag_idle_75.png 75w, img/flag_idle_150.png 150w, img/flag_idle_300.png 300w",
        flag_srcset_hover: "img/flag_hover_75.png 75w, img/flag_hover_150.png 150w, img/flag_hover_300.png 300w",
        tent: "img/TEMT_WITH_BOWS_1000.png",
        tent_srcset: "img/TEMT_WITH_BOWS_250.png 250w, img/TEMT_WITH_BOWS_500.png 500w, img/TEMT_WITH_BOWS_800.png 800w",
        tent_sizes: "(max-width: 600px) 250px, (max-width: 1280px) 500px, 800px",
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
            id: "quiz-zain",
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
      },
      AOSInit() {
        this.aos = AOS;
        this.aos.init({
          duration: 1000,
          disable: "mobile"
        });
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.AOSInit();
      });
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

.navi-zains { margin-top: -5em; }

@media screen and (min-width:600px) {
  .navi-zains { margin-top: -10em; }
}
@media screen and (min-width:960px) {
  .navi-zains { margin-top: -10em; }
}
@media screen and (min-width:1280px) {
  .navi-zains { margin-top: -20em; }
}

.navi-zains, .tent {
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>