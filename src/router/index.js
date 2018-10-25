import Vue from 'vue'
import Router from 'vue-router'



import login from '@/components/reg/login'
import home from '@/components/home/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/home',
      name: 'home',
      component: home
    }
  ]
})
