<template>
  <div class="proxy-data-page">
    <div class="table-container">
      <div class="table-top">
        <h3>代理数据</h3>
        <div class="table-date-picker">
          <el-date-picker v-model="month" :disabled="disabled" type="month" placeholder="选择月"> </el-date-picker>
        </div>
      </div>
      <el-divider />
      <el-table stripe :data="proxyData" border style="width: 100%" v-loading="loading">
        <el-table-column prop="name" label="代理名称" width="90"> </el-table-column>
        <el-table-column prop="userCount" label="用户数" width="90"> </el-table-column>
        <el-table-column prop="postCount" label="相亲帖数" width="90"> </el-table-column>
        <el-table-column prop="payCount" label="支付金额" width="90"> </el-table-column>
        <el-table-column prop="receiveCount" label="被支付金额" width="100"> </el-table-column>
        <el-table-column prop="profit" label="分成金额" width="90"> </el-table-column>
        <el-table-column label="操作" width="90">
          <template slot-scope="scope">
            <el-button v-if="!scope.row.hasSettlement" @click="handleClick(scope.row)" type="text" size="small"
              >结算</el-button
            >
            <span v-else style="font-size: 12px">已结算</span>
            <el-button type="text" size="small" @click="goProxyDetail(scope.row)">详情</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { formatDate } from '../utils/utils'
import { getProxyData, settlement } from '../api/api'
export default {
  data() {
    return {
      month: '',
      proxyData: [],
      proxyStartDate: '',
      proxyEndDate: '',
      disabled: false,
      loading: false
    }
  },
  watch: {
    month(val) {
      const month = formatDate(val).slice(0, 7)
      this.disabled = true
      this.loading = true
      this.searchData(month)
    }
  },
  methods: {
    handleClick(row) {
      this.loadingInstance = this.$loading.service()
      settlement({
        month: formatDate(this.month).slice(0, 7),
        money: row.profit,
        proxyId: row.id
      }).then(() => {
        const index = this.proxyData.findIndex(item => item.id === row.id)
        this.proxyData[index].hasSettlement = true
        this.$nextTick(() => {
          // 以服务的方式调用的 Loading 需要异步关闭
          this.loadingInstance.close()
          this.$message.success('结算成功')
        })
      })
    },
    searchData(month) {
      getProxyData({ month }).then(res => {
        this.proxyData = res.data.list
        this.disabled = false
        this.loading = false
      })
    },
    goProxyDetail(row) {
      this.$router.push({ path: '/proxy-detail', query: { id: row.id } })
    }
  }
}
</script>

<style lang="less" scoped></style>
