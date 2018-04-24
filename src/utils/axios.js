// import Qs from 'qs'
import axios from 'axios' // 引入 Axios
import { Message } from 'element-ui' // element 提示信息组件
import { getToken } from '@/utils/auth'
// Axios 封装
// 创建axios实例
const Axios = axios.create({
  baseURL: '',
  timeout: 10000, // 请求超时时间
  responseType: 'json', // 表示服务器响应的数据类型，默认为json
  // withCredentials: false // 是否允许带cookie这些
  headers: { 'Content-Type': 'application/json' }
  // params: {
  //   timestamp: new Date().getTime(),
  //   token: getToken()
  // },
  // paramsSerializer: function(params) {
  //   return Qs.stringify(params)
  // }
})

// 添加请求拦截器
Axios.interceptors.request.use(config => {
  // 在发送请求之前做些什么
  // 鉴权token 字段未知
  // if (getToken()) {
  //   config.headers.Authorization = getToken()
  // }
  if (getToken()) {
    const params = {}
    params.timestamp = new Date().getTime()
    params.token = getToken()
    config.params = params
  }
  return config
}, error => {
  // 对请求错误做些什么
  Message({
    showClose: true,
    message: error,
    type: error.data.error.message
  })
  return Promise.reject(error.data.error.message)
})

// 添加响应拦截器
Axios.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code !== '1') {
      Message({
        showClose: true,
        message: res.message,
        type: 'error'
      })
      return Promise.reject(res)
    } else {
      return res
    }
  },
  error => {
    Message({
      message: error.message,
      type: 'error',
      duration: 5000
    })
    // 返回错误信息
    return Promise.reject(error)
  }
)

export default Axios
