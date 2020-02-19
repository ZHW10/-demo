import Vue from 'vue'
import router from './router/index'
import * as API from './api/index'
import store from './store/index'
import 'vant/lib/button/style';
import {Button,Icon,Swipe,SwipeItem} from 'vant'
import 'vant/lib/index.css'
import App from './App.vue'
import 'lib-flexible/flexible'
import FooterNav from './commponts/FooterNav/FooterNav.vue'
Vue.config.productionTip = false
Vue.prototype.$API=API
Vue.use(Button).use(Icon).use(Swipe).use(SwipeItem)
Vue.component('FooterNav',FooterNav)
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
