<template>
    <v-container>
        <!-- title -->
        <v-row class="title_card">
            <v-card>
                <v-card-title>Art 美術館</v-card-title>
            </v-card>
        </v-row>
        <!-- gallery Lightbox -->
        <v-row>
            <div class=".gallery-container">
                <lightbox id="art_gallery"
                    :images="art_pieces"
                    :image_class="'art'"
                    :album_class="'art-album'"
                    :options="options">
                </lightbox>
            </div>
        </v-row>
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
.title_card {
    display: flex;
    justify-content: center;
}

.art {
    max-width: 500px;
}

.art-album {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
}

.art-album a{
    max-height: 500px;
}
</style>