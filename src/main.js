import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
import locale from 'element-ui/lib/locale/lang/ko'
import Vuex from 'vuex'

import Chat from 'vue-beautiful-chat'

//Import Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faCog, faEnvelope, faAddressCard, 
  faCalendar, faQuestionCircle, faClipboardCheck,
faHamburger } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faBars, faCog, faEnvelope, faAddressCard, 
  faCalendar, faQuestionCircle, faClipboardCheck,
  faHamburger)
Vue.component('font-awesome-icon', FontAwesomeIcon)

//Add Element UI Chalk CSS Theme
import styles from './assets/font.scss'
import '../theme/index.css'

Vue.use(styles)

Vue.config.productionTip = false

Vue.use(Element, { locale })
Vue.use(Vuex)
Vue.use(Chat)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')