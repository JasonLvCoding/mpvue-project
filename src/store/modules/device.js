import Device from '@/api/device'
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
  }
};

export default storeModule;
