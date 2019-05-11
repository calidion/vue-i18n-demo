import Vue from 'vue'
import App from './App.vue'

import {
  VueI18n,
  HTTPLoader
} from "node-i18n-vue";

Vue.config.productionTip = false

const options = {
  current: 'en',
  url: "http://localhost:8080/locales/",
  loader: HTTPLoader
};

Vue.use(VueI18n, {
  options,
  storage: window.localStorage
});

let i18n = Vue.getI18n();

i18n.init().then(() => {
  new Vue({
    render: h => h(App),
  }).$mount('#app')
});


const locales = ['zh-CN', 'en'];
let count = (Math.random() * 100).toFixed(0);
setInterval(() => {
  Vue.setLocale(locales[count++ % 2]).then(() => {
    window.location.reload();
  });
}, 2000)