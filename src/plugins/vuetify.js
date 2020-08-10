import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import zhHans from 'vuetify/es5/locale/zh-Hans'
import en from 'vuetify/es5/locale/en'
import ja from 'vuetify/es5/locale/ja'

Vue.use(Vuetify);


Vue.component('my-component', {
    methods: {
        changeLocale() {
            this.$vuetify.lang.current = 'en'
        },
    },
})
export default new Vuetify({
    icons: {
        iconfont: 'mdi',
    },
    lang: {
        locales: { zhHans, en, ja },
        current: 'en',
    },
    theme: {
        themes: {
            light: {
                primary: '#2689ae', //主题色1
                secondary: '#ff96aa', //主题色2
            },
            dark: { //夜间模式下的颜色
                primary: '#2689ae', //主题色1
                secondary: '#ff96aa', //主题色2
            }
        },
    }
});