export default {
  
  data() {
    return {
      listState: null,
      $_dataContainer: 'listData',
      $_action: '',
      $_params: {},
    }
  },
  
  methods: {
    initListData(option) {
      if(option.action) return console.log('no action to get list data')
      this.$_action = option.action
      this.$_params = option.searchParams || null
    },
    $_resetListData(res) {
      if(this.listState != 'loadmore') {
        this.$data[this.$_dataContainer] = res
      }else {
        let data = this.$data[this.$_dataContainer] && this.$data[this.$_dataContainer].content || []
        this.$data[this.$_dataContainer].content = data.concat(res.content)
      }
      this.listState = null
      this.$data[this.$_dataContainer].page = res.page || 0
      this.$data[this.$_dataContainer].totalPages = res.totalPages || 0
      wx.hideNavigationBarLoading()
      wx.stopPullDownRefresh()
    },
    search() {
      this.listState = 'search'
      this.$_getListData(this.$_params)
    },
    $_getListData() {
      this.$store
        .dispatch(this.$_action, this.$_params)
        .then(res => {
          this.$_resetListData(res)
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
    this.listState = 'loadmore'
    this.$_getListData()
  },
  // 下拉刷新
  onPullDownRefresh() {
    this.listState = 'refresh'
    wx.showNavigationBarLoading()
    this.$_getListData()
  }

}