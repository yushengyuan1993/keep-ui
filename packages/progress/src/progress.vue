<template>
  <div class="keep-progress">
    <div :style="`height: ${height}px;line-height: ${height}px`">
      <div class="bar bar-left">L</div>
      <div class="bar bar-centent"><div class="track" :style="`border-radius: ${radius?height:0}px`"><div class="path" :data-radius="width>=5?1:0" :style="`width: ${width}%;background-size: ${height}px 100%;border-radius: ${pathRadius}`"></div></div></div>
      <div class="bar bar-right">R</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'keep-progress',
  props: {
    radius: {
      type: Boolean,
      default: true
    },
    width: {
      type: [String, Number],
      default: 0
    },
    height: {
      type: [String, Number],
      default: 30
    }
  },
  data () {
    return {
      
    }
  },
  computed: {
    pathRadius () {
      if (this.radius) {
        if (this.width >= 5) {
          return `${this.height}px`;
        } else {
          return `50%`;
        }
      } else {
        return 0;
      }
    }
  },
  watch: {
    width () {
      this.width = this.width * 1 > 100 ? 100 : this.width;
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/var";
.keep-progress {
  >div {
    display: flex;
    flex: 1;
    text-align: center;
    >.bar {
      width: 100%;
      height: 100%;
      &.bar-left, &.bar-right {
        width: 30px;
        border: 1px solid #9ddaa2;
      }
      &.bar-centent {
        position: relative;
        div {
          height: 100%;
        }
        >.track {
          width: 100%;
          overflow: hidden;
          border: 2px solid #79cd96;
          background-color: #fff;
          box-shadow: 0 0 6px rgba(102, 102, 102, 0.5) inset;
          >.path {
            width: 50%;
            max-width: 100%;
            background-image: linear-gradient(-60deg, #9ddaa2 0%, #9ddaa2 33.32%, #58c17c 33.33%, #58c17c 66.66%, #9ddaa2 66.67%, #9ddaa2 100%);
            box-shadow: 0 0 9px #50b254 inset;
            transition: width 0.5s ease-in-out;
          }
        }
      }
    }
  }
}
</style>
