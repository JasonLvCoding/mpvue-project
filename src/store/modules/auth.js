import Auth from '@/api/auth'
const storeModule = {
  state: {
    appid: '',
    secret: '',
    js_code: ''
  },
  mutations: {
    SET_JS_CODE: (state, data) => {
      state.js_code = data
    },
  },
  actions: {
    Login ({ commit }, param) {
      return new Promise((resolve, reject) => {
        Auth.login(param).then(res => {
          resolve(res)
        }).catch(_ => {
          reject(_)
        })
      })
    },

    wxLogin ({commit}) {
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


  }
};

export default storeModule;
