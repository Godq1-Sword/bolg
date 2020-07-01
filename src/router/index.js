import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '@/components/layout/Dashboard'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    children: [{
      path: '/CalRank',
      name: 'CalRank',
      component: () => import('@/views/Calculator/CalRank')
    }, {
      path: '/CalComp',
      name: 'CalComp',
      component: () => import('@/views/Calculator/CalComp')
    }]
  }
]

const router = new VueRouter({
  mode: 'history',
  // process Vue全局变量
  base: process.env.BASE_URL,
  routes
})

export default router
