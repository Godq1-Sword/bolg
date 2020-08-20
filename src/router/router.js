import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '@/components/layout/Dashboard'
import Login from '@/views/secrity/Login'
import MenuConfig from '@/views/setting/MenuConfig'

Vue.use(VueRouter)

const routes = [{
  path: '/bolg',
  component: Dashboard,
  children: [{
    path: 'setting',
    name: 'setting',
    component: MenuConfig,
    meta: {
      menuType: 'setting'
    }
  }]
}, {
  path: '/login',
  name: 'Login',
  component: Login
}]

const router = new VueRouter({
  mode: 'history',
  // process Vue全局变量
  routes
})

export default router
