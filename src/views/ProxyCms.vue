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
          <el-button style="margin-left: 2%" icon="el-icon-search" circle @click="searchData"></el-button>
        </div>
      </div>
      <el-divider />
      <el-table :data="totalData" border>
        <el-table-column prop="userCount" label="总用户人数"> </el-table-column>
        <el-table-column prop="postCount" label="总相亲帖数"> </el-table-column>
        <el-table-column prop="earnings" label="总收益"> </el-table-column>
        <el-table-column prop="noSettle" label="未结算余额"> </el-table-column>
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
        <el-table-column prop="postCount" label="相亲帖数"> </el-table-column>
        <el-table-column prop="payAmount" label="支付金额"> </el-table-column>
        <el-table-column prop="payedAmount" label="被支付金额"> </el-table-column>
        <el-table-column prop="earnings" label="当日收益"> </el-table-column>
      </el-table>
    </section>
    <section class="mine-link">
      <div class="link">我的代理链接：www.www.www <el-button size="small">复制</el-button></div>
      <div class="qr-code">
        我的代理二维码：
        <div>
          <img src="http://image.guang.j.cn/images/css/static/langtaojin/imgs/icon_no.png" alt="" />
          <el-button size="small">复制</el-button>
        </div>
      </div>
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
          earnings: '999',
          noSettle: '100'
        }
      ],
      // 每天数据
      everyDayData: [
        {
          date: '2018-10-11',
          userCount: '999',
          postCount: '999',
          payAmount: '999',
          payedAmount: '9999',
          earnings: '88'
        },
        {
          date: '2018-10-11',
          userCount: '999',
          postCount: '999',
          payAmount: '999',
          payedAmount: '9999',
          earnings: '66'
        },
        {
          date: '2018-10-11',
          userCount: '999',
          postCount: '999',
          payAmount: '999',
          payedAmount: '9999',
          earnings: '77'
        },
        {
          date: '2018-10-11',
          userCount: '999',
          postCount: '999',
          payAmount: '999',
          payedAmount: '9999',
          earnings: '66'
        },
        {
          date: '2018-10-11',
          userCount: '999',
          postCount: '999',
          payAmount: '999',
          payedAmount: '9999',
          earnings: '55'
        },
        {
          date: '2018-10-11',
          userCount: '999',
          postCount: '999',
          payAmount: '999',
          payedAmount: '9999',
          earnings: '33'
        },
        {
          date: '2018-10-11',
          userCount: '999',
          postCount: '999',
          payAmount: '999',
          payedAmount: '9999',
          earnings: '22'
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

<style lang="less" scoped>
.mine-link {
  font-size: 14px;
  padding: 10px 10px 100px;
}
.qr-code {
  display: flex;
  img {
    width: 200px;
    height: 200px;
  }
}
</style>
