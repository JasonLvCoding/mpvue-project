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
    GetPosts({ commit }) {
      return new Promise((resolve, reject) => {
        Device.getPosts().then(res => {
          resolve(res)
        }).catch(_ => {
          reject(_)
        })
      })
    },
    GetBlogs({ commit }) {
      return new Promise((resolve, reject) => {
        Device.getBlogs().then(res => {
          resolve(res)
        }).catch(_ => {
          reject(_)
        })
      })
    },
  }
};

export default storeModule;
