<template>
  <div class="index-wrap">
    <div class="searchbar-wrap" v-if="!refresh">
      <mp-searchbar
        @blur="searchbar.isFocus = false"
        @isFocus="searchbar.isFocus"
        :confirmType="searchbar.confirmType"
        v-model="searchbar.inputValue"
        :placeholder="searchbar.placeholder"
        @confirm="search"
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
        <div class="weui-panel__ft">
          <div class="weui-cell weui-cell_access weui-cell_link">
            <div class="head">大拿推荐</div>
            <div class="weui-cell__bd">查看更多</div>
            <div class="weui-cell__ft weui-cell__ft_in-access"></div>
          </div>
        </div>
        <container-list :list="testData" v-if="tab.activeIndex == 0"></container-list>
        <shop-list :list="testData" v-else></shop-list>
      </div>
      <my-loadmore :loading="listState == 'loading'"></my-loadmore>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import mpSearchbar from 'mpvue-weui/src/searchbar'
import mpNavbar from 'mpvue-weui/src/navbar'
import mpGrid from 'mpvue-weui/src/grid'
import mySwiper from '@/components/swiper'
import myList from '@/components/list'
import myLoading from '@/components/loading'

import listPage from '@/mixins/listPage'

export default {

  mixins: [listPage],

  components: {
    mpSearchbar,
    mySwiper,
    mpNavbar,
    mpGrid,
    myLoadmore: myLoading,
    containerList: myList,
    shopList: myList
  },

  computed: {
    ...mapGetters(['gridData', 'imgUrls', 'testData'])
  },

  data() {
    return {
      listState: null,
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
      listData: {
        page: 0,
        totalPages: 10,
        content: []
      }
    }
  },
  
  mounted() {
    this.initListPage({
      action: 'GetBlogs',
      dataContainer: 'listData',
      searchParams: 'searchbar'
    })
    this.searchListData()
  },

  methods: {
    tabClick(index) {
      this.listData = {
        page: 0,
        totalPages: 10,
        content: []
      }
      this.tab.activeIndex = index
      this.searchListData()
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

.index-wrap .weui-media-box {
  padding: 15rpx;
}

.index-wrap .weui-panel {
  margin: 0;
}

.weui-cell.weui-cell_access.weui-cell_link .head {
  font-size: 30rpx;
  line-height: 1;
  color: #282828;
}

.weui-cell.weui-cell_access.weui-cell_link .weui-cell__bd {
  text-align: right;
}

.index-wrap .weui-media-box__title {
  font-size: 28rpx;
}
</style>