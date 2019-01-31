<template>
  <div class="profile-wrap">
    <header class="header">
      <profile-head :avatar="userInfo.avatar" :name="userInfo.name" :phone="userInfo.phone"></profile-head>
    </header>
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
import profileHead from './profileHead'

export default {
  computed: {
    ...mapGetters(['imgUrls'])
  },

  components: {
    profileHead,
    myLoadmore,
    linkField
  },

  data() {
    return {
      userInfo: {
        avatar: '/static/images/water.png',
        phone: '17736207172',
        name: 'Jason Zhang'
      },
      formList: [{
        icon: "/static/images/read.png",
        url: '/pages/samples/uploader/main',
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