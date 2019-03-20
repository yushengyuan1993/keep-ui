<template>
  <div class="readme">
    <h3># <router-link to="index">keep-ui</router-link></h3>

    <p>> this is an ui library for keep.</p>

    <h5>### 安装依赖</h5>
    <p>npm install</p>

    <h5>### 本地启动应用</h5>
    <p>npm run serve</p>

    <h5>### 打包成可直接引用的资源库</h5>
    <p>npm run lib</p>
    
    <h5>### 发布到 <a href="https://www.npmjs.com/">npmjs.com</a></h5>
    <p>npm publish</p>
  </div>
</template>

<script>
export default {
  name: 'readme'
}
</script>

<style scoped lang="scss">
.readme {
  padding: 0 1em;
  h5 {
    margin: 0;
  }
  p {
    margin: 0.5em 1rem 1.2rem;
  }
}
</style>

