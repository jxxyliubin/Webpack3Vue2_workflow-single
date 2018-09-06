/* 这个文件通常用作路由配置，不作他用 */

import Vue from 'vue'
import Router from 'vue-router'
import vue_base from '@/components/vue_base'// @这个符号，在webpack.base.conf.js中被设为路径"src"的别名
Vue.use(Router)

const defaultRouter = new Router({
  mode: 'history', // 访问路径不带井号
  routes: [
    {
      path: '/',
      name: 'vue_base',
      component: vue_base
    },
    {
      path: '/ajax',
      name: 'axios_ajax',
      component: resolve => require(['@/components/ajax/axios_ajax'], resolve)
    },
    // 未匹配的路径回到指定页
    {
      path: '*',
      name: 'vue_base',
      component: vue_base
    },
  ]
})

defaultRouter.beforeEach((to, from, next) => {
  if(to.meta.title){
    window.document.title = to.meta.title;
  }
  next();
})

export default defaultRouter
