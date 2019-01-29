import Device from '@/api/device'
const storeModule = {
  state: {
    deviceInfo: null,
    gridData: [
      {
        src: '/static/images/library.png',
        name: '上门服务',
        url: '/pages/samples/panel/main'
      },
      {
        src: '/static/images/setting.png',
        name: '智能搞事',
        url: '/pages/index/main'
      },
      {
        src: '/static/images/read.png',
        name: '我要领券',
        url: '/pages/index/main'
      },
      {
        src: '/static/images/saoma.png',
        name: '购卡充值',
        url: '/pages/index/main'
      }
    ],
    imgUrls: [
      '/static/images/swiper_01.png'
    ],
  },
  mutations: {
    SET_DEVICE_INFO: (state, data) => {
      state.deviceInfo = data
    },
  },
  actions: {
    GetPosts ({ commit }) {
      return new Promise((resolve, reject) => {
        Device.getPosts().then(res => {
          resolve(res)
        }).catch(_ => {
          reject(_)
        })
      })
    },
    GetBlogs ({ commit }, param) {
      return new Promise((resolve, reject) => {
        Device.getBlogs(param).then(res => {
          resolve(res)
        }).catch(_ => {
          reject(_)
        })
      })
    },
  }
};

export default storeModule;
