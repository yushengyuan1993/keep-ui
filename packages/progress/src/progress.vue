<template>
  <div class="keep-progress">
    <div>
      <div class="bar bar-left"></div>
      <div class="bar bar-centent"><div class="track"><div class="path"></div></div></div>
      <div class="bar bar-right"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'keep-progress',
  props: {
    horizontal: { // 水平
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      
    }
  },
  computed: {
    classList () {
      return {
        'keep-progress-x': this.horizontal,
        'keep-progress-y': !this.horizontal
      }
    }
  },
}
</script>

<style lang="scss" scoped>
@import "../../style/var";
.keep-progress {
  >div {
    height: 30px;
    >.bar {
      width: 100%;
      height: 100%;
      &.bar-centent {
        position: relative;
        div {
          height: 100%;
        }
        // vertical-align: middle;
        >.track {
          width: 100%;
          border-radius: 30px;
          overflow: hidden;
          border: 2px solid #79cd96;
          background-color: #fff;
          box-shadow: 0 0 6px rgba(102, 102, 102, 0.5) inset;
          >.path {
            width: 50%;
            max-width: 100%;
            border-radius: 30px;
            background-image: linear-gradient(-60deg, #9ddaa2 0%, #9ddaa2 33.32%, #58c17c 33.33%, #58c17c 66.66%, #9ddaa2 66.67%, #9ddaa2 100%);
            background-size: 30px 100%;
            box-shadow: 0 0 9px #50b254 inset;
            transition: width 0.5s ease-in-out;
          }
        }
      }
    }
  }
}
</style>
