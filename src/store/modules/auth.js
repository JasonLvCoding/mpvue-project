import Auth from '@/api/auth'
const storeModule = {
  state: {
  },
  mutations: {
    SET_DEVICE_INFO: (state, data) => {
      state.deviceInfo = data
    },
  },
  actions: {
    Login({ commit }, param) {
      return new Promise((resolve, reject) => {
        Auth.login(param).then(res => {
          resolve(res)
        }).catch(_ => {
          reject(_)
        })
      })
    },
  }
};

export default storeModule;
