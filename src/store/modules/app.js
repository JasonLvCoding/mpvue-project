import Auth from '@/api/auth'
const storeModule = {
  state: {
    loadingState: false
  },
  mutations: {
    SET_LOADING_STATE: (state, data) => {
      state.loadingState = data
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
    setLoadingState({ commit }, data) {
      commit('SET_LOADING_STATE', data)
    },
  }
};

export default storeModule;
