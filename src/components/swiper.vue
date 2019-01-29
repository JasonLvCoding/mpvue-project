<template>
  <div class="swiper-container">
    <div class="page__bd page__bd_spacing">
      <swiper :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration" :circular="circular">
        <div v-for="item in imgUrls" :key="item">
          <swiper-item>
            <image :src="item" class="slide-image" />
          </swiper-item>
        </div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgUrls: {
      type: Array,
      default: () => []
    },
    indicatorDots: {
      type: Boolean,
      default: false
    },
    autoplay: {
      type: Boolean,
      default: false
    },
    interval: {
      type: Number,
      default: 500
    },
    duration: {
      type: Number,
      default: 900
    },
    circular: {
      type: Boolean,
      default: true
    },
  },
  data() {
    return {}
  }
}
</script>

<style>
.slide-image {
  width: 100%;
  height: 100%;
}
</style>