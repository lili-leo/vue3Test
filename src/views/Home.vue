<!--
 * @Author: your name
 * @Date: 2021-01-29 20:43:04
 * @LastEditTime: 2021-01-29 21:17:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit是
 * @FilePath: \test\src\views\Home.vue
-->
<template>
<!-- 可是没有根组件 -->
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <div>{{count}}</div>
    <button @click="genxin"></button>
  </div>
</template>

<script lang="ts">
//defineComponent目的是定义一个组件，内部传入一个配置对象
import { defineComponent,reactive,ref } from 'vue';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
  //当前组件的名字
  name: 'Home',
  // components: {
  //   HelloWorld,
  // },
  setup(){
    const count=ref(0)
    const count1=reactive({
      name:"小米",
      age:10,
      wife:{
        name:"小团体",
        age:52,
        cars:["奔驰","宝马"]
      }
      
    })
    function genxin(){
      count.value++
    }
    return {
      count,
      genxin,
      count1
    }
  }
});
</script>
