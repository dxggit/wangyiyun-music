<template>
  <el-header>
    <div class="header-left">
      <!-- logo区域 -->
      <a href="javascript:;" class="logo-box">
        <img src="../../assets/wangyi-logo.png" alt="" class="logo" />
        <div class="text">网易云音乐</div>
      </a>
      <!-- 搜索区域 -->
      <div class="search-box">
        <span class="buttons">
          <i class="el-icon-arrow-left arrow"></i>
          <i class="el-icon-arrow-right arrow"></i>
        </span>
        <span class="search">
          <el-input v-model="input" placeholder="请输入内容">
            <i slot="prefix" class="el-icon-search"></i>
          </el-input>
        </span>
        <span class="microphone">
          <i class="el-icon-mic"></i>
        </span>
      </div>
    </div>
    <div class="header-right">
      <div class="user-box">
        <span>
          <i class="el-icon-user-solid"></i>
        </span>
        <span>用户名<i class="el-icon-caret-bottom"></i></span>
        <span>vip开通</span>
      </div>
      <div class="toolbar">
        <span>
          <i class="el-icon-picture-outline-round"></i>
        </span>
        <span>
          <i class="el-icon-message"></i>
        </span>
        <span>
          <i class="el-icon-setting"></i>
        </span>
      </div>
    </div>
  </el-header>
</template>

<script>
export default {
  name: "MyHeader",
  data() {
    return {
      input: "",
    };
  },
};
</script>

<style lang="less" scoped>
.el-header {
  background-color: #ec4141;
  color: #fff;
  .header-left {
    height: 60px;
    float: left;
    line-height: 55px;

    .logo-box {
      float: left;

      .logo {
        display: inline-block;
        width: 34px;
        height: 34px;
        border-radius: 50%;
        vertical-align: middle;
      }
      .text {
        padding-left: 10px;
        line-height: 34px;
        display: inline-block;
        vertical-align: middle;
        font-family: "KaiTi_GB2312";
        font-size: 20px;
        color: #fff;
      }
    }
    .search-box {
      float: left;
      color: #ccc;
      height: 60px;
      line-height: 57px;
      margin-left: 70px;
      .buttons {
        float: left;
        .arrow {
          width: 25px;
          height: 25px;
          background-color: #d93b3b;
          line-height: 25px;
          margin-left: 10px;
          border-radius: 50%;
        }
      }
      .search {
        float: left;
        margin: 0 20px;
        position: relative;
        /deep/.el-input__inner {
          background-color: #d93b3b;
          border: none;
          border-radius: 25px;
          height: 30px;
          color: #fff;
        }
        i {
          position: absolute;
          top: 8px;
          left: 5px;
        }
      }
      .microphone {
        transform: translateY(50%);
        position: relative;
        display: inline-block;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: #d93b3b;
        .el-icon-mic:before {
          position: absolute;
          top: 8px;
          right: 7px;
          font-size: 16px;
        }
      }
    }
  }
  .header-right {
    float: right;
    span {
      margin-left: 20px;
      display: inline-block;
      vertical-align: middle;
    }
    .user-box {
      float: left;

      height: 60px;
      line-height: 60px;
      span {
        &:nth-child(1) {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          line-height: 40px;
          background-color: #efefef;
        }
        &:nth-child(2) {
          font-size: 14px;
          margin-left: 5px;
        }
        &:nth-child(3) {
          margin-left: 5px;
          width: 65px;
          height: 14px;
          line-height: 14px;
          text-align: center;
          background-color: #cccccc;
          font-size: 12px;
          border-radius: 5px;
        }
      }
    }
    .toolbar {
      float: left;
      height: 60px;
      line-height: 60px;
      span {
        font-size: 25px;
      }
    }
  }
}
</style>
