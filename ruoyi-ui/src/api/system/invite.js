import request from '@/utils/request'

// 查询用户邀请列表
export function listInvite(query) {
  return request({
    url: '/system/invite/list',
    method: 'get',
    params: query
  })
}

// 查询用户邀请详细
export function getInvite(userId) {
  return request({
    url: '/system/invite/' + userId,
    method: 'get'
  })
}

// 新增用户邀请
export function addInvite(data) {
  return request({
    url: '/system/invite',
    method: 'post',
    data: data
  })
}

// 修改用户邀请
export function updateInvite(data) {
  return request({
    url: '/system/invite',
    method: 'put',
    data: data
  })
}

// 删除用户邀请
export function delInvite(userId) {
  return request({
    url: '/system/invite/' + userId,
    method: 'delete'
  })
}

// 导出用户邀请
export function exportInvite(query) {
  return request({
    url: '/system/invite/export',
    method: 'get',
    params: query
  })
}