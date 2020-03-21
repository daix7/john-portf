import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueObserveVisibility from 'vue-observe-visibility'

Vue.config.productionTip = true
Vue.use(VueObserveVisibility)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
