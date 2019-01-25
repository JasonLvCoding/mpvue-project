import ajax from '@/utils/ajax'

export default {
  getPersonCount,
  getPersonList,
  getPersonDetail,
  createPerson,
  updatePerson,
  deletePerson,
  clearPerson,
  createBatch,
  completeBatch,
  checkBatch,
  getBatchResult,
  IMPORT_URL: '/api/persons/batch/import/'
}

function getPersonCount(data) {
  return ajax({
    url: '/api/persons/count',
    method: 'get'
  })
}

// 获取人员列表
function getPersonList(params) {
  return ajax({
    url: '/api/persons',
    method: 'get',
    params: params
  })
}

// 添加人员
function createPerson(data) {
  return ajax({
    url: '/api/person',
    method: 'POST',
    data: data
  })
}

// 查询人员详情
function getPersonDetail(id) {
  return ajax({
    url: `/api/person/${id}`,
    method: 'GET',
  })
}

// 编辑人员保存
function updatePerson(data) {
  return ajax({
    url: `/api/person/${data.no}`,
    method: 'POST',
    data: data
  })
}

// 删除人员
function deletePerson(id) {
  return ajax({
    url: `/api/person/${id}`,
    method: 'DELETE',
  })
}

function clearPerson() {
  return ajax({
    url: `/api/persons`,
    method: 'DELETE'
  })
}

function createBatch() {
  return ajax({
    url: '/api/persons/batch',
    method: 'get'
  })
}

function completeBatch(id) {
  return ajax({
    url: `/api/persons/batch/${id}`,
    method: 'delete'
  })
}

function checkBatch() {
  return ajax({
    url: '/api/persons/batch-check',
    method: 'get'
  })
}

function getBatchResult(id, params) {
  return ajax({
    url: `/api/persons/batch/result/${id}`,
    method: 'get',
    params
  })
}
