<template>
  <v-container>
    <div class="main-title-card">
      <div class="ticket_card">
        <div>
          <p class="title_text">
            <span>{{$t('ui.scrollingTitle')}}</span>
          </p>
        </div>
      </div>
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

.ticket_card { /* this will be the border + shape */
  position: relative;
  background: #46403f;
  border: .6em double #f8ed9e;
  border-radius: .3em;
  /* padding: 3em; */
  padding: 3em 0 3em 0;
  width: 100%;
}

.title_text {
  margin: 0 auto;
  white-space: nowrap;
  overflow: hidden;
  position: absolute;
  width: 100%;
}

.title_text {
  color: #f8ed9e;
  font-weight: 500;
  font-size: 2em;
}

.title_text span {
  display: inline-block;
  padding-left: 100%;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-name: title_text;
}

@media screen and (max-width: 599px) {
  .title_text span {
    animation-duration: 12s;
  }
}

@media screen and (min-width: 600px) {
  .title_text span {
    animation-duration: 14s
  }
}

@media screen and (min-width: 960px) {
  .title_text span {
    animation-duration: 16s;
  }
}

@media screen and (min-width: 1280px) {
  .title_text span {
    animation-duration: 20s;
  }

}

@media screen and (min-width: 1920px) {
  .title_text span {
    animation-duration: 24s;
  }

}

@keyframes title_text {
  100% { 
    transform: translateX(-100%); 
  }
}

.navi-zain img {
	animation-duration: 8s;
  animation-iteration-count: infinite;
	transform-origin: bottom;
  animation-timing-function: cubic-bezier(0.28, 0.84, 0.42, 1);
}

#flag-zain img {
  animation-name: flag_bounce;
}

#letter-zain {
  animation-name: letter_bounce;
}

#gallery-zain {
  animation-name: gallery_bounce;
}

#megaphone-zain {
  animation-name: megaphone_bounce;
}

#quiz-zain {
  animation-name: quiz_bounce;
}

@media screen and (max-width: 959px)
{
  @keyframes flag_bounce {
    0%   { transform: scale(1,1)      translateY(0); } /* 1.6s, 0% */
    2%  { transform: scale(1.1,.9)   translateY(0); } /* 1.6s, 10% */
    6%  { transform: scale(.9,1.1)   translateY(-40px); } /* 1.6s, 30% */
    10%  { transform: scale(1.05,.95) translateY(0); } /* 1.6s, 50% */
    11.4%  { transform: scale(1,1)      translateY(-7px); } /* 1.6s, 57% */
    12.8%  { transform: scale(1,1)      translateY(0); } /* 1.6s, 64% */
    20% { transform: scale(1,1)      translateY(0); } /* 1.6s, 100% */
    /* remainder of 8 seconds */
  }

  @keyframes letter_bounce {
    /* 1.6 seconds of waiting */
    0%   { transform: scale(1,1)      translateY(0); } /* 1.6s, 0% */
    20%   { transform: scale(1,1)      translateY(0); } /* 1.6s, 0% */
    22%  { transform: scale(1.1,.9)   translateY(0); } /* 1.6s, 10% */
    26%  { transform: scale(.9,1.1)   translateY(-40px); } /* 1.6s, 30% */
    30%  { transform: scale(1.05,.95) translateY(0); } /* 1.6s, 50% */
    31.4%  { transform: scale(1,1)      translateY(-7px); } /* 1.6s, 57% */
    32.8%  { transform: scale(1,1)      translateY(0); } /* 1.6s, 64% */
    40% { transform: scale(1,1)      translateY(0); } /* 1.6s, 100% */
    /* remainder of 8 seconds */
  }

  @keyframes gallery_bounce {
    /* 3.2 seconds of waiting */
    0%   { transform: scale(1,1)      translateY(0); } /* 1.6s, 0% */
    40%   { transform: scale(1,1)      translateY(0); } /* 1.6s, 0% */
    42%  { transform: scale(1.1,.9)   translateY(0); } /* 1.6s, 10% */
    46%  { transform: scale(.9,1.1)   translateY(-40px); } /* 1.6s, 30% */
    50%  { transform: scale(1.05,.95) translateY(0); } /* 1.6s, 50% */
    51.4%  { transform: scale(1,1)      translateY(-7px); } /* 1.6s, 57% */
    52.8%  { transform: scale(1,1)      translateY(0); } /* 1.6s, 64% */
    60% { transform: scale(1,1)      translateY(0); } /* 1.6s, 100% */
    /* remainder of 8 seconds */
  }

  @keyframes megaphone_bounce {
    /* 4.8 seconds of waiting */
    0%   { transform: scale(1,1)      translateY(0); } /* 1.6s, 0% */
    60%   { transform: scale(1,1)      translateY(0); } /* 1.6s, 0% */
    62%  { transform: scale(1.1,.9)   translateY(0); } /* 1.6s, 10% */
    66%  { transform: scale(.9,1.1)   translateY(-40px); } /* 1.6s, 30% */
    50%  { transform: scale(1.05,.95) translateY(0); } /* 1.6s, 50% */
    51.4%  { transform: scale(1,1)      translateY(-7px); } /* 1.6s, 57% */
    52.8%  { transform: scale(1,1)      translateY(0); } /* 1.6s, 64% */
    60% { transform: scale(1,1)      translateY(0); } /* 1.6s, 100% */
    /* remainder of 8 seconds */
  }

  @keyframes quiz_bounce {
    /* 6.4 seconds of waiting */
    0%   { transform: scale(1,1)      translateY(0); } /* 1.6s, 0% */
    80%   { transform: scale(1,1)      translateY(0); } /* 1.6s, 0% */
    82%  { transform: scale(1.1,.9)   translateY(0); } /* 1.6s, 10% */
    86%  { transform: scale(.9,1.1)   translateY(-60px); } /* 1.6s, 30% */
    70%  { transform: scale(1.05,.95) translateY(0); } /* 1.6s, 50% */
    91.4%  { transform: scale(1,1)      translateY(-7px); } /* 1.6s, 57% */
    92.8%  { transform: scale(1,1)      translateY(0); } /* 1.6s, 64% */
    100% { transform: scale(1,1)      translateY(0); } /* 1.6s, 100% */
    /* remainder of 8 seconds */
  }
}

