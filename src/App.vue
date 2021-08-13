<template>
  <v-app id="app">
    <Topbar></Topbar>
    <v-content app>
      <v-container fluid class="mb-10">
        <router-view></router-view>
      </v-container>
    </v-content>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Topbar from "./components/Topbar.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",

  components: {
    Topbar,
    Footer
  },

  data: () => ({
    gotop: false,
    prompt: false,
    deferred: null,
    addtoscreendialog: false,
    links: [],
    showSidebar: false,
  }),
  mounted() {
    let timeNow = new Date();
    let hours = timeNow.getHours();
    if (hours < 6 || hours > 18) {
      this.$store.commit("change_dark_mode");
      this.$vuetify.theme.dark = this.$store.state.dark_mode;
    }
    window.onbeforeinstallprompt = (e) => {
      this.prompt = true;
      this.deferred = e;

    };
    window.addEventListener("scroll", this.handleScroll, true);
    if (this.$cookies.isKey("Lang")) {
      this.$i18n.locale = this.$cookies.get("Lang");
    }
  },
  methods: {
    handleScroll() {
      let scrolltop =
        document.documentElement.scrollTop || document.body.scrollTop;
      scrolltop > 30 ? (this.gotop = true) : (this.gotop = false);
    },
    toTop() {
      let top = document.documentElement.scrollTop || document.body.scrollTop;
      // 实现滚动效果
      const timeTop = setInterval(() => {
        document.body.scrollTop = document.documentElement.scrollTop = top -= 50;
        if (top <= 0) {
          clearInterval(timeTop);
        }
      }, 10);
    },
    See(e) {
      window.location.href = e;
    },
  },
};
</script>


<style src="aos/dist/aos.css"></style>

<style>
#app {
  background: 
    /* linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ), */
    url('~@/assets/polpattern2b.png');
}
</style>