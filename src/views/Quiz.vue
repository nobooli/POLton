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
            ></iframe>
    </v-container>
</template>

<script>
export default {
    setup() {
        
    },
}
</script>

<style>
iframe { height: 100vh; }
</style>