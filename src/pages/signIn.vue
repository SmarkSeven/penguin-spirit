<template>
  <div class="wrapper">
    <el-row type="flex" justify="center">
      <el-col :xs="20" :sm="10" :md="6" :lg="6">
        <el-card>
          <el-form ref="loginForm" :model="loginForm" :rules="rules">
            <el-form-item prop="phone">
              <el-input v-model="loginForm.phone" placeholder="请输入手机号"></el-input>
            </el-form-item>
            <el-form-item prop="pass">
              <el-input v-model="loginForm.pass" type="password" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item v-if="regMode" prop="code">
              <el-col :span="15">
                <el-input v-model="loginForm.code" type="number" placeholder="请输入验证码"></el-input>
              </el-col>
              <el-col :span="8" :offset="1">
                <input :value="codeBtnAvailable ? '验证码' : codeBtnLabel + ' S'" type="button" class="btn-code" @click="getCode('loginForm')" :disabled="!codeBtnAvailable">
              </el-col>
            </el-form-item>
            <el-form-item v-if="regMode">
              <el-input v-model="loginForm.inviteCode" placeholder="邀请码(非必填)"></el-input>
            </el-form-item>
            <el-form-item>
              <div class="btn-box" v-loading="regLoading">
                <input v-if="!regMode" value="登录" type="button" class="btn-submit" @click="signIn('loginForm')">
                <input value="注册" type="button" class="lnk-register" :class="{'btn-register': regMode}" @click="register('loginForm')">
              </div>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Raven from 'raven-js'
import * as apiService from '../service/apiService'

const pattern = /^((1[3,5,8][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/
const checkPhone = (rule, value, callback) => {
  if (!pattern.test(value)) {
    callback(new Error('请输正确的手机号'))
  } else {
    callback()
  }
}
const checkCode = (rule, code, callback) => {
  const pattern = /^\d{6}$/
  if (!pattern.test(code)) {
    callback(new Error('请输正确的手机号'))
  } else {
    callback()
  }
}

export default {
  data () {
    return this.regMode ? {
      regLoading: false,  // show注册loading
      codeBtnAvailable: true, // 验证码按钮状态
      codeBtnLabel: 60, // 验证码按钮不可用时显示的文字
      loginForm: {
        phone: '',
        pass: '',
        code: '',
        inviteCode: ''
      },
      rules: {
        phone: [{ validator: checkPhone, trigger: 'blur' }, { validator: checkPhone }],
        pass: [{ required: true, message: '请输入密码' }],
        code: [{ validator: checkCode }]
      }
    }
      : {
        loginForm: {
          phone: '',
          pass: ''
        },
        rules: {
          phone: [{ validator: checkPhone, trigger: 'blur' }],
          pass: [{ required: true, message: '请输入密码', trigger: 'blur' }]
        }
      }
  },
  props: {
    regMode: { // 注册模式
      type: Boolean,
      defualt: false
    }
  },
  methods: {
    timer () {
      const timer = () => {
        if (this.codeBtnLabel === 0) {
          clearInterval(t)
          this.codeBtnLabel = 60
          this.codeBtnAvailable = true
          return 
        }
        this.codeBtnLabel--
        console.log(this.codeBtnLabel)
      }
      let t = setInterval(timer, 1000)
    },
    checkLocalStorageSupported () {
      try {
        localStorage.setItem('test', 'test')
        localStorage.removeItem('test')
        return true
      } catch (e) {
        Raven.captureException(e)
        return false
      }
    },
    signInOrRegSuccessHandle (response) {
      let { id, phone, inviteCode, nickName } = response
      if (this.checkLocalStorageSupported()) {
        localStorage.setItem('QEJL/WEBAPP/CURRENTUSER', JSON.stringify({ id, phone, inviteCode, nickName }))
      }
      this.$router.replace({ path: '/' })
    },
    httpFailedHandle (err) {
      Raven.captureException(err)
      this.$message({
        message: err.message,
        type: 'error',
        showClose: true
      })
    },
    getCode (formName) {
      this.$refs[formName].validateField('phone', (errorMessage) => {
        if (!errorMessage) {
          this.codeBtnAvailable = false
          apiService.getSmsCode(this.loginForm.phone, 1)
            .then(() => {
              this.$message({
                message: '验证码已发送',
                type: 'success',
                showClose: true
              })
              this.timer()
            })
            .catch(err => {
              this.codeBtnAvailable = true
              this.httpFailedHandle(err)
              })
        } else {
          return false
        }
      })
    },
    async signIn (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          apiService.signIn(this.loginForm.phone, this.loginForm.pass)
            .then(response => {this.signInOrRegSuccessHandle(response)})
            .catch(err => this.httpFailedHandle(err))
        }
      })
    },
    changeToRegisterMode () {
      this.$router.push({ path: 'reg' })
    },
    register (formName) {
      if (!this.regMode) {
        this.changeToRegisterMode()
        return
      }
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.regLoading = true
          apiService.register(this.loginForm.phone, this.loginForm.pass, '1234nnafna', '1245', this.loginForm.code, this.loginForm.inviteCode)
            .then(response => {this.signInOrRegSuccessHandle(response)})
            .then(() => this.regLoading = false)
            .catch(err => {
              this.httpFailedHandle(err)
              this.regLoading = false
              })
            
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  border-top-width: 1px;
  padding-top: 20vh;
}

.btn-box {
  display: flex;
  justify-content: space-between;
}

.btn-submit,
.lnk-register,
.btn-code {
  position: relative;
  width: 49%;
  height: 34px;
  font-size: 12px;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  background: #30A080;
  color: #FFF;
  transition: 3;
}

.btn-code[disabled] {
  background: #228888;
}

.btn-code {
  width: 100%;
}

.lnk-register,
.btn-register {
  border: 1px solid #30A080;
  color: #30A080;
  background: #FFF;
}

.btn-register {
  width: 100%;
}
</style>

