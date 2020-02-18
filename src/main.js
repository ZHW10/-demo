import Vue from 'vue'
import router from './router/index'
import 'vant/lib/index.css'
import App from './App.vue'
import 'lib-flexible/flexible'
import FooterNav from './commponts/FooterNav/FooterNav.vue'
Vue.config.productionTip = false
Vue.component('FooterNav',FooterNav)
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
