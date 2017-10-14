import axios from 'axios'

const baseURL = 'http://www.qejl.vip/v1/api/'

axios.interceptors.request.use(
  config => {
    config.data = JSON.stringify(config.data)
    config.headers = {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  },
  err => {
    return Promise.reject(err)
  }
)

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

/**
 * 获取商品分类
 */
export async function getCategoryList () {
  await axios.post(`${baseURL}categoryparent/list`, {}).then(response => {
    return response
  })
}

/**
 * 获取分类下的商品
 * @param {any} categoryId 商品分类id
 */
export async function getGoods (categoryId) {
  await axios.post(`${baseURL}product/list/category`, {
    categoryId
  }).then(response => {
    return response
  })
}
/**
 *
 * @param {string} userId 用户id
 * @param {int} pageNum 当前页码
 * @param {int} numPerPage 每页的数量
 */
export async function getInvoiceList (userId, pageNum, numPerPage) {
  await axios.post(`${baseURL}user/invoice/list`, {
    userId,
    pageNum,
    numPerPage
  }).then(response => {
    return response
  })
}
/**
 * 获取订单流程
 * @param {string} invoiceId 订单id
 */
export async function getInvoiceProcessList (invoiceId) {
  await axios.post(`${baseURL}invoice/process/list`, {

  }).then(response => {
    return response
  })
}
/**
 * 获取验证码
 * @param {string} phone 手机号
 * @param {string} type 0 注册绑定手机，1 重置密码
 */
export async function getSmsCode (phone, type) {
  await axios.post(`${baseURL}getSmsCode`, {
    phone,
    type
  }).then(response => {
    return response
  })
}
/**
 * 查询用户信息
 * @param {string} id 用户id
 */
export async function getUserInfo (id) {
  await axios.post(`${baseURL}user/queryUserById`, {
    id
  }).then(response => {
    return response
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
export async function register (phone, pwd, nickName, inviteCode, phoneCode, parentInviteCode) {
  await axios.post(`${baseURL}user/register`, {
    phone,
    pwd,
    nickName,
    inviteCode,
    phoneCode,
    parentInviteCode
  }).then(response => {
    return response
  })
}
