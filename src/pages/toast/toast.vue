<template>
  <div class="example">
    <keep-toast :message="msg" :showText="true" :showIcon="true" :iconSrc="iconSrc"></keep-toast>
  </div>
</template>

<script>
export default {
  name: 'toast',
  data () {
    return {
      msg: 'hi',
      iconSrc: 'logo.png'
    }
  }
}
</script>

<style lang="scss" scoped>
.example {

}
</style>
