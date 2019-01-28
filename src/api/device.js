import fly from '@/utils/request'

export default {
  getPosts,
  getBlogs
}

// 获取设备信息
function getPosts() {
  return fly.get('/api/users')
}

function getBlogs() {
  return fly.get('/api/blogs')
}
