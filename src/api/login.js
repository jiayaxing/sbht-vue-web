import request from '@/utils/axios'
/**
 * [登录获取Token方法]
 * @param {[String]} loginName [登录名]
 * @param {[String]} password  [密码]
 * @returns {[String]}
 */
export function login(username, password) {
  return request({
    url: 'https://www.easy-mock.com/mock/5ab0e6a6ac838a526f4964ff/example/userLogin',
    method: 'post',
    data: {
      loginName: username,
      password: password
    }
  })
}
/**
 * [获取用户信息]
 * @param {[token]} token [令牌]
 * @returns {[Array]} [用户信息]
 */
export function getuserInfo(token) {
  return request({
    url: 'https://www.easy-mock.com/mock/5ab0e6a6ac838a526f4964ff/example/userInfo',
    method: 'get'
  })
}
