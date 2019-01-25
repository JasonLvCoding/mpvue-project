<template>
  <div class="container">
    <a href="/pages/logs/main">Go Logs</a>
    <a href="/pages/samples/buttons/main">Go Buttons</a>
    <a href="/pages/samples/slider/main">Go Slider</a>
    <a href="/pages/samples/uploader/main">Go Uploader</a>
    <a href="/pages/samples/switch/main">Go Switch</a>
    <a href="/pages/samples/grid/main">Go Grid</a>
    <a href="/pages/samples/picker/main">Go Picker</a>
    <a href="/pages/samples/navbar/main">Go Navbar</a>
    <a href="/pages/samples/flex/main">Go Layout</a>
    <a href="/pages/samples/panel/main">Go Panel</a>
    <a href="/pages/samples/swiper/main">Go Swiper</a>

  </div>
</template>

<script>
import mpButton from 'mpvue-weui/src/button'

export default {
  data() {
    return {
      deviceInfo: {},
      userInfo: {},
      canIUse: wx.canIUse('button.open-type.getUserInfo')
    }
  },

  created() {
    this.$store.dispatch('Login',{
      name: 'Jason',
      password: 'Song1314!'
    }).then(res => {})
      .catch(err => {})
  },

  components: {
    mpButton
  },

  methods: {
    bindGetUserInfo(userInfo) {
      wx.getUserInfo({
        success: res => {
          this.userInfo = res.userInfo
          console.log(this.userInfo)
        }
      })
    }
  }
}
</script>
