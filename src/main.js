// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'chart.js'
import 'hchs-vue-charts'
import Chartkick from 'chartkick'
import VueChartkick from 'vue-chartkick'

Vue.config.productionTip = false
// グローバル登録
Vue.use(window.VueCharts)
Vue.use(VueChartkick, { Chartkick })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
