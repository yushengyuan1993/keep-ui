<template>
  <div class="example">
    <ul>
      <li><keep-flat-button :size="small">按钮</keep-flat-button></li>
      <li><keep-flat-button :size="normal">按钮</keep-flat-button></li>
      <li><keep-flat-button :size="large">按钮</keep-flat-button></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'flatButton',
  data () {
    return {
      small: 'small',
      normal: 'normal',
      large: 'large',
    }
  }
}
</script>

<style lang="scss" scoped>
.example {
  >ul {
    >li {
      margin-top: 12px;
    }
  }
}
</style>
