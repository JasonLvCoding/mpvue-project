<template>
  <div class="weui-panel weui-panel_access">
    <div class="weui-panel__bd">
      <div class="weui-media-box weui-media-box_appmsg">
        <div class="weui-media-box__hd weui-media-box__hd_in-appmsg weui-media-box__thumb">
          <div class="avatar-box"></div>
          <open-data type="userAvatarUrl"></open-data>
        </div>
        <div class="weui-media-box__bd weui-media-box__bd_in-appmsg">
          <div class="weui-media-box__title">
            <open-data type="userGender" lang="zh_CN"></open-data>&nbsp;
            <open-data type="userNickName"></open-data>
          </div>
          <div class="weui-media-box__desc">
            手机号：{{phone || wxPhone}}
            <mp-button v-if="!phone && !wxPhone" open-type="getPhoneNumber" @getPhoneNumber="getPhoneNumber" :plain="true" type="primary" size="small" buttonClass="mb15">绑定手机</mp-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import mpButton from 'mpvue-weui/src/button'
  export default {
    name: 'ProfileHeader',
    components: {
      mpButton
    },
    props: {
      avatar: {
        type: String,
        default: ''
      },
      name: {
        type: String,
        default: ''
      },
      phone: {
        type: String,
        default: ''
      }
    },

    mounted() {
    },

    data() {
      return {
        wxPhone: ''
      }
    },
    methods: {
      getPhoneNumber(e) {
        console.log(e.detail.errMsg)
        console.log(e.detail.iv)
        console.log(e.detail.encryptedData)
      }
    },
  }
</script>

<style>
  .weui-media-box__thumb {
    position: relative;
  }
  .weui-media-box__thumb .avatar-box {
    position: absolute;
    top: -42%;
    left: -42%;
    right: -42%;
    bottom: -42%;
    margin: auto;
    width: 142%;
    height: 142%;
    border-radius: 50%;
    border: 0.75em solid #fff;
    background-color: transparent;
    box-sizing: border-box;
  }
</style>