import Vue from 'vue'
import App from './App'
import store from './store'
import 'mpvue-weui/src/style/weui.css'
import '@/style/global.css'

Vue.config.productionTip = false
Vue.prototype.$store = store;
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
