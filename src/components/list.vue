<template>
  <div class="weui-panel weui-panel_access">
    <div class="weui-panel__bd">
      <list-item v-for="item in list" :key="item" :imgUrl="item[urlFieldName]" :title="item[titleFieldName]" :description="item[descFieldName]" :subtitle="item[subtitleFieldName]"></list-item>
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
    },
    urlFieldName: {
      type: String,
      default: () => 'imgUrl'
    },
    titleFieldName: {
      type: String,
      default: () => 'title'
    },
    subtitleFieldName: {
      type: String,
      default: () => 'subtitle'
    },
    descFieldName: {
      type: String,
      default: () => 'description'
    }
  },
  data() {
    return {}
  }
}
</script>