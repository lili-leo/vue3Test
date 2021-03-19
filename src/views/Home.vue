<template>
<!-- 可是没有根组件 -->
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <div>{{count}}</div>
    <button @click="ceshi1({})">按钮1</button>
    <p>==============</p>
    <input type="text" v-model="user.name1">
    <input type="text" v-model="user.name2">
    <p>========计算后======</p>
    <input type="text" v-model="fullName1">
    <input type="text" v-model="fullName2">
    <input type="text" v-model="fullName3">
    <div @click="changeName">{{ceshi1()}}</div>
    <h1 @click="changeName">测试</h1>
    <h1>{{name1}}</h1>
    <h1>{{name2}}</h1>
    <input type="text" ref="refInput">
  </div>
</template>

<script lang="ts">
//使用代理对象更新
//defineComponent目的是定义一个组件，内部传入一个配置对象
//ref定义响应式的对象 reactive定义响应式的复杂对象
//toRefs把一个响应式的对象变成一个普通对象
//ref的另一个用法  input框自动获取焦点
import { defineComponent,reactive,ref,computed,watch,toRefs, onMounted, watchEffect } from 'vue';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
  //当前组件的名字
  name: 'Home',
  // components: {
  //   HelloWorld,
  // },
  setup(){
    const refInput=ref<HTMLElement|null>(null)
    onMounted(()=>{
      refInput.value&&refInput.value.focus()
    })
    // const obj={
    //   name1:String,
    //   name2:Number
    // }
    const user=reactive({
      name1:"东方",
      name2:"不败"
    })
    const obj={
      name:"小米",
      age:10,
      wife:{
        name:"小团体",
        age:52,
        cars:["奔驰","宝马"]
      }
    }
    const count=ref(0)//ref是一个函数，定义一个响应式对象，setup里面需要用。value取值，模板里面不需要
    const count1=reactive(obj)
    const changeGenxin=()=>{
      count1.name="小米111111111"
    }
    function genxin(){
      count.value++
    }
    const fullName1=computed(()=>{
      return user.name1+'_'+user.name2
    })
    const fullName2=computed({
      get(){
        return user.name1+'_'+user.name2
      },
      set(val){
        console.log(val)
      }
    })
    function ceshi1(data: string){
      console.log(data)
      return data
    }
    function changeName(){
      user.name1+="----"
      user.name2+="----"
    }
    const fullName3=ref('')
    watch(user,(n,o)=>{
      console.log(n,o)
    },{immediate:true,deep:true})
    //immediate默认会执行一次  deep深度监听
    //不直接制度监视的数据。回调函数中改变就会改变
    watchEffect(()=>{
      fullName3.value=user.name1+user.name2
    })
    return {
      count,
      genxin,
      count1,
      changeGenxin,
      user,
      fullName1,
      fullName2,
      fullName3,
      ceshi1,
      ...toRefs(user),
      changeName,
      refInput
    }
  }
});
</script>
