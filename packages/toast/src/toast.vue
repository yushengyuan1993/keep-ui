<template>
  <div :class="classList" v-if="showDialog" :style="`z-index: ${zIndex}`">
    <div class="content">
      <div v-if="showIcon"><img :src="iconSrc"></div>
      <p v-if="showText" v-text="message"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'keep-toast',
  data () {
    return {
      classList: ['keep-toast']
    }
  },
  props: {
    showDialog: {
      type: Boolean,
      default: false
    },
    showIcon: {
      type: Boolean,
      default: false
    },
    showText: {
      type: Boolean,
      default: true
    },
    message: {
      type: String
    },
    iconSrc: {
      type: String
    },
    zIndex: {
      type: Number,
      default: 1000
    }
  },
  computed: {
    
  },
  watch: {
    showIcon () {
      if (!this.iconSrc || this.iconSrc === '') {
        return false;
      }
    },
    showDialog (s) {
      if (s) {
        this.$nextTick(() => {
          this.classList.push('show');
        })
      }
    }
  },
}
</script>

<style lang="scss" scoped>
@import "../../style/var";
.keep-toast {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0);
  transition: all 0.5s ease-in;
  &.show {
    background-color: rgba(0, 0, 0, 0.6);
  }
  >.content {
    width: 120px;
    max-width: 75%;
    padding: 15px;
    border-radius: 5px;
    background-color: #fff;
    >div {
      margin-bottom: 5px;
      text-align: center;
      >img {
        width: 60px;
        height: 60px;
      }
    }
    >p {
      text-align: center;
    }
  }
}
</style>
