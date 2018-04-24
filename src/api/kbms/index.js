import request from '@/utils/axios'
import config from '@/api/config'

export function categoryQuery(params) {
  return request({
    url: `${config.url}/category/categoryQuery`,
    method: 'post',
    data: params
  })
}