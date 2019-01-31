<template>
  <div class="profile-wrap">
    <header class="header"></header>
    <section class="content-wrap">
      <link-field
        v-for="item in formList"
        :key="item.url"
        :url="item.url"
        :title="item.title"
        :content="item.content"
      ></link-field>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import myLoadmore from '@/components/loadmore'
import linkField from '@/components/linkField'

export default {
  computed: {
    ...mapGetters(['imgUrls'])
  },

  components: {
    myLoadmore,
    linkField
  },

  data() {
    return {
      formList: [{
        icon: "/static/images/read.png",
        url: '/pages/shopList/main',
        title: '我的东西',
        content: '这可是我的东西',
      }]
    }
  },

  mounted() {
  },

  methods: {}
}
</script>
<style>
.profile-wrap {
  margin: 0 15rpx;
  background-color: #fff;
}
</style>