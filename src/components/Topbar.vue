<template>
  <v-app-bar
    :collapse-on-scroll="$vuetify.breakpoint.smAndDown"
    app
    :color="night"
    dark
    :elevate-on-scroll="$vuetify.breakpoint.mdAndUp"
  >
    <v-menu transition="slide-y-transition" bottom offset-y>
      <template v-slot:activator="{on:menu}">
        <v-app-bar-nav-icon v-on="menu" v></v-app-bar-nav-icon>
      </template>
      <v-list>
        <v-list-item :to="{ name: 'Main' }">
          <v-list-item-title>
            <v-icon left color="secondary">mdi-home</v-icon>
            {{$t('link.home')}}
          </v-list-item-title >
        </v-list-item>
        <v-list-item :to="{ name: 'Soundboard'}">
          <v-list-item-title>
            <v-icon left color="secondary">mdi-volume-source</v-icon>
            {{$t('link.soundboard')}}
          </v-list-item-title>
        </v-list-item>
        <v-list-item :to="{ name: 'Presents' }">
          <v-list-item-title>
            <v-icon left color="secondary">mdi-gift</v-icon>
            {{$t('link.presents')}}
          </v-list-item-title>
        </v-list-item>
        <v-list-item :to="{ name: 'Messages' }">
          <v-list-item-title>
            <v-icon left color="secondary">mdi-email-outline</v-icon>
            {{$t('link.messages')}}
          </v-list-item-title>
        </v-list-item>
        <v-list-item :to="{ name: 'Quiz' }">
          <v-list-item-title>
            <v-icon left color="secondary">mdi-clipboard-text-outline</v-icon>
            {{$t('link.quiz')}}
          </v-list-item-title>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item :to="{ name: 'About' }">
          <v-list-item-title>
            <v-icon left color="secondary">mdi-information</v-icon>
            {{$t('link.about')}}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <a href="https://www.nepolabo.fans/">
      <v-btn plain>
        NPLB
      </v-btn>
    </a>
    <v-toolbar-title>{{$t("ui.title")}}</v-toolbar-title>
    <pwa-update></pwa-update>
    <v-spacer />
    <v-btn fab icon @click="darkMode()">
      <v-icon>{{darkmodeicon}}</v-icon>
    </v-btn>
    <v-menu transition="slide-y-transition" bottom offset-y>
      <template v-slot:activator="{on:menu}">
        <v-fab-transition>
          <v-btn v-on="menu" fab icon>
            <v-icon>mdi-earth</v-icon>
          </v-btn>
        </v-fab-transition>
      </template>
      <v-list>
        <v-list-item
          v-for="(lang, i) in langs"
          :key="i"
          :disabled="!lang.isready"
          @click="changeLang(lang.src)"
        >
          <v-list-item-title>{{ lang.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-snackbar color="success" v-model="snackbarCopy">
      <span>{{$t('ui.copiedToClipboard', {value: $store.state.lastAudio})}}</span>
      <template v-slot:action="{attrs}">
        <v-btn color="##bb2830" text v-bind="attrs" @click="snackbarCopy = false">Close</v-btn>
      </template>
    </v-snackbar>
  </v-app-bar>
</template>

<script>
import { copyToClipboard } from "@/common/clipboard";
export default {
  props: {
    value: {
      type: Boolean,
    },
  },
  data: () => ({
    snackbarCopy: false,
    langs: [
      { title: "English", src: "en", isready: true },
      //{ title: "简体中文", src: "zhHans", isready: false },
      { title: "日本語", src: "ja", isready: true },
    ],
  }),
  methods: {
    changeLang(e) {
      this.$i18n.locale = e;
      this.$cookies.set("Lang", e);
    },
    darkMode() {
      this.$store.commit("change_dark_mode");
      this.$vuetify.theme.dark = this.$store.state.dark_mode;
    },
    see(e) {
      window.location.href = e;
    },
    copyLastAudio() {
      copyToClipboard(this.$store.state.lastAudio);
      this.snackbarCopy = true;
    },
  },
  computed: {
    darkmodeicon: {
      get: function () {
        return this.$store.state.dark_icon;
      },
    },
    night: {
      get: function () {
        if (this.$vuetify.theme.dark) {
          return "grey darken-4";
        } else {
          return "primary";
        }
      },
    },
  },
};
</script>
