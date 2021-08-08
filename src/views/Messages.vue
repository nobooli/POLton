<template>
    <v-container>
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
                    <v-card-text class="message-body" v-if="!message_jp">
                        {{ message.message }}
                    </v-card-text>
                    <v-card-text class="message-body" v-else>
                        {{ message.message_jp }}
                        <v-divider v-if="!(message.message_jp === '')"></v-divider>
                        {{ message.message }}
                    </v-card-text>
                </v-card>
            </div> 
        </v-row>
    </v-container>    
</template>

<script>
import messages from "../assets/messages.json";

export default {
    data() {
        return {
            messages: messages.messages
        }
    }    
}
</script>

<style>
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

.message-body > .v-divider {
    margin: 1em;
}

.profile-pic {
    max-width: 64px;
    max-height: 64px;
}
</style>