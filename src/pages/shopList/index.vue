<template>
  <div class="shop-list-wrap">
    <div class="searchbar-wrap">
      <mp-searchbar
        @blur="searchbar.isFocus = false"
        @isFocus="searchbar.isFocus"
        :confirmType="searchbar.confirmType"
        v-model="searchbar.inputValue"
        :placeholder="searchbar.placeholder"
        @confirm="searchListData"
      ></mp-searchbar>
    </div>
    <div class="content-wrap">
      <shop-list :list="listData.content"></shop-list>
      <my-loadmore :loading="loadingState == 'loadmore'" @loadmore="loadmore" :showLoadBtn="true"></my-loadmore>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import mpSearchbar from 'mpvue-weui/src/searchbar'
import myList from '@/components/list'
import myLoading from '@/components/loadmore'

import listPage from '@/mixins/listPage'

export default {

  computed: {
    ...mapGetters(['imgUrls'])
  },

  mixins: [listPage],

  components: {
    mpSearchbar,
    myLoadmore: myLoading,
    shopList: myList
  },

  data() {
    return {
      loadingState: null,
      searchbar: {
        isFocus: false,
        inputValue: '',
        confirmType: 'search', //search send next go done
        placeholder: '你想要什么'
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
      searchParams: 'searchbar',
      pullDownRefresh: true,
      pullUpLoadmore: true
    })
    this.searchListData()
  },

  methods: {
  },
}
</script>
<style>
.shop-list-wrap .searchbar-wrap .weui-search-bar {
  border: none;
  background: #fff;
}

.shop-list-wrap .swiper-wrap {
  padding: 0 20rpx;
}

.shop-list-wrap .grid-wrap {
  padding: 20rpx;
}

.shop-list-wrap .grid-wrap .weui-grids {
  border: none;
}

.shop-list-wrap .grid-wrap .weui-grid {
  width: 25%;
  padding: 20rpx;
  border: none;
}

.shop-list-wrap .content-wrap .tabs-wrap .weui-navbar__item {
  padding: 15rpx 0;
}

.shop-list-wrap .weui-media-box {
  padding: 15rpx;
}

.shop-list-wrap .weui-panel {
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

.shop-list-wrap .weui-media-box__title {
  font-size: 28rpx;
}
</style>