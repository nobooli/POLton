import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import en from 'vuetify/es5/locale/en'
import ja from 'vuetify/es5/locale/ja'

Vue.use(Vuetify);


Vue.component('my-component', {
    methods: {
        changeLocale() {
            this.$vuetify.lang.current = 'ja'
        },
    },
})
export default new Vuetify({
    icons: {
        iconfont: 'mdi',
    },
    lang: {
        locales: { en, ja },
        current: 'ja',
    },
    theme: {
        themes: {
            light: {
                primary: '#bb2830', // affects the top bar's color
                secondary: '#bb2830', // polka red
            },
            dark: { //夜间模式下的颜色
                primary: '#bb2830', // affects the top bar's color
                secondary: '#bb2830', // polka red

                // reference
                // #3595e9 polka blue
                // #bb2830 polka red
                // #fe3c79 polka hot pink
                // #fa85d3 polka pink
                // #f8ed9e polka yellow
                // #2cfff9 polka teal
                // #9b6ba9 polka purple
            }
        },
    }
});