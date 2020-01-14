import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/plateNumber',
      name: 'plateNumber',
      component: r => require.ensure([], () => r(require('../docs/plateNumber.md')))
    },
    {
      path: '/introduce',
      name: 'introduce',
      component: r => require.ensure([], () => r(require('../docs/introduce.md')))
    },
    {
      path: '/start',
      name: 'start',
      component: r => require.ensure([], () => r(require('../docs/start.md')))
    }
  ]
})
