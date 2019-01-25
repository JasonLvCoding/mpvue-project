import fly from '@/utils/request'

export default {
  getDeviceInfo
}

// 获取设备信息
function getDeviceInfo() {
  return fly.request('/api/device',{
    method: 'get'
  })
}
