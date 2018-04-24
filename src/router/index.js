import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)
import consultationRouter from './modules/consultationRouter'
import kbmsRouter from './modules/kbmsRouter'
import commonRouter from './modules/commonRouter'
Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                  当设置 true 的时候该路由不会再侧边栏出现 如401，login等页面(默认 false)
* redirect: noredirect          当设置 noredirect 的时候该路由不会在面包屑导航中出现
* name:'router-name'            设定路由的名字，一定要填写不然 使用 <keep-alive> 时会出现各种问题
* meta : {
  * role: ['admin','editor']    设置该路由进入的权限，支持多个权限叠加
  * title: 'title'              设置该路由在侧边栏和面包屑中展示的名字
  * icon: 'svg-name'            设置该路由的图标
 }
**/
export const constantRouterMap = [
  { path: '/login', component: _import('login/index'), hidden: true },
  { path: '/404', component: _import('404/index'), hidden: true },

  {
    path: '',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    children: [{
      path: 'dashboard',
      name: 'dashboard',
      component: _import('dashboard/index'),
      meta: { title: '医生首页', icon: 'index' }
    }]
  }

]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
// 异步路由
export const asyncRouterMap = [
  ...consultationRouter,
  ...kbmsRouter,
  ...commonRouter,
  // 此处重定向404页面必须异步添加，否则刷新页面之后全会部重定向到404页面
  { path: '*', redirect: '/404', hidden: true }
]
