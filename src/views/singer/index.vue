<template>
  <div class="singer-container">
    <!-- 选择 区域 -->
    <div class="filter-box">
      <SingerFilter
        @changeLan="changeLanguage"
        @changeCla="changeClassify"
        @changeFil="changeFilter"
      ></SingerFilter>
    </div>
    <!-- 列表区域 -->
    <div class="list-box">
      <SingerList :artistList="singerList" :loading="loading"></SingerList>
    </div>
  </div>
</template>

<script>
// import { scrollLoading } from "@/utils/tools";
import { singerList } from "@/api/found-music";
import SingerFilter from "./components/singer-filter.vue";
import SingerList from "./components/singer-list.vue";
import { mapState } from "vuex";
export default {
  name: "Singer",
  components: { SingerFilter, SingerList },
  data() {
    return {
      loading: true,

      singerList: [],
      paramsData: {
        type: -1,
        area: -1,
        initial: -1,
        offset: 1,
      },
    };
  },
  computed: {
    ...mapState(["loadingMore"]),
  },
  created() {
    this.getList();
  },
  mounted() {},
  watch: {
    loadingMore: {
      handler(newVal) {
        if (newVal) {
          this.paramsData.offset += 1;
          this.getList();
        }
      },
      // immediate: true,
    },
  },
  methods: {
    async getList() {
      this.loading = true;
      try {
        const data = await singerList(this.paramsData);
        console.log(data);
        if (data.artists && data.artists.length > 0) {
          this.singerList = [...this.singerList, ...data.artists];
        } else {
          this.message("没有更多了");
        }

        // this.loading = false;
      } catch (err) {
        console.log(err.response);
        this.message.error("数据获取失败，请稍后再试");
      } finally {
        setTimeout(() => (this.loading = false), 1000);
        this.$store.commit("chengeLoading", false);
      }
    },
    //选择语言
    changeLanguage(id) {
      this.paramsData.area = id;
      // 初始化数据
      this.initData();
      //请求数据
      this.getList();
    },
    //选择类别
    changeClassify(id) {
      this.paramsData.type = id;
      // 初始化数据
      this.initData();
      //请求数据
      this.getList();
    },
    //选择字母
    changeFilter(item) {
      if (item === "热门") {
        this.paramsData.initial = -1;
      }
      this.paramsData.initial = item;
      // 初始化数据
      this.initData();
      //请求数据
      this.getList();
    },
    initData() {
      this.paramsData.offset = 1;
      this.singerList = [];
    },
  },
};
</script>

<style lang="less" scoped>
.singer-container {
  text-align: left;
  width: 100%;
  min-width: 1050px;
  .filter-box {
    height: 200px;
  }
  &::after {
    content: "";
    height: 80px;
  }
}
</style>
