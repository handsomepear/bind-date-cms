<template>
  <div class="complain-page">
    <div class="table-container">
      <el-table stripe :data="complainData" border v-loading="loading">
        <el-table-column prop="nickName" label="用户昵称" width="110"> </el-table-column>
        <el-table-column prop="reason" label="投诉原因" width="120"> </el-table-column>
        <el-table-column prop="tel" label="电话号码" width="110"> </el-table-column>
        <el-table-column prop="status" label="处理状态" width="110">
          <template slot-scope="scope">
            <el-button v-if="scope.row.status === 0" @click="handleClick(scope.row)" type="text" size="small"
              >处理</el-button
            >
            <span v-else style="font-size: 12px">已处理</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { getAccuseList, accuseHandle } from '../api/api'
export default {
  data() {
    return {
      complainData: [],
      loading: false
    }
  },
  mounted() {
    this.getAccuseList()
  },
  methods: {
    handleClick(row) {
      this.loadingInstance = this.$loading.service()
      accuseHandle({
        id: row.id
      }).then(() => {
        const index = this.complainData.findIndex(item => item.id === row.id)
        this.complainData[index].status = 1
        this.$nextTick(() => {
          this.loadingInstance.close()
          this.$message.success('处理成功')
        })
      })
    },
    getAccuseList() {
      this.loading = true
      getAccuseList()
        .then(res => {
          this.complainData = res.data.list
          this.loading = false
        })
        .catch(() => {
          this.loading = false
        })
    }
  }
}
</script>

<style></style>
