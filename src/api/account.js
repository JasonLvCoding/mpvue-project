import ajax from '@/utils/ajax'

export default {
  login,
  logout
}

function login(data) {
  return ajax({
    url: '/api/account/login',
    method: 'get',
    handle: true,
    params: data
  })
}

function logout() {
  return ajax({
    url: '/api/account/logout',
    method: 'get'
  })
}
