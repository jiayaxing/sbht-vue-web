import request from '@/utils/axios'
/**
 * [登录获取患者列表方法]
 * @param {[String]} loginName [登录名]
 * @param {[String]} password  [密码]
 * @returns {[String]}
 */

export function getClientList() {
  return request({
    url: 'https://www.easy-mock.com/mock/5ab0e6a6ac838a526f4964ff/example/clientList',
    method: 'get'
  })
}
