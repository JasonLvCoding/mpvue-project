import Record from '@/api/record'
const storeModule = {
  state: {},
  mutations: {
  },
  actions: {
    GetRecordSize({ commit }) {
      return new Promise((resolve, reject) => {
        Record.getRecordSize().then(res => {
          resolve(res)
        }).catch(_ => {
          reject(_)
        })
      })
    },
    GetRecordList({ commit }, param) {
      return new Promise((resolve, reject) => {
        Record.getRecordList(param).then(res => {
          resolve(res)
        }).catch(_ => {
          reject(_)
        })
      })
    },
    ClearRecord({ commit }, param) {
      return new Promise((resolve, reject) => {
        Record.clearRecord(param).then(res => {
          resolve(res)
        }).catch(_ => {
          reject(_)
        })
      })
    },
    ExportRecord({ commit }, param) {
      return new Promise((resolve, reject) => {
        Record.exportRecord(param).then(res => {
          resolve(res)
        }).catch(_ => {
          reject(_)
        })
      })
    },
  }
};

export default storeModule;
