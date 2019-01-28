<template>
  <div class="page">
    <div class="weui-loadmore" v-show="loading">
      <div class="weui-loading"></div>
      <div class="weui-loadmore__tips">{{text}}</div>
    </div>
    <div class="weui-loadmore weui-loadmore_line" v-show="empty">
      <div class="weui-loadmore__tips weui-loadmore__tips_in-line">暂无数据</div>
    </div>
  </div>
</template>

<script>
export default {
  
  config: {
    enablePullDownRefresh: true
  },

  props: {
    loading: {
      type: Boolean,
      default: false
    },
    empty: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: '正在加载'
    }
  },
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>
<style>
.weui-loadmore {
  width:65%;
  margin:0.5em auto;
  line-height:1.6em;
  font-size:28rpx;
  text-align:center;
}
</style>
