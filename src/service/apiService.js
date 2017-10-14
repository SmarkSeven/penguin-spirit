import axios from 'axios'

axios.defaults.baseURL = 'http://www.qejl.vip/api'
axios.defaults.timeout = 5000
// axios.defaults.headers['Content-Type'] = 'text/plain;charset=UTF-8'

axios.interceptors.request.use(
  config => {
    config.data = JSON.stringify(config.data)
    return config
  },
  err => Promise.reject(err)
)

/**
  * 登录
  *
  * @param {string} phone 手机号
  * @param {string} password 密码
  */
export function signIn (phone, password) {
  return axios.post('/user/login', { phone, password })
    .then(response => {
      return response.data
    })
}
