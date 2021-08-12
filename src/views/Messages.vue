<template>
    <v-container>
        <div class="main-title-card">
          <div class="ticket_card">
            <div>
              <p class="title_text" style="margin-bottom:0px;">
                <span>{{$t('link.messages')}}</span>
              </p>
            </div>
          </div>
        </div>
        <br />
        <!-- messages -->
        <div id="messages">
            <div v-for="message in messages" :key="message.name" class="message" data-aos="fade-up">
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
                <!-- <hr v-if="message.message_jp" class="divider"> -->
                <br v-if="message.message_jp">
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
import AOS from 'aos';

export default {
    data() {
        return {
            messages: messages.messages
        }
    },
    methods: {
        AOSInit() {
          this.aos = AOS;
          this.aos.init({
            duration: 400
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
.title-card {
    height: 5em;
    display: flex;
    align-items: center;
    justify-content: center;
}

.title-text {
    font-size: 1.25em;
    font-weight: 500;
    line-height: 2em;
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
    column-gap: 1.25em;
}

.message {
    padding: .75em;
    border-radius: 1%;
    overflow: hidden;
    display: inline-block;
    width: 100%;
    background: repeating-linear-gradient(
        -45deg,
        #bb2830,
        #bb2830 10px,
        white 10px,
        white 20px
    );

    border: #1145a7 solid .25em;
}

.title-card {
    background: #bc627d;
    border: .3em solid #f2db7e;
    border-radius: 1%;
    color: #f2db7e;
}

.title-card, .message {
    margin-bottom: 3em;
    box-shadow: 5px 8px 20px -5px rgba(10,10,10,.75);
}

/* .title-text,  */
.name, .message-text {
    color: #661010;
}

.message-text {
    white-space: pre-line;
    padding: 1em;
}

.profile, .message-text {
    background: white;
    opacity: .95;
}

.profile {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 5em;
    padding: 1em;
    border-radius: 1%;
}

.name {
    font-size: 1.1em;
}

.divider {
    background-color: #1145a7;
    /* color: rgba(0, 0, 0, 0.12); */
    margin: 1em 0 1em 0;
    border: none;
    height: .2em;
}

.pfp {
    margin-top: .4em;
}

.profile-pic {
    max-width: 64px;
    max-height: 64px;
    border-radius: 50%;
    border: .15em solid #8f3c73;
}
</style>