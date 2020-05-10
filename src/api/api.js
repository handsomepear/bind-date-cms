import fetch from '../utils/_fetch'

// 登录
export const login = data => {
  return fetch({
    url: '/back/login',
    data
  })
}

// 创建代理
export const addProxy = data => {
  return fetch({
    url: '/proxy/add',
    data: {
      data
    }
  })
}

// 获取代理详情

export const getProxyDetail = data => {
  return fetch({
    url: '/proxy/detail',
    data
  })
}
export const getHomeInfo = data => {
  return fetch({
    url: '/proxy/home',
    data: {
      data
    }
  })
}

export const getAllData = data => {
  return fetch({
    url: '/proxy/admin/all',
    data
  })
}

export const getDayData = data => {
  return fetch({
    url: '/proxy/admin/everyday',
    data
  })
}

// 获取代理总数据
export const getProxyAllData = data => {
  return fetch({
    url: '/proxy/home/all',
    data
  })
}

// 获取代理每日数据
export const getProxyDayData = data => {
  return fetch({
    url: '/proxy/home/everyday',
    data
  })
}

// 更改密码

export const changePass = data => {
  return fetch({
    url: '/proxy/updatePwd',
    data
  })
}

// 获取代理列表
export const getProxyList = () => {
  return fetch({
    url: '/proxy/list'
  })
}

// 获取代理数据
export const getProxyData = data => {
  return fetch({
    url: '/proxy/data',
    data
  })
}

// 结算
export const settlement = data => {
  return fetch({
    url: '/proxy/settlement',
    data
  })
}

// 投诉管理列表
export const getAccuseList = () => {
  return fetch({
    url: '/accuse/list'
  })
}

// 投诉处理
export const accuseHandle = data => {
  return fetch({
    url: '/accuse/handle',
    data
  })
}
