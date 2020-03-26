<template>
  <div class="proxy-detail-page">
    <div class="table-container">
      <div class="table-top">
        <h3>代理详情</h3>
      </div>
      <el-divider />
      <div class="detial-con">
        <div class="detial-item">
          <div class="label">代理名称：</div>
          <div class="desc">xxxx</div>
        </div>
        <div class="detial-item">
          <div class="label">代理ID：</div>
          <div class="desc">xxxx</div>
        </div>
        <div class="detial-item">
          <div class="label">代理手机号：</div>
          <div class="desc">xxxx</div>
        </div>
        <div class="detial-item">
          <div class="label">代理微信号：</div>
          <div class="desc">xxxx</div>
        </div>
        <div class="detial-item">
          <div class="label">代理支付宝账号：</div>
          <div class="desc">xxxx</div>
        </div>
        <div class="detial-item">
          <div class="label">代理链接：</div>
          <div class="desc">xxxx</div>
        </div>
        <div class="detial-item">
          <div class="label">代理二维码：</div>
          <div class="desc">
            <div class="qr-code">
              <img src="http://image.guang.j.cn/images/css/static/langtaojin/imgs/icon_no.png" alt="" />
            </div>
            <el-button size="small">下载</el-button>
          </div>
        </div>
      </div>
    </div>
    <div class="table-container">
      <div class="table-top">
        <h3>结算记录</h3>
      </div>
      <el-divider />
      <el-table :data="settleData" border style="width: 100%">
        <el-table-column prop="period" label="结算周期"> </el-table-column>
        <el-table-column prop="date" label="结算日期"> </el-table-column>
        <el-table-column prop="dateAcount" label="结算日金额"> </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      settleData: [
        {
          period: '20.20', // 周期
          date: '20.03.15', // 日期
          dateAcount: 9999 // 结算日金额
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.detial-item {
  display: flex;
  align-items: center;
  line-height: 1.8;
  font-size: 18px;
}
.qr-code {
  width: 200px;
  height: 200px;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
