import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'



import '@/assets/css/reset.css'
import '@/assets/css/animate.min.css'
import 'element-ui/lib/theme-chalk/index.css'

import http from './assets/js/api'

import VueParticles from 'vue-particles'    // 登陆页面动态效果

Vue.prototype.$http = http


Vue.use(VueParticles)
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
