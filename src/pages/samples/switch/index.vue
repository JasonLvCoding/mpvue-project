<template>
  <div class="switch-wrap">启用/禁用 开关
    <mg-switch v-model="disabled"></mg-switch>朴素开关
    <mp-switch v-model="switchValue" @change="switchChange" :disabled="disabled"></mp-switch>复选框子哟
    <mp-checkbox :list="checkboxAnimalsList" v-model="valueAnimals" @change="checkboxChange"></mp-checkbox>
  </div>
</template>

<script>
import mpSwitch from 'mpvue-weui/src/switch'
import mpCheckbox from 'mpvue-weui/src/checkbox'

export default {
  components: {
    mpCheckbox,
    mpSwitch,
    mgSwitch: mpSwitch
  },

  data() {
    return {
      disabled: false,
      switchValue: true,
      checkboxAnimalsList: [
        { value: 'cat' },
        { value: 'dog' },
        { value: 'rabbit', disabled: true }
      ],
      valueAnimals: ['dog']
    }
  },

  methods: {
    switchChange(value) {
      console.log('switchChange', value)
    },
    checkboxChange(value) {
      console.log('checkboxChange', value)
    }
  }
}
</script>

<style scoped>
.switch-wrap {
  padding: 10rpx;
}
</style>