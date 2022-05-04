<template>
  <div class="home-container">
    <!-- 顶部导航栏 -->
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1" @click="$router.push('/')">个性推荐</el-menu-item>
      <el-menu-item index="2">专属定制</el-menu-item>
      <el-menu-item index="3" @click="$router.push('/music-list')"
        >歌单</el-menu-item
      >
      <el-menu-item index="4" @click="$router.push('/toplist')"
        >排行榜</el-menu-item
      >
      <el-menu-item index="5" @click="$router.push('/singer')"
        >歌手</el-menu-item
      >
      <el-menu-item index="6" @click="$router.push('/new-music')"
        >最新音乐</el-menu-item
      >
    </el-menu>
    <!-- 主要内区 -->

    <div class="main-container">
      <!-- 发现音乐下的二级路由 -->

      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",

  data() {
    return {
      activeIndex: null,
    };
  },
  watch: {
    $route: {
      handler() {
        this.checkRouter();
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    handleSelect(key) {
      if (key == 1) {
        this.activeComponents = "Recommendation";
      } else if (key == 2) {
        console.log(11);
      } else if (key == 3) {
        this.activeComponents = "MusicList";
      }
      console.log(key);
      // console.log(this.activeComponents);
    },
    checkRouter() {
      setTimeout(() => {
        console.log(this.$route.path);
        if (this.$route.path === "/") {
          this.activeIndex = "1";
        } else if (this.$route.path.match("/music-list")) {
          this.activeIndex = "3";
        } else if (this.$route.path === "/toplist") {
          this.activeIndex = "4";
        } else if (this.$route.path === "/singer") {
          this.activeIndex = "5";
        } else if (this.$route.path === "/new-music") {
          this.activeIndex = "6";
        }
      }, 0);
    },
    btn() {
      console.log(this.$el.scrollTop);
    },
  },
};
</script>

<style lang="less" scoped>
.home-container {
  width: 85%;
  izontal {
    border: none;
    font-size: 18px;
    padding-left: 25px;
  }
  .el-menu-item {
    font-size: 18px;
    color: #444;
    border-bottom: 3px solid #fff;
  }
  .el-menu--horizontal > .el-menu-item.is-active {
    border-bottom: 3px solid #ec4141;
    transition: all 0.6s;
    font-weight: 700;
    font-family: "KaiTi_GB2312";
  }
  .main-container {
    margin: 20px 110px;
    height: 520px;
    // background-color: #444;
  }
}
</style>
