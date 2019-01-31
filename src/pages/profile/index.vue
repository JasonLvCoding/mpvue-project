<template>
  <div class="profile">
    <header class="header">
      <profile-head :avatar="userInfo.avatar" :name="userInfo.name" :phone="userInfo.phone"></profile-head>
    </header>
    <section class="content-wrap">
      <link-field
        v-for="item in formList"
        :icon="item.icon"
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
        avatar: '',
        phone: '',
        name: ''
      },
      formList: [{
        icon: "/static/images/read.png",
        url: '/pages/samples/buttons/main',
        title: '按钮',
        content: '示例页面',
      },{
        icon: "/static/images/read.png",
        url: '/pages/samples/uploader/main',
        title: '上传',
        content: '示例页面',
      },{
        icon: "/static/images/read.png",
        url: '/pages/samples/picker/main',
        title: '皮克儿',
        content: '示例页面',
      }]
    }
  },

  mounted() {
  },

  methods: {
  }
}
</script>
<style>
.profile {
  margin: 0;
  background-color: #eee;
}

.profile .content-wrap {
  margin-top: 20rpx;
  background-color: #fff;
}

</style>