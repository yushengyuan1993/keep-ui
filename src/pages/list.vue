<template>
  <div class="list">
    <ul>
      <li><router-link to="flatButton">按钮</router-link></li>
      <li><router-link to="progressBar">进度条</router-link></li>
      <li><router-link to="toast">轻提示</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'list'
}
</script>

<style scoped lang="scss">
.list {
  >ul {
    counter-reset: index;
    >li {
      margin: 15px;
      &:before {
        content: '-' counter(index) ': ';
        counter-increment: index;
      }
    }
  }
}
</style>

