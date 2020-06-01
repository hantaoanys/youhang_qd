import request from '@/utils/request'

// 查询帮助中心列表
export function listHelp(query) {
  return request({
    url: '/system/help/list',
    method: 'get',
    params: query
  })
}

// 查询帮助中心详细
export function getHelp(id) {
  return request({
    url: '/system/help/' + id,
    method: 'get'
  })
}

// 新增帮助中心
export function addHelp(data) {
  return request({
    url: '/system/help',
    method: 'post',
    data: data
  })
}

// 修改帮助中心
export function updateHelp(data) {
  return request({
    url: '/system/help',
    method: 'put',
    data: data
  })
}

// 删除帮助中心
export function delHelp(id) {
  return request({
    url: '/system/help/' + id,
    method: 'delete'
  })
}

// 导出帮助中心
export function exportHelp(query) {
  return request({
    url: '/system/help/export',
    method: 'get',
    params: query
  })
}