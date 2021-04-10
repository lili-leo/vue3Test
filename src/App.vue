<template>
  <div id="nav">
    <!-- <p v-for="(item, i) in todos" :key="i" :style="{'background':bColor,'color':myColor}"
    @mouseenter="mouseHandel(true)" @mouseleave="mouseHandel(false)">
      {{ item.id }}+++{{ item.name }}----{{ item.flag }}
      <button v-if="show">删除</button>
    </p> -->
    <!-- <router-link to="/">Home</router-link> | -->
    <!-- <router-link to="/about/1">About</router-link> | -->
    <!-- <router-link to="/page/123">page</router-link> -->
    <router-link to="/setup">setup</router-link>  |
    <router-link to="/computed">computed</router-link>  |
    <router-link to="/hook">鼠标点击事件坐标hook函数</router-link>  |
    <router-link to="/toRefs">toRefs</router-link>    | 
    <router-link to="/todoList">todoList</router-link>
  </div>
  <router-view />
</template>
<script lang="ts">
//定义一个接接口约束数据类型
import { Todo } from "./views/type/todo";
import { defineComponent, reactive, toRefs,ref,computed } from "vue";
export default defineComponent({
  setup() {
    //定义数组数据
    const state = reactive<{ todos: Todo[] }>({
      todos: [
        { id: 1, name: "name1", flag: true },
        { id: 2, name: "name2", flag: false },
        { id: 3, name: "name3", flag: true },
      ],
    });
    const bColor=ref('white')
    const myColor=ref('black')//进入颜色show
    const show=ref(false)
    const mouseHandel=(flag: boolean)=>{
      if(flag){
        console.log("1")
        bColor.value='pink'
        myColor.value="green"
        show.value=true
      }else{
        bColor.value='white'
        myColor.value="black"
        show.value=false
      }
    }
    // const comCheck=computed()=>{

    // }
    return {
      ...toRefs(state),
      mouseHandel,
      bColor,
      myColor,
      show
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
</style>
