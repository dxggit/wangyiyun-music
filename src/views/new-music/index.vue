<template>
  <div class="newmusic-container">
    <div class="chioce-buttn">
      <el-button
        :class="{ active: index === 1 }"
        type="primary"
        round
        @click="change(1, 'NewCourier')"
        >新歌速递</el-button
      >
      <el-button
        :class="{ active: index === 2 }"
        type="primary"
        round
        @click="change(2, 'NewAblum')"
        >新碟上架</el-button
      >
    </div>
    <!-- 选项栏 -->
    <el-row>
      <el-col :span="24" class="type">
        <div class="left">
          <span
            @click="changeType(item, i)"
            :class="{ active: index1 === i }"
            v-for="(item, i) in type"
            :key="i"
          >
            {{ item.title }}
          </span>
        </div>
        <div class="right">
          <template v-if="activeComponent === 'NewCourier'">
            <span
              class="play-all"
              :class="{ active: index2 === 1 }"
              @click="recommonBtn(1)"
              ><i class="el-icon-video-play"></i> 全部播放</span
            >
            <span
              class="select-all"
              :class="{ active: index2 === 2 }"
              @click="recommonBtn(2)"
              ><i class="el-icon-folder-add"></i> 全部收藏</span
            >
          </template>
          <template v-else>
            <span :class="{ active: index2 === 1 }" @click="recommonBtn(1)"
              >推荐</span
            >
            <span :class="{ active: index2 === 2 }" @click="recommonBtn(2)"
              >全部</span
            >
          </template>
        </div>
      </el-col>
    </el-row>

    <!-- 动态组件 -->
    <component :is="activeComponent" :type="paramsData"></component>
  </div>
</template>

<script>
import NewAblum from "./components/new-album.vue";
import NewCourier from "./components/new-music.vue";
export default {
  name: "NewMusic",
  components: {
    NewAblum,
    NewCourier,
  },

  data() {
    return {
      activeComponent: "NewCourier",
      index: 1,
      index1: 0,
      index2: 1,
      loading: false,

      type: [
        { title: "全部", id: 0 },
        { title: "华语", id: 7 },
        { title: "欧美", id: 96 },
        { title: "日本", id: 8 },
      ],
      paramsData: { type: 0 },
    };
  },
  watch: {},
  methods: {
    change(i, component) {
      if (this.activeComponent !== component) {
        this.index = i;
        this.activeComponent = component;
        this.index1 = 0;
        this.paramsData.type = 0;
      }
    },

    changeType(item, i) {
      // console.log(1);

      this.paramsData.type = item.id;
      this.index1 = i;
    },
    recommonBtn(i) {
      // console.log(111);
      this.index2 = i;
    },
  },
};
</script>

<style lang="less" scoped>
.newmusic-container {
  text-align: left;
  min-width: 1050px;
  .chioce-buttn {
    margin: 0 auto;
    width: 220px;
    display: flex;
    justify-content: space-between;

    border: 1px solid #ccc;
    border-radius: 25px;

    .el-button--primary {
      background-color: #fff;
      border: none;
      color: #444;
      font-size: 13px;
      &.active {
        background-color: #ccc;
        border: none;
        color: #fff;
      }
    }
  }
  .type {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    height: 30px;
    z-index: 99;
    padding: 0 15px;
    .left {
      span {
        display: inline-block;
        padding: 0 15px;
        &:hover {
          cursor: pointer;
        }
        &.active {
          font-weight: 700;
          font-family: "KaiTi_GB2312";
        }
        &:nth-child(1) {
          padding-left: 0;
        }
      }
    }
    .right {
      span {
        padding: 0 15px;
        &:hover {
          cursor: pointer;
        }
        &.active {
          background-color: rgba(236, 65, 65, 0.1);
          color: red;
          border-radius: 15px;
        }
        &.play-all,
        &.select-all {
          padding: 2px 15px;
          margin-right: 10px;
          border: 1px solid #eee;
          border-radius: 10px;
          &.active {
            color: #fff;
            background-color: red;
            border: none;
          }
        }
      }
    }
  }
  .title {
    margin: 30px 0;
    font-size: 18px;
    font-family: "KaiTi_GB2312";
  }
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
      font-size: 13px;
      margin-top: 5px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      &:nth-child(3) {
        font-size: 12px;
        color: #444;
        opacity: 0.6;
      }
    }
    .loading {
      height: 60px;
      text-align: center;
      // background-color: red;
    }
  }
}
</style>
