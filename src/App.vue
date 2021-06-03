<template>
  <!-- <div id="app"> -->
  <header
    class="myNavbar header-nav-center crypto_dark header_fixed_sticky"
    v-if="$route.path != '/' && $route.path != '/home'"
  >
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light">
        <a href="#" class="logo navbar-brand"
          ><img src="./assets/eman.png" alt="ICO Crypto" class="logo_default"
        /></a>
        <h1 class="routeInfoH1" style="color: #fff;font-size: 18px;height:100%">
          <template
            v-if="
              $route.path != '/WaitArranged' &&
                $route.path != '/setting' &&
                $route.path != '/login'
            "
          >
            <span
              class="routeInfoSpan"
              :style="{
                borderBottom:
                  routeInfoSpanIndex == i ? `4px solid #A9C5FF` : '',
              }"
              v-for="(item, i) in routeInfo"
              :key="i"
              @click="goRoute(item, i)"
              >{{ item.name }}</span
            >
          </template>
          <template v-else
            ><span class="routeInfoName">{{ $route.name }}</span></template
          >
        </h1>
      </nav>
    </div>
  </header>

  <!-- </div> -->
  <div
      :style="{
        marginTop: $route.path == '/' || $route.path == '/home' ? '' : '64px',height:'100%'
      }"
      class="classRouter"
    >
  <router-view />
</div>
</template>
<script lang="ts">
//定义一个接接口约束数据类型
// import { Todo } from "./views/type/todo";
import { defineComponent, reactive, ref } from "vue";
import { pGetToken } from "@/api/productPlan";
export default defineComponent({
  setup() {
    const list = reactive([]);
    const token = ref("");
    const routeInfoSpanIndex = () => {
      const a = localStorage.getItem("index");
      return a || "";
    };
    const routeInfo = reactive([
      { name: "产品出货计划", path: "/productPlan" },
      { name: "资源计划", path: "/resourcePlan" },
      { name: "资源负荷", path: "/resourceload" },
      { name: "物料供应计划", path: "/materialplannt" },
      { name: "工单生产计划", path: "/resourceAnalysis" },
    ]);
    const goRoute = (item: any, i: any) => {
      // this.$router.replace(item.path);
      // this.routeInfoSpanIndex = i;
      // this.$ls.set("index", i);
      console.log(item + i);
    };
    function getToken() {
      const token=localStorage.getItem("onlyToken")
      console.log("onlyToken")
      if(token==null&&!token){
        pGetToken({})
        .then((res: any) => {
          if (res.code == 200) {
            localStorage.setItem(
              "onlyToken",
              res.data
            );
            // this.clickAdd(res.data);
          }
        })
        .catch((err: any) => {
          console.log(err);
        });
      }
    }
    getToken()
    return {
      list,
      token,
      routeInfoSpanIndex,
      routeInfo,
      goRoute,
    };
  },
});
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
#app {
  position: fixed;
  top: 0px;
  right: 0px;
  left: 0px;
  bottom: 0;
  overflow: hidden !important;
}
.classRouter {
  height: calc(100vh - 64px);
}
.classRouter > div {
  height: 100%;
  /* background:#f0f7ff; */
}
.myNavbar {
  z-index: 2;
  top: 0px;
  right: 0px;
  left: 0px;
  width: 100%;
  position: fixed;
  background: #1b65f9;
  /* background-image: linear-gradient(to right,#5468ff, #48e8ff); */
}
.navbar {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
}
.navbar-expand-lg {
  justify-content: flex-start;
  flex-flow: row nowrap;
}
header .navbar {
  height: 64px;
  padding: 0px;
}
.navbar-brand {
  display: inline-block;
  padding-top: 0.3125rem;
  padding-bottom: 0.3125rem;
  margin-right: 1rem;
  font-size: 1.25rem;
  line-height: inherit;
  white-space: nowrap;
}
header .navbar .navbar-brand {
  font-weight: 600;
  font-size: 22px;
}
.logo img {
  vertical-align: bottom;
  margin-right: 0.5rem;
}
.logo_default {
  display: block;
  width: 150px;
  margin-left: 42px;
}
.logo__sticky {
  display: none;
}
.container {
  max-width: 100%;
  width: 100%;
}
.routeInfoSpan {
  font-size: 18px;
  color: #ffffff;
  font-weight: 400;
  cursor: pointer;
  margin-left: 20px;
  display: inline-block;
  height: 100%;
  line-height: 64px;
}
.routeInfoH1 {
  width: 100%;
  margin-left: -258px;
  text-align: center;
  padding-bottom: 8px;
}
.routeInfoName {
  font-size: 18px;
  color: #ffffff;
  font-weight: 400;
  cursor: pointer;
  margin-left: 20px;
  display: inline-block;
  height: 100%;
  line-height: 64px;
}
.gantt_message_area {
  display: none !important;
}
</style>
