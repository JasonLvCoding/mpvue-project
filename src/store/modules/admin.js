import Admin from '@/api/admin'
const storeModule = {
  state: {},
  mutations: {
  },
  actions: {
    GetAdminList({ commit }, params) {
      return new Promise((resolve, reject) => {
        Admin.getAdminList(params).then(res => {
          resolve(res)
        }).catch(_ => {
          reject(_)
        })
      })
    },
    CreateAdmin({ commit }, data) {
      return new Promise((resolve, reject) => {
        Admin.createAdmin(data).then(res => {
          resolve(res)
        }).catch(_ => {
          reject(_)
        })
      })
    },
    UpdateAdmin({ commit }, data) {
      return new Promise((resolve, reject) => {
        Admin.updateAdmin(data).then(res => {
          resolve(res)
        }).catch(_ => {
          reject(_)
        })
      })
    },
    GetAdminDetail({ commit }, id) {
      return new Promise((resolve, reject) => {
        Admin.getAdminDetail(id).then(res => {
          resolve(res)
        }).catch(_ => {
          reject(_)
        })
      })
    },
    ClearAdmin({ commit }, data) {
      return new Promise((resolve, reject) => {
        Admin.clearAdmin().then(res => {
          resolve(res)
        }).catch(_ => {
          reject(_)
        })
      })
    },
    DeleteAdmin({ commit }, id) {
      
      return new Promise((resolve, reject) => {
        Admin.deleteAdmin(id).then(res => {
          resolve(res)
        }).catch(_ => {
          reject(_)
        })
      })
    }
  }
};

export default storeModule;
