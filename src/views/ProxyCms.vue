<template>
  <!-- 代理后台 -->
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
        <el-table-column prop="profit" label="总收益"> </el-table-column>
        <el-table-column prop="needSettlement" label="未结算余额"> </el-table-column>
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
        <el-table-column prop="payCount" label="支付金额"> </el-table-column>
        <el-table-column prop="receiveCount" label="被支付金额"> </el-table-column>
        <el-table-column prop="profit" label="当日收益"> </el-table-column>
      </el-table>
    </section>
    <section class="mine-link">
      <div class="link">
        我的代理链接：<span>{{ url }}</span>
        <el-button size="small" v-clipboard:copy="url" v-clipboard:success="urlCopySuccess">复制</el-button>
      </div>
      <div class="qr-code">
        我的代理二维码：
        <div>
          <img :src="qrBase64" alt="" />
          <el-button size="small" @click="downLoadImage">下载</el-button>
        </div>
      </div>
    </section>
    <a ref="download" v-show="false" :href="this.qrBase64" :download="downloadfilename"></a>
  </div>
</template>

<script>
import { getHomeInfo, getProxyDayData, getProxyAllData } from '../api/api'
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
      url: '',
      qrBase64: '',
      downloadfilename: '',
      // 总数据
      totalData: [],
      // 每天数据
      everyDayData: []
    }
  },
  watch: {
    totalStartDate: (newVal, oldVal) => {
      console.log(newVal, oldVal)
    }
  },
  mounted() {
    this.getHomeData()
  },
  methods: {
    getHomeData() {
      const id = localStorage.getItem('id')
      getHomeInfo({
        id
      }).then(res => {
        console.log(res.data)
        this.url = res.data.url
        this.qrBase64 = 'data:image/png;base64,' + res.data.qrBase64
      })
    },
    // 查询数据
    searchAllData() {
      const id = localStorage.getItem('id')
      if (!this.totalStartDate) {
        return this.$message.error('请选择起始日期')
      }
      if (!this.totalEndDate) {
        return this.$message.error('请选择截止日期')
      }
      this.allLoading = true
      getProxyAllData({
        id,
        startDate: formatDate(this.totalStartDate),
        endDate: formatDate(this.totalEndDate)
      })
        .then(res => {
          this.totalData = [
            {
              userCount: res.data.userCount,
              postCount: res.data.postCount,
              profit: res.data.profit,
              needSettlement: res.data.needSettlement
            }
          ]
          this.allLoading = false
        })
        .catch(() => {
          this.allLoading = false
        })
    },
    searchDayData() {
      const id = localStorage.getItem('id')
      if (!this.everyDayStartDate) {
        return this.$message.error('请选择起始日期')
      }
      if (!this.everyDayEndDate) {
        return this.$message.error('请选择截止日期')
      }
      this.dayLoading = true
      getProxyDayData({
        id,
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
    },
    urlCopySuccess() {
      this.$message.success('代理链接复制成功')
    },
    downLoadImage() {
      let timestamp = new Date().getTime()
      let name = this.qrBase64.substring(22, 30) + timestamp + '.png'
      this.downloadfilename = name
      this.$nextTick(() => {
        this.$refs.download.click()
      })
    }
  }
}
</script>

<style lang="less" scoped>
.mine-link {
  font-size: 14px;
  padding: 10px 10px 100px;
}
.link {
  display: flex;
  flex-wrap: wrap;
}
.qr-code {
  display: flex;
  img {
    width: 200px;
    height: 200px;
  }
}
</style>
