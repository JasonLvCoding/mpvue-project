<template>
  <div class="page">
    <div class="weui-loadmore loading" v-show="loading">
      <div class="weui-loading"></div>
      <div class="weui-loadmore__tips">{{text}}</div>
    </div>
    <div class="weui-loadmore weui-loadmore_line" v-show="showLoadBtn && !loading">
      <div class="weui-loadmore__tips weui-loadmore__tips_in-line" @click="loadmore">加载更多</div>
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
    showLoadBtn: {
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
    loadmore() {
      this.$emit('loadmore')
    }
  }
}
</script>
<style>
.weui-loadmore {
  width: 65%;
  margin: 1.5em auto;
  line-height: 1.6em;
  font-size: 28rpx;
  text-align: center;
  background-color: #eee;
}

.weui-loadmore__tips_in-line {
  background-color: #eee;
}

.weui-loadmore.loading{
  margin: 0.5em auto;
  padding-bottom: 1em;
}
</style>
