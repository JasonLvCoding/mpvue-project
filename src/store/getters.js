const getters = {
  loading: state => state.app.loading,
  deviceInfo: state => state.device.deviceInfo,
  routes: state => state.app.routes,
  collapsed: state => state.app.collapsed,
  token: state => state.app.token,
  localeList: state => state.app.localeList,
  lang: state => state.app.settings.lang,
  hostMode: state => state.app.settings.mode,
  ruleList: state => state.app.ruleList,
  featureGroups: state => state.app.featureGroups,
  configList: state => state.device.configList,
  selectedConfig: state => state.device.selectedConfig
};
export default getters
