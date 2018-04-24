import Layout from '@/views/layout/Layout'
const fn = require('../_import_' + process.env.NODE_ENV)
const SysName = 'sysCommon'

const _import = function(file) {
  return fn.call(this, `${SysName}/${file}`)
}

const commonRouter = [{
  path: '/authManage',
  component: Layout,
  redirect: '/authManage/index',
  meta: { role: ['admin'] },
  children: [{
    path: 'index',
    component: _import('authManage/index'),
    name: 'authManage',
    meta: { title: '权限管理', icon: 'auth', role: ['admin'] }
  }]
},

{
  path: '/personal',
  component: Layout,
  redirect: '/personal/index',
  children: [{
    path: 'index',
    component: _import('personal/index'),
    name: 'personal',
    meta: { title: '个人中心', icon: 'mine', role: ['admin'] }
  }]
}]

export default commonRouter
