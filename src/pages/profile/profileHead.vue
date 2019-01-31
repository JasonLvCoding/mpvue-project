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
            <open-data type="userGender" lang="zh_CN"></open-data>
            <open-data type="userNickName"></open-data>
          </div>
          <div class="weui-media-box__desc">
            <open-data type="userNickName"></open-data>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileHeader',
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
  }
}
</script>

<style>
.weui-media-box__thumb {
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  margin-top: 50rpx;
}
.weui-media-box__thumb .avatar-box {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: -50rpx -30rpx;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 30rpx solid #fff;
}
</style>