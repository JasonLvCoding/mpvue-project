import ajax from '@/utils/ajax'

export default {
  getAdminList,
  getAdminDetail,
  createAdmin,
  updateAdmin,
  clearAdmin,
  deleteAdmin
}

// 获取管理员列表
function getAdminList(params) {
  return ajax({
    url: '/api/device/admins',
    method: 'get',
    params: params
  })
}

// 添加管理员
function createAdmin(data) {
  return ajax({
    url: '/api/device/admin',
    method: 'POST',
    data: data
  })
}

// 删除管理员
function deleteAdmin(id) {
  
  return ajax({
    url: `/api/device/admin/${id}`,
    method: 'DELETE'
  })
}

// 查询人员详情
function getAdminDetail(id) {
  return ajax({
    url: `/api/device/admin/${id}`,
    method: 'GET'
  })
}

// 编辑人员保存
function updateAdmin(data) {
  return ajax({
    url: `/api/device/admin/${data.id}`,
    method: 'POST',
    data: data
  })
}

// 清空管理员
function clearAdmin() {
  return ajax({
    url: `/api/device/admins`,
    method: 'DELETE'
  })
}