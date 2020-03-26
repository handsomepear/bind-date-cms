<template>
  <div class="create-proxy-page">
    <div class="table-container">
      <h3>新增代理</h3>
      <el-divider />
      <el-form :model="proxyForm" :rules="rules" ref="proxyForm" label-position="left" label-width="100px">
        <el-form-item label="ID">
          <el-input v-model="proxyForm.id" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="名称" prop="name">
          <el-input v-model="proxyForm.name"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="phone">
          <el-input v-model="proxyForm.phone"></el-input>
        </el-form-item>
        <el-form-item label="微信" prop="vx">
          <el-input v-model="proxyForm.vx"></el-input>
        </el-form-item>
        <el-form-item label="支付宝账号" prop="alipay">
          <el-input v-model="proxyForm.alipay"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="medium" @click="proxySubmit('proxyForm')">立即生成</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      proxyForm: {
        id: '由系统生成',
        name: '',
        phone: '',
        vx: '',
        alipay: ''
      },
      rules: {
        name: [{ required: true, message: '请填写代理名称', trigger: 'blur' }],
        phone: [{ required: true, message: '请填写手机号', trigger: 'blur' }],
        vx: [{ required: true, message: '请填写微信号', trigger: 'blur' }],
        alipay: [{ required: true, message: '请填写支付宝账号', trigger: 'blur' }]
      }
    }
  },
  methods: {
    proxySubmit(formName) {
      this.$refs[formName].validate(valid => {
        if (!valid) {
          return false
        }
        this.addProxy()
      })
    },
    addProxy() {}
  }
}
</script>

<style scoped></style>
