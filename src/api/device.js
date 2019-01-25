import fly from '@/utils/request'

export default {
  getPosts
}

// 获取设备信息
function getPosts() {
  return fly.get('http://192.168.28.232:3000/api/posts')
}
