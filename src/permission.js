import router from './router'
import store from './store'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
import { getToken } from '@/utils/auth' // 验权
import { Message } from 'element-ui' // 提示信息

const whiteList = ['/login']// 不重定向白名单

router.beforeEach((to, from, next) => {
  NProgress.start() // 开启Progress
  if (getToken()) { // 判断是否有token
    if (to.path === '/login') {
      next({ path: '/' }) // 如果token存在 说明已经登录 跳转首页
      NProgress.done() // router在hash模式下 手动改变hash 重定向回来 不会触发afterEach 暂时hack方案 ps：history模式下无问题，可删除该行！
    } else {
      if (store.getters.roles.length === 0) { // 判断当前用户是否已拉取完GetUserInfo信息
        store.dispatch('GetUserInfo').then(res => { // 拉取user_info
          const roles = res.data.role // 获取权限字段
          store.dispatch('GenerateRoutes', { roles }).then(() => { // 生成可访问的路由表
            router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
            const loginInfo = res.data.loginInfo
            store.dispatch('imLogin', loginInfo).then((res) => { // webim登录
              console.log(res)
              next({ ...to, replace: true }) // hack方法 确保addRoutes已完成
              store.commit('SET_LOGINBTNLOADING', false) // 登录按钮loading状态
            })
          })
        }).catch(() => {
          store.dispatch('FedLogOut').then(() => {
            Message.error('验证失败,请重新登录')
            next({ path: '/login' })
          })
        })
      } else {
        next()
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
      next()
    } else {
      next('/login') // 否则全部重定向到登录页
      NProgress.done() // router在hash模式下 手动改变hash 重定向回来 不会触发afterEach 暂时hack方案 ps：history模式下无问题，可删除该行！
    }
  }
})

router.afterEach(() => {
  NProgress.done() // 结束Progress
})
