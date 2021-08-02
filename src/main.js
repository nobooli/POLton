import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueI18n from 'vue-i18n'
import en from './assets/lang/en'
import ja from './assets/lang/ja'
import VueCookies from 'vue-cookies'
import '@mdi/font/css/materialdesignicons.css'
import './registerServiceWorker'
import '@pwabuilder/pwaupdate'
//import VueMasonryPlugin from 'vue-masonry'
//import SimpleLightBox from 'vue-simple-lightbox'

//Vue.use(VueMasonryPlugin);
//var VueMasonryPlugin = window["vue-masonry-plugin"].VueMasonryPlugin
//Vue.use(VueMasonryPlugin)
//Vue.use(SimpleLightBox);
Vue.use(VueCookies);
Vue.config.productionTip = false;
Vue.use(VueI18n);
const i18n = new VueI18n({
    locale: 'en',
    messages: {
        //'zhHans': zhHans,
        'en': en,
        'ja': ja
    }
});
router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    next()
});
new Vue({
    router,
    store,
    vuetify,
    i18n,
    render: h => h(App)
}).$mount('#app')