import Layout from '@/views/layout/Layout'
const fn = require('../_import_' + process.env.NODE_ENV)
const SysName = 'sysConsultation'

const _import = function(file) {
  return fn.call(this, `${SysName}/${file}`)
}

const consultationRouter = [{
  path: '/consultationCenter',
  component: Layout,
  redirect: '/consultationCenter/index',
  meta: { role: ['admin'] },
  children: [{
    path: 'index',
    component: _import('consultationCenter/index'),
    name: 'consultationCenter',
    meta: {
      title: '会诊中心', icon: 'interflow', role: ['admin'] }
  }]
},

{
  path: '/consultationOnline',
  component: Layout,
  redirect: '/consultationOnline/index',
  meta: { role: ['admin', 'doctor'] },
  children: [{
    path: 'index',
    component: _import('consultationOnline/index'),
    name: 'consultationOnline',
    meta: { title: '在线会诊', icon: 'cloud', role: ['doctor'] }
  }]
}]

export default consultationRouter
