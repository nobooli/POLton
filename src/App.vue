<template>
  <v-app id="app">
    <v-dialog v-model="addtoscreendialog" persistent max-width="600">
      <v-card class="pa-1">
        <v-card-title>{{$t("ui.addtohomescreen")}}</v-card-title>
        <v-card-text>{{$t("ui.addtohomescreeninfo")}}</v-card-text>
        <v-row class="ma-0 pa-0" justify="center" align="center">
          <v-img src="img/icons/android-chrome-192x192.png" max-width="100">
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular indeterminate color="primary"></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-row>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="secondary" text @click="addtoscreendialog=false">{{$t("ui.dontneed")}}</v-btn>
          <v-btn color="primary" raised @click="addToHomescreen">{{$t("ui.add")}}</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <Topbar></Topbar>
    <v-content app>
      <v-container fluid class="mb-10">
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Topbar from "./components/Topbar.vue";

export default {
  name: "App",

  components: {
    Topbar
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

      this.showAddToHomeScreen();
    };
    window.addEventListener("scroll", this.handleScroll, true);
    if (this.$cookies.isKey("Lang")) {
      this.$i18n.locale = this.$cookies.get("Lang");
    }
  },
  methods: {
    showAddToHomeScreen() {
      window.console.log("success");
      this.addtoscreendialog = true;
    },
    addToHomescreen() {
      this.deferred.prompt();
      let _this = this;
      this.deferred.userChoice.then(function (choiceResult) {
        if (choiceResult.outcome === "accepted") {
          window.console.log("User accepted the A2HS prompt");
          _this.addtoscreendialog = false;
        } else {
          window.console.log("User dismissed the A2HS prompt");
        }
        // 释放不再有用的deferredPrompt对象
      });
    },
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

<style>
#app {
  background: url('~@/assets/background-250x250.png');
}
</style>