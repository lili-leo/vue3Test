<template>
  <div
    class="home-content"
    style="position: relative;height:100%;overflow: scroll;"
  >
    <img src="../assets/eman.png" alt="" class="logo" />
    <div class="header-bg"></div>
    <div class="home-box">
      <el-button @click="changeTableFlag" class="history">历史排产</el-button>
      <el-button class="history removeAllCache">清除缓存</el-button>
      <div class="home-header">
        <div class="c-white">APS高级计划系统</div>
        <p style="line-height: 2em;text-align:left">
          APS
          综合考虑企业资源、物料、班组、日历、库存等各种生产约束条件，帮助企业实现
          基于有限产能的精细化计划排程，生成详细的工序计划、以及物料计划，帮助企业实现需求
          与计划的匹配，计划与执行的协调、计划与物料的齐套。 以 TOC-DBR
          约束理论为基础， 最大化瓶颈产能，最大化企业的有效产出
        </p>
      </div>
      <div class="btn-group">
        <router-link :to="{ path: '/WaitArranged' }" target="_blank">
          <el-button style="border-radius: 4px 0px 0px 4px;">
            <i
              class="icon iconfont icon-tubiao_paichan"
              style="font-weight:500"
            ></i>
            <br />
            <span>待排产数据</span>
          </el-button>
        </router-link>
        <el-button href="#" type="primary" class="startProduct">
          <i class="icon iconfont icon-rili" style="font-size:14"></i>
          <br />
          <span>开始排产</span>
        </el-button>
        <router-link :to="{ path: '/setting' }" target="_blank">
          <el-button href="./setting" target="_blank">
            <i class="icon iconfont icon-kongjianpeizhi"></i>
            <br />
            <span>基础配置</span>
          </el-button>
        </router-link>
      </div>
      <div class="progressLine" v-if="progressLineFlag">
        <el-progress
          :text-inside="true"
          :stroke-width="18"
          :percentage="10"
          color="#1b65f9"
        ></el-progress>
        <div class="progressLineP">
          <p v-for="(item, index) in progressLineDates" :key="index">
            {{ item.name }}======={{ item.value }}
            <el-button
              v-if="item.value.indexOf('00%') != -1"
              size="mini"
              type="success"
              icon="el-icon-check"
              circle
            ></el-button>
          </p>
        </div>
      </div>
      <div class="offer" style="color: #353535;">
        当前选择的排产计划为：<el-button
          type="text"
          style="color:#1049BD;cursor: auto;"
          >{{ choiseDate }}</el-button
        >
      </div>
      <el-button
        :disabled="PlanSchedulFlag"
        class="clickFabu"
        :style="{
          background: PlanSchedulFlag ? '#f1a89c' : '#f86f58',
          color: '#eeeeee',
        }"
      >
        发布
      </el-button>
      <div class="views">
        <el-row
          class="row-bg"
          v-for="(row, index) in views"
          :key="'row' + index"
        >
          <el-col :span="24" v-for="view in row" :key="view.path">
            <div class="view">
              <div
                class="info"
                style="margin:auto;width: 1000px;border:1px solid #eeeeee;height:318px;"
              >
                <div style="width:420px">
                  <img
                    :src="getImg(view.img)"
                    class="img-fluid svg_image"
                    alt="icon png"
                    style="display:block ; width:100%;height:100%"
                  />
                </div>
                <div
                  style="flex:1;text-align: left;padding:20px 45px;border-radius: 0px 4px 4px 0px;"
                >
                  <span
                    style="display:inline-block;width: 60px;height: 4px;background: #1B65F9;border-radius: 2px;"
                  ></span>
                  <p style="font-weight:700;font-size: 22px;color: #343434;">
                    {{ view.title }}
                  </p>
                  <p
                    style="font-size:16px;font-weight: 500;color: #4D4D4D;line-height: 30px;"
                  >
                    对APS计算结果进行各纬度的可视化呈现，能够直观有效地帮助计划员快速了解生产计划、
                    物料计划及机组作业安排，并将结果下达到MES。可视化数据分析包含：生产计划甘特图、
                    资源计划甘特图、资源负荷图，物料供应计划等。
                  </p>
                  <el-button
                    type="primary"
                    round
                    :disabled="false"
                    class="PlanSchedulFlag"
                    :style="{
                      background: PlanSchedulFlag ? '#a0cfff' : '#276de3',
                    }"
                    >查看详情&nbsp;&nbsp;>></el-button
                  >
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <el-drawer
        title="历史排产记录"
        v-model="tableFlag"
        :modal="false"
        direction="rtl"
        size="50%"
      >
        <div style="padding:0 10px">
          <el-table
            :data="gridData"
            border
            highlight-current-row
            :height="clientHeight"
          >
            <!-- <el-table-column type="selection" width="55"> </el-table-column> -->.
            <el-table-column label="选择" align="center" width="65">
              <template #default="scope">
                <el-radio :label="scope.$index" v-model="radio"
                  >&nbsp;</el-radio
                >
              </template>
            </el-table-column>
            <el-table-column
              property="apscode"
              label="排产名称"
              min-width="180"
            ></el-table-column>
            <el-table-column
              property="apstime"
              label="排产时间"
              min-width="180"
            ></el-table-column>
            <el-table-column
              property="apsuser"
              label="排产人员"
              min-width="80"
            ></el-table-column>
            <el-table-column property="status" label="发布状态" min-width="80">
              <template #default="scope">
                {{ scope.row.status == 0 ? "待发布" : "已发布" }}
              </template>
            </el-table-column>
            <el-table-column
              property="releasetime"
              label="发布时间"
              min-width="180"
            ></el-table-column>
          </el-table>
        </div>
        <div style="margin-top: 30px;float: right;margin-right:30px">
          <el-button type="primary">查看数据</el-button>
          <!-- <el-button>发布</el-button> -->
        </div>
      </el-drawer>
    </div>
  </div>
