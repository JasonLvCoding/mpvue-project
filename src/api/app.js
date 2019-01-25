import ajax from '@/utils/ajax'

export default {
  open,
  reset,
  restore,
  reboot,
  close,
  getSettings,
  getRuleList,
  getFeatureGroup,
  uploadFile
}

function getSettings() {
  return ajax({
    url: '/api/setting',
    method: 'get'
  })
}


// 设备开门，常开 param = { keep : true }
function open(param) {
  return ajax({
    url: '/api/operation/open',
    method: 'get',
    params: param
  })
}

// 设备恢复默认
function restore() {
  return ajax({
    url: '/api/operation/restore',
    method: 'get'
  })
}

// 设备恢复出厂
function reset() {
  return ajax({
    url: '/api/operation/reset',
    method: 'get'
  })
}

// 设备重启
function reboot() {
  return ajax({
    url: '/api/operation/reboot',
    method: 'get'
  })
}

// 设备关机
function close() {
  return ajax({
    url: '/api/operation/close',
    method: 'get'
  })
}

// 获取人员库列表
function getFeatureGroup() {
  return ajax({
    url: '/api/config/group',
    method: 'get'
  })
}

// 获取人员规则列表
function getRuleList() {
  return ajax({
    url: '/api/rules',
    method: 'get'
  })
}

// 文件上传
function uploadFile(param) {
  return ajax({
    url: param.url,
    method: 'post',
    timeout: param.timeout || 1800000,
    data: param.data
  })
}
