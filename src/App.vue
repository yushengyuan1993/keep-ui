<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  methods: {
    
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  .example {
    margin: 1em;
  }
  a:visited {
    color: #6666FF;
  }
  a:hover {
    color: #0366d6;
  }
  a:link {
    color: #66CCFF;
  }
}
</style>