</template>
<script lang="ts">
import dayjs from "dayjs";
import { pHistoryRecord } from "@/api/productPlan";
import { defineComponent, ref, reactive } from "vue";
export default defineComponent({
  setup() {
    const clientHeight = ref(0);
    const templateSelection = reactive({});
    const radio = ref("");
    const choiseDate = ref("未选择");
    const progressLineDates = reactive([{ name: "步骤1", value: "进度条10%" }]);
    const progressLineNum = ref(1);
    const progressLineFlag = ref(false);
    const PlanSchedulFlag = ref(true);
    let tableFlag = ref(false);
    let gridData = reactive([]);
    const views = reactive([
      [
        {
          img: "schedulingResults.png",
          title: "排产结果分析",
          path: "productPlan",
        },
      ],
    ]);
    const getImg = (path: string) => {
      return require("../assets/img/" + path);
    };
    const changeTableFlag = () => {
      console.log("changeTableFlag")
      const token = localStorage.getItem("onlyToken");
      pHistoryRecord({ token: token })
        .then((res: any) => {
          console.log(res)
          if (res.code == 200) {
            gridData = res.data.map((item: any) => {
              const apstime = dayjs(item.apstime).format("YYYY-MM-DD HH:mm");
              const releasetime = dayjs(item.releasetime).format(
                "YYYY-MM-DD HH:mm"
              );
              return { ...item, apstime: apstime,releasetime:releasetime };
            });
            tableFlag.value = true;
            // this.$nextTick(() => {
              const label = document.getElementsByClassName("el-radio__label");
              if (label.length) {
                for (let i = 0; i < label.length; i++) {
                  const style=(label[i] as any).style
                  style.display = "none";
                }
              }
            // });
          }
        })
        .catch((err: any) => {console.log(err)});
    };
    return {
      clientHeight,
      templateSelection,
      radio,
      choiseDate,
      progressLineDates,
      progressLineNum,
      progressLineFlag,
      PlanSchedulFlag,
      tableFlag,
      gridData,
      views,
      getImg,
      changeTableFlag,
    };
  },
});
</script>
<style>
.home-content .logo {
  position: absolute;
  left: 20px;
  top: 20px;
  width: 150px;
  height: auto;
}
.home-box {
  width: 1000px;
  margin: auto;
  padding-top: 40px;
  text-align: center;
  color: #fff;
}
.history {
  position: fixed;
  top: 10px;
  right: 10%;
  z-index: 2;
  display: inline-block;
  height: 35px;
  width: 120px;
  border-radius: 60px;
  line-height: 0;
  background: #4f9eff;
  border: 1px solid #4f9eff;
  color: #eeeeee !important;
  background: linear-gradient(-29deg, #6356ff 0%, #4befff 100%);
}
.removeAllCache {
  right: 3%;
}
.history:hover {
  color: #eeeeee !important;
}
.offer {
  font-size: 18px;
  color: #333;
  margin: 30px 0px 30px 15px;
}
.offer .el-button {
  font-size: 18px;
}
.header-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 340px;
  background: #2095f3;
  z-index: -1;
}
.btn-group {
  justify-content: space-evenly;
  margin: 110px auto 20px;
}
.btn-group .el-button {
  width: 240px;
  height: 128px;
  padding: 16px 40px;
  font-size: 16px;
  margin-left: 0;
  background: #ffffff;
  border-radius: 0px 4px 4px 0px;
}
.btn-group .startProduct {
  background: linear-gradient(-29deg, #6356ff 0%, #4befff 100%);
  border-radius: 0;
  border-color: #dcdfe6;
}
.btn-group .el-button i {
  display: inline-block;
  font-size: 40px;
  margin-bottom: 15px;
}
.progressLine {
  color: #333;
  width: 62%;
  margin: auto;
  padding: 20px 5%;
  border: 1px solid #eee;
  border-radius: 5px;
}
.progressLineP {
  display: none;
  margin-top: 10px;
  font-size: 14px;
  height: 180px;
  overflow-x: hidden;
  overflow-y: auto;
  text-align: left;
  padding: 0 24px;
  margin-top: 30px;
  color: #808080;
}
.views {
  color: #333;
  width: 1400px;
  margin-left: -200px;
}
.view {
  position: relative;
  margin: 50px 0;
}
.view h4 {
  color: #2095f3;
  margin-top: 10px;
}
.view img {
  position: relative;
  width: 300px;
  height: 160px;
}
.view .button {
  position: absolute;
  top: 32%;
  left: 40%;
  opacity: 0;
  transition: opacity 200ms;
  z-index: 2;
}
.view:hover .button {
  opacity: 1;
}
.view:hover::after {
  opacity: 1;
}
.header-bg {
  background: url("../assets/homeBag.png") no-repeat center;
  background-size: 100% 100%;
}
.clickFabu {
  display: inline-block;
  line-height: 0;
  width: 190px;
  height: 50px;
  font-size: 26px;
  color: #ffffff;
  background: linear-gradient(90deg, #ff8735, #f66961) !important;
  border-radius: 25px;
}
.view .info {
  display: flex;
  box-shadow: 9px 0px 14px #f1f3f4;
}

.c-white {
  height: 96px;
  line-height: 48px;
  font-size: 50px;
  font-weight: bold;
  color: #ffffff;
  text-align: center;
}
.PlanSchedulFlag {
  width: 150px;
  height: 38px;
  background: #1b65f9;
  border-radius: 19px;
}
</style>
