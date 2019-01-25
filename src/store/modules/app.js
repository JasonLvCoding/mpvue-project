import Account from '@/api/account'
import App from '@/api/app'
import Config from '@/api/config'
import Cookie from 'js-cookie'
import router from '@/router'
const storeModule = {
  state: {
    collapsed: true,
    loading: false,
    lang: navigator.language,
    localeList: [{
      name: '简体中文',
      value: 'zh_CN',
      lang: 'zh-CN'
    }, {
      name: 'English',
      value: 'en_US',
      lang: 'en'
    }],
    token: Cookie.get('__SESSION_ID__'),
    settings: {
      lang: 'en',
      mode: 'standalone'
    },
    ruleList: [],
    featureGroups: [],
    //todo 待优化路由，单机模式才能访问的路由standaloneOnly
    routes: [{
      name: 'dashboard',
      path: '/',
      children: []
    }, {
      name: 'person',
      path: '/person',
      standaloneOnly: true,
      children: []
    }, {
      name: 'device',
      path: '/device',
      children: [{
        name: 'device_setting',
        path: 'setting'
      }, {
        name: 'device_admin',
        standaloneOnly: true,
        path: 'admin'
      }, {
        name: 'device_config',
        path: 'config'
      }]
    }, {
      name: 'data',
      path: '/data',
      standaloneOnly: true,
      children: [{
        name: 'through_record',
        path: 'record'
      }]
    }]
  },
  mutations: {
    SET_LOADING_STATE: (state, data) => {
      state.loading = data
    },
    RESET_LANGUAGE: (state, lang) => {
      let newLang = lang == 'en-US' ? 'en' : lang,
        lastLang = state.lang == 'en-US' ? 'en' : state.lang
      $('body').removeClass(`${lastLang}-fix`).addClass(`${newLang}-fix`)
      state.lang = lang
    },
    TOGGLE_MENU: (state, collapsed) => {
      state.collapsed = collapsed
    },
    SET_TOKEN: (state, data) => {
      state.token = data
    },
    SET_SETTINGS: (state, data) => {
      Object.assign(state.settings, data);
    },
    SET_RULE_LIST: (state, data) => {
      state.ruleList = data
    },
    SET_FEATURE_GROUPS: (state, data) => {
      state.featureGroups = data
    },
    REMOVE_TOKEN: (state, data) => {
      state.token = null
      Cookie.remove('__SESSION_ID__')
    }
  },
  actions: {
    GetInitialSettings({ commit }) {
      return new Promise((resolve, reject) => {
        App.getSettings().then(res => {
          commit('SET_SETTINGS', res)
          resolve(res)
        }).catch(_ => {
          reject(_)
        })
      })
    },
    RedirectToLogin({ commit }) {
      commit('REMOVE_TOKEN')
      if (router.history.current.path == '/login') return
      router.replace({
        path: '/login',
        query: {
          redirect: router.history.current.path
        }
      })
    },
    ToggleMenu({ commit }, collapsed) {
      commit('TOGGLE_MENU', collapsed)
    },
    ResetLanguage({ commit }, lang) {
      commit('RESET_LANGUAGE', lang)
    },
    GenerateToken({ commit }) {
      commit('SET_TOKEN', Cookie.get('__SESSION_ID__'))
    },
    Login({ commit }, data) {
      return new Promise((resolve, reject) => {
        Account.login(data).then(res => {
          resolve(res)
        }).catch(_ => {
          reject(_)
        })
      })
    },
    Logout({ commit }) {
      return new Promise((resolve, reject) => {
        Account.logout().then(res => {
          commit('REMOVE_TOKEN')
          resolve(res)
        }).catch(_ => {
          reject(_)
        })
      })
    },
    GetRuleList({ commit }) {
      return new Promise((resolve, reject) => {
        App.getRuleList().then(res => {
          commit('SET_RULE_LIST', res)
          resolve(res)
        }).catch(_ => {
          reject(_)
        })
      })
    },
    GetFeatureGroup({ commit }) {
      return new Promise((resolve, reject) => {
        App.getFeatureGroup().then(res => {
          commit('SET_FEATURE_GROUPS', res)
          resolve(res)
        }).catch(_ => {
          reject(_)
        })
      })
    },

    OpenDevice({ commit }, param) {
      return new Promise((resolve, reject) => {
        App.open(param).then(res => {
          resolve(res)
        }).catch(_ => {
          reject(_)
        })
      })
    },
    CloseDevice({ commit }) {
      return new Promise((resolve, reject) => {
        App.close().then(res => {
          resolve(res)
        }).catch(_ => {
          reject(_)
        })
      })
    },
    RestoreDevice({ commit }) {
      return new Promise((resolve, reject) => {
        App.restore().then(res => {
          resolve(res)
        }).catch(_ => {
          reject(_)
        })
      })
    },
    ResetDevice({ commit }) {
      return new Promise((resolve, reject) => {
        App.reset().then(res => {
          resolve(res)
        }).catch(_ => {
          reject(_)
        })
      })
    },
    RebootDevice({ commit }) {
      return new Promise((resolve, reject) => {
        App.reboot().then(res => {
          resolve(res)
        }).catch(_ => {
          reject(_)
        })
      })
    },
    GetLogSize({ commit }) {
      return new Promise((resolve, reject) => {
        Config.getLogSize().then(res => {
          resolve(res)
        }).catch(_ => {
          reject(_)
        })
      })
    },
    EmptyTestLog({ commit }) {
      return new Promise((resolve, reject) => {
        Config.emptyTestLog().then(res => {
          resolve(res)
        }).catch(_ => {
          reject(_)
        })
      })
    },
    EmptyLog({ commit }) {
      return new Promise((resolve, reject) => {
        Config.emptyLog().then(res => {
          resolve(res)
        }).catch(_ => {
          reject(_)
        })
      })
    },
    ExportLog({ commit }) {
      return new Promise((resolve, reject) => {
        Config.exportLog().then(res => {
          resolve(res)
        }).catch(_ => {
          reject(_)
        })
      })
    },
    ExportTestLog({ commit }) {
      return new Promise((resolve, reject) => {
        Config.exportTestLog().then(res => {
          resolve(res)
        }).catch(_ => {
          reject(_)
        })
      })
    },
    UploadFile({ commit }, param) {
      return new Promise((resolve, reject) => {
        App.uploadFile(param).then(res => {
          resolve(res)
        }).catch(_ => {
          reject(_)
        })
      })
    },
    CheckMsgTemplate({ commit }) {
      return new Promise((resolve, reject) => {
        Config.checkMsgTemplate().then(res => {
          resolve(res)
        }).catch(_ => {
          reject(_)
        })
      })
    }
  }
};

export default storeModule;
