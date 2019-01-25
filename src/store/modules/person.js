import Person from '@/api/person'
import { handleErrorMsg } from '@/utils/ajax'
const storeModule = {
  state: {},
  mutations: {},
  actions: {
    GetPersonCount({ commit }) {
      return new Promise((resolve, reject) => {
        Person.getPersonCount().then(res => {
          resolve(res)
        }).catch(_ => {
          reject(_)
        })
      })
    },
    GetPersonList({ commit }, params) {
      return new Promise((resolve, reject) => {
        Person.getPersonList(params).then(res => {
          resolve(res)
        }).catch(_ => {
          reject(_)
        })
      })
    },
    CreatePerson({ commit }, data) {
      return new Promise((resolve, reject) => {
        Person.createPerson(data).then(res => {
          resolve(res)
        }).catch(_ => {
          reject(_)
        })
      })
    },
    UpdatePerson({ commit }, data) {
      return new Promise((resolve, reject) => {
        Person.updatePerson(data).then(res => {
          resolve(res)
        }).catch(_ => {
          reject(_)
        })
      })
    },
    DeletePerson({ commit }, data) {
      return new Promise((resolve, reject) => {
        Person.deletePerson(data).then(res => {
          resolve(res)
        }).catch(_ => {
          reject(_)
        })
      })
    },
    GetPersonDetail({ commit }, id) {
      return new Promise((resolve, reject) => {
        Person.getPersonDetail(id).then(res => {
          resolve(res)
        }).catch(_ => {
          reject(_)
        })
      })
    },
    ClearPerson({ commit }, data) {
      return new Promise((resolve, reject) => {
        Person.clearPerson().then(res => {
          resolve(res)
        }).catch(_ => {
          reject(_)
        })
      })
    },
    CheckBatch({ commit }) {
      return new Promise((resolve, reject) => {
        Person.checkBatch().then(res => {
          resolve(res)
        }).catch(_ => {
          reject(_)
        })
      })
    },
    CreateBatch({ commit }) {
      return new Promise((resolve, reject) => {
        Person.createBatch().then(res => {
          resolve(res)
        }).catch(_ => {
          reject(_)
        })
      })
    },
    ImportBatchFiles({ commit }, { element, requestId, uploadOptions }) {
      return new Promise((resolve, reject) => {
        let options = {};
        options.url = `${Person.IMPORT_URL}${requestId}?_r=${+new Date()}`;
        Object.assign(options, uploadOptions, {
          success: function(response) {
            resolve(response)
          },
          error: function(response, error, errorMessage) {
            handleErrorMsg({ response })
            reject(response)
          }
        });
        $(element).ajaxSubmit(options);
      });
    },
    CompleteBatch({ commit }, requestId) {
      return new Promise((resolve, reject) => {
        Person.completeBatch(requestId).then(res => {
          resolve(res)
        }).catch(_ => {
          reject(_)
        })
      })
    },
    GetBatchResult({ commit }, { requestId, page, size }) {
      return new Promise((resolve, reject) => {
        Person.getBatchResult(requestId, { page, size }).then(res => {
          resolve(res)
        }).catch(_ => {
          reject(_)
        })
      })
    }
  }
};

export default storeModule;
