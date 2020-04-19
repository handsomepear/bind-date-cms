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
          <div class="desc">{{ proxy.name }}</div>
        </div>
        <div class="detial-item">
          <div class="label">代理ID：</div>
          <div class="desc">{{ proxy.id }}</div>
        </div>
        <div class="detial-item">
          <div class="label">代理手机号：</div>
          <div class="desc">{{ proxy.tel }}</div>
        </div>
        <div class="detial-item">
          <div class="label">代理微信号：</div>
          <div class="desc">{{ proxy.vx }}</div>
        </div>
        <div class="detial-item">
          <div class="label">代理支付宝账号：</div>
          <div class="desc">{{ proxy.aliPay }}</div>
          <el-button size="small" v-clipboard:copy="proxy.aliPay" v-clipboard:success="vxCopySuccess">复制</el-button>
        </div>
        <div class="detial-item">
          <div class="label">代理链接：</div>
          <div class="desc">{{ proxy.url }}</div>
          <el-button size="small" v-clipboard:copy="proxy.url" v-clipboard:success="urlCopySuccess">复制</el-button>
        </div>
        <div class="detial-item">
          <div class="label">代理二维码：</div>
          <div class="desc">
            <div class="qr-code">
              <img :src="proxy.qrBase64" alt="" />
            </div>
            <!-- <el-button size="small" @click="downLoadImage">下载</el-button> -->
            <div>(长按保存二维码)</div>
          </div>
        </div>
      </div>
    </div>
    <div class="table-container">
      <div class="table-top">
        <h3>结算记录</h3>
      </div>
      <el-divider />
      <el-table stripe :data="settlementList" border style="width: 100%">
        <el-table-column prop="month" label="结算周期"> </el-table-column>
        <el-table-column prop="date" label="结算日期"> </el-table-column>
        <el-table-column prop="money" label="结算日金额"> </el-table-column>
      </el-table>
    </div>
    <a ref="download" v-show="false" :href="downloadUrl" :download="downloadfilename"></a>
  </div>
</template>

<script>
import { getProxyDetail } from '../api/api'
export default {
  data() {
    return {
      settlementList: [
        {
          month: '',
          date: '',
          money: 1
        }
      ],
      proxy: {},
      downloadfilename: '',
      downloadUrl: ''
    }
  },
  mounted() {
    const id = this.$route.query.id
    this.getDetail(id)
  },
  methods: {
    getDetail(id) {
      getProxyDetail({
        id: id
      })
        .then(res => {
          this.proxy = res.data.data
          this.proxy.qrBase64 = 'data:image/png;base64,' + this.proxy.qrBase64
          this.settlementList = res.settlementList
        })
        .catch(() => {
          this.$message.error('出错了')
        })
    },
    urlCopySuccess() {
      this.$message.success('代理链接复制成功')
    },
    vxCopySuccess() {
      this.$message.success('代理支付宝账号复制成功')
    },
    downLoadImage() {
      let timestamp = new Date().getTime()
      this.downloadUrl = this.proxy.qrBase64
      let name = this.downloadUrl.substring(22, 30) + timestamp + '.png'
      this.downloadfilename = name
      this.$nextTick(() => {
        this.$refs.download.click()
      })
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
  flex-wrap: wrap;
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
