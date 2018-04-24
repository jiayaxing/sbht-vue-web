import Layout from '@/views/layout/Layout'
const fn = require('../_import_' + process.env.NODE_ENV)
const SysName = 'sysKbms'

const _import = function(file) {
  return fn.call(this, `${SysName}/${file}`)
}

const kbmsRouter = [{
  path: '/departmentManage',
  component: Layout,
  redirect: '/departmentManage/index',
  meta: { role: ['admin'] },
  children: [{
    path: 'index',
    component: _import('departmentManage/index'),
    name: 'departmentManage',
    meta: { title: '部门管理', icon: 'department', role: ['admin'] }
  }]
},

{
  path: '/boardManage',
  component: Layout,
  redirect: '/boardManage/index',
  meta: { title: '板块管理', icon: 'board', role: ['admin'] },
  children: [{
    path: 'classify',
    component: _import('boardManage/classify/index'),
    name: 'classifyManage',
    meta: { title: '分类管理', icon: 'classify', role: ['admin'] }
  },
  {
    path: 'label',
    component: _import('boardManage/label/index'),
    name: 'labelManage',
    meta: { title: '标签管理', icon: 'label', role: ['admin'] }
  },
  {
    path: 'fodder',
    component: _import('boardManage/fodder/index'),
    name: 'fodderManage',
    meta: { title: '素材分类', icon: 'fodder', role: ['admin'] }
  }]
},

{
  path: '/publishManage',
  component: Layout,
  redirect: '/publishManage/answer',
  meta: { title: '发布管理', icon: 'publish', role: ['doctor'] },
  children: [{
    path: 'answer',
    component: _import('publishManage/answer/index'),
    name: 'answer',
    meta: { title: '牙病解答', icon: 'answer', role: ['doctor'] }
  },
  {
    path: 'science',
    component: _import('publishManage/science/index'),
    name: 'science',
    meta: { title: '科普知识', icon: 'science', role: ['doctor'] }
  },
  {
    path: 'business',
    component: _import('publishManage/business/index'),
    name: 'business',
    meta: { title: '业务介绍', icon: 'business', role: ['admin'] }
  }]
}]

export default kbmsRouter
