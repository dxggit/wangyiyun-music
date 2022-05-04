<template>
  <div class="new-music-container">
    <el-col
      class="list-item"
      :span="24"
      v-for="(item, i) in showList"
      :key="item.id"
    >
      <el-row>
        <el-col class="item-left" :span="12">
          <span>{{ (i + 1) | filterNum }}</span>
          <img v-imgLazyLoad="item.pic" class="image" alt="" />
          <span>{{ item.name }}</span>
        </el-col>
        <el-col class="right" :span="12">
          <span>{{ item.artistsName }}</span>
          <span>{{ item.name }}</span>
          <span>{{ item.playTime | filterTime }}</span>
        </el-col>
      </el-row>
    </el-col>
  </div>
</template>

<script>
import { newMusicList } from "@/api/found-music";
export default {
  name: "NewCourier",
  props: {
    type: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      musicList: [],
    };
  },
  computed: {
    showList() {
      let result = [];
      if (this.musicList && this.musicList.length) {
        this.musicList.forEach((item) => {
          let name = item.name;
          let artistsName = item.artists[0].name || "";
          let playTime = item.bMusic.playTime || "";
          let id = item.id;
          let pic = item.album.picUrl;
          result.push(
            Object.assign({}, { name, artistsName, playTime, id, pic })
          );
        });
      }

      return result;
    },
  },
  created() {},
  watch: {
    type: {
      handler(newVal) {
        if (newVal) {
          this.type = newVal;
          this.musicList = [];
          this.getList();
        }
      },
      immediate: true,
      deep: true,
    },
  },
  methods: {
    async getList() {
      const { data } = await newMusicList(this.type);
      console.log(data);
      this.musicList = data;
    },
  },
};
</script>

<style lang="less" scoped>
.new-music-container {
  .list-item {
    height: 80px;
    line-height: 80px;
    margin: 15px 0;
    padding: 0 15px;
    border-radius: 5px;
    cursor: pointer;

    &:nth-child(2n-1) {
      background-color: rgba(183, 179, 179, 0.1);
    }
    &:hover {
      background-color: #eee;
    }
    .item-left {
      .image {
        width: 60px;
        border-radius: 10px;
        padding: 10px;
      }
      span {
        font-size: 14px;
        &:nth-child(1) {
          font-size: 12px;
          color: #444;
          opacity: 0.5;
        }
      }
    }
    .right {
      display: flex;
      justify-content: space-between;
      color: #858484;
      font-size: 14px;
    }
  }
}
</style>
