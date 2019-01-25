import ajax from '@/utils/ajax'

export default {
  getLogSize,
  emptyLog,
  emptyTestLog,
  exportLog,
  exportTestLog,
  checkMsgTemplate
}

// 检查自定义信息文件是否存在
function checkMsgTemplate() {
  return ajax({
    url: '/api/message-template/check',
    method: 'get'
  })
}

// 导出设置文件
function getLogSize() {
  return ajax({
    url: '/api/log/size',
    method: 'get'
  })
}

// 清空测试日志
function emptyTestLog() {
  return ajax({
    url: '/api/test-log',
    method: 'DELETE'
  })
}

// 清空日志
function emptyLog() {
  return ajax({
    url: '/api/log',
    method: 'DELETE'
  })
}

// 导出日志
function exportLog() {
  return ajax({
    url: '/api/log/export',
    method: 'get',
    timeout: 1800000
  })
}

// 导出测试日志
function exportTestLog() {
  return ajax({
    url: '/api/test-log/export',
    method: 'get',
    timeout: 1800000
  })
}