<template>
  <div class="uploader-wrap">
    <mp-uploader
      @upLoadSuccess="upLoadSuccess"
      @upLoadFail="upLoadFail"
      @uploadDelete="uploadDelete"
      @complete="uploadComplete"
      :showTip="true"
      :maxLength="5"
      :count="1">
      </mp-uploader>
  </div>
</template>

<script>
import mpUploader from 'mpvue-weui/src/uploader';
export default {

  components: {
    mpUploader
  },

  methods: {
    upLoadSuccess(res) {
      console.log('upLoadSuccess', res)
    },
    upLoadFail(error) {
      console.log('upLoadFail', error)
    },
    uploadDelete(data) {
      console.log('uploadDelete', data)
    },
    uploadComplete(res) {
      console.log('uploadComplete', res)
    }
  }

}
</script>

<style scoped>
  .uploader-wrap {
    padding: 1rem;
  }
</style>