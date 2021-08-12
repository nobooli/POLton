<template>
    <v-container>
        <div class="main-title-card">
          <div class="ticket_card">
            <div>
              <p class="title_text" style="margin-bottom:0px;">
                <span>{{$t('link.quiz')}}</span>
              </p>
            </div>
          </div>
        </div>
        <br />
        <div data-aos="zoom-in" data-aos-delay="1500">
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScmOsjndPd0qBXFVxhKIik3mxkgBlQAKUMyU_PAlTaBmTrWkg/formResponse?embedded=true"
              width="100%"
              height="100%"
              frameborder="0"
              id="pol-quiz"
              >
            <!-- <input hidden id="quizTakerId" name="quizTakerId" value="{{ uuid }}"> -->
          </iframe>
        </div>
    </v-container>
</template>

<script>
// import { v4 as uuidv4 } from 'uuid';
import AOS from 'aos';

export default {
    setup() {
        
    },
    methods: {
      AOSInit() {
        this.aos = AOS;
        this.aos.init({
          duration: 1500,
          disable: "mobile"
        });
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.AOSInit();
      });
    }
    // data() {
      // return {
      //   uuid: uuidv4()
      // }
    // }
}
</script>

<style>
iframe { height: 100vh; }
</style>