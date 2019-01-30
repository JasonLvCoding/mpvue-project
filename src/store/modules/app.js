const storeModule = {
  state: {
    loadingState: false
  },
  mutations: {
    SET_LOADING_STATE: (state, data) => {
      state.loadingState = data
    }
  },
  actions: {}
};

export default storeModule;
