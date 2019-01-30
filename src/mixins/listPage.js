export default {
  
  data() {
    return {
      loadingState: null,
      $_dataContainer: 'listData',
      $_action: '',
      $_params: '',
      $_enablePullDownRefresh: false,
      $_pullUpLoadmore: false
    }
  },
  
  methods: {
    initListPage(option) {
      if(!option.action) return console.error('no action to get list data')
      this.$_action = option.action
      this.$_dataContainer = option.dataContainer
      this.$_params = option.searchParams || null
      this.$_pullDownRefresh = !!option.pullDownRefresh
      this.$_pullUpLoadmore = !!option.pullUpLoadmore
    },
    $_setListData(res) {
      if(this.loadingState != 'loadmore') {
        this.$data[this.$_dataContainer] = res
      }else {
        let data = this.$data[this.$_dataContainer] && this.$data[this.$_dataContainer].content || []
        this.$data[this.$_dataContainer].content = data.concat(res.content)
      }
      this.$data[this.$_dataContainer].page = res.page || 0
      this.$data[this.$_dataContainer].totalPages = res.totalPages || 0
      this._resetLoadingState()
    },
    $_resetLoadingState() {
      this.loadingState = null
      wx.stopPullDownRefresh()
    },
    searchListData() {
      this.loadingState = 'search'
      this.$_getListData()
    },
    $_getListData() {
      this.$store
        .dispatch(this.$_action, this.$data[this.$_params])
        .then(res => {
          this.$_setListData(res)
          this.$_resetLoadingState()
        })
        .catch(error => {
          this.$_resetLoadingState()          
          this.handleListError(error)
        })
    },
    loadmore() {
      this.loadingState = 'loadmore'
      this.$_getListData()
    },
    handleListError() {
    }

  },

  // 上拉加载
  onReachBottom() {
    if(!this.$_pullUpLoadmore) return
    this.loadmore()
  },
  // 下拉刷新
  onPullDownRefresh() {
    if(!this.$_pullDownRefresh) {
      wx.stopPullDownRefresh()
      return
    }
    this.loadingState = 'refresh'
    this.$_getListData()
  }

}