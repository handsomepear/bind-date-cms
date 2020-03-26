<template>
  <div class="complain-page">
    <div class="table-container">
      <el-table :data="complainData" border>
        <el-table-column prop="name" label="用户昵称" width="100"> </el-table-column>
        <el-table-column prop="reason" label="投诉原因" width="100"> </el-table-column>
        <el-table-column prop="phone" label="电话号码" width="100"> </el-table-column>
        <el-table-column fixed="right" label="处理状态" width="90">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">处理</el-button>
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
      complainData: [
        {
          name: '1',
          reason: '2',
          phone: '3'
        },
        {
          name: '1',
          reason: '2',
          phone: '3'
        },
        {
          name: '1',
          reason: '2',
          phone: '3'
        }
      ]
    }
  },
  methods: {
    handleClick(row) {
      console.log(row)
    }
  }
}
</script>

<style></style>
