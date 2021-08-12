<template>
    <v-container>
        <!-- title -->
        <div class="main-title-card">
          <div class="ticket_card">
            <div>
              <p class="title_text" style="margin-bottom:0px;">
                <span>{{$t('link.presents')}}</span>
              </p>
            </div>
          </div>
        </div>
        <br />
        <!-- gallery Lightbox -->
        <div class=".gallery-container">
            <lightbox id="art_gallery"
                :images="art_pieces"
                :image_class="'art'"
                :album_class="'art-album'"
                :options="options">
            </lightbox>
        </div>
    </v-container>
</template>

<script>
import art_pieces from "../assets/art_pieces.json";

import AOS from 'aos';
import Lightbox from "../components/Lightbox";

import "flag-icon-css/css/flag-icon.css"

export default {
    components: {
        Lightbox
    },
    data() {
        return {
            art_pieces: art_pieces.art_pieces,
            options: {
                closeText: "X",
                captions: "true",
                captionPosition: "bottom"
            }
        }
    },
    methods: {
        AOSInit() {
          this.aos = AOS;
          this.aos.init({
            duration: 400,
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
.art-album {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
}
</style>