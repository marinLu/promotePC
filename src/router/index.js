import Vue from 'vue'
import Router from 'vue-router'



import login from '@/components/reg/login'
import checkbox from '@/components/module/checkbox'
import home from '@/components/home/index'
import treeTable from '@/components/tree/treeTable'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      hidden: true,
      meta: {Aside:false,header:false},
      component: login
    },
    {
      path: '/treeTable',
      name: '树形表格',
      meta: {Aside:true,header:true},
      component: treeTable
    },
    {
      path: '/checkbox',
      name: '多选框',
      meta: {Aside:true,header:true},
      component: checkbox
    }
  ]
})
