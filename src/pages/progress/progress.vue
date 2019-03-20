<template>
  <div class="example">
    <keep-progress :radius="radius" :width="width" :height="height" :leftTipWidth="leftTipWidth" :rightTipWidth="rightTipWidth"></keep-progress>
    
    <div class="test">进度条长度：<input type="number" v-model="width" min="0" max="100" placeholder="请输入进度条长度"></div>
    <div class="test">圆直角：<keep-button @click="radius=!radius">{{radius?'直角':'圆角'}}</keep-button></div>
    <div class="test">
      高度：<keep-button @click="height=30">30px</keep-button><keep-button @click="height=60">60px</keep-button>
    </div>
    <div class="test">
      左边(L)宽度：<input class="tip" type="number" v-model="leftTipWidth" min="0" max="50" placeholder="请输入宽度度">
      右边(R)宽度：<input class="tip" type="number" v-model="rightTipWidth" min="0" max="50" placeholder="请输入宽度度">
    </div>
  </div>
</template>

<script>
export default {
  name: 'progress',
  data () {
    return {
      radius: false,
      width: 25,
      height: 60,
      leftTipWidth: 60,
      rightTipWidth: 60
    }
  }
}
</script>

<style lang="scss" scoped>
.test {
  margin-top: 30px;
  text-align: left;
  input {
    width: 200px;
    &.tip {
      width: 100px;
    }
  }
}
</style>
