import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

// this line should fail the build
blablabla

new Vue({
  render: h => h(App)
}).$mount("#app");
