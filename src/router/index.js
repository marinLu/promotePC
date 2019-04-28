import Vue from 'vue'
import Router from 'vue-router'



import login from '@/components/reg/login'
import checkbox from '@/components/module/checkbox'
// import home from '@/components/home/index'
import treeTable from '@/components/tree/treeTable'
import cascader from '@/components/module/cascader'
import wave from '@/components/module/wave'

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
    },
    {
      path: '/cascader',
      name: '级联选择器',
      meta: {Aside:true,header:true},
      component: cascader
    },
    {
      path: '/wave',
      name: '粒子波浪',
      meta: {Aside:false,header:false},
      component: wave
    }
  ]
})
