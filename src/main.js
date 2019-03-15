// import Vue from 'vue'
import App from './App.vue'
import router from './router.js'

// 导入组件库
import Keep from '../packages/index'
// 注册组件库
Vue.use(Keep)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
