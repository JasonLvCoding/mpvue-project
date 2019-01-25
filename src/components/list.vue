<template>
  <div class="weui-panel weui-panel_access">
    <div class="weui-panel__bd">
      <list-item v-for="item in list" :key="item" :imgUrl="item.imgUrl" :title="item.title" :description="item.description" :subtitle="item.subtitle"></list-item>
    </div>
  </div>
</template>

<script>
import listItem from '@/components/listItem'
export default {
  components: {
    listItem
  },
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {}
  }
}
</script>