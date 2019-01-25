import ajax from '@/utils/ajax'

export default {
  getRecordSize,
  getRecordList,
  clearRecord,
  exportRecord
}

// 获取通行记录的体积
function getRecordSize(data) {
  return ajax({
    url: '/api/access-record/size',
    method: 'get'
  })
}

// 通行记录查询
function getRecordList(params) {
  return ajax({
    url: '/api/access-record',
    method: 'get',
    params
  })
}

// 通行记录清空
function clearRecord(params) {
  return ajax({
    url: '/api/access-record',
    method: 'delete',
    params
  })
}

// 通行记录导出
function exportRecord(params) {
  return ajax({
    url: '/api/access-record/export',
    method: 'get',
    params,
    timeout: 1800000
  })
}
