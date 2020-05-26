export default [
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
    path: '/delete',
    name: 'Delete',
    meta: {
      title: '删帖'
    },
    component: () => import(/* webpackChunkName: " Delete" */ '../views/Delete.vue')
  }
]
