<template>
  <el-aside width="200px">
    <ul class="top">
      <li
        :class="{ 'active-top': activeTop === index }"
        v-for="(item, index) in asideTopData"
        :key="index"
        @click="topClick(index)"
      >
        {{ item }}
      </li>
    </ul>
    <div class="middle">
      <div class="my-music">我的音乐</div>
      <ul>
        <li
          :class="{ 'active-middle': activeMiddle === index }"
          v-for="(item, index) in asideMiddleData"
          :key="index"
          @click="middleClick(index)"
        >
          <i :class="item.icon"></i>
          {{ item.title }}
        </li>
      </ul>
    </div>
    <div class="bottom">
      <div class="create-music">
        <span>创建的歌单</span>
        <i class="el-icon-caret-bottom"></i>
        <i class="el-icon-plus"></i>
      </div>
      <ul class="create-list">
        <li
          :class="{ 'active-bottom': activeBottom === index }"
          v-for="(item, index) in asideBottomData"
          :key="index"
          @click="bottomClick(index)"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </el-aside>
</template>

<script>
export default {
  name: "MyAside",
  data() {
    return {
      asideTopData: ["发现音乐", "博客", "关注", "直播", "私人FM"],
      asideMiddleData: [
        {
          title: "本地与下载",
          icon: "el-icon-sold-out",
        },
        {
          title: "最近播放",
          icon: "el-icon-time",
        },
        {
          title: "我的音乐云盘",
          icon: "el-icon-cloudy",
        },
        {
          title: "我的博客",
          icon: "el-icon-copy-document",
        },
        {
          title: "我的收藏",
          icon: "el-icon-folder",
        },
      ],
      asideBottomData: ["我喜欢的音乐"],
      activeTop: 0,
      activeMiddle: null,
      activeBottom: null,
    };
  },
  methods: {
    topClick(index) {
      this.activeTop = index;
      this.activeMiddle = null;
      this.activeBottom = null;
    },
    middleClick(index) {
      this.activeTop = null;
      this.activeMiddle = index;
      this.activeBottom = null;
    },
    bottomClick(index) {
      this.activeTop = null;
      this.activeMiddle = null;
      this.activeBottom = index;
    },
  },
};
</script>

<style lang="less" scoped>
.el-aside {
  background-color: #fff;
  color: #333;
  border-right: 1px solid #cccc;
  // text-align: center;
  // line-height: 200px;
  height: 84.2vh;
  padding: 15px 5px 15px 15px;
  position: fixed;
  left: 0;
  top: 60px;
  z-index: 999;
  .top {
    li {
      margin-bottom: 5px;
      box-sizing: border-box;
      padding-left: 10px;
      width: 170px;
      height: 35px;
      border-radius: 5px;
      line-height: 35px;
      // background-color: aqua;
      text-align: left;
      font-size: 18px;
      &.active-top {
        font-weight: 600;
        font-family: "KaiTi_GB2312";
        background-color: #efefef;
      }
    }
  }
  .middle {
    box-sizing: border-box;

    text-align: left;

    .my-music {
      padding-left: 10px;
      margin: 5px 0;
      font-size: 14px;
      color: #cccc;
    }
    li {
      margin-bottom: 5px;
      padding-left: 10px;
      width: 160px;
      height: 35px;
      border-radius: 5px;
      line-height: 35px;
      // background-color: aqua;
      text-align: left;
      font-size: 18px;
      &.active-middle {
        background-color: #efefef;
      }
    }
  }
  .bottom {
    text-align: left;
    .create-music {
      padding-left: 10px;
      margin: 5px 0;
      font-size: 14px;
      color: #cccc;
      i {
        &:nth-child(3) {
          float: right;
          margin-right: 10px;
          margin-top: 3px;
        }
      }
    }
    .create-list {
      li {
        margin-bottom: 5px;
        padding-left: 10px;
        width: 160px;
        height: 35px;
        border-radius: 5px;
        line-height: 35px;
        // background-color: aqua;
        text-align: left;
        font-size: 18px;
        &.active-bottom {
          background-color: #efefef;
        }
      }
    }
  }
}
</style>
