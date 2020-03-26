<template>
  <div class="proxy-list-page">
    <div class="table-container">
      <div class="table-top flex-between-center">
        <h3>代理列表</h3>
        <el-button>新增代理</el-button>
      </div>
      <el-divider />
      <el-table :data="listData" border style="width: 100%">
        <el-table-column prop="name" label="代理名称"> </el-table-column>
        <el-table-column prop="contact" label="联系方式"> </el-table-column>
        <el-table-column prop="createDate" label="创建日期"> </el-table-column>
        <el-table-column fixed="right" label="操作" width="80">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="viewDetail(scope.row)">详情</el-button>
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
      listData: [
        {
          name: 'xxx',
          contact: '178xxxx1224',
          createDate: '2020.3.24'
        }
      ]
    }
  },
  methods: {
    viewDetail(row) {
      console.log(row)
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
