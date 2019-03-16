<template lang="html">
  <div class="keep-progress">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'keep-progress'
}
</script>

<style lang="scss" scoped>
@import "../../style/var";
.keep-progress {
  border: 1px solid #ccc;
  outline: none;
  padding: 5px 15px;
  border-radius: 3px;
  color: $blue;
  background-color: #fff;
}
</style>
