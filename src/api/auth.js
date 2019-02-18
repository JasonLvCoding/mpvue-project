import fly from '@/utils/request'

export default {
  login,
  getAppInfo,
  getOpenId
}

// 获取设备信息
function login (param) {
  return fly.post('/api/auth', param)
}

function getAppInfo() {
  return fly.get('/api/app')
}

function getOpenId(param) {
  return fly.get('https://api.weixin.qq.com/sns/jscode2session', param, {
    baseURL: ''
  })
}