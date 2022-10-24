import Vue from 'vue'
import VueRouter from 'vue-router'

import { i18n } from './main'

import Home from './views/Home.vue'
import About from './views/About.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/',name: 'Home',component: Home },
  { path: '/about',name: 'About',component: About}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  i18n.locale = localStorage.getItem('language') || 'en'
  return next()
})

export default router
