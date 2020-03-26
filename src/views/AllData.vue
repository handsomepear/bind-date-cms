<template>
  <div class="all-data-page">
    <section class="table-container">
      <div class="tabel-top">
        <h3>总数据</h3>
        <div class="table-date-picker">
          <el-date-picker v-model="totalStartDate" type="date" placeholder="开始时间" />
          <span style="margin: 0 2%">至</span>
          <el-date-picker v-model="totalEndDate" type="date" placeholder="结束时间" />
          <el-button style="margin-left: 2%" icon="el-icon-search" circle @click="searchData"></el-button>
        </div>
      </div>
      <el-divider />
      <el-table :data="totalData" border>
        <el-table-column prop="userCount" label="总用户人数"> </el-table-column>
        <el-table-column prop="postCount" label="总相亲帖数"> </el-table-column>
        <el-table-column prop="payCount" label="总支付笔数"> </el-table-column>
        <el-table-column prop="payAmount" label="总支付金额"> </el-table-column>
      </el-table>
    </section>
    <section class="table-container">
      <div class="tabel-top">
        <h3>每日数据</h3>
        <div class="table-date-picker">
          <el-date-picker v-model="everyDayStartDate" type="date" placeholder="开始时间" />
          <span style="margin: 0 2%">至</span>
          <el-date-picker v-model="everyDayEndDate" type="date" placeholder="结束时间" />
          <el-button style="margin-left: 2%" icon="el-icon-search" circle @click="searchData"></el-button>
        </div>
      </div>
      <el-divider />
      <el-table :data="everyDayData" border height="300">
        <el-table-column prop="date" label="日期" width="100"> </el-table-column>
        <el-table-column prop="userCount" label="用户数"> </el-table-column>
        <el-table-column prop="payCount" label="相亲帖数"> </el-table-column>
        <el-table-column prop="payAmount" label="支付笔数"> </el-table-column>
        <el-table-column prop="payAmount" label="支付金额"> </el-table-column>
      </el-table>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      totalStartDate: '',
      totalEndDate: '',
      everyDayStartDate: '',
      everyDayEndDate: '',
      // 总数据
      totalData: [
        {
          userCount: '999',
          postCount: '999',
          payCount: '999',
          payAmount: '999'
        }
      ],
      // 每天数据
      everyDayData: [
        {
          date: '2018-10-11',
          userCount: '999',
          postCount: '999',
          payCount: '999',
          payAmount: '999'
        },
        {
          date: '2018-10-11',
          userCount: '999',
          postCount: '999',
          payCount: '999',
          payAmount: '999'
        },
        {
          date: '2018-10-11',
          userCount: '999',
          postCount: '999',
          payCount: '999',
          payAmount: '999'
        },
        {
          date: '2018-10-11',
          userCount: '999',
          postCount: '999',
          payCount: '999',
          payAmount: '999'
        },
        {
          date: '2018-10-11',
          userCount: '999',
          postCount: '999',
          payCount: '999',
          payAmount: '999'
        },
        {
          date: '2018-10-11',
          userCount: '999',
          postCount: '999',
          payCount: '999',
          payAmount: '999'
        },
        {
          date: '2018-10-11',
          userCount: '999',
          postCount: '999',
          payCount: '999',
          payAmount: '999'
        }
      ]
    }
  },
  watch: {
    totalStartDate: (newVal, oldVal) => {
      console.log(newVal, oldVal)
    }
  },
  methods: {
    // 查询数据
    searchData() {}
  }
}
</script>
