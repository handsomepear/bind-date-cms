import axios from 'axios'
import { Message } from 'element-ui'
const baseURL = process.env.NODE_ENV === 'production' ? '/api_server' : ''
const service = axios.create({
  baseURL: baseURL,
  timeout: 15000
})

// 请求配置
service.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  config.method = 'POST'
  config.headers['Content-Type'] = 'application/json'
  if (token) {
    config.data = {
      token,
      ...config.data
    }
  }
  return config
})

service.interceptors.response.use(
  response => {
    if (response.status === 200) {
      if (response.data.errCode === 0) {
        return Promise.resolve(response)
      }
      Message.error(response.data.errMessage)
      return Promise.reject(response)
    }
  },
  err => {
    return Promise.reject(err)
  }
)

export default service
