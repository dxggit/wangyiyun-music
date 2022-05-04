<template>
  <div class="highquality-container">
    <div class="top">
      <div class="title">精品歌单</div>
      <div class="btn">
        <button>电子</button>
      </div>
    </div>
    <el-row :gutter="4" class="item-box">
      <el-col :span="8" class="item" v-for="item in list" :key="item.id">
        <el-row type="flex">
          <el-col class="left" :span="14">
            <img
              v-imgLazyLoad="
                item.coverImgUrl === '' ? defaultImg : item.coverImgUrl
              "
              alt=""
            />
          </el-col>
          <el-col class="right">
            <div class="title">{{ item.name }}</div>
            <div class="artisis">{{ item.description }}</div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <div class="palcehoder"></div>
  </div>
</template>

<script>
import { highqualityList } from "@/api/found-music";
export default {
  name: "highquality",
  data() {
    return {
      list: [],
      tag: "华语",
      before: "",
      defaultImg: "../../assets/music-list.png",
    };
  },
  created() {
    this.getList();
  },
  methods: {
    async getList() {
      const data = await highqualityList({
        cat: this.tag,
        before: this.before,
      });
      console.log(data);
      this.list = data.playlists;
    },
  },
};
</script>

<style lang="less" acoped>
.highquality-container {
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    .title {
      font-size: 18px;
      font-weight: 700;
    }
    button {
      padding: 2px 20px;
      border-radius: 20px;
      font-size: 12px;
      border: 2px solid #eee;
      background-color: #fff;
      cursor: pointer;
      &:hover {
        background-color: #efefef;
      }
    }
  }
  .item-box {
    display: flex;
    flex-wrap: wrap;
  }
  .item {
    margin-bottom: 20px;
    .left {
      img {
        width: 100%;
        border-radius: 5px;
        cursor: pointer;
      }
    }
    .right {
      text-align: left;
      padding: 0 10px;
      .title {
        text-overflow: ellipsis;
        overflow: hidden;
        -webkit-line-clamp: 2;
      }
      .artisis,
      .discription {
        font-size: 12px;
        color: #444;
        opacity: 0.7;
        margin: 20px 0;
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }
  }
  .palcehoder {
    height: 70px;
  }
}
</style>
