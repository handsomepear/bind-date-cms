<template>
  <div class="catalogue-page">
    <div class="catalogue-item" v-for="item in catalogueList" :key="item.path" @click="checkAuthority(item.path)">
      {{ item.name }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      catalogueList: [
        {
          name: '总数据',
          path: '/all-data'
        },
        {
          name: '代理数据',
          path: '/proxy-data'
        },
        {
          name: '代理列表',
          path: '/proxy-list'
        },
        {
          name: '新增代理',
          path: '/add-proxy'
        },
        {
          name: '代理后台',
          path: '/proxy-cms'
        },
        {
          name: '投诉管理',
          path: '/complain'
        }
      ]
    }
  },
  methods: {
    // 判断是否有权限跳转
    checkAuthority(path) {
      this.$router.push({ path })
    }
  }
}
</script>

<style lang="less" scoped>
.catalogue-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 26px;
  color: #333;
}
.catalogue-item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 80px;
  margin-top: 30px;
  border: 1px solid #333;
}
</style>
