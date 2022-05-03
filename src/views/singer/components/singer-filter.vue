<template>
  <div class="filter-container">
    <el-row>
      <el-col class="col-box clearfix">
        <div class="left"><i class="title">语种:</i></div>
        <div class="right">
          <span
            :class="{ active: index1 === i }"
            v-for="(item, i) in language"
            :key="i"
            @click="changeLan(i, item)"
            >{{ item.title }}</span
          >
        </div>
      </el-col>
      <el-col class="col-box clearfix">
        <div class="left"><i class="title">分类:</i></div>
        <div class="right">
          <span
            :class="{ active: index2 === i }"
            v-for="(item, i) in classify"
            :key="i"
            @click="changeCla(i, item)"
            >{{ item.name }}</span
          >
        </div>
      </el-col>
      <el-col class="col-box clearfix">
        <div class="left"><i class="title">筛选:</i></div>
        <div class="right">
          <span
            :class="{ active: index3 === i }"
            v-for="(item, i) in filterData"
            :key="i"
            @click="changeFil(i, item)"
            >{{ item }}</span
          >
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "SingerFilter",
  data() {
    return {
      language: [
        { title: "全部", id: -1 },
        { title: "华语", id: 7 },
        { title: "欧美", id: 96 },
        { title: "日本", id: 8 },
        { title: "韩国", id: 16 },
        { title: "其他", id: 0 },
      ],
      classify: [
        { name: "全部", id: -1 },
        { name: "男歌手", id: 1 },
        { name: "女歌手", id: 2 },
        { name: "乐队组合", id: 3 },
      ],
      filterData: [
        "热门",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
      ],
      index1: 0,
      index2: 0,
      index3: 0,
    };
  },
  methods: {
    changeLan(i, item) {
      this.index1 = i;
      this.$emit("changeLan", item.id);
    },
    changeCla(i, item) {
      this.index2 = i;
      this.$emit("changeCla", item.id);
    },
    changeFil(i, item) {
      this.index3 = i;
      this.$emit("changeFil", item);
    },
  },
};
</script>

<style lang="less" scoped>
.filter-container {
  .clearfix:after,
  .clearfix:before {
    content: "";
    display: block;
    clear: both;
  }

  .col-box {
    font-size: 13px;
    color: #444;
    height: 30px;
    line-height: 30px;
    margin-bottom: 10px;
    *zoom: 1;
    .right,
    .left {
      float: left;
      i {
        margin: 0 10px 0 0;
        padding: 0;
      }
    }
    .right {
      max-width: 600px;
    }
    i,
    span {
      font-style: normal;

      padding: 1px 10px;

      margin: 0 10px;
      border-radius: 15px;
      position: relative;
    }
    span {
      opacity: 0.8;
      text-align: center;
      cursor: pointer;
      &.active {
        background-color: rgba(236, 65, 65, 0.1);
        color: rgb(236, 65, 65);
      }
      &:hover {
        background-color: rgba(236, 65, 65, 0.1);
      }
      &::after {
        content: "|";
        position: absolute;
        right: -13px;
        top: -3px;
        color: #efefef;
      }
      &:last-child {
        &::after {
          content: "";
        }
      }
    }
  }
}
</style>
