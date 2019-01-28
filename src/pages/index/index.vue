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
        <container-list :list="containerList" v-if="tab.activeIndex == 0"></container-list>
        <shop-list :list="shopList" v-else></shop-list>
      </div>
    </div>
  </div>
</template>

<script>
import mpSearchbar from 'mpvue-weui/src/searchbar'
import mpNavbar from 'mpvue-weui/src/navbar'
import mpGrid from 'mpvue-weui/src/grid'
import mySwiper from '@/components/swiper'
import myList from '@/components/list'

export default {
  components: {
    mpSearchbar,
    mySwiper,
    mpNavbar,
    mpGrid,
    containerList: myList,
    shopList: myList,
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
        tabs: ['Tab1', 'Tab2'],
      },
      gridData: [
        { src: '/static/images/empty.png', name: '上门服务', url: '/pages/samples/panel/main' },
        { src: '/static/images/restart.png', name: '智能搞事', url: '/pages/index/main' },
        { src: '/static/images/reduction.png', name: '我要领券', url: '/pages/index/main' },
        { src: '/static/images/recovery.png', name: '购卡充值', url: '/pages/index/main' },
      ],
      containerList:[
        {
          imgUrl: '/static/images/recovery.png',
          title: '①号佳丽',
          subtitle: '品牌名称',
          description: '一段描述一段描述一段描述一段描述一段描述'
        },
        {
          imgUrl: '/static/images/recovery.png',
          title: '②号佳丽',
          subtitle: '品牌名称',
          description: '一段描述一段描述一段描述一段描述一段描述'
        },
        {
          imgUrl: '/static/images/recovery.png',
          title: '③号佳丽',
          subtitle: '品牌名称',
          description: '一段描述一段描述一段描述一段描述一段描述'
        },
        {
          imgUrl: '/static/images/recovery.png',
          title: '④号佳丽',
          subtitle: '品牌名称',
          description: '一段描述一段描述一段描述一段描述一段描述'
        },
        {
          imgUrl: '/static/images/recovery.png',
          title: '⑤号佳丽',
          subtitle: '品牌名称',
          description: '一段描述一段描述一段描述一段描述一段描述'
        },
        {
          imgUrl: '/static/images/recovery.png',
          title: '⑥号佳丽',
          subtitle: '品牌名称',
          description: '一段描述一段描述一段描述一段描述一段描述'
        },
      ],
      shopList:[
        {
          imgUrl: '/static/images/recovery.png',
          title: '①号会所',
          subtitle: '品牌名称',
          description: '一段描述一段描述一段描述一段描述一段描述'
        },
        {
          imgUrl: '/static/images/recovery.png',
          title: '②号会所',
          subtitle: '品牌名称',
          description: '一段描述一段描述一段描述一段描述一段描述'
        },
        {
          imgUrl: '/static/images/recovery.png',
          title: '③号会所',
          subtitle: '品牌名称',
          description: '一段描述一段描述一段描述一段描述一段描述'
        },
        {
          imgUrl: '/static/images/recovery.png',
          title: '④号会所',
          subtitle: '品牌名称',
          description: '一段描述一段描述一段描述一段描述一段描述'
        },
        {
          imgUrl: '/static/images/recovery.png',
          title: '⑤号会所',
          subtitle: '品牌名称',
          description: '一段描述一段描述一段描述一段描述一段描述'
        },
        {
          imgUrl: '/static/images/recovery.png',
          title: '⑥号会所',
          subtitle: '品牌名称',
          description: '一段描述一段描述一段描述一段描述一段描述'
        },
      ]
    }
  },

  methods: {
    tabClick(index) {
      this.tab.activeIndex = index;
    }
  },

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