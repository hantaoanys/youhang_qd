import request from '@/utils/request'

// 查询隐私政策列表
export function listPrivacy(query) {
  return request({
    url: '/system/privacy/list',
    method: 'get',
    params: query
  })
}

// 查询隐私政策详细
export function getPrivacy(id) {
  return request({
    url: '/system/privacy/' + id,
    method: 'get'
  })
}

// 新增隐私政策
export function addPrivacy(data) {
  return request({
    url: '/system/privacy',
    method: 'post',
    data: data
  })
}

// 修改隐私政策
export function updatePrivacy(data) {
  return request({
    url: '/system/privacy',
    method: 'put',
    data: data
  })
}

// 删除隐私政策
export function delPrivacy(id) {
  return request({
    url: '/system/privacy/' + id,
    method: 'delete'
  })
}

// 导出隐私政策
export function exportPrivacy(query) {
  return request({
    url: '/system/privacy/export',
    method: 'get',
    params: query
  })
}