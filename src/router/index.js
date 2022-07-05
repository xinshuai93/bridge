import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '查看桥梁信息',
    component: () =>import('../views/chakan.vue'),
    
  },
  {
    path: '/add',
    name: '添加桥',
    component: () =>import('../views/add.vue')
  },
  {
    path: '/shanchu',
    name: '删除桥',
    component: () =>import('../views/shanchu.vue')
  },
  {
    path: '/xiugai',
    name: '修改桥',
    component: () =>import('../views/xiugai.vue')
  },
  {
    path: '/richang',
    name: '日常检查',
    component: () =>import('../views/richang.vue'),
    
  },
  {
    path: '/dingqi',
    name: '定期检查',
    component: () =>import('../views/dingqi.vue'),
    
  },
  {
    path: '/richangform',
    name: '日常检查表',
    component: () =>import('../views/richangform.vue'),
    
  },
  {
    path: '/dingqiform',
    name: '定期检查表',
    component: () =>import('../views/dingqiform.vue'),
    
  },
  {
    path: '/ditu',
    name: '地图',
    component: () =>import('../views/ditu.vue'),
    
  },
  // {
  //   path: '/main',
  //   name: '首页',
  //   component: () =>import('../views/main.vue'),
  //   meta:{
  //     keepalive:true
  //   }
  // },
  // {
  //   path: '/chakan',
  //   name: '查看桥梁',
  //   component: () =>import('../views/chakan.vue')
  // },
]

const router = new VueRouter({
  routes
})

export default router
