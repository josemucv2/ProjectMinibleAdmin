// eslint-disable-next-line vue/multi-word-component-names

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Router from "vue-router";
import i18n from "./i18n";
import filters from "./filters/filters";

import "./assets/styles/tailwind.css";

import Vuesax from "vuesax";
import "vuesax/dist/vuesax.css";

import store from "./store";

import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);

Vue.use(Vuesax, {
  colors: {
    primary: "rgb(60,74,80)",
  },
});

filters.forEach((f) => {
  Vue.filter(f.name, f.execute);
});

Vue.axios.defaults.baseURL = process.env.VUE_APP_URL;

Vue.config.productionTip = false;

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

new Vue({
  router,
  i18n,
  store,
  render: (h) => h(App),
}).$mount("#app");