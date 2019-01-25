<template>
  <div class="page-wrap">
    <div class="searchbar-wrap">
      <mp-searchbar
        :isFocus="false"
        :confirmType="searchbar.confirmType"
        v-model="searchbar.inputValue"
        :placeholder="searchbar.placeholder"
        @confirm="confirm"
      ></mp-searchbar>
    </div>

    <div class="swiper-wrap">
      <my-swiper :imgUrls="imgUrls"></my-swiper>
    </div>

    <div class="content-wrap">
      
    </div>
  </div>
</template>

<script>
import mpSearchbar from 'mpvue-weui/src/searchbar'
import mySwiper from '@/components/swiper/index'
export default {
  components: {
    mySwiper,
    mpSearchbar
  },

  data() {
    return {
      imgUrls:[
        '/static/images/swiper_01.jpg',
        '/static/images/swiper_02.jpg',
        '/static/images/swiper_03.jpg',
        '/static/images/swiper_04.jpg',
        '/static/images/swiper_05.jpg'
      ],
      searchbar: {
        inputValue: '',
        confirmType: 'go', //search send next go done
        placeholder: 'search'
      }
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
