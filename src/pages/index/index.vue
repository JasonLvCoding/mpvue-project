<template>
  <div class="index-wrap">
    <my-refresh :loading="refresh" text="刷新中..."></my-refresh>
    <div class="searchbar-wrap" v-if="!refresh">
      <mp-searchbar
        @blur="searchbar.isFocus = false"
        @isFocus="searchbar.isFocus"
        :confirmType="searchbar.confirmType"
        v-model="searchbar.inputValue"
        :placeholder="searchbar.placeholder"
        @confirm="confirm"
      ></mp-searchbar>
    </div>
    <div class="swiper-wrap">
      <my-swiper :imgUrls="imgUrls"></my-swiper>
    </div>
    <div class="grid-wrap">
      <mp-grid :gridData="gridData"></mp-grid>
    </div>
    <div class="content-wrap">
      <div class="tabs-wrap">
        <mp-navbar :tabs="tab.tabs" :activeIndex="tab.activeIndex" @tabClick="tabClick"></mp-navbar>
      </div>
      <div class="list-wrap">
        <container-list :list="listData.content" v-if="tab.activeIndex == 0"></container-list>
        <shop-list :list="listData.content" v-else></shop-list>
      </div>
      <my-loadmore :loading="loading"></my-loadmore>
    </div>
  </div>
</template>

<script>
import mpSearchbar from 'mpvue-weui/src/searchbar'
import mpNavbar from 'mpvue-weui/src/navbar'
import mpGrid from 'mpvue-weui/src/grid'
import mySwiper from '@/components/swiper'
import myList from '@/components/list'
import myLoading from '@/components/loading'

export default {
  components: {
    mpSearchbar,
    mySwiper,
    mpNavbar,
    mpGrid,
    myLoadmore: myLoading,
    myRefresh: myLoading,
    containerList: myList,
    shopList: myList
  },

  computed: {
    empty() {
      return false
    }
  },

  mounted() {
    this.getBlogList()
  },

  data() {
    return {
      loading: false,
      refresh: false,
      imgUrls: [
        '/static/images/swiper_01.jpg',
        '/static/images/swiper_02.jpg',
        '/static/images/swiper_03.jpg',
        '/static/images/swiper_04.jpg',
        '/static/images/swiper_05.jpg'
      ],
      searchbar: {
        isFocus: false,
        inputValue: '',
        confirmType: 'search', //search send next go done
        placeholder: '搜索'
      },
      tab: {
        activeIndex: 0,
        tabs: ['Tab1', 'Tab2']
      },
      gridData: [
        {
          src: '/static/images/empty.png',
          name: '上门服务',
          url: '/pages/samples/panel/main'
        },
        {
          src: '/static/images/restart.png',
          name: '智能搞事',
          url: '/pages/index/main'
        },
        {
          src: '/static/images/reduction.png',
          name: '我要领券',
          url: '/pages/index/main'
        },
        {
          src: '/static/images/recovery.png',
          name: '购卡充值',
          url: '/pages/index/main'
        }
      ],
      listData: {
        page: 0,
        totalPages: 10,
        content: []
      }
    }
  },

  methods: {
    resetLoading() {
      this.loading = false
      this.refresh = false
    },
    resetListData(res) {
      if(this.loading) {
        this.listData.content = this.listData.content.concat(res.content)
      }else {
        this.listData.content = res.content
      }
      this.listData.page = res.page || 0
      this.listData.totalPages = res.totalPages || 0
    },
    getBlogList() {
      this.$store
        .dispatch('GetBlogs')
        .then(res => {
          this.resetListData(res)
          this.resetLoading()
        })
        .catch(error => {
          this.loading = false
          this.refresh = false
        })
    },
    tabClick(index) {
      this.listData = {
        page: 0,
        totalPages: 10,
        content: []
      }
      this.tab.activeIndex = index
      this.getBlogList()
    }
  },
  // 上拉加载
  onReachBottom: function() {
    this.getBlogList()
    this.refresh = false
    this.loading = true
    wx.stopPullDownRefresh()
  },
  // 下拉刷新
  onPullDownRefresh() {
    this.loading = false
    this.refresh = true
    wx.stopPullDownRefresh()
    this.getBlogList()
  }
}
</script>
<style>
.index-wrap .searchbar-wrap .weui-search-bar {
  border: none;
  background: #fff;
}

.index-wrap .swiper-wrap {
  padding: 0 20rpx;
}

.index-wrap .grid-wrap {
  padding: 20rpx;
}

.index-wrap .grid-wrap .weui-grids {
  border: none;
}

.index-wrap .grid-wrap .weui-grid {
  width: 25%;
  padding: 20rpx;
  border: none;
}

.index-wrap .content-wrap .tabs-wrap .weui-navbar__item {
  padding: 15rpx 0;
}

.index-wrap .weui-media-box {
  padding: 15rpx;
}

.index-wrap .list-item {
  border-bottom: 1rpx solid #e6e6e6;
}

.index-wrap .weui-media-box__title {
  font-size: 28rpx;
}
</style>