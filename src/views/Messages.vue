<template>
    <v-container>
        <div class="title-card">
            <h1 class="title-text">{{$t('link.messages')}}</h1>
        </div>
        <!-- messages -->
        <div id="messages">
            <div v-for="message in messages" :key="message.name" class="message">
                <div class="profile">
                    <div class="name">
                        <span>{{ message.name }}</span>
                        <br>
                        <span v-if="message.country_flag" 
                            :class="message.country_flag" 
                            style="right-align"></span>
                    </div>
                    <div class="pfp">
                        <img v-if="message.profile_pic" class="profile-pic" :src="message.profile_pic">
                    </div>
                </div>
                <br />
                <div class="message-text">
                    <p>
                        {{ message.message }}
                    </p>
                </div>
                <hr v-if="message.message_jp" class="divider">
                <div v-if="message.message_jp" class="message-text">
                    <p>
                        {{ message.message_jp }} 
                    </p>
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
.title-card {
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

.title-text {
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 2rem;
}

@media screen and ( min-width: 600px) {
    #messages {
        column-count: 1;
    }
}

@media screen and ( min-width: 960px) {
    #messages {
        column-count: 2;
    }
}

@media screen and ( min-width: 1280px) {
    #messages {
        column-count: 3;
    }
}

#messages {
    min-height: 15vh;
    column-gap: 1.25rem;
}

.message {
    padding: .75em;
    border-radius: 1%;
    overflow: hidden;
    display: inline-block;
    width: 100%;
}

.title-card, .message {
    background: #E7C4C4;
    margin-bottom: 3em;
    box-shadow: 5px 8px 20px -5px rgba(10,10,10,.75);
    border: .3em solid #8f3c73;
}

.title-text, .name, .message-text {
    color: #661010;
}

.message-text {
    white-space: pre-line;
}

.profile {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4rem;
}
.name {
    font-size: 1.4em;
}

.divider {
    color: rgba(0, 0, 0, 0.12);
    margin: 1em 0 1em 0;
}

.profile-pic {
    max-width: 64px;
    max-height: 64px;
    border-radius: 50%;
    border: .15em solid #8f3c73;
}
</style>