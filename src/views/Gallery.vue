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
        <v-row class="title_card">
            <v-card>
                <v-card-title>Messages</v-card-title>
            </v-card>
        </v-row>
        <!-- messages -->
        <v-row>
            <div class=".messages-container">
                <v-card v-for="message in messages" :key="message.name" class="message">
                    <v-card-title>
                        <img class="profile-pic" :src="message.profile_pic">
                        {{ message.name }}
                        <span :class="message.country_flag"></span>
                    </v-card-title>
                    <v-card-subtitle>{{ message.sns_tags }}</v-card-subtitle>
                    <v-card-text class="message-body">
                        {{ message.message }}
                    </v-card-text>
                </v-card>
            </div> 
        </v-row>
    </v-container>
</template>

<script>
import filler_cream from "../assets/img/zain-profile-pic-cream.svg";
import filler_gray from "../assets/img/zain-profile-pic-gray.svg";

import art_pieces from "../assets/art_pieces.json";
import messages from "../assets/messages.json";

import Lightbox from "../components/Lightbox";

import "flag-icon-css/css/flag-icon.css"

export default {
    components: {
        Lightbox
    },
    data() {
        return {
            art_pieces: art_pieces.art_pieces,
            messages: messages.messages,
            // messages: [ // move to json file once I have real messages
            //     {
            //         name: "zain 1",
            //         profile_pic: "../assets/img/zain-profile-pic-cream.svg",
            //         country: "",
            //         message: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in vel illum qui dolorem eum fugiat quo voluptas nulla pariatur."
            //     },
            //     {
            //         name: "zain 2",
            //         profile_pic: "../assets/img/zain-profile-pic-gray.svg",
            //         country: "../assets/img/flag_cn.svg",
            //         message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            //     },
            //     {
            //         name: "zain 3",
            //         profile_pic: "../assets/img/zain-profile-pic-cream.svg",
            //         country: "../assets/img/flag_jp.svg",
            //         message: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex."
            //     },
            //     {
            //         name: "zain 4",
            //         profile_pic: "../assets/img/zain-profile-pic-cream.svg",
            //         country: "../assets/img/flag_nl.svg",
            //         message: "Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet. Consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
            //     },
            //     {
            //         name: "zain 5",
            //         profile_pic: "../assets/img/zain-profile-pic-gray.svg",
            //         country: "../assets/img/flag_ru.svg",
            //         message: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quis."
            //     },
            //     {
            //         name: "zain 6",
            //         profile_pic: "../assets/img/zain-profile-pic-gray.svg",
            //         country: "../assets/img/flag_tw.svg",
            //         message: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in vel illum qui dolorem eum fugiat quo voluptas nulla pariatur."
            //     }
            // ],
            cream: filler_cream,
            gray: filler_gray,
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

.messages-container {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: flex-start;
}

.message {
    max-width: 33%;
}

.message-body {
    max-width: 33%;
    white-space: pre;
}

.profile-pic {
    max-width: 64px;
}
</style>