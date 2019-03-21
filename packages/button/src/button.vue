<template>
  <button :class="classList" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'keep-button',
  props: {
    size: {
      type: String,
      default: 'normal'
    },
    classList: {
      type: [String, Array, Object]
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
  },
  computed: {
    classList () {
      let arr = ['keep-button'];

      arr.push(this.size);

      return arr;
    }
  },
}
</script>

<style lang="scss" scoped>
@import "../../style/var";
.keep-button {
  border: 1px solid #ccc;
  outline: none;
  border-radius: 3px;
  color: $blue;
  background-color: #fff;
  &.small {
    padding: 3px 9px;
    font-size: 12px;
  }
  &.normal {
    padding: 5px 15px;
    font-size: 14px;
  }
  &.large {
    padding: 7px 18px;
    font-size: 18px;
  }
}
</style>
