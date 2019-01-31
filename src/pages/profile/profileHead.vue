<template>
  <div class="weui-panel weui-panel_access">
    <div class="weui-panel__bd">
      <div class="weui-media-box weui-media-box_appmsg">
        <div class="weui-media-box__hd weui-media-box__hd_in-appmsg">
          <image class="weui-media-box__thumb" :src="avatar" />
        </div>
        <div class="weui-media-box__bd weui-media-box__bd_in-appmsg">
          <div class="weui-media-box__title">{{name}}</div>
          <div class="weui-media-box__desc">{{phone}}</div>
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