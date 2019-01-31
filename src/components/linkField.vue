<template>
  <navigator :url="url" :open-type="type" class="weui-cell link-field">
    <div class="weui-cell__hd" v-if="icon">
      <image :src="icon" style="margin-right: 5px;vertical-align: middle;width:20px; height: 20px;" />
    </div>
    <div class="weui-cell__bd" v-if="title">{{title}}</div>
    <div class="weui-cell__ft" v-if="content">{{content}}</div>
    <div class="weui-cell__ft weui-cell__ft_in-access" v-if="withArrow"></div>
  </navigator>
</template>

<script>
export default {
  
  name: 'linkField',

  props: {
    icon: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    withArrow: {
      type: Boolean,
      default: true
    },
    isTabbar: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    type() {
      return this.isTabbar ? 'switchTab' : 'navigate'
    }
  }

}
</script>

<style>
  
.link-field.weui-cell.link-field.weui-cell_access.link-field.weui-cell_link .head {
  font-size: 30rpx;
  line-height: 1;
  color: #282828;
}

.link-field.weui-cell.link-field.weui-cell_access.link-field.weui-cell_link .link-field.weui-cell__bd {
  text-align: right;
}

.link-field .weui-media-box__title {
  font-size: 28rpx;
}
</style>