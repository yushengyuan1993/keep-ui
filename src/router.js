Vue.use(VueRouter)

export default new VueRouter({
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
      name: 'button',
      path: '/button',
      component: () => import('./pages/button/button'),
      meta: {
        title: '按钮'
      }
    },
    {
      name: 'progress',
      path: '/progress',
      component: () => import('./pages/progress/progress'),
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
