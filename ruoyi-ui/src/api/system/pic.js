import request from '@/utils/request'

// 查询【请填写功能名称】列表
export function listPic(query) {
  return request({
    url: '/system/pic/list',
    method: 'get',
    params: query
  })
}

// 查询【请填写功能名称】详细
export function getPic(id) {
  return request({
    url: '/system/pic/' + id,
    method: 'get'
  })
}

// 新增【请填写功能名称】
export function addPic(data) {
  return request({
    url: '/system/pic',
    method: 'post',
    data: data
  })
}

// 修改【请填写功能名称】
export function updatePic(data) {
  return request({
    url: '/system/pic',
    method: 'put',
    data: data
  })
}

// 删除【请填写功能名称】
export function delPic(id) {
  return request({
    url: '/system/pic/' + id,
    method: 'delete'
  })
}

// 导出【请填写功能名称】
export function exportPic(query) {
  return request({
    url: '/system/pic/export',
    method: 'get',
    params: query
  })
}