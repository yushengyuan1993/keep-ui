import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  },
  routes: [
    {
      name: 'dir',
      path: '/',
      redirect: '/readme',
      component: resolve => require(['./pages/readme'], resolve),
      meta: {
        title: '首页'
      }
    },
    {
      name: 'readme',
      path: '/readme',
      component: resolve => require(['./pages/readme'], resolve),
      meta: {
        title: '首页'
      }
    },
    {
      name: 'list',
      path: '/list',
      component: resolve => require(['./pages/list'], resolve),
      meta: {
        title: '组件'
      }
    },

    /**
     * 组件
     */
    {
      name: 'flatButton',
      path: '/flatButton',
      component: () => import('./pages/flatButton/flatButton'),
      meta: {
        title: '按钮'
      }
    },
    {
      name: 'progressBar',
      path: '/progressBar',
      component: () => import('./pages/progressBar/progressBar'),
      meta: {
        title: '进度条'
      }
    },
    {
      name: 'toast',
      path: '/toast',
      component: () => import('./pages/toast/toast'),
      meta: {
        title: '轻提示'
      }
    }
  ]
})
