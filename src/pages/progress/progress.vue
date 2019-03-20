<template>
  <div class="example">
    <keep-progress :radius="radius" :width="width" :height="height"></keep-progress>
    
    <div class="test"><input type="number" v-model="width" min="0" max="100" placeholder="请输入进度条长度"></div>
  </div>
</template>

<script>
export default {
  name: 'progress',
  data () {
    return {
      radius: false,
      width: 25,
      height: 60
    }
  }
}
</script>

<style lang="scss" scoped>
.test {
  margin-top: 30px;
  text-align: center;
  input {
    width: 200px;
  }
}
</style>
