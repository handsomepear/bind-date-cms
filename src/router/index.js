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
    meta: {
      title: '登录'
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/change-pass',
    name: 'ChangePass',
    meta: {
      title: '更改密码'
    },
    component: () => import(/* webpackChunkName: "changePass" */ '../views/ChangePass.vue')
  },

  {
    path: '/catalogue',
    name: 'Catalogue',
    meta: {
      title: '相亲后台'
    },
    component: () => import(/* webpackChunkName: "catalogue" */ '../views/Catalogue.vue')
  },
  {
    path: '/all-data',
    name: 'AllData',

    meta: {
      title: '总数据',
      keepAlive: true
    },
    component: () => import(/* webpackChunkName: "AllData" */ '../views/AllData.vue')
  },
  {
    path: '/proxy-data',
    name: 'ProxyData',
    meta: {
      title: '代理数据',
      keepAlive: true
    },
    component: () => import(/* webpackChunkName: "ProxyData" */ '../views/ProxyData.vue')
  },
  {
    path: '/proxy-detail',
    name: 'ProxyDetail',
    meta: {
      title: '代理详情'
    },
    component: () => import(/* webpackChunkName: "ProxyDetail" */ '../views/ProxyDetail.vue')
  },
  {
    path: '/proxy-list',
    name: 'ProxyList',
    meta: {
      title: '代理列表'
    },
    component: () => import(/* webpackChunkName: "ProxyList" */ '../views/ProxyList.vue')
  },
  {
    path: '/add-proxy',
    name: 'AddProxy',
    meta: {
      title: '新增代理'
    },
    component: () => import(/* webpackChunkName: "AddProxy" */ '../views/AddProxy.vue')
  },
  {
    path: '/complain',
    name: 'Complain',
    meta: {
      title: '投诉管理'
    },
    component: () => import(/* webpackChunkName: "Complain" */ '../views/Complain.vue')
  },
  {
    path: '/proxy-cms',
    name: 'ProxyCms',
    meta: {
      title: '代理后台'
    },
    component: () => import(/* webpackChunkName: "ProxyCms" */ '../views/ProxyCms.vue')
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  const id = localStorage.getItem('id')
  const expire = localStorage.getItem('expire')
  document.title = to.meta.title
  if (to.path === '/login') {
    return next()
  }
  if (!id || expire < new Date().getTime()) {
    localStorage.clear()
    return next({ path: '/login' })
  }
  next()
})

export default router
