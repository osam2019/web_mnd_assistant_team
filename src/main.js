import Vue from 'vue'
import VueRouter from 'vue-router'
import Element from 'element-ui'

import '../theme/index.css'


import App from './App.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(Element)

new Vue({
  render: h => h(App),
}).$mount('#app')
