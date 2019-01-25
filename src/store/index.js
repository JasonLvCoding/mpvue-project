import Vuex from 'vuex'
import Vue from 'vue'
import app from './modules/app'
import device from './modules/device'
import person from './modules/person'
import record from './modules/record'
import admin from './modules/admin'
import getters from './getters'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    device,
    person,
    record,
    admin
  },
  getters
})
export default store
