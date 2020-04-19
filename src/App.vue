<template>
  <div id="app">
    <div class="back-btn" @click="$router.back()">
      <div class="el-icon-arrow-left"></div>
      <span>返回</span>
    </div>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" />
  </div>
</template>

<style lang="less">
#app {
  width: 100%;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  padding-top: 30px;
}
.back-btn {
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  padding: 10px 0 0 10px;
}
.el-icon-arrow-left {
  font-size: 26px;
  font-weight: 500;
}
</style>
