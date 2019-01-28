<template>
  <div class="index-wrap">

    <my-refresh :loading="refresh" text="刷新中..."></my-refresh>
    <div class="searchbar-wrap">
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
        <container-list :list="containerList" v-if="tab.activeIndex == 0"></container-list>
        <shop-list :list="shopList" v-else></shop-list>
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
    this.getList()
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
      containerList: [],
      shopList: []
    }
  },

  methods: {
    getList() {
      this.$store.dispatch('GetBlogs')
        .then(res => {
          this.loading = false
          this.refresh = false
          this.containerList = res.content
          this.shopList = res.content
        })
        .catch(error => {
          this.loading = false
          this.refresh =  false
        })
    },
    tabClick(index) {
      this.tab.activeIndex = index
    }
  },
  // 上拉加载
  onReachBottom: function() {
    this.getList()    
    this.refresh = false
    this.loading = true
  },
  // 下拉刷新
  onPullDownRefresh() {
    this.loading = false
    this.refresh = true
    wx.stopPullDownRefresh()
    this.getList()
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
  padding: 20rpx;
}

.index-wrap .list-item {
  border-bottom: 1rpx solid #e6e6e6;
}

.index-wrap .weui-media-box__title {
  font-size: 30rpx;
}
</style>