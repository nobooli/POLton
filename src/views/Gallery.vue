<template>
    <v-container>
        <!-- title -->
        <div class="title-card">
            <h1 class="title-text">{{$t('link.presents')}}</h1>
        </div>
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