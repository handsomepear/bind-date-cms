<template>
  <div>
    <div class="search-con">
      <el-input v-model="searchWords" placeholder="请输入内容"></el-input>
      <el-button @click="getPostList">搜索</el-button>
    </div>
    <div class="post-list">
      <div class="item" v-for="postItem in postList" :key="postItem.id">
        <div class="detail">
          <p>
            <span class="name">{{ postItem.name }}</span>
            <span>年龄:{{ postItem.age }}</span>
            <span>家乡:{{ postItem.city }}</span>
          </p>
          <p>
            <span>职业:{{ postItem.occupation }}</span>
            <span>工作地点:{{ postItem.workCity }}</span>
            <span>学历:{{ postItem.educational }}</span>
          </p>
        </div>
        <div class="delete-btn" @click="deletePost(postItem.id)">
          <i class="el-icon-delete-solid" style="font-size: 25px"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { deletePost, getPostList } from '../api/api'
export default {
  data() {
    return {
      postList: [],
      searchWords: '',
      tel: sessionStorage.getItem('tel'),
      proxyId: parseFloat(sessionStorage.getItem('id'))
    }
  },
  methods: {
    getPostList() {
      getPostList({
        proxyId: this.proxyId,
        name: this.searchWords
      }).then(res => {
        this.postList = res.data.list
      })
    },
    deletePost(postId) {
      this.$messageBox
        .confirm('确定要删除相亲贴吗', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
        .then(() => {
          deletePost({
            token: this.tel,
            postId
          }).then(() => {
            this.$message({
              message: '删除成功',
              type: 'success'
            })
            this.getPostList()
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    }
  }
}
</script>

<style scoped>
.search-con {
  display: flex;
  align-items: center;
  padding: 10px;
}
.search-con .el-button {
  margin-left: 10px;
}
.post-list {
  font-size: 14px;
  padding: 10px;
}
.post-list .item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
}
.item .detail {
  flex: 1;
}
.item .name {
  font-weight: 500;
  font-size: 20px;
}
.item span:not(:last-child) {
  margin-right: 10px;
}
.delete-btn {
  padding: 6px;
}
</style>
