<template>
  <div class="all-data-page">
    <section class="table-container">
      <div class="tabel-top">
        <h3>总数据</h3>
        <div class="table-date-picker">
          <el-date-picker v-model="totalStartDate" type="date" placeholder="开始时间" />
          <span style="margin: 0 2%">至</span>
          <el-date-picker v-model="totalEndDate" type="date" placeholder="结束时间" />
          <el-button style="margin-left: 2%" icon="el-icon-search" circle @click="searchAllData"></el-button>
        </div>
      </div>
      <el-divider />
      <el-table :data="totalData" border v-loading="allLoading">
        <el-table-column prop="userCount" label="总用户人数"> </el-table-column>
        <el-table-column prop="postCount" label="总相亲帖数"> </el-table-column>
        <el-table-column prop="profit" label="总支付金额"> </el-table-column>
      </el-table>
    </section>
    <section class="table-container">
      <div class="tabel-top">
        <h3>每日数据</h3>
        <div class="table-date-picker">
          <el-date-picker v-model="everyDayStartDate" type="date" placeholder="开始时间" />
          <span style="margin: 0 2%">至</span>
          <el-date-picker v-model="everyDayEndDate" type="date" placeholder="结束时间" />
          <el-button style="margin-left: 2%" icon="el-icon-search" circle @click="searchDayData"></el-button>
        </div>
      </div>
      <el-divider />
      <el-table :data="everyDayData" border height="300" v-loading="dayLoading">
        <el-table-column prop="date" label="日期" width="100"> </el-table-column>
        <el-table-column prop="userCount" label="用户数"> </el-table-column>
        <el-table-column prop="postCount" label="相亲帖数"> </el-table-column>
        <el-table-column prop="payCount" label="支付笔数"> </el-table-column>
        <el-table-column prop="profit" label="支付金额"> </el-table-column>
      </el-table>
    </section>
  </div>
</template>

<script>
import { getAllData, getDayData } from '../api/api'
import { formatDate } from '../utils/utils'
export default {
  data() {
    return {
      totalStartDate: '',
      totalEndDate: '',
      everyDayStartDate: '',
      everyDayEndDate: '',
      allLoading: false,
      dayLoading: false,
      // 总数据
      totalData: [],
      // 每天数据
      everyDayData: []
    }
  },
  methods: {
    // 查询数据
    searchAllData() {
      if (!this.totalStartDate) {
        return this.$message.error('请选择起始日期')
      }
      if (!this.totalEndDate) {
        return this.$message.error('请选择截止日期')
      }
      this.allLoading = true
      getAllData({
        startDate: formatDate(this.totalStartDate),
        endDate: formatDate(this.totalEndDate)
      })
        .then(res => {
          this.totalData = [
            {
              userCount: res.data.userCount,
              postCount: res.data.postCount,
              profit: res.data.profit
            }
          ]
          this.allLoading = false
        })
        .catch(() => {
          this.allLoading = false
        })
    },
    searchDayData() {
      if (!this.everyDayStartDate) {
        return this.$message.error('请选择起始日期')
      }
      if (!this.everyDayEndDate) {
        return this.$message.error('请选择截止日期')
      }
      this.dayLoading = true
      getDayData({
        startDate: formatDate(this.everyDayStartDate),
        endDate: formatDate(this.everyDayEndDate)
      })
        .then(res => {
          this.everyDayData = res.data.list
          this.dayLoading = false
        })
        .catch(() => {
          this.dayLoading = false
        })
    }
  }
}
</script>
