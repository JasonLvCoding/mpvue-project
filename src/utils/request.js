import Fly from "flyio/dist/npm/wx";
import Vue from 'vue'

const $fly = new Fly;
const requestQueue = [];

$fly.config.timeout = 5000;
$fly.config.baseURL = 'http://192.168.28.232:3000'
//添加请求拦截器
$fly.interceptors.request.use((request) => {
  //给所有请求添加自定义header
  request.headers["X-Tag"] = "flyio";
  request.timestamp = new Date().getTime()
  requestQueue.push(request.timestamp)

  return request;
})

//添加响应拦截器，响应拦截器会在then/catch处理之前执行
$fly.interceptors.response.use(
  (response) => {
    requestQueue.splice(requestQueue.indexOf(response.request.timestamp), 1)
    Vue.prototype.$store.dispatch('setLoadingState', requestQueue.length == 0)
    //只将请求结果的data字段返回
    return response.data && response.data.entity
  },
  (error) => {
    requestQueue.splice(requestQueue.indexOf(error.request.timestamp), 1)
    Vue.prototype.$store.dispatch('setLoadingState', requestQueue.length == 0)
    return handleErrorMsg(error)
  }
)


export function handleErrorMsg (error) {

  if (error.status == 0) {
    //网络错误
    return Promise.reject(error)
  }

  if (error.status === 1) {
    //超时请求
    return Promise.reject(error)
  }

  if (401 === error.response.status) {
    Vue.config.store.dispatch('RedirectToLogin')
    return Promise.reject(error)
  }

  if (error.response.status >= 400 && error.response.status <= 500) {
    // 如果是表单提交错误，就不进行全局消息提示，在表单行内提示
    if (error.response.config && error.response.config.handle === true) {
      return Promise.reject(error)
    } else {
      //通用错误处理
    }
  }
  return Promise.reject(error)
}

export default $fly;