import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
// @ts-ignore
import {
  getToken,
  setToken
} from '@/utils/auth'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/panel',
    component: () => import('../views/layout/Layout.vue'),
    children: [
      { path: '', name: 'Dashboard', component: () => import('../views/Dashboard.vue'), }
    ]
  },
  {
    path: '/login',
    component: () => import('../views/layout/LoginLayout.vue'),
    children: [
      { path: '', name: 'Login', component: () => import('../views/Login.vue'), }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next) => {
  const publicPages = ['/login'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = getToken();

  if (authRequired && !loggedIn) {
    return next('/login')
  }
  if ((!authRequired && loggedIn) || to.path == '/') {
    next('/panel')
  }

  next()
});



export default router
