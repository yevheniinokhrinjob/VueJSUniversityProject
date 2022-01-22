  import '@babel/polyfill'
  import 'mutationobserver-shim'
  import Vue from 'vue'
  import './plugins/bootstrap-vue'
  import App from './App.vue'
  import router from "@/router";
  import VueSocialSharing from 'vue-social-sharing'
  import 'vue-lazy-youtube-video/dist/style.css'
  import LazyYoutubeVideo from 'vue-lazy-youtube-video'

  Vue.component('LazyYoutubeVideo', LazyYoutubeVideo)
  Vue.use(VueSocialSharing);
  Vue.config.productionTip = false

  new Vue({
    router,
    render: h => h(App),
  }).$mount('#app')
