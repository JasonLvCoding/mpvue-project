import Vuex from 'vuex'
import Vue from 'vue'
import getters from './getters'
import device from './modules/device'
import auth from './modules/auth'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    device,
    auth
  },
  getters
})
export default store
