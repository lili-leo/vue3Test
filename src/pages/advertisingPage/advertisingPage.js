import Vue from "vue";
import advertisingPage from "./advertisingPage.vue";
import router from "../../router/adverTising.js";
// import '@/assets/styles/index.scss'
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(advertisingPage)
}).$mount("#advertisingPage");