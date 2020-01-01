import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import zhHans from 'vuetify/es5/locale/zh-Hans'
import en from 'vuetify/es5/locale/zh-Hans'
import ja from 'vuetify/es5/locale/zh-Hans'

Vue.use(Vuetify);


Vue.component('my-component', {
    methods: {
        changeLocale() {
            this.$vuetify.lang.current = 'zhHans'
        },
    },
})
export default new Vuetify({
    icons: {
        iconfont: 'mdi',
    },
    lang: {
        locales: { zhHans, en, ja },
        current: 'zhHans',
    },
    theme: {
        themes: {
            light: {
                primary: '#728bf3',
                secondary: '#FF9330',
            },
        },
    }
});