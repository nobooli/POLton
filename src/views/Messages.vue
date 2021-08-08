<template>
    <v-container>
        <div class="title_card">
            <div class="title_text">
                Messages
            </div>
        </div>
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
                <div class="message_text">
                    {{ message.message }}
                </div>
                <div v-if="message.message_jp" class="message_text">
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
.title_card {
    background: #E7C4C4;
    margin-bottom: 3em;
    border: .3em solid #8f3c73;
    min-height: 1%;
}

.title_text {
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 2rem;
}

.messages-container {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    column-count: 3;
}

.message {
    background: #E7C4C4;
    padding: .75em;
    margin-bottom: 3em;
    box-shadow: 5px 8px 20px -5px rgba(10,10,10,.75);
    border: .3em solid #8f3c73;
    border-radius: 1%
}

.title_text, .name, .message_text {
    color: #661010;
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
    color: #193d5c;
}

.v-divider {
    margin: 1em 0 1em 0;
}

.profile-pic {
    max-width: 64px;
    max-height: 64px;
    border-radius: 50%;
    border: .15em solid #8f3c73;
}
</style>