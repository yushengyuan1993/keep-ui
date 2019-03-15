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
      name: 'button',
      path: '/button',
      component: () => import('./pages/button.vue'),
      meta: {
        title: '按钮'
      }
    }
  ]
})
