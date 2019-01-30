<template>
  <div class="grid-content">
    <mp-grid :gridData="gridData"></mp-grid>

    <div class="rate-star">
      <label>{{rateScoreText}}</label>
      <mp-rate rateRange=10 :rateValue="rateValue" @rateClick="rateClick" :isSupportClick=true></mp-rate>
    </div>

    <div class="loading-wrap">
      <mp-loading :showLoading="isShowLoading" loadingText="分高了..." :mask="false"></mp-loading>
    </div>

    <div class="toast-wrap">
      <mp-toast :type="toast.toastType" v-model="toast.showToast" :content="toast.content" :duration="toast.duration"></mp-toast>
    </div>

  </div>
</template>

<script>
import mpLoading from 'mpvue-weui/src/loading';
import mpToast from 'mpvue-weui/src/toast';
import mpGrid from 'mpvue-weui/src/grid';
import mpRate from 'mpvue-weui/src/rate';
export default {

  components: {
    mpGrid,
    mpRate,
    mpLoading,
    mpToast
  },

  data() {
    return {
      toast: {
        content: ['评分成功', '哇哩哇哩古德'],
        duration: 2000,
        showToast: false,
        toastType: 'success' //success,warn,error
      },
      gridData: [
        { src: '/static/images/setting.png', name: 'Button', url: '/pages/index/main' },
        { src: '/static/images/setting.png', name: 'Cell', url: '/pages/index/main' },
        { src: '/static/images/setting.png', name: 'Button', url: '/pages/index/main' },
        { src: '/static/images/setting.png', name: 'Cell', url: '/pages/index/main' },
        { src: '/static/images/setting.png', name: 'Button', url: '/pages/index/main' },
        { src: '/static/images/setting.png', name: 'Cell', url: '/pages/index/main' },
        { src: '/static/images/setting.png', name: 'Button', url: '/pages/index/main' },
        { src: '/static/images/setting.png', name: 'Cell', url: '/pages/index/main' },
        { src: '/static/images/setting.png', name: 'Button', url: '/pages/index/main' }
      ],
      rateValue: 4.5,
      rateScoreText: '给个评价',
      rateScoreDesc: ['非常不满意，各方面都很差', '不满意，比较差', '一般，还需改善', '一般', '一般', '一般', '一般', '一般', '一般', '比较满意，仍可改善', '非常满意,无可挑剔']
    };
  },

  computed: {
    isShowLoading() {
      return this.rateValue >= 8;
    }
  },

  methods: {
    rateClick(index) {
      this.rateScoreText = this.rateScoreDesc[index];
      this.rateValue = index + 1;
      this.toast.showToast = true;
    }
  }
  
}
</script>

<style scoped>
  
</style>