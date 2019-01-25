import ajax from '@/utils/ajax'

export default {
  getDeviceInfo,
  getConfig,
  saveConfig
}

// 获取设备信息
function getDeviceInfo() {
  return ajax({
    url: '/api/device',
    method: 'get'
  })
}

//获取终端设备配置
function getConfig() {
  return ajax({
    url: '/api/device/config',
    method: 'get'
  })
}

function saveConfig(data) {
  return ajax({
    url: '/api/device/config',
    method: 'post',
    handle: true,
    data
  })
}
