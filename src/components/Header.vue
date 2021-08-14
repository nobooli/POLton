<template>
    <div class="main-title-card">
        <div class="ticket_card">
            <div>
                <p class="title_text" style="margi-bottom:0px;">
                    <span>{{ this.title_text }}</span>
                    <!-- <span>{{ $t("link.soundboard") }}</span> -->
                </p>
            </div>
        </div>
        <img class="banner-img" :src="banner_image" />
    </div>
</template>

<script>
    export default {
        props: {
            banner_image: {
                type: String,
                required: true
            },
            title_text: {
                type: String,
                required: true
            }
        },
        data: function() {
            return {

            }
        }
    }
</script>

<style>
.ticket_card { /* this will be the border + shape */
  position: relative;
  background: #46403f;
  border: .6em double #f8ed9e;
  border-radius: .3em;
  /* padding: 3em 0 3em 0; */
}

.title_text {
  margin: 0 auto;
  white-space: nowrap;
  overflow: hidden;
  /* position: absolute; */
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
  animation-delay: 1s;
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
    70%  { transform: scale(1.05,.95) translateY(0); } /* 1.6s, 50% */
    71.4%  { transform: scale(1,1)      translateY(-7px); } /* 1.6s, 57% */
    72.8%  { transform: scale(1,1)      translateY(0); } /* 1.6s, 64% */
    60% { transform: scale(1,1)      translateY(0); } /* 1.6s, 100% */
    /* remainder of 8 seconds */
  }

  @keyframes quiz_bounce {
    /* 6.4 seconds of waiting */
    0%   { transform: scale(1,1)      translateY(0); } /* 1.6s, 0% */
    80%   { transform: scale(1,1)      translateY(0); } /* 1.6s, 0% */
    82%  { transform: scale(1.1,.9)   translateY(0); } /* 1.6s, 10% */
    86%  { transform: scale(.9,1.1)   translateY(-60px); } /* 1.6s, 30% */
    90%  { transform: scale(1.05,.95) translateY(0); } /* 1.6s, 50% */
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