@media screen and (min-width: 960px) {
  @keyframes flag_bounce {
    0%   { transform: scale(1,1)      translateY(0); } /* 1.6s, 0% */
    2%  { transform: scale(1.1,.9)   translateY(0); } /* 1.6s, 10% */
    6%  { transform: scale(.9,1.1)   translateY(-100px); } /* 1.6s, 30% */
    10%  { transform: scale(1.05,.95) translateY(0); } /* 1.6s, 50% */
    11.4%  { transform: scale(1,1)      translateY(-7px); } /* 1.6s, 57% */
    12.8%  { transform: scale(1,1)      translateY(0); } /* 1.6s, 64% */
    20% { transform: scale(1,1)      translateY(0); } /* 1.6s, 100% */
    /* remainder of 8 seconds */
  }

  @keyframes letter_bounce {
    /* 1.6 seconds of waiting */
    0%   { transform: scale(1,1)      translateY(0); } /* 1.6s, 0% */
    20%   { transform: scale(1,1)      translateY(0); } /* 1.6s, 0% */
    22%  { transform: scale(1.1,.9)   translateY(0); } /* 1.6s, 10% */
    26%  { transform: scale(.9,1.1)   translateY(-100px); } /* 1.6s, 30% */
    30%  { transform: scale(1.05,.95) translateY(0); } /* 1.6s, 50% */
    31.4%  { transform: scale(1,1)      translateY(-7px); } /* 1.6s, 57% */
    32.8%  { transform: scale(1,1)      translateY(0); } /* 1.6s, 64% */
    40% { transform: scale(1,1)      translateY(0); } /* 1.6s, 100% */
    /* remainder of 8 seconds */
  }

  @keyframes gallery_bounce {
    /* 3.2 seconds of waiting */
    0%   { transform: scale(1,1)      translateY(0); } /* 1.6s, 0% */
    40%   { transform: scale(1,1)      translateY(0); } /* 1.6s, 0% */
    42%  { transform: scale(1.1,.9)   translateY(0); } /* 1.6s, 10% */
    46%  { transform: scale(.9,1.1)   translateY(-100px); } /* 1.6s, 30% */
    50%  { transform: scale(1.05,.95) translateY(0); } /* 1.6s, 50% */
    51.4%  { transform: scale(1,1)      translateY(-7px); } /* 1.6s, 57% */
    52.8%  { transform: scale(1,1)      translateY(0); } /* 1.6s, 64% */
    60% { transform: scale(1,1)      translateY(0); } /* 1.6s, 100% */
    /* remainder of 8 seconds */
  }

  @keyframes megaphone_bounce {
    /* 4.8 seconds of waiting */
    0%   { transform: scale(1,1)      translateY(0); } /* 1.6s, 0% */
    60%   { transform: scale(1,1)      translateY(0); } /* 1.6s, 0% */
    62%  { transform: scale(1.1,.9)   translateY(0); } /* 1.6s, 10% */
    66%  { transform: scale(.9,1.1)   translateY(-100px); } /* 1.6s, 30% */
    70%  { transform: scale(1.05,.95) translateY(0); } /* 1.6s, 50% */
    71.4%  { transform: scale(1,1)      translateY(-7px); } /* 1.6s, 57% */
    72.8%  { transform: scale(1,1)      translateY(0); } /* 1.6s, 64% */
    80% { transform: scale(1,1)      translateY(0); } /* 1.6s, 100% */
    /* remainder of 8 seconds */
  }

  @keyframes quiz_bounce {
    /* 6.4 seconds of waiting */
    0%   { transform: scale(1,1)      translateY(0); } /* 1.6s, 0% */
    80%   { transform: scale(1,1)      translateY(0); } /* 1.6s, 0% */
    82%  { transform: scale(1.1,.9)   translateY(0); } /* 1.6s, 10% */
    86%  { transform: scale(.9,1.1)   translateY(-100px); } /* 1.6s, 30% */
    90%  { transform: scale(1.05,.95) translateY(0); } /* 1.6s, 50% */
    91.4%  { transform: scale(1,1)      translateY(-7px); } /* 1.6s, 57% */
    92.8%  { transform: scale(1,1)      translateY(0); } /* 1.6s, 64% */
    100% { transform: scale(1,1)      translateY(0); } /* 1.6s, 100% */
    /* remainder of 8 seconds */
  }
}
</style>