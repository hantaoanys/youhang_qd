import request from '@/utils/request'

// 查询提现流水列表
export function listHistory(query) {
  return request({
    url: '/system/history/list',
    method: 'get',
    params: query
  })
}

// 查询提现流水详细
export function getHistory(userId) {
  return request({
    url: '/system/history/' + userId,
    method: 'get'
  })
}

// 新增提现流水
export function addHistory(data) {
  return request({
    url: '/system/history',
    method: 'post',
    data: data
  })
}

// 修改提现流水
export function updateHistory(data) {
  return request({
    url: '/system/history',
    method: 'put',
    data: data
  })
}

// 删除提现流水
export function delHistory(userId) {
  return request({
    url: '/system/history/' + userId,
    method: 'delete'
  })
}

// 导出提现流水
export function exportHistory(query) {
  return request({
    url: '/system/history/export',
    method: 'get',
    params: query
  })
}