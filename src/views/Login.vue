<template>
  <div class="login-page">
    <el-form :model="loginForm" :rules="rules" ref="loginForm" label-position="left" label-width="80px">
      <el-form-item label="手机号" prop="phone">
        <el-input v-model="loginForm.phone"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="loginForm.password" show-password></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="medium" @click="loginSubmit('loginForm')">立即登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { login } from '../api/api'

import routeList from '../router/routes'
export default {
  data() {
    return {
      loginForm: {
        phone: '',
        password: ''
      },
      rules: {
        phone: [{ required: true, message: '请填写手机号', trigger: 'blur' }],
        password: [{ required: true, message: '请填写密码', trigger: 'blur' }]
      }
    }
  },
  methods: {
    loginSubmit(formName) {
      this.$refs[formName].validate(valid => {
        if (!valid) {
          return false
        }
        this.doLogin()
      })
    },
    doLogin() {
      // 登录逻辑
      const loginForm = this.loginForm
      login({
        tel: loginForm.phone,
        password: loginForm.password
      }).then(res => {
        localStorage.setItem('id', res.data.proxy.id)
        // expire 7天
        localStorage.setItem('expire', new Date().getTime() + 604800000)
        /* 如果是超级用户则展示全部 否则则只展示代理后台 */
        if (res.data.god) {
          localStorage.setItem('god', true)
        }
        this.$router.addRoutes(routeList)
        setTimeout(() => {
          this.$router.replace({ path: '/catalogue' })
        }, 300)
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login-page {
  width: 100%;
  height: 100%;
  padding: 200px 50px;
  box-sizing: border-box;
}
</style>
