import Vuex from 'vuex'
import Vue from 'vue'
import getters from './getters'
import dataHouse from './modules/dataHouse'
import auth from './modules/auth'
import app from './modules/app'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    dataHouse,
    auth,
    app
  },
  getters
})
export default store
