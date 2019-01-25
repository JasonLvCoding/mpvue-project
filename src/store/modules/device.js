import Device from '@/api/device'
import Config from '@/api/config'
const storeModule = {
  state: {
    deviceInfo: null,
    configList: [],
    selectedConfig: null
  },
  mutations: {
    SET_DEVICE_INFO: (state, data) => {
      state.deviceInfo = data
    },
    SET_CONFIG_LIST: (state, data) => {
      state.configList = data;
    },
    SET_CURRENT_CONFIG: (state, index) => {
      state.selectedConfig = index;
    }
  },
  actions: {
    GetDeviceInfo({ commit }) {
      return new Promise((resolve, reject) => {
        Device.getDeviceInfo().then(res => {
          commit('SET_DEVICE_INFO', res)
          resolve(res)
        }).catch(_ => {
          reject(_)
        })
      })
    },
    SelectConfig({ commit }, index) {
      commit('SET_CURRENT_CONFIG', index)
    },
    GetDeviceConfig({ commit }) {
      return new Promise((resolve, reject) => {
        Device.getConfig().then(res => {
          commit('SET_CONFIG_LIST', res.configList)
          resolve(res)
        }).catch(_ => {
          reject(_)
        });
      })
    },
    SaveDeviceConfig({ commit }, data) {
      return new Promise((resolve, reject) => {
        Device.saveConfig(data).then(res => {
          resolve(res)
        }).catch(_ => {
          reject(_)
        });
      })
    }
  }
};

export default storeModule;
