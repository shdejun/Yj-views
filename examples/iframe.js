// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Iframe from './Iframe.vue'
import router from './router'
import plugin  from '../packages/index'
Vue.config.productionTip = false
Vue.use(plugin)
/* eslint-disable no-new */
 new Vue({
  el: '#iframe',
  router,
  render: h => h(Iframe)
})
