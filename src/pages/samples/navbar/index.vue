<template>
  <div class="navbar">

    <mp-navbar
      :tabs="tabs"
      :activeIndex="activeIndex"
      @tabClick="tabClick">
    </mp-navbar>

    <mp-searchbar
      :isFocus="true"
      :confirmType="confirmType"
      v-model="inputValue"
      :placeholder="placeholder"
      @input="input"
      @blur="blur"
      @focus="focus"
      @confirm="confirm">
    </mp-searchbar>

  </div>
</template>

<script>
import mpNavbar from 'mpvue-weui/src/navbar';
import mpSearchbar from 'mpvue-weui/src/searchbar';
export default {
  components: {
    mpNavbar,
    mpSearchbar
  },
  data() {
    return {
      activeIndex: 0,
      tabs: ['选项1', '选项2', '选项3'],

      inputValue: '',
      confirmType: 'go', //search send next go done
      placeholder: 'search',

    }
  },

  methods: {
    tabClick(index) {
      console.log(index)
    }
  },
}
</script>

<style>
  
</style>