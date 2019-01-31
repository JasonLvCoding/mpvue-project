import fly from '@/utils/request'

export default {
  login
}

// 获取设备信息
function login (param) {
  return fly.post('/api/auth', param)
}