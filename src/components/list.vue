<template>
  <div class="weui-panel weui-panel_access">
    <div class="weui-panel__bd">
      <list-item
        v-for="item in list"
        :key="item"
        :imgUrl="item[urlFieldName]"
        :title="item[titleFieldName]"
        :description="item[descFieldName]"
        :subtitle="item[subtitleFieldName]"
      ></list-item>
    </div>
    <div class="empty-content">
      <div class="weui-loadmore weui-loadmore_line" v-show="!list.length">
        <div class="weui-loadmore__tips weui-loadmore__tips_in-line">暂无内容</div>
      </div>
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
<style>
  .empty-content,
  .empty-content .weui-loadmore,
  .empty-content .weui-loadmore__tips_in-line {
    background-color: #fff;
  }
</style>