import Vuex from 'vuex'
import Vue from 'vue'
import getters from './getters'
import dataHouse from './modules/dataHouse'
import auth from './modules/auth'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    dataHouse,
    auth
  },
  getters
})
export default store
