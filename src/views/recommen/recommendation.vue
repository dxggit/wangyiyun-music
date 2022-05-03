<template>
  <div class="recommen-container">
    <!-- 轮播图 -->

    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="(item, index) in banners" :key="index">
        <img :src="item.imageUrl" alt="" class="banner-imgs" />
      </el-carousel-item>
    </el-carousel>
    <!-- //新歌推荐 -->

    <div v-if="commenList.length">
      <router-link to="/music-list" class="commen-list">
        推荐歌单 <i class="el-icon-arrow-right"></i>
      </router-link>

      <el-row class="col-list" type="flex" justify="space-between">
        <el-col :span="4" class="list-item">
          <img src="../../assets/wangyi-commen.png" class="image" />
          <div style="padding: 5px 0 0 0">
            <span class="text">每日歌曲推荐</span>
          </div>
        </el-col>
        <el-col
          :span="4"
          v-for="item in showList"
          :key="item.id"
          class="list-item"
        >
          <img :src="item.picUrl" class="image" />
          <div style="padding: 5px 0 0 0">
            <span class="text">{{ item.name }}</span>
          </div>
        </el-col>
      </el-row>
    </div>

    <!-- 热门播客 -->
    <!-- <div class="box">
      <div class="commen-list">
        热门播客 <i class="el-icon-arrow-right"></i>
      </div>
      <el-row type="flex" justify="space-between">
        <el-col :span="10" class="hot-item">
          <el-row type="flex" :gutter="7">
            <el-col :span="4" class="item-left">
              <img src="../../assets/wangyi-commen.png" alt="" class="image" />
            </el-col>
            <el-col :span="7" class="item-right">
              <div class="title">标题</div>
              <div class="type">类型</div>
              <div class="info">
                <span>系列</span>
                <span>播放量</span>
                <span>时长</span>
              </div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div> -->

    <!-- 推荐mv -->
    <div class="mv-box">
      <div class="commen-list">推荐MV <i class="el-icon-arrow-right"></i></div>
      <el-row type="flex" justify="space-between" class="mv-list">
        <el-col class="mv-item" :span="5" v-for="item in mvList" :key="item.id">
          <img :src="item.picUrl" class="img" />
          <div style="padding: 5px 0 0 0">
            <span class="text">{{ item.name }}</span>
            <span>{{ item.artistName }}</span>
          </div>
        </el-col>
      </el-row>
    </div>

    <!-- 独家放送 -->
    <div class="exclusive-box">
      <div class="commen-list">
        独家放送 <i class="el-icon-arrow-right"></i>
      </div>
      <el-row type="flex" justify="space-between" class="exclusive-list">
        <el-col
          class="exclusive-item"
          :span="7"
          v-for="item in exclusiveList"
          :key="item.id"
        >
          <img :src="item.picUrl" class="img" />
          <div style="padding: 5px 0 0 0">
            <span class="text">{{ item.name }}</span>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="placehoder"></div>
  </div>
</template>

<script>
import {
  foundMusicInfo,
  commenMusicList,
  commenMVList,
  exclusiveList,
} from "@/api/found-music";
export default {
  name: "Recommendation",
  data() {
    return {
      banners: [],
      limit: 30,
      commenList: [],
      mvList: [],
      exclusiveList: [],
    };
  },
  computed: {
    showList() {
      return this.commenList.slice(0, 9);
    },
  },
  created() {
    this.getHomeData();
    this.getCommenList();
    this.getCommenMv();
    this.getExclusiveList();
  },
  methods: {
    //轮播图
    async getHomeData() {
      const { banners } = await foundMusicInfo();
      console.log(banners);
      this.banners = banners;
    },
    //推荐音乐
    async getCommenList() {
      const data = await commenMusicList(this.limit);
      console.log(data);
      this.commenList = data.result;
    },
    //推荐MV
    async getCommenMv() {
      const data = await commenMVList();
      console.log(data);
      this.mvList = data.result;
    },
    //独家放送
    async getExclusiveList() {
      const data = await exclusiveList();
      console.log(data);
      this.exclusiveList = data.result;
    },
  },
};
</script>

<style lang="less" scoped>
.recommen-container {
  text-align: left;
  .banner-imgs {
    width: 100%;
    height: 100%;
  }
  /deep/.el-carousel__button {
    width: 8px;
    height: 8px;
    border-radius: 50%;
  }
  /deep/.el-carousel__indicators--outside button {
    background-color: #ec4141;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
  .commen-list {
    margin-top: 20px;
    font-size: 18px;
    color: #444;
    font-weight: 700;
    font-family: "KaiTi_GB2312";
    cursor: pointer;
  }
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }
  .image {
    width: 100%;
    display: block;
    border-radius: 5px;
  }
  .col-list {
    flex-wrap: wrap;

    .list-item {
      width: 18%;
      margin-top: 10px;
      .text {
        font-size: 14px;
      }
    }
  }
  .hot-item {
    .item-left {
      .image {
        width: 100%;
        display: block;
      }
      .item-right {
        margin-left: 5px;
        .title {
          font-size: 14px;
        }
      }
    }
  }
  .mv-box {
    padding: 5px 0;
    .mv-list {
      margin-top: 10px;
      .mv-item {
        img {
          width: 100%;
          display: block;
          height: 60%;
          border-radius: 5px;
        }
        span {
          display: inline-block;
          width: 100%;
          font-size: 14px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          &:nth-child(2) {
            font-size: 12px;
            color: #cccccc;
          }
        }
      }
    }
  }
  .exclusive-box {
    padding: 5px 0;
    .exclusive-list {
      margin-top: 10px;
      .exclusive-item {
        img {
          width: 100%;
          display: block;
          height: 90%;
          border-radius: 5px;
        }
        span {
          display: inline-block;
          width: 100%;
          font-size: 14px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          &:nth-child(2) {
            font-size: 12px;
            color: #cccccc;
          }
        }
      }
    }
  }
  .placehoder {
    height: 70px;
  }
}
</style>
