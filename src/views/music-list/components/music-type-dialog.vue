<template>
  <div class="musci-type-container" v-if="showDialog">
    <div class="top">
      <span>{{ title }}</span>
    </div>
    <div class="content">
      <div
        class="content-item"
        v-for="(obj, index) in categoryList"
        :key="index"
      >
        <div class="item-left">
          <i :class="icons[index]"></i>{{ obj.title }}
        </div>
        <ul class="item-right">
          <li
            @click="changeType(type)"
            :class="{ active: activeIndex === type.name }"
            v-for="(type, i) in obj.subs"
            :key="i"
          >
            {{ type.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { catList } from "@/api/found-music";
export default {
  name: "MUsicType",
  props: {
    showDialog: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    categoryList() {
      let result = [];

      Object.keys(this.catList.categories).forEach((key) => {
        let subs = this.catList.sub.filter((item) => item.category == key);
        result.push({
          title: this.catList.categories[key],
          id: key,
          subs,
        });
      });
      return result;
    },
  },
  data() {
    return {
      title: "全部歌曲",
      catList: {},
      icons: [
        "el-icon-eleme",
        "el-icon-s-operation",
        "el-icon-goblet-square-full",
        "el-icon-sunny",
        "el-icon-present",
      ],
      activeIndex: null,
    };
  },
  mounted() {
    this.getCateList();
  },
  methods: {
    changeType(type) {
      this.activeIndex = type.name;
      this.title = type.name;
      this.$emit("changeType", { show: false, value: type.name });
    },
    async getCateList() {
      try {
        const data = await catList();
        console.log(data);
        this.catList = data;
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style lang="less">
.musci-type-container {
  width: 720px;
  border: 1px solid #eee;
  position: absolute;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: -1px -1px 5px 0px #eee;
  top: 40px;
  left: 0;
  z-index: 10;

  // box-sizing: border-box;
  .top {
    padding: 20px;
    font-size: 14px;
    border-bottom: 1px solid #eee;
    span {
      // border: 1px solid #444;
      padding: 5px 10px;
      border-radius: 20px;
      color: rgb(236, 65, 65);
      background-color: rgba(236, 65, 65, 0.1);
    }
  }
  .content {
    padding: 20px;
    font-size: 14px;
    height: 100%;
    .content-item {
      margin-bottom: 20px;
      .item-left {
        color: #444;
        opacity: 0.5;
        float: left;
        width: 100px;
        height: 30px;
        margin: 0 20px 0 0;
        i {
          display: inline-block;
          font-size: 25px;
          vertical-align: middle;
          padding: 0 10px 0 0;
        }
      }
      .item-right {
        display: flex;
        flex-wrap: wrap;

        li {
          display: inline-block;
          margin: 0 20px 20px 20px;
          cursor: pointer;
          &:hover {
            color: red;
          }
          &.active {
            color: red;
          }
        }
      }
    }
  }
}
</style>
