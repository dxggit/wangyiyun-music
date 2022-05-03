<template>
  <div class="music-list-container" v-if="list.length">
    <div class="list-top" @click="$router.push('/music-list/highquality')">
      <el-row :gutter="10">
        <el-col :span="3">
          <img src="../../assets/music-list.png" alt="" class="image" />
        </el-col>
        <el-col :span="7">
          <!-- 精品歌单按钮 -->
          <div class="btn">
            <el-button round size="small"
              ><i class="el-icon-medal"></i> 精品歌单</el-button
            >
          </div>
          <div class="text">可爱摇滚 | 一剂可以抵挡春困的上好良药</div>
        </el-col>
      </el-row>
    </div>
    <div class="list-title">
      <!-- 弹出层 -->
      <MUsicType :showDialog="show" @changeType="changeType"></MUsicType>
      <el-row type="flex" justify="space-between" class="flex-box">
        <el-col class="title-left">
          <el-button round size="small" class="btn" @click="showDialog">
            {{ title }} <i class="el-icon-arrow-right"></i
          ></el-button>
        </el-col>
        <el-col class="title-right">
          <el-row type="flex" justify="space-between">
            <div
              :class="{ active: activeIndex === index }"
              class="type-item"
              @click="changeTag(tag, index)"
              v-for="(tag, index) in showTags"
              :key="index"
            >
              {{ tag.name }}
            </div>
          </el-row>
        </el-col>
      </el-row>
    </div>
    <!-- 列表 -->
    <div class="list-contain" ref="container">
      <el-row type="flex" justify="space-between" class="col-list" :gutter="15">
        <el-col
          :span="4"
          v-for="(i, index) in list"
          :key="index"
          class="list-item"
        >
          <el-image
            :src="i.coverImgUrl"
            alt=""
            class="img"
            :lazy="true"
            @load="showText"
          >
          </el-image>
          <div class="text" v-show="imgLoaded">{{ i.name }}</div>
        </el-col>
        <!-- <el-col :span="5" v-for="item in list" :key="item.id" class="list-item">
          <img :src="item.picUrl" class="img" />
          <div style="padding: 5px 0 0 0">
            <span class="text">{{ item.name }}</span>
          </div>
        </el-col> -->
      </el-row>
    </div>
    <!-- 分页 -->
    <el-pagination
      v-if="total > limit"
      background
      :current-page="current"
      :page-size="96"
      :pager-count="11"
      layout="prev, pager, next"
      :total="total"
      @prev-click="current--"
      @next-click="current++"
      @current-change="currentChange"
    >
    </el-pagination>
    <div class="placehoder"></div>
  </div>
</template>

<script>
import { musicList, highqualityTags } from "@/api/found-music.js";
import MUsicType from "./components/music-type-dialog.vue";

export default {
  name: "MusicList",
  components: {
    MUsicType,
  },
  computed: {
    showTags() {
      let newArr = this.highqualityTags.filter((item) => item.type == 0);
      return newArr.slice(0, 10);
    },
  },
  data() {
    return {
      activeIndex: null,
      show: false,
      title: "全部歌单",
      list: [],
      limit: 96,
      imgLoaded: false,
      current: 1,
      page: 1,
      total: 1,
      cat: "全部",
      highqualityTags: [],
    };
  },

  created() {
    this.getList();
    this.getTags();
  },
  watch: {
    current: {
      handler(newVal) {
        if (newVal) {
          this.page = newVal;
          this.getList();
          this.$scrollTo(this.$root.$el);
        }
      },
      // immediate: true,
    },
    cat: {
      handler(newVal) {
        if (newVal) {
          console.log(newVal);
          this.page = 1;
          this.cat = newVal;
          this.current = 1;
          this.getList();
        }
      },
    },
  },
  mounted() {},

  methods: {
    gototop() {
      const el = document.getElementsByClassName("music-list-container");
      var dom = document.getElementById("c");
      el[0].addEventListener("scroll", function () {
        console.log("", dom.scrollTop);
      });
    },
    async getList() {
      const data = await musicList({
        order: "hot",
        limit: this.limit,
        offset: this.page,
        cat: this.cat,
      });
      console.log(data);
      this.list = data.playlists;
      this.total = data.total;
    },
    async getTags() {
      const { tags } = await highqualityTags();
      this.highqualityTags = tags;
    },
    showText() {
      // console.log(e);
      this.imgLoaded = true;
    },
    currentChange(newPage) {
      this.current = newPage;
    },
    gotoTop() {
      const el = this.$refs.container;
      el.scrollTop = 0;
    },
    showDialog() {
      this.show = !this.show;
      // console.log(1112);
    },
    changeType(data) {
      console.log(data);
      this.show = data.show;
      this.title = data.value;
      this.cat = data.value;
    },
    changeTag(tag, index) {
      this.cat = tag.name;
      // console.log(111);
      this.title = tag.name;
      this.activeIndex = index;
    },
  },
};
</script>

<style lang="less">
.music-list-container {
  text-align: left;
  margin-bottom: 60px;

  .list-top {
    padding: 10px;
    background-color: #52804c;
    border-radius: 5px;
    cursor: pointer;
    .text {
      color: #efefef;
      font-size: 16px;
    }
    .image {
      width: 100%;
      border-radius: 5px;
      display: block;
    }
    .btn {
      margin: 20px 0;
      span {
        color: #da9851;
      }
      .el-button.is-round {
        border: 1px solid #da9851;
        color: rgb(74, 112, 64);
        background-color: #52804c;
      }
    }
  }
  .list-title {
    margin: 20px 0;
    position: relative;
    .btn {
      &:hover {
        background-color: #efefef;
        color: #606266;
        border-color: #efefef;
      }
    }
    .flex-box {
      align-items: center;
    }
    .title-right {
      text-align: center;
      font-size: 12px;
      opacity: 0.7;
      .type-item {
        cursor: pointer;
        &:hover {
          opacity: 1;
        }
        &.active {
          color: red;
        }
      }
    }
  }
  // .image {
  //   width: 100%;
  //   display: block;
  //   border-radius: 5px;
  // }
  .list-contain {
    .col-list {
      flex-wrap: wrap;
      .list-item {
        margin-bottom: 20px;
      }
    }
    .img {
      height: 170px;
      display: block;
      border-radius: 5px;
      cursor: pointer;
    }
    .text {
      width: 100%;
      margin: 10px 0;
      font-size: 14px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  .placehoder {
    width: 100%;
    height: 70px;
  }
  .el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: #ec4141;
  }
  .el-pagination {
    text-align: center;
  }
}
</style>
