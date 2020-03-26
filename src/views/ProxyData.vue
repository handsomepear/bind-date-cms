<template>
  <div class="proxy-data-page">
    <div class="table-container">
      <div class="table-top">
        <h3>代理数据</h3>
        <div class="table-date-picker">
          <el-date-picker v-model="proxyStartDate" type="date" placeholder="开始时间" />
          <span style="margin: 0 2%">至</span>
          <el-date-picker v-model="proxyEndDate" type="date" placeholder="结束时间" />
          <el-button style="margin-left: 2%" icon="el-icon-search" circle @click="searchData"></el-button>
        </div>
      </div>
      <el-divider />
      <el-table :data="proxyData" border style="width: 100%">
        <el-table-column prop="name" label="代理名称" width="90"> </el-table-column>
        <el-table-column prop="userCount" label="用户数" width="60"> </el-table-column>
        <el-table-column prop="postCount" label="相亲帖数" width="60"> </el-table-column>
        <el-table-column prop="payAcount" label="支付金额" width="60"> </el-table-column>
        <el-table-column prop="receivedAcount" label="被支付金额" width="60"> </el-table-column>
        <el-table-column prop="divideAcount" label="分成金额" width="60"> </el-table-column>
        <el-table-column fixed="right" label="操作" width="90">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">结算</el-button>
            <el-button type="text" size="small">详情</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      proxyData: [
        {
          name: '公众号名称',
          userCount: 999,
          postCount: 999,
          payAcount: 9999, // 支付金额
          receivedAcount: 8888, // 被支付金额
          divideAcount: 1111 // 分成金额
        },
        {
          name: '公众号名称',
          userCount: 999,
          postCount: 999,
          payAcount: 9999, // 支付金额
          receivedAcount: 8888, // 被支付金额
          divideAcount: 1111 // 分成金额
        },
        {
          name: '公众号名称',
          userCount: 999,
          postCount: 999,
          payAcount: 9999, // 支付金额
          receivedAcount: 8888, // 被支付金额
          divideAcount: 1111 // 分成金额
        },
        {
          name: '公众号名称',
          userCount: 999,
          postCount: 999,
          payAcount: 9999, // 支付金额
          receivedAcount: 8888, // 被支付金额
          divideAcount: 1111 // 分成金额
        }
      ],
      proxyStartDate: '',
      proxyEndDate: ''
    }
  },
  methods: {
    handleClick(row) {
      console.log(row)
    },
    searchData() {}
  }
}
</script>

<style lang="less" scoped></style>
