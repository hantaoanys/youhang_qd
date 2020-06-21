import request from '@/utils/request'

// 查询app升级列表
export function listAppupdate(query) {
  return request({
    url: '/system/appupdate/list',
    method: 'get',
    params: query
  })
}

// 查询app升级详细
export function getAppupdate(id) {
  return request({
    url: '/system/appupdate/' + id,
    method: 'get'
  })
}

// 新增app升级
export function addAppupdate(data) {
  return request({
    url: '/system/appupdate',
    method: 'post',
    data: data
  })
}

// 修改app升级
export function updateAppupdate(data) {
  return request({
    url: '/system/appupdate',
    method: 'put',
    data: data
  })
}

// 删除app升级
export function delAppupdate(id) {
  return request({
    url: '/system/appupdate/' + id,
    method: 'delete'
  })
}

// 导出app升级
export function exportAppupdate(query) {
  return request({
    url: '/system/appupdate/export',
    method: 'get',
    params: query
  })
}