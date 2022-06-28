import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: '登录',
    component: () =>import('../views/login.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path:'/ditu',
    name:'地图',
    component: () =>import('../views/ditu.vue')
  },
  {
    path:'/error',
    name:'登录错误',
    component: () =>import('../views/error.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
