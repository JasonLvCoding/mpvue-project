<template>
  <div class="page">
    <div class="weui-loadmore" v-show="loading">
      <div class="weui-loading"></div>
      <div class="weui-loadmore__tips">{{text}}</div>
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