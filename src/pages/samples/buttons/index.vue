<template>
  <div class="container">

    <div class="button-wrap">

      <mp-button
        open-type="getUserInfo"
        @getuserinfo="getUserInfo"
        :loading="loading"
        :plain="true"
        type="primary"
        size="small"
        buttonClass="mb15"
      >getUserInfo
      </mp-button>
    </div>

    <div class="button-wrap">
      <mp-button
        open-type="contact"
        @contact="handleContact"
        :loading="loading"
        :plain="true"
        type="primary"
        size="small"
        buttonClass="mb15"
      >客服会话
      </mp-button>
    </div>

    <div class="button-wrap">
      <mp-button
        open-type="getPhoneNumber"
        @getPhoneNumber="getPhoneNumber"
        :loading="loading"
        :plain="true"
        type="primary"
        size="small"
        buttonClass="mb15"
      > getPhoneNumber
      </mp-button>
    </div>


    <div class="button-wrap">
      <mp-button
        @click="customMethod"
        :loading="loading"
        :plain="true"
        type="primary"
        size="small"
        buttonClass="mb15"
      > customMethod
      </mp-button>
    </div>

  </div>
</template>

<script>
import mpButton from 'mpvue-weui/src/button'

export default {
  data() {
    return {
      userInfo: {},
      canIUse: wx.canIUse('button.open-type.getUserInfo')
    }
  },

  created() {
    console.log('userInfo', this.canIUse)
  },

  components: {
    mpButton
  },

  methods: {
    getUserInfo() {
      wx.getUserInfo({
        success: res => {
          this.userInfo = res.userInfo
          console.log(this.userInfo)
        }
      })
    },

    handleContact(e) {
      console.log(e)
    },

    getPhoneNumber(data) {
      alert(data)
    },

    customMethod() {
      console.log('custom method')
    }

  }
}
</script>

<style scoped>
  .button-wrap {
    padding: 10rpx;
  }
</style>