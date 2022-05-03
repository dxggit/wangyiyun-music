<template>
  <div class="new-album-container">
    <el-col class="title">本周新碟 <i class="el-icon-arrow-right"></i></el-col>
    <div class="list-container">
      <el-row :gutter="15">
        <el-col
          :span="4"
          v-for="(item, index) in showList"
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
              <el-image :src="item.pic" class="image" />
              <div class="text">{{ item.name }}</div>
              <div class="text">{{ item.artistName }}</div>
            </template>
          </el-skeleton>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { newMusicList } from "@/api/found-music";
export default {
  name: "NewAlbum",
  props: {
    type: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      loading: false,
      list: [],
    };
  },
  computed: {
    showList() {
      let newList = [];
      this.list.forEach((item) => {
        let albums = item ? item.album.artists : [];
        let artistName = albums[0].name;
        let pic = albums[0].picUrl;
        newList.push({ ...item.album, artistName, pic });
      });
      return newList;
    },
  },
  watch: {
    type: {
      handler() {
        this.getList();
      },
      immediate: true,
      deep: true,
    },
  },
  methods: {
    async getList() {
      this.loading = true;
      if (this.list.length) {
        this.list = [];
      }
      try {
        const { data } = await newMusicList(this.paramsData);
        console.log(data);
        this.list = data;
      } catch (err) {
        this.$message("获取数据失败，请稍后重试");
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.new-album-container {
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
