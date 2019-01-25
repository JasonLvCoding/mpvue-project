<template>
  <div class="index-wrap">
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
        <mp-navbar
          :tabs="tab.tabs"
          :activeIndex="tab.activeIndex"
          @tabClick="tabClick">
        </mp-navbar>
      </div>
      <div class="list-wrap">

      </div>
    </div>
  </div>
</template>

<script>
import mpSearchbar from 'mpvue-weui/src/searchbar'
import mpNavbar from 'mpvue-weui/src/navbar';
import mySwiper from '@/components/swiper/index'
import mpGrid from 'mpvue-weui/src/grid';
export default {
  components: {
    mpSearchbar,
    mySwiper,
    mpNavbar,
    mpGrid,
  },

  data() {
    return {
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
        tabs: ['智能柜', '门店'],
      },
      gridData: [
        { src: '/static/images/empty.png', name: '上门取衣', url: '/pages/index/main' },
        { src: '/static/images/restart.png', name: '智能洗衣', url: '/pages/index/main' },
        { src: '/static/images/reduction.png', name: '我要领券', url: '/pages/index/main' },
        { src: '/static/images/recovery.png', name: '购卡充值', url: '/pages/index/main' },
      ],

    }
  },

  methods: {
    tabClick(index) {
      console.log(index)
    }
  },

  // 这个字段走 app.json
  config: {
    pages: [], // Will be filled in webpack
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'weui for mpvue',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: '#999999',
      selectedColor: '#1AAD16',
      backgroundColor: '#ffffff',
      borderStyle: 'white',
      list: [
        {
          pagePath: 'pages/tabbar/tabbar',
          text: '微信',
          iconPath: 'static/images/icon_nav_button.png',
          selectedIconPath: 'static/images/icon_nav_button.png'
        },
        {
          pagePath: 'pages/tabbar/tabbar',
          text: '通讯录',
          iconPath: 'static/images/icon_nav_cell.png',
          selectedIconPath: 'static/images/icon_nav_cell.png'
        },
        {
          pagePath: 'pages/tabbar/tabbar',
          text: '发现',
          iconPath: 'static/images/icon_nav_cell.png',
          selectedIconPath: 'static/images/icon_nav_cell.png'
        },
        {
          pagePath: 'pages/tabbar/tabbar',
          text: '我',
          iconPath: 'static/images/icon_nav_toast.png',
          selectedIconPath: 'static/images/icon_nav_toast.png'
        }
      ]
    }
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
</style>