import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import App from './App'
import store from './store'
import router from './router'
import '@/permission' // permission control

import '@/styles/bootstrap.min.css'
import '@/styles/swiper.min.css'
import '@/styles/font/iconfont.css'
import '@/styles/blackcolor.css'
import '@/styles/style.min.css'

/**
 * This project originally used easy-mock to simulate data,
 * but its official service is very unstable,
 * and you can build your own service if you need it.
 * So here I use Mock.js for local emulation,
 * it will intercept your request, so you won't see the request in the network.
 * If you remove `../mock` it will automatically request easy-mock data.
 */
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
