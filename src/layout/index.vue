<template>
  <div class="container">
    <!-- 头部 -->
    <MyHeader></MyHeader>

    <el-container class="inside">
      <!-- 侧边栏 -->
      <!-- 占位用 -->
      <el-aside class="placeholder"></el-aside>
      <MyAside></MyAside>

      <router-view></router-view>
    </el-container>
    <el-footer>footer</el-footer>
  </div>
</template>

<script>
import MyHeader from "./components/my-header";
import MyAside from "./components/my-aside.vue";
export default {
  components: { MyHeader, MyAside },
  data() {
    return {};
  },

  methods: {
    gototop() {
      const el = document.getElementsByClassName("el-main");
      console.log("", el[0].scrollTop);
      el[0].scrollTop = 0;
    },
  },
};
</script>

<style lang="less" scoped>
.el-header {
  // background-color: #b3c0d1;
  // color: #333;
  min-width: 1000px;
  text-align: center;
  line-height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
}
.placeholder {
  width: 200px !important;
}
.el-footer {
  min-width: 1000px;
  text-align: center;
  border-top: 1px solid #ccc;
  box-sizing: border-box;
  line-height: 60px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  background-color: #fff;
}
.el-main {
  background-color: #fff;
  color: #333;
  padding: 0;
  height: 83vh;
  min-width: 1000px;
}
/* 设置滚动条的样式 */
::-webkit-scrollbar {
  width: 12px;
}
/* 滚动槽 */
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset006pxrgba(0, 0, 0, 0.3);
  border-radius: 10px;
}
/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: inset006pxrgba(0, 0, 0, 0.5);
}
::-webkit-scrollbar-thumb:window-inactive {
  background: rgba(255, 0, 0, 0.4);
}

body > .el-container {
  // margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.el-container.is-vertical {
  min-width: 1300px;
}
.el-container.inside {
  padding: 60px 0;
}
</style>
