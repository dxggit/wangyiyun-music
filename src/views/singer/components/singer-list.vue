<template>
  <div class="list-container">
    <el-row :gutter="15">
      <el-col
        :span="4"
        v-for="(item, index) in artistList"
        :key="index"
        class="item"
      >
        <!-- <el-skeleton style="width: 170px" :loading="loading" animated>
          <template slot="template">
            <el-skeleton-item
              variant="image"
              style="width: 170px; height: 170px"
            />
          </template>
          <template>
            <el-image :src="item.img1v1Url" class="image" lazy />
          </template>
        </el-skeleton>

        <div class="text">{{ item.name }}</div> -->
        <el-skeleton style="width: 170px" :loading="loading" animated>
          <template slot="template">
            <el-skeleton-item
              variant="image"
              style="width: 170px; height: 170px"
            />
            <el-skeleton-item variant="text" style="margin-right: 16px" />
          </template>
          <template>
            <el-image
              @load="showText = true"
              :src="item.img1v1Url"
              class="image"
            />
            <div class="text" v-show="showText">{{ item.name }}</div>
          </template>
        </el-skeleton>
      </el-col>
    </el-row>
    <div class="loading" v-loading="loading"></div>
  </div>
</template>

<script>
export default {
  name: "SingerList",
  props: {
    artistList: {
      type: Array,
      default: () => [],
    },
    loading: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      showText: false,
    };
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.list-container {
  .item {
    margin-bottom: 20px;
  }
  .image {
    width: 170px;
    height: 170px;
    display: block;
    border-radius: 5px;
    cursor: pointer;
  }
  .text {
    width: 100%;
    font-size: 14px;
    margin-top: 5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .loading {
    height: 60px;
    text-align: center;
    // background-color: red;
  }
}
</style>
