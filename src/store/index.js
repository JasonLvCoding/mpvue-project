import Vuex from 'vuex'
import Vue from 'vue'
import device from './modules/device'
import getters from './getters'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    device,
  },
  getters
})
export default store
