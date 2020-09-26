import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import VueFormulate from './plugins/vue-formulate'
import VueSnotify from './plugins/vue-snotify'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  VueFormulate,
  VueSnotify
}).$mount('#app')
