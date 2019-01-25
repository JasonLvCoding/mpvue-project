import fly from '@/utils/request'

export default {
  getPosts
}

// 获取设备信息
function getPosts() {
  return fly.get('/posts')
}
