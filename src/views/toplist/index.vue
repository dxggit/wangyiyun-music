<template>
  <div class="toplist-container">
    <div class="container-top" v-show="list.length">
      <!-- 官方榜 -->
      <div class="official-list title">官方榜</div>
      <div
        class="official-list-item"
        v-for="item in officialList"
        :key="item.id"
      >
        <el-row type="flex">
          <div>
            <img :src="item.coverImgUrl" alt="" class="image" />
          </div>
          <el-col>
            <div class="col-item" v-for="i in 5" :key="i">
              <span :class="{ red: i < 4 }">{{ i }}</span>
              <span>133%</span>
              <span>靠近(Live)</span>
              <span>yihuik苡惠/小包Zerinn</span>
            </div>
            <div class="all">
              <a href="javascript:;"
                >查看全部<i class="el-icon-arrow-right"></i
              ></a>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="container-bottom" v-show="list.length">
      <div class="title">全球榜</div>
      <div class="global-list">
        <el-row :gutter="15">
          <el-col
            :span="4"
            class="global-list-item"
            v-for="item in globallist"
            :key="item.id"
          >
            <img :src="item.coverImgUrl" alt="" class="image" />
            <div class="text">{{ item.name }}</div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="placehoder"></div>
  </div>
</template>

<script>
import { toplist } from "@/api/found-music";
export default {
  name: "TopList",
  data() {
    return {
      list: [],
    };
  },
  computed: {
    officialList() {
      return this.list.slice(0, 4) || [];
    },
    globallist() {
      const len = this.list.length;

      return this.list.slice(5, len) || [];
    },
  },
  created() {
    this.getToplist();
  },
  methods: {
    async getToplist() {
      try {
        const data = await toplist();
        console.log(data);
        this.list = data.list;
      } catch (err) {
        this.$message.error("数据获取失败，请稍后重试");
      }
    },
  },
};
</script>

<style lang="less" scoped>
.toplist-container {
  text-align: left;
  width: 100%;
  .title {
    margin-bottom: 10px;
    font-size: 20px;
    font-weight: 700;
  }
  .official-list-item {
    min-width: 700px;
    margin-bottom: 40px;
    .image {
      width: 183px;
      display: block;
      border-radius: 5px;
      margin-right: 25px;
      cursor: pointer;
    }
    .col-item {
      padding: 8px;
      cursor: pointer;
      &:nth-child(odd) {
        background-color: #efefef;
        opacity: 0.7;
      }
      &:nth-child(even) {
        background-color: #fff;
      }
      &:hover {
        background-color: #efefef;
        opacity: 1;
      }
      display: flex;
      span {
        font-size: 13px;
        margin-right: 10px;
        color: #444;
        opacity: 0.6;
        &.red {
          color: red;
          opacity: 1;
        }
        &:nth-child(4) {
          margin-left: auto;
          margin-right: 0;
        }
        &:nth-child(3) {
          color: black;
          opacity: 1;
        }
      }
    }
    .all {
      margin-top: 5px;
      padding-left: 8px;
      a {
        font-size: 12px;
        opacity: 0.7;
        &:hover {
          opacity: 1;
          color: #444;
        }
      }
    }
  }
  .container-bottom {
    margin-top: 10px;
    .global-list {
      .global-list-item {
        margin-bottom: 20px;
        .image {
          width: 100%;
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
      }
    }
  }
  .placehoder {
    width: 100%;
    height: 70px;
  }
}
</style>
