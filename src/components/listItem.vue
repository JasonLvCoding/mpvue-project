<template>
  <div class="list-item">
    <div class="weui-media-box weui-media-box_appmsg" hover-class="weui-cell_active">
      <div class="weui-media-box__hd weui-media-box__hd_in-appmsg">
        <image class="weui-media-box__thumb" :src="imgUrl" />
      </div>
      <div class="weui-media-box__bd weui-media-box__bd_in-appmsg">
        <div class="weui-media-box__title">
          {{title}}
          <span class="weui-media-box__subtitle">{{subtitle}}</span>
        </div>
        <div class="weui-media-box__desc">{{description}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgUrl: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    redirectTo: {
      type: String,
      default: '/pages/index/main'
    }
  },
  data() {
    return {}
  },
  mounted() {
    console.log(this.imgUrl)
  }
}
</script>
<style>
  .weui-media-box__subtitle {
    color:#999;
    font-size:25rpx;
    line-height:1.5;
    overflow:hidden;
    text-overflow:ellipsis;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
  }
  .weui-media-box__hd_in-appmsg {
    margin-right:0.8em;
    width:135rpx;
    height:135rpx;
    line-height:120rpx;
    text-align:center;
  }

  .weui-media-box__desc {
    color:#999;
    font-size:26rpx;
    line-height:1.7;
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
  }


</style>