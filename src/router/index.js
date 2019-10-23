import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'

import About from '../views/About.vue'

import Dashboard from '../views/Dashboard.vue'

import Emails from '../views/DashboardContent/Emails.vue'
import Contacts from '../views/DashboardContent/Contacts.vue'
import Calendar from '../views/DashboardContent/Calendar.vue'
import Settings from '../views/DashboardContent/Settings.vue'
import Reservation from '../views/DashboardContent/Reservation.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/', component: Login,
    name: 'login'
  },
  {
    path: '/dashboard', component: Dashboard,
    children: [{
        path: '', component: Emails
      }, {
        path: 'emails', component: Emails
      }, {
        path: 'contacts', component: Contacts
      }, {
        path: 'calendar', component: Calendar
      }, {
        path: 'settings', component: Settings
      }, {
        path: 'about', component: About
      }, {
        path: 'reservation', component: Reservation
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    component: About
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
