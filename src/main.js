import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/styles/app.scss'
import VueLazyload from 'vue-lazyload'

const loadimage = require('./assets/intro.png')
Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: loadimage,
  attempt: 1
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
