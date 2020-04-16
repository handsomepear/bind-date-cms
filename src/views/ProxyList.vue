<template>
  <div class="proxy-list-page">
    <div class="table-container">
      <div class="table-top flex-between-center">
        <h3>代理列表</h3>
        <el-button @click="goAddProxy">新增代理</el-button>
      </div>
      <el-divider />
      <el-table stripe :data="list" border style="width: 100%">
        <el-table-column prop="name" label="代理名称" width="110"> </el-table-column>
        <el-table-column prop="tel" label="联系方式" width="110"> </el-table-column>
        <el-table-column prop="createDate" label="创建日期" width="110"> </el-table-column>
        <el-table-column label="操作" width="90">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="viewDetail(scope.row)">详情</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { getProxyList } from '../api/api'
export default {
  data() {
    return {
      list: [] // 代理列表
    }
  },
  mounted() {
    this.getProxyList()
  },
  methods: {
    viewDetail(row) {
      this.$router.push({ path: '/proxy-detail', query: { id: row.id } })
    },
    getProxyList() {
      getProxyList().then(res => {
        this.list = res.data.list
      })
    },
    goAddProxy() {
      this.$router.push({ path: '/add-proxy' })
    }
  }
}
</script>

<style lang="less">
.flex-between-center {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
