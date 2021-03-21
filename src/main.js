import Vue from 'vue'
import router from "./router";
import BootstrapVue from "bootstrap-vue"
import ElementUI from "element-ui"
import App from './App.vue'


Vue.use(BootstrapVue);
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,BootstrapVue,ElementUI,
  render: h => h(App),
}).$mount('#app')
