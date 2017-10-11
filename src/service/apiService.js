import axios from 'axios'

const baseURL = 'http://www.qejl.vip/v1/api/'

    /**
     * 登录
     *
     * @param {string} phone 手机号
     * @param {string} password 密码
     */
export async function signIn (phone, password) {
  await axios.post(`${baseURL}user/login`, {
    phone,
    password
  }).then(response => {
    // TODO 响应处理
    return response
  })
}
