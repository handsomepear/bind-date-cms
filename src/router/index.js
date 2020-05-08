import Vue from 'vue'
import VueRouter from 'vue-router'
import routeList from './routes'
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
    path: '/catalogue',
    name: 'Catalogue',
    meta: {
      title: '目录'
    },
    component: () => import(/* webpackChunkName: "catalogue" */ '../views/Catalogue.vue')
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
    path: '/proxy-cms',
    name: 'ProxyCms',
    meta: {
      title: '代理后台'
    },
    component: () => import(/* webpackChunkName: "ProxyCms" */ '../views/ProxyCms.vue')
  },
  {
    path: '*',
    component: () => import(/* webpackChunkName: "ProxyCms" */ '../views/404.vue')
  }
]

const router = new VueRouter({
  routes
})

if (sessionStorage.getItem('god')) {
  router.addRoutes(routeList)
}

router.beforeEach((to, from, next) => {
  const id = sessionStorage.getItem('id')
  document.title = to.meta.title || '后台'
  if (to.path === '/login') {
    return next()
  }
  if (!id) {
    sessionStorage.clear()
    return next({ path: '/login' })
  }
  next()
})

export default router
