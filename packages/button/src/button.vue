<template>
  <button class="keep-button" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'keep-button',
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
  },
}
</script>

<style lang="scss" scoped>
@import "../../style/var";
.keep-button {
  border: 1px solid #ccc;
  outline: none;
  padding: 5px 15px;
  border-radius: 3px;
  color: $blue;
  background-color: #fff;
}
</style>
