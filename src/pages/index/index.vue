<template>
  <div class="index-wrap">
    <div class="swiper-wrap">
      <my-swiper :imgUrls="imgUrls"></my-swiper>
      <div class="shadow"></div>
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
          <link-field url="/pages/shopList/main" title="大拿推荐" content="查看全部" :isTabbar="true"></link-field>
        </div>
        <container-list :list="listData.content" v-if="tab.activeIndex == 0"></container-list>
        <shop-list :list="listData.content" v-else></shop-list>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import mpSearchbar from 'mpvue-weui/src/searchbar'
import linkField from '@/components/linkField'
import mpNavbar from 'mpvue-weui/src/navbar'
import mpGrid from 'mpvue-weui/src/grid'
import mySwiper from '@/components/swiper'
import myList from '@/components/list'
import listPage from '@/mixins/listPage'
import { errorToast } from '@/utils/kit'
export default {
  mixins: [listPage],
  components: {
    mpSearchbar,
    mySwiper,
    mpNavbar,
    mpGrid,
    linkField,
    containerList: myList,
    shopList: myList
  },
  computed: {
    ...mapGetters(['gridData', 'imgUrls'])
  },
  data() {
    return {
      listState: null,
      jsCode: '',
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
    this.wxLogin()
  },
  methods: {
    wxLogin() {
      this.$store
        .dispatch('WxLogin')
        .then(res => {
          this.jsCode = res.code
          this.getAppInfo()
        })
        .catch(err => {
          errorToast(err)
        })
    },
    getAppInfo() {
      this.$store.dispatch('GetAppInfo')
      .then(res => {
        res.js_code = this.jsCode
        this.getOpenId(res)
      })
      .catch(err => {
        errorToast(err)
      })
    },
    getOpenId(param) {
      this.$store.dispatch('GetOpenId', param)
      .then(res => {})
      .catch(err => {
        errorToast(err)
      })
    },
    tabClick(index) {
      this.listData = {
        page: 0,
        totalPages: 10,
        content: []
      }
      this.tab.activeIndex = index
      this.searchListData()
    }
  }
}
</script>

<style>
.index-wrap {
  background-color: #eee;
}
.index-wrap .searchbar-wrap .weui-search-bar {
  border: none;
  background: #fff;
}
.index-wrap .swiper-wrap {
  position: relative;
  padding: 0;
}
.index-wrap .swiper-wrap .shadow {
  position: absolute;
  width: 100%;
  height: 100%;
  box-shadow: -10rpx -100rpx 60rpx -90rpx rgba(255, 255, 244, 0.6) inset;
  top: 0;
  left: 0;
}
.index-wrap .grid-wrap {
  margin: 0 20rpx 20rpx 20rpx;
  background-color: #fff;
  border-radius: 0 0 10rpx 10rpx;
}
.index-wrap .weui-grid_active {
  background-color: #fff;
}
.index-wrap .grid-wrap .weui-grids {
  border: none;
}
.index-wrap .grid-wrap .weui-grid {
  width: 25%;
  padding: 20rpx;
  border: none;
  border-right: 1rpx solid #e8e8e8;
}
.index-wrap .content-wrap {
  margin: 0 20rpx;
  background-color: #fff;
  padding-bottom: 20rpx;
}
.index-wrap .content-wrap .tabs-wrap {
  border-radius: 5rpx 5rpx 0 0;
}
.index-wrap .content-wrap .tabs-wrap .weui-navbar__item {
  padding: 20rpx 0;
}
</style>