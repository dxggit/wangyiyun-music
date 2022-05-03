<template>
  <div class="new-music-container">
    <el-row class="list-box">
      <el-col class="list-item" :span="24">
        <div class="item-left">
          <span>序号</span>
          <img src="../../../assets/wangyi-commen.png" alt="" />
          <span>名称</span>
        </div>
        <div class="right">
          <span>作者</span>
          <span>节目</span>
          <span>时长</span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "NewMusic",
  props: {
    type: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style></style>
