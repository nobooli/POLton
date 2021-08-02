<template>
  <v-container>
    <v-bottom-navigation fixed>
      <v-slider
        class="pt-4 ml-4"
        style="width:20rem"
        v-model="volume"
        :label="this.$t('ui.volume')"
        thumb-label
        max="100"
        min="0"
        dense
        prepend-icon="mdi-volume-high"
      ></v-slider>
      <v-spacer />
      <v-switch
        class="mr-3"
        v-model="orderplaymode"
        inset
        color="secondary"
        :label="$t('ui.openorderplaymode')"
      ></v-switch>

      <v-btn :disabled="!orderplaymode" icon @click="orderdialog=true">
        <v-badge color="secondary" :content="orderlist.length" :value=" orderlist.length" overlap>
          <v-icon>mdi-reorder-horizontal</v-icon>
        </v-badge>
      </v-btn>
      <v-btn
        :disabled="!$store.state.lastAudio"
        icon
        @click="$store.dispatch('copyLastAudioToClipboard')"
      >
        <v-icon>mdi-content-copy</v-icon>
      </v-btn>
    </v-bottom-navigation>
    <!-- <v-row align="center" justify="center">
      <v-text-field color="" :value="$store.state.lastAudio" label="URL" readonly outlined></v-text-field>
    </v-row> -->
    <v-row v-for="group in voices" :key="group.name">
      <v-col cols="12" class="ma-0 pa-0">
        <v-card class="ma-1 pa-0">
          <v-card-title>{{resolveI18n(group.translation)}}</v-card-title>
          <v-container>
            <v-row no-gutters>
              <v-btn
                class="ma-2 btn"
                v-for="voice in group.voicelist"
                :key="voice.name"
                raised
                color="secondary"
                @click="play(voice)"
              >{{resolveI18n(voice.translation)}}</v-btn>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>

    <v-dialog v-model="orderdialog" max-width="800">
      <v-toolbar dark color="primary">
        <v-btn icon dark @click="orderdialog = false,stopplay()">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>{{$t("ui.orderplaymode")}}</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-card class="pa-1">
        <v-toolbar dense>
          <v-text-field hide-details single-line :value="playlistUrl" readonly></v-text-field>

          <v-btn icon @click="copyPlaylist">
            <v-icon>mdi-content-copy</v-icon>
          </v-btn>
        </v-toolbar>
        <p class="title font-weight-blod">{{$t("ui.orderlistnow")}}</p>
        <v-chip
          v-for="(selected,index) in orderlist"
          :key="'list'+index"
          class="ma-2"
          close
          color="secondary"
          text-color="white"
          @click:close="deletelist(index)"
          @click="playOnly(selected)"
        >{{resolveI18n(selected.translation)}}</v-chip>
        <v-switch
          class="ml-3 mt-2"
          v-model="repeatmode"
          inset
          color="secondary"
          :label="$t('ui.repeatmode')"
        ></v-switch>
        <v-card-actions v-if="orderlist.length>0">
          <v-btn raised color="primary" @click="orderplay">{{$t("ui.playthislist")}}</v-btn>
          <v-btn text color="secondary" @click="stopplay">{{$t("ui.stopplay")}}</v-btn>
          <v-divider></v-divider>
          <v-btn text color="red" @click="resetorder">{{$t("ui.resetorder")}}</v-btn>
        </v-card-actions>
        <p v-else>{{$t("ui.listempty")}}</p>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import voicelist from "../assets/voices.json";
import { copyToClipboard } from "@/common/clipboard";

var audio = new Audio();
var i = 0;
export default {
  data: () => ({
    voices: voicelist.groups,
    orderplaymode: false,
    orderdialog: false,
    orderlist: [],
    //helpdialog: false,
    repeatmode: false,
    arrysize: 0,
    volume: 100,
  }),
  mounted() {
    for (const [gIndex, group] of Object.entries(voicelist.groups)) {
      for (const [vIndex, voice] of Object.entries(group.voicelist)) {
        voice.key = `${gIndex},${vIndex}`;
      }
    }

    const playlist = this.$route.query.playlist;
    if (playlist) {
      this.orderplaymode = true;
      playlist
        .split(";")
        .map((v) => v.split(","))
        .forEach(([gIndex, vIndex]) => {
          this.orderlist.push(voicelist.groups[gIndex].voicelist[vIndex]);
        });
      this.orderdialog = true;
    }
  },
  computed: {
    playlistUrl() {
      return `${window.location.origin}?playlist=${this.orderlist.reduce(
        (r, k) => `${!r ? r : r + ";"}${k.key}`,
        ""
      )}`;
    },
  },
  methods: {
    resolveI18n(obj) {
      return obj[this.$i18n.locale];
    },
    play(item) {
      if (this.orderplaymode) {
        //判断序列播放
        this.orderlist.push(item);
        window.console.log(this.orderlist);
      }

      let audio = new Audio();
      audio.preload = true;
      audio.src = "/voices/" + item.path;
      this.$store.commit("setLastAudio", audio.src);
      this.voice = item;
      audio.volume = this.volume / 100;
      audio.play();
    },
    playOnly(item) {
      let audio = new Audio();
      audio.src = "/voices/" + item.path;
      audio.preload = true;
      this.voice = item;
      audio.play();
    },
    playSpecial() {
      let audio = new Audio();
      audio.src = "/voices/私货.mp3";
      audio.preload = true;
      audio.play();
    },
    deletelist(i) {
      //删除序列中的一个值
      this.orderlist.splice(i, 1);
    },
    orderplay() {
      i = 0;
      audio = new Audio();
      let arry = this.orderlist;
      let repeat = this.repeatmode;
      audio.preload = true;
      audio.loop = false;
      audio.src = "/voices/" + arry[i].path;
      audio.volume = this.volume / 100;
      audio.play();
      audio.addEventListener("ended", playEndedHandler, false);
      function playEndedHandler() {
        //序列播放实现
        i++;
        if (i < arry.length) {
          audio.src = "/voices/" + arry[i].path;
          //window.console.log(i);
          audio.play();
        } else {
          if (repeat == true) {
            //不要停不下来啊
            i = 0;
            audio.src = "/voices/" + arry[i].path;
            audio.play();
          }
        }
      }
    },
    copyPlaylist() {
      copyToClipboard(this.playlistUrl);
    },
    resetorder() {
      this.orderlist = [];
    },
    stopplay() {
      audio.pause();
      i = 0;
    },
  },
};
</script>

<style>
.a {
  text-decoration: none;
}

.btn {
  max-width: 100%;
  word-wrap: break-word !important;
  word-break: break-all !important;
  white-space: normal !important;
  text-transform: none !important;
  display: inline-block;
}
</style>