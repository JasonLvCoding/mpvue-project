<template>

<!-- 设置 Slider 相关属性 -->
<mp-slider 
  min="0" 
  max="100"
  step="1"
  showValue
  blockSize="20"
  @change="handleSliderChange"
  @changing="handleSliderChanging"
  backgroundColor="#000000">
  </mp-slider>

</template>

<script>
import mpSlider from 'mpvue-weui/src/slider';

export default {
  components: {
    mpSlider,
  },
  methods: {
    handleSliderChange(event) {
      console.log(event.mp.detail)
    },
    handleSliderChanging(event) {
      console.log(event.mp.detail)
    }
  },
}

</script>