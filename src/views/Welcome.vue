<template>
  <div class="site-content ">
    <div class="home-header-entry">
      <h1 class="home-header-entry__title">APS高级计划系统</h1>
      <p style="line-height: 2em;font-weight: 700;">
        APS高级计划系统，是以有限能力、可变生产提前期来制作生产计划。可以对应需求量的变化、设备产能以及各种生产约束条件后，合理安排具体生产计划。
      </p>
      <div class="to-demos-page">
        <div class="buttons-line">
          <div class="buttons-line__elem button--click">
            <router-link :to="{ path: '/login' }" style="margin-right: 30px;">
              <el-button icon="el-icon-s-custom" class="custom">
                登录
              </el-button>
            </router-link>
            <router-link :to="{ path: '/home' }">
              <el-button type="primary" icon="el-icon-video-play" class="play">
                进入
              </el-button>
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <div class="dhx-3d-container" v-if="false">
      <div class="h-level h-level-1">
        <img src="../assets/demo/shadow.png" />
      </div>
      <div class="h-level h-level-2">
        <img src="../assets/demo/shadow2.png" />
      </div>
      <div class="h-level h-level-3">
        <img src="../assets/demo/basis.png" />
      </div>
      <div class="h-level h-level-4">
        <img src="../assets/demo/chart.png" />
      </div>
      <div class="h-level h-level-5">
        <img src="../assets/demo/shadow3.png" />
      </div>
      <div class="h-level h-level-6">
        <img src="../assets/demo/levelup.png" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style langs="less" scoped>
#myNavbar {
  background: #2095f3;
}
.site-content {
  display: flex;
  align-items: center;
  height: 100vh;
  margin: 0;
  background: #1877d3;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#1877d3),
    to(#03a9f4)
  );
  background-color: #2095f3;
  color: #fff;
  background: url("../assets/welcomeBag.jpg");
  background-size: 100%;
}
.home-header-entry {
  width: 500px;
  margin-left: 200px;
  color: #1f55c1;
}
.home-header-entry p {
  font-weight: 500 !important;
  color: #1049bd;
  line-height: 46px;
  font-size: 22px;
}
.home-header-entry__title {
  font-size: 50px;
  color: #1049bd;
  font-weight: bold;
}
.dhx-3d-container {
  position: absolute;
  right: 0px;
  top: 50px;
  width: 1213px;
  height: 949px;
  margin: 0 auto;
  z-index: 10;
}
.h-level {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  -webkit-transition: all 2s ease;
  transition: all 2s ease;
}
.to-demos-page .custom {
  display: inline-block;
  width: 180px;
  height: 46px;
  border-radius: 23px;
  line-height: 0;
  background: linear-gradient(90deg, #ff8735, #f66961);
  color: #ffffff;
}
.to-demos-page .play {
  display: inline-block;
  width: 180px;
  height: 46px;
  border-radius: 23px;
  background: #266de3;
  border: 1px solid;
  color: #eeeeee #276de3;
}
</style>
