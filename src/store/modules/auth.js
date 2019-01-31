import Auth from '@/api/auth'
const storeModule = {
  state: {
    appInfo: {
      appid: '',
      secret: '',
      js_code: ''
    }
  },
  mutations: {
    SET_JS_CODE: (state, data) => {
      state.appInfo.js_code = data
    },
  },
  actions: {

    Login ({ commit }, param) {
      return new Promise((resolve, reject) => {
        Auth.login(param).then(res => {
          resolve(res)
        }).catch(err => {
          reject(err)
        })
      })
    },

    WxLogin ({ commit }) {
      return new Promise((resolve, reject) => {
        wx.login({
          success (res) {
            if (res.code) {
              commit('SET_JS_CODE', res.code)
              resolve(res)
            } else {
              reject(res)
            }
          }
        })
      })
    },

    GetAppInfo () {
      return new Promise((resolve, reject) => {
        Auth.getAppInfo().then(res => {
          resolve(res)
        }).catch(err => {
          reject(err)
        })
      })
    },

    GetOpenId ({ commit }, param) {
      return new Promise((resolve, reject) => {
        Auth.getOpenId(param).then(res => {
          resolve(res)
        }).catch(err => {
          reject(err)
        })
      })
    }

  }
};

export default storeModule;
