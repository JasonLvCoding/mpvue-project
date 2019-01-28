<template>
  <div>

    <button type="default" @click="showMulLinkageTwoPicker">showMulLinkageTwoPicker</button>

    <mp-picker 
      ref="mpPicker"
      :mode="mode"
      :deepLength="deepLength"
      :pickerValueDefault="pickerValueDefault"
      @onChange="onChange"
      @onConfirm="onConfirm"
      @onCancel="onCancel"
      :pickerValueArray="pickerValueArray">
    </mp-picker>


    <button type="default" @click="showCityPicker">showCityPicker</button>
    <mp-citypicker ref="mpCityPicker" :pickerValueDefault="pickerValueDefault" @onChange="onChange" @onCancel="onCancel" @onConfirm="onConfirm"></mp-citypicker>

    <button type="default" @click="showDatePicker">showDatePicker</button>
    <mp-datepicker ref="mpDatePicker" :defaultDate="defaultDate" @onChange="onChange" @onConfirm="onConfirm" @onCancel="onCancel"></mp-datepicker>

    <button type="default" @click="showActionsheet">showActionsheet</button>
    <mp-actionsheet ref="actionsheet" :itemList="actionList" @confirm="onConfirm" @cancel="onCancel" @complete="onConfirm"></mp-actionsheet>
    
    <button type="default" @click="showModal">showModal</button>
    <mp-modal ref="mpModal" :title="modal.title" :content="modal.content" :showCancel="true" @confirm="confirm" @cancel="cancel"></mp-modal>

  </div>
</template>

<script>
import mpPicker from 'mpvue-weui/src/picker';
import mpDatepicker from 'mpvue-weui/src/date-picker';
import mpCitypicker from 'mpvue-weui/src/city-picker';

import mpActionsheet from 'mpvue-weui/src/actionsheet';

import mpModal from 'mpvue-weui/src/modal';

export default {
  components: {
    mpPicker,
    mpCitypicker,
    mpDatepicker,
    mpActionsheet,
    mpModal
  },

  data() {
    return {
      mode: 'multiLinkageSelector',//selector  multiSelector timeSelector
      pickerValueArray: [
        {
          label: '飞机票',
          value: 100,
          children: [
            {
              label: '经济舱',
              value: 101
            },
            {
              label: '商务舱',
              value: 102
            }
          ]
        },
        {
          label: '火车票',
          value: 200,
          children: [
            {
              label: '卧铺',
              value: 210
            },
            {
              label: '坐票',
              value: 202
            },
            {
              label: '站票',
              value: 203
            }
          ]
        },
        {
          label: '汽车票',
          value: 300,
          children: [
            {
              label: '快班',
              value: 301
            },
            {
              label: '普通',
              value: 302
            }
          ]
        }
      ],
      pickerValueDefault: [0, 1],
      actionList: ['A', 'B', 'C', 'D', 'E', 'F'], //元素 String，最长6个，超长报错
      modal: {
        title: 'Modal title',
        content: 'Modal content',
        showCancel: false,
        confirmText: '确定', //len <= 4
        cancelText: '取消', //len <= 4
        confirmColor: '#3cc51f',
        cancelColor: '#000000'
      }
    };
  },

  methods: {
    showMulLinkageTwoPicker() {
      this.$refs.mpPicker.show();
    },
    showCityPicker() {
      this.$refs.mpCityPicker.show();
    },
    showDatePicker() {
      this.$refs.mpDatePicker.show();
    },
    showActionsheet() {
      this.$refs.actionsheet.show();
    },
    showModal() {
      this.$refs.mpModal.show();
    },
    onConfirm(e) {
      console.log(e);
    },
    onChange(e) {
      console.log(e);
    },
    onCancel(e) {
      console.log(e);
    }
  }

}
</script>

<style>
  
</style>