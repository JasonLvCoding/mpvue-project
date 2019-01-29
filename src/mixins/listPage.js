export default {
  
  data() {
    return {
      $_loadingState: null,
      $_dataContainer: 'listData',
      $_action: '',
      $_params: {},
      $_enablePullDownRefresh: false,
      $_pullUpLoadmore: false
    }
  },
  
  methods: {
    initListPage(option) {
      if(!option.action) return console.error('no action to get list data')
      this.$_action = option.action
      this.$_dataContainer = option.dataContainer
      this.$_params = this.$data[option.searchParams] || null
      this.$_pullDownRefresh = !!this.$data[option.pullDownRefresh]
      this.$_pullUpLoadmore = !!this.$data[option.pullUpLoadmore]
    },
    $_setListData(res) {
      if(this.$_loadingState != 'loadmore') {
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
      this.$_loadingState = null
      wx.hideNavigationBarLoading()
      wx.stopPullDownRefresh()
    },
    searchListData() {
      this.$_loadingState = 'search'
      this.$_getListData()
    },
    $_getListData() {
      this.$store
        .dispatch(this.$_action, this.$_params)
        .then(res => {
          this.$_setListData(res)
        })
        .catch(error => {
          this.handleListError(error)
        })
    },
    handleListError() {
    }

  },

  // 上拉加载
  onReachBottom: function() {
    if(!this.$_pullUploadmore) return
    this.$_loadingState = 'loadmore'
    this.$_getListData()
  },
  // 下拉刷新
  onPullDownRefresh() {
    if(!this.$_pullDownRefresh) {
      wx.hideNavigationBarLoading()
      wx.stopPullDownRefresh()
      return
    }
    this.$_loadingState = 'refresh'
    wx.showNavigationBarLoading()
    this.$_getListData()
  }

}