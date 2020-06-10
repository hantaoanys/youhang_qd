import request from '@/utils/request'

// 查询邀请流水列表
export function listInvitegoods(query) {
  return request({
    url: '/system/invitegoods/list',
    method: 'get',
    params: query
  })
}

// 查询邀请流水详细
export function getInvitegoods(id) {
  return request({
    url: '/system/invitegoods/' + id,
    method: 'get'
  })
}

// 新增邀请流水
export function addInvitegoods(data) {
  return request({
    url: '/system/invitegoods',
    method: 'post',
    data: data
  })
}

// 修改邀请流水
export function updateInvitegoods(data) {
  return request({
    url: '/system/invitegoods',
    method: 'put',
    data: data
  })
}

// 删除邀请流水
export function delInvitegoods(id) {
  return request({
    url: '/system/invitegoods/' + id,
    method: 'delete'
  })
}

// 导出邀请流水
export function exportInvitegoods(query) {
  return request({
    url: '/system/invitegoods/export',
    method: 'get',
    params: query
  })
}