import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/catalogue'
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/change-pass',
    name: 'ChangePass',
    component: () => import(/* webpackChunkName: "changePass" */ '../views/ChangePass.vue')
  },

  {
    path: '/catalogue',
    name: 'Catalogue',
    component: () => import(/* webpackChunkName: "catalogue" */ '../views/Catalogue.vue')
  },
  {
    path: '/all-data',
    name: 'AllData',
    component: () => import(/* webpackChunkName: "AllData" */ '../views/AllData.vue')
  },
  {
    path: '/proxy-data',
    name: 'ProxyData',
    component: () => import(/* webpackChunkName: "ProxyData" */ '../views/ProxyData.vue')
  },
  {
    path: '/proxy-detail',
    name: 'ProxyDetail',
    component: () => import(/* webpackChunkName: "ProxyDetail" */ '../views/ProxyDetail.vue')
  },
  {
    path: '/proxy-list',
    name: 'ProxyList',
    component: () => import(/* webpackChunkName: "ProxyList" */ '../views/ProxyList.vue')
  },
  {
    path: '/add-proxy',
    name: 'AddProxy',
    component: () => import(/* webpackChunkName: "AddProxy" */ '../views/AddProxy.vue')
  },
  {
    path: '/complain',
    name: 'Complain',
    component: () => import(/* webpackChunkName: "Complain" */ '../views/Complain.vue')
  },
  {
    path: '/proxy-cms',
    name: 'ProxyCms',
    component: () => import(/* webpackChunkName: "ProxyCms" */ '../views/ProxyCms.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
