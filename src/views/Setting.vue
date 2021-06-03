<template>
  <div class="content">
    <el-tabs v-model="activeName" tab-position="left">
      <el-tab-pane label="排产基础配置" name="first">
        <el-form
          :label-position="labelPosition"
          model="ruleFormTabs"
          ref="ruleFormTabs"
          label-width="180px"
          class="demo-ruleForm"
          size="mini"
        >
          <el-form-item label="待排产数据URL" prop="waitScheduledUrl">
            <el-input
              v-model="ruleFormTabs.apsinurl"
              placeholder="请输入内容"
            ></el-input>
            <el-button
              type="text"
              :loading="false"
              style="position: fixed;margin-left:20px"
              @click="testInUrl(ruleFormTabs.apsinurl)"
              >测试</el-button
            >
          </el-form-item>
          <el-form-item label="排产结果发布URL" prop="scheduledResultUrl">
            <el-input
              v-model="ruleFormTabs.releaseurl"
              placeholder="请输入内容"
            ></el-input>
            <el-button
              type="text"
              :loading="false"
              style="position: fixed;margin-left:20px"
              >测试</el-button
            >
          </el-form-item>
          <el-form-item label="智能模型" prop="algorithms">
            <el-select
              v-model="ruleFormTabs.algorithms"
              multiple
              placeholder="请选择"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                style="width:80%"
              >
              </el-option>
            </el-select>
            <!-- <el-input
              v-model="ruleFormTabs.releaseurl"
              placeholder="请输入内容"
            ></el-input> -->
            <!-- <el-button
              type="text"
              :loading="false"
              style="position: fixed;margin-left:20px"
              @click="testOutUrl(ruleFormTabs.releaseurl)"
              >测试</el-button
            > -->
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleFormTabs')"
              >保存</el-button
            >
            <el-button>重置</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import {
  pSettingSchedulingDates,
  pSettingSchedulingDatesTest,
  pSettingSchedulingDatesSave
} from "@/api/productPlan";
import { defineComponent, ref, reactive,toRefs } from "vue";
export default defineComponent({
  setup() {
    const options = reactive([
      { value: "Gen", label: "标准模型" },
      { value: "ProdOrder", label: "工单模型" },
      { value: "Resload", label: "资源模型" },
    ]);
    const labelPosition = ref("right");
    const activeName = ref("first");
    const ruleFormTabs = ref({
      apsinurl: "",
      releaseurl: "",
      algorithms: [],
    });
    const testInUrl=(row: any)=> {
      const token = localStorage.getItem("onlyToken")
      pSettingSchedulingDatesTest({ url: row, token: token })
        .then((res) => {
          // if (res.code == 200 && res.data && res.data.result) {
          //   this.$message({
          //     message: res.msg,
          //     type: "success",
          //   });
          // } else {
          //   this.$message({
          //     message: res.msg,
          //     type: "error",
          //   });
          // }
        })
        .catch((err) => {});
    }
    const submitForm=(formName: any)=> {
      console.log(ruleFormTabs)
      const token = localStorage.getItem("onlyToken")
      // this.$refs[formName].validate((valid) => {
      //   if (valid) {
        pSettingSchedulingDatesSave({ ...ruleFormTabs, token: token })
            .then((res) => {
              // if (res.code == 200) {
              //   this.$message({
              //     message: res.msg,
              //     type: "success",
              //   });
              // } else {
              //   this.$message({
              //     message: res.msg,
              //     type: "error",
              //   });
              // }
            })
            .catch((err) => {});
      //   } else {
      //     return false;
      //   }
      // });
    }
    function init(){
      const token = localStorage.getItem("onlyToken")
      console.log(token)
      pSettingSchedulingDates({ token: token })
        .then((res: any) => {
          if (res.code == 200 && res.data != null) {
            ruleFormTabs.value = res.data;
            console.log("----------")
            // ruleFormTabs.value=Object.assign({},res.data)
            // console.log(ruleFormTabs.value)
            // console.log(ruleFormTabs.)
            console.log("----------")
            localStorage.setItem("onlyToken", res.token)
          }
        })
        .catch((err) => {});
    }
    init()
    return {
      options,
      labelPosition,
      activeName,
      ruleFormTabs,
      submitForm,
      testInUrl,
      // ...toRefs(ruleFormTabs),
    };
  },
});
</script>

<style lang="css" scoped>
.content {
  margin: 0px 180px;
  /* text-align: center; */
  padding: 30px;
}
.demo-ruleForm {
  width: calc(100% - 60px);
  margin: 0 auto;
}
.el-tabs--left {
  height: 80vh;
}
.el-tab-pane {
  width: 60%;
}
/deep/ .el-select,
.el-select--mini {
  width: 100%;
}
</style>
