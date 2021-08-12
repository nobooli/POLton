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
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScmOsjndPd0qBXFVxhKIik3mxkgBlQAKUMyU_PAlTaBmTrWkg/formResponse?embedded=true"
            width="100%"
            height="100%"
            frameborder="0"
            id="pol-quiz"
            >
          <!-- <input hidden id="quizTakerId" name="quizTakerId" value="{{ uuid }}"> -->
        </iframe>
    </v-container>
</template>

<script>
// import { v4 as uuidv4 } from 'uuid';

export default {
    setup() {
        
    },
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