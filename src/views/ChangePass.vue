<template>
  <div class="change-page">
    <el-form :model="changeForm" :rules="rules" ref="changeForm" label-position="left" label-width="80px">
      <el-form-item label="原密码" prop="prevPassword">
        <el-input v-model="changeForm.prevPassword" show-password></el-input>
      </el-form-item>
      <el-form-item label="新密码" prop="curPassword">
        <el-input v-model="changeForm.curPassword" show-password></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="confirmPassword">
        <el-input v-model="changeForm.confirmPassword" show-password></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="medium" @click="changeSubmit('changeForm')">立即修改</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    const validateConfirmPass = (rule, value, cb) => {
      if (value === '') {
        cb(new Error('请再次输入新密码'))
      } else if (value !== this.changeForm.curPassword) {
        cb(new Error('两次输入密码不一致'))
      } else {
        cb()
      }
    }
    return {
      changeForm: {
        prevPassword: '', // 旧密码
        curPassword: '', // 新密码
        confirmPassword: '' // 确认密码
      },
      rules: {
        prevPassword: [{ required: true, message: '请填写原密码', trigger: 'blur' }],
        curPassword: [{ required: true, message: '请填写新密码', trigger: 'blur' }],
        confirmPassword: [{ validator: validateConfirmPass, trigger: 'blur' }]
      }
    }
  },
  methods: {
    changeSubmit(formName) {
      this.$refs[formName].validate(valid => {
        console.log(valid)
        if (!valid) {
          return false
        }
        this.changePass()
      })
    },
    changePass() {
      // 修改密码
      this.$router.back()
    }
  }
}
</script>

<style lang="less" scoped>
.change-page {
  width: 100%;
  height: 100%;
  padding: 100px 50px;
  box-sizing: border-box;
}
</style>
