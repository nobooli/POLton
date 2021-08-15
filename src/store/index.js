import Vue from 'vue'
import Vuex from 'vuex'
import { copyToClipboard } from "@/common/clipboard";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        dark_mode: false,
        dark_icon: "mdi-moon-waning-crescent",
        lastAudio: '',
        notifications: [],
        curtainsOpen: false,
        // is_audio_playing: true
    },
    mutations: {
        change_dark_mode(state) {
            state.dark_mode = !state.dark_mode;
            if (state.dark_icon == "mdi-white-balance-sunny") {
                state.dark_icon = "mdi-moon-waning-crescent";
            } else {
                state.dark_icon = "mdi-white-balance-sunny";
            }
        },
        setLastAudio(state, value){
            state.lastAudio = value;
        }
    },
    actions: {
        copyLastAudioToClipboard({state}){
            copyToClipboard(state.lastAudio);
        },
    },
    // methods: {
    //     toggleAudio() {
    //         this.state.is_audio_playing = true;
    //     }
    // },
    modules: {}
})