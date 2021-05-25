import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import moment from 'moment'
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()
Vue.prototype.$moment = moment
Vue.use(VueLazyload,{
  loading:require('./assets/img/common/jinge.png')
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
