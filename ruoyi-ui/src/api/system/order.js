import request from '@/utils/request'

// 查询用户商品列表
export function listOrder(query) {
  return request({
    url: '/system/order/list',
    method: 'get',
    params: query
  })
}

// 查询用户商品详细
export function getOrder(id) {
  return request({
    url: '/system/order/' + id,
    method: 'get'
  })
}

// 新增用户商品
export function addOrder(data) {
  return request({
    url: '/system/order',
    method: 'post',
    data: data
  })
}

// 修改用户商品
export function updateOrder(data) {
  return request({
    url: '/system/order',
    method: 'put',
    data: data
  })
}

// 删除用户商品
export function delOrder(id) {
  return request({
    url: '/system/order/' + id,
    method: 'delete'
  })
}

// 导出用户商品
export function exportOrder(query) {
  return request({
    url: '/system/order/export',
    method: 'get',
    params: query
  })
}