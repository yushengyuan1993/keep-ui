<template>
  <div class="example">
    <keep-toast :message="msg" :showDialog="showDialog" :showText="true" :showIcon="true" :iconSrc="iconSrc"></keep-toast>

    <ul>
      <li><keep-flat-button @click="showDialog=true" :size="'normal'">打开</keep-flat-button></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'toast',
  data () {
    return {
      msg: 'hi',
      iconSrc: 'logo.png',
      showDialog: false
    }
  }
}
</script>

<style lang="scss" scoped>
.example {

}
</style>
