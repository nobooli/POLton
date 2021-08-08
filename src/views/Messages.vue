<template>
    <v-container>
        <v-row class="title_card">
            <v-card>
                <v-card-title>Messages</v-card-title>
            </v-card>
        </v-row>
        <!-- messages -->
        <div class=".messages-container" style="column-count: 3">
            <div v-for="message in messages" :key="message.name" class="message">
                <div class="profile">
                    <div class="name">
                        {{ message.name }}
                        <span v-if="message.country_flag" :class="message.country_flag" style="right-align"></span>
                        <div class="sns">
                            <span class="sns-tags">{{ message.sns_tags }}</span>
                        </div>
                    </div>
                    <div class="pfp">
                        <img v-if="message.profile_pic" class="profile-pic" :src="message.profile_pic">
                    </div>
                </div>
                <br />
                <div class="message-text">
                    {{ message.message }}
                </div>
                <div v-if="message.message_jp">
                    <v-divider></v-divider>
                    {{ message.message_jp }} 
                </div>
            </div>
        </div> 
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
    flex-direction: column;
    column-count: 3;
}

.message {
    background: rgb(231, 196, 196);
    padding: .75em;
    margin-bottom: 3em;
    box-shadow: 5px 8px 20px -5px rgba(10,10,10,.75);
}

.profile {
    display: flex;
    justify-content: space-between;
}
.name {
    font-size: 1.4em;
}

.sns-tags {
    font-size: .7em;
    font-style: italic;
    /* white-space: nowrap; */
}

.v-divider {
    margin: 1em 0 1em 0;
}

.profile-pic {
    max-width: 64px;
    max-height: 64px;
    /* border: 3px solid #3595e0; */
    border-radius: 50%;
}
</style>