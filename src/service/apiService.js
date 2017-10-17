// @ts-check

import axios from 'axios'

axios.defaults.baseURL = 'http://www.qejl.vip/v1/api'
axios.defaults.timeout = 5000

/**
 * 格式化参数
 * @param {any} data // 请求参数对象
 * @returns {string}
 */
function toFormatData (params) {
  let res = ''
  for (let key in params) {
    if (params.hasOwnProperty(key)) {
      res = res + `${key}=${params[key]}&&`
    }
  }
  return res.replace(/&&$/, '')
}

axios.interceptors.request.use(
  config => {
    config.data = toFormatData(config.data)
    return config
  },
  err => Promise.reject(err)
)

axios.interceptors.response.use(response => {
  // 特殊处理注册的返回值
  if (response.config.url === `${response.config.baseURL}/user/register`) {
    return response.data
  }
  if (response.data.code !== 0) {
    throw new Error(response.data.msg)
  }
  return response.data.data
}, err => {
  return Promise.reject(err)
})

/**
  * 登录
  *
  * @param {string} phone 手机号
  * @param {string} password 密码
  * @return {Promise}
  */
export async function signIn (phone, password) {
  return await axios.post('/user/login', { phone, password })
}

/**
 * 获取商品分类
 * @return {Promise}
 */
export async function getCategoryList () {
  return await axios.post('/categoryparent/list')
}

/**
 * 获取分类下的商品
 * @param {number} categoryId 商品分类id
 * @return {Promise}
 */
export async function getGoods (categoryId) {
  return await axios.post('/product/list/category', { categoryId })
}

/**
 * 获取订单列表
 * @param {string} userId 用户id
 * @param {number} pageNum 当前页码
 * @param {number} numPerPage 每页的数量
 * @return {Promise}
 */
export async function getInvoiceList (userId, pageNum, numPerPage) {
  return await axios.post('/user/invoice/list', { userId, pageNum, numPerPage })
}

/**
 * 获取订单流程
 * @param {string} invoiceId 订单id
 * @return {Promise}
 */
export async function getInvoiceProcessList (invoiceId) {
  return await axios.post('/invoice/process/list', { invoiceId })
}

/**
 * 获取验证码
 * @param {string} phone 手机号
 * @param {string} type 0 注册绑定手机，1 重置密码
 * @return {Promise}
 */
export async function getSmsCode (phone, type) {
  return await axios.post('/getSmsCode', { phone, type })
}

/**
 * 查询用户信息
 * @param {string} id 用户id
 * @return {Promise}
 */
export async function getUserInfo (id) {
  return await axios.post('user/queryUserById', { id })
}

/**
 * 注册
 * @param {string} phone 手机号
 * @param {string} pwd 密码
 * @param {string} nickName 昵称(生成)
 * @param {string} invitecode 邀请码(生成)
 * @param {string} phoneCode 验证码
 * @param {string} parentInviteCode 上级邀请码
 * @return {Promise}
 */
export async function register (phone, pwd, nickName, inviteCode, phoneCode, parentInviteCode) {
  return await axios.post('/user/register', {
    phone,
    pwd,
    nickName,
    inviteCode,
    phoneCode,
    parentInviteCode
  })
}

/**
 * 提交订单
 * @param {string} userId 用户id
 * @param {string} productId 商品id
 * @param {string} extra 订单信息
 * @return {Promise}
 */
export async function createInvoice (userId, productId, extra) {
  return await axios.post('/invoice/save', { userId, productId, extra })
}

/**
 * 积分cdk兑换
 * @param {string} userId 用户id
 * @param {string} cdkey cdkey码
 */
export async function exchangeCdkey (userId, cdkey) {
  return await axios.post('/creditCdkey/exchange', {userId, cdkey})
}

/**
 * 从本地缓存获取用户信息
 * @export
 * @returns {any}
 */
export function getLocalUserInfo () {
  const user = localStorage.getItem('QEJL/WEBAPP/CURRENTUSER')
  return user ? JSON.parse(user) : undefined
}
