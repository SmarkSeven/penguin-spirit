import axios from 'axios'

axios.defaults.baseURL = 'http://www.qejl.vip/api'
axios.defaults.timeout = 5000

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

/**
 * 获取商品分类
 */
export function getCategoryList () {
  return axios.post('/categoryparent/list')
    .then(response => {
      return response.data
    })
}

/**
 * 获取分类下的商品
 * @param {any} categoryId 商品分类id
 */
export async function getGoods (categoryId) {
  return axios.post('/product/list/category', { categoryId })
    .then(response => {
      return response.data
    })
}

/**
 *
 * @param {string} userId 用户id
 * @param {int} pageNum 当前页码
 * @param {int} numPerPage 每页的数量
 */
export function getInvoiceList (userId, pageNum, numPerPage) {
  return axios.post('/user/invoice/list', { userId, pageNum, numPerPage })
    .then(response => {
      return response.data
    })
}

/**
 * 获取订单流程
 * @param {string} invoiceId 订单id
 */
export function getInvoiceProcessList (invoiceId) {
  return axios.post('/invoice/process/list', { invoiceId })
    .then(response => {
      return response.data
    })
}

/**
 * 获取验证码
 * @param {string} phone 手机号
 * @param {string} type 0 注册绑定手机，1 重置密码
 */
export function getSmsCode (phone, type) {
  return axios.post('/getSmsCode', { phone, type })
    .then(response => {
      return response.data
    })
}

/**
 * 查询用户信息
 * @param {string} id 用户id
 */
export function getUserInfo (id) {
  return axios.post('user/queryUserById', { id })
    .then(response => {
      return response.data
    })
}

/**
 * 注册
 * @param {string} phone 手机号
 * @param {string} pwd 密码
 * @param {string} nickName 昵称(生成)
 * @param {string} invitecode 邀请码(生成)
 * @param {string} phoneCode 验证码
 * @param {string} parentInviteCode 上级邀请码
 */
export function register (phone, pwd, nickName, inviteCode, phoneCode, parentInviteCode) {
  return axios.post('/user/register', {
    phone,
    pwd,
    nickName,
    inviteCode,
    phoneCode,
    parentInviteCode
  }).then(response => {
    return response.data
  })
}

/**
 * 提交订单
 * @param {string} userId 用户id
 * @param {string} productId 商品id
 * @param {string} extra 订单信息
 */
export function createInvoice (userId, productId, extra) {
  return axios.post('/invoice/save', {
    userId,
    productId,
    extra
  }).then(response => {
    return response.data
  })
}
