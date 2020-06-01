import request from '@/utils/request'

// 查询【请填写功能名称】列表
export function listTeacher(query) {
  return request({
    url: '/system/teacher/list',
    method: 'get',
    params: query
  })
}

// 查询【请填写功能名称】详细
export function getTeacher(id) {
  return request({
    url: '/system/teacher/' + id,
    method: 'get'
  })
}

// 新增【请填写功能名称】
export function addTeacher(data) {
  return request({
    url: '/system/teacher',
    method: 'post',
    data: data
  })
}

// 修改【请填写功能名称】
export function updateTeacher(data) {
  return request({
    url: '/system/teacher',
    method: 'put',
    data: data
  })
}

// 删除【请填写功能名称】
export function delTeacher(id) {
  return request({
    url: '/system/teacher/' + id,
    method: 'delete'
  })
}

// 导出【请填写功能名称】
export function exportTeacher(query) {
  return request({
    url: '/system/teacher/export',
    method: 'get',
    params: query
  })
}