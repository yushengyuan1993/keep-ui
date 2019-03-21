<template>
  <div class="example">
    <ul>
      <li><keep-button :size="small">按钮</keep-button></li>
      <li><keep-button :size="normal">按钮</keep-button></li>
      <li><keep-button :size="large">按钮</keep-button></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'button',
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
