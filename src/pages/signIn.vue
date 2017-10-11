<template>
  <div class="wrapper">
    <el-row type="flex" justify="center">
      <el-col :xs="20" :sm="10" :md="6" :lg="6">
        <el-form ref="loginForm" :model="loginForm" :rules="rules">
          <el-form-item prop="phone">
            <el-input v-model="loginForm.phone" placeholder="请输入手机号"></el-input>
          </el-form-item>
          <el-form-item prop="pass">
            <el-input v-model="loginForm.pass" type="password" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item v-if="regMode" prop="code">
            <el-col :span="15">
              <el-input v-model="loginForm.pass" type="number" placeholder="请输入验证码"></el-input>
            </el-col>
            <el-col :span="8" :offset="1">
              <input  v-if="regMode" value="验证码" type="button" class="btn-code" @click="getCode('loginForm')">
            </el-col>
          </el-form-item>
          <el-form-item >
            <el-input v-model="loginForm.inviteCode" placeholder="邀请码(非必填)"></el-input>
          </el-form-item>
          <el-form-item>
            <div class="btn-box"> 
              <input  v-if="!regMode" value="登录" type="button" class="btn-submit" @click="signIn('loginForm')">
              <input value="注册" type="button" class="lnk-register" :class="{'btn-register': regMode}" @click="register('loginForm')">
            </div>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import * as apiService from '../service/apiService'
export default {
  data () {
    const pattern = /^((1[3,5,8][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/
    const checkPhone = (rule, value, callback) => {
      if (!pattern.test(value)) {
        callback(new Error())
      } else {
        callback()
      }
    }
    const checkCode = (rule, code, callback) => {
      const pattern = /^\d{8}$/
      if (!pattern.test(code)) {
        callback(new Error())
      } else {
        callback()
      }
    }
    return this.regMode ? {
      loginForm: {
        phone: '',
        pass: '',
        code: '',
        inviteCode: ''
      },
      rules: {
        phone: [{validator: checkPhone, message: '请输正确的手机号', trigger: 'blur'}],
        pass: [{ required: true, message: '请输入密码', trigger: 'blur' }],
        code: [{validator: checkCode, message: '请输验证码', trigger: 'blur'}]
      }
    }
    : {
      loginForm: {
        phone: '',
        pass: ''
      },
      rules: {
        phone: [{validator: checkPhone, message: '请输正确的手机号', trigger: 'blur'}],
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
    checkCode (code) {
      const pattern = /^\d{8}$/
      return pattern.test(code)
    },
    getCode (formName) {
      this.$refs[formName].validateField('phone', (valid) => {
        if (valid) {
            // TODO login
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    async signIn (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          apiService.signIn(this.phone, this.pass)
          // responsePromise.then(response => {
          //   console.log(response)
          // })
          // .catch(err => console.log('err happen: ', err))
        }
      })
    },
    register (formName) {
      if (!this.regMode) {
        // 登录模式
        this.$router.push({path: 'reg'})
        return
      }
      this.$refs[formName].validate((valid) => {
        if (valid) {
            // TODO login
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style scoped>

.wrapper {
  border-top-width: 1px;
  padding-top: 20vh;
}

.btn-box {
  display: flex;
  justify-content: space-between;
}

.btn-submit, .lnk-register, .btn-code {
  width: 49%;
  padding: 0 22px;
  height: 34px;
  font-size: 12px;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  background: #30A080;
  color: #FFF;
}

.btn-code {
  width: 100%;
}

.lnk-register, .btn-register {
  border: 1px solid #30A080;
  color: #30A080;
  background: #FFF;
}

.btn-register {
  width: 100%;
}
</style>

