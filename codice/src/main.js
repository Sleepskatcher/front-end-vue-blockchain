import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router/router.js';
import store from './store/index.js';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import '@mdi/font/css/materialdesignicons.css';
require('./style.css')

Vue.config.productionTip = false;

Vue.use(vuetify);

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app');
