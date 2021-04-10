<template>
  <div>{{msg}}</div>
  <button @click="changeMsg">点击改变ref</button>
  <div>{{user.name}}-----{{user.age}}----------{{user.wifi}}</div>
  <button @click="changeMsgref1">点击改变reactive</button>
  <div>{{msgref1}}</div>
  <child :msg="msg" @changeMsg="changeMsg"></child>
</template>

<script lang='ts'>
import { defineComponent,reactive,ref } from 'vue'
// 
import child from "./1_setupChild.vue"
export default defineComponent({
  name: '',
  
  components:{
    child
  },
  //注意  是在beforeCreated前执行了一次，不能通过this访问
  setup() {
    //ref定义一个基本类型响应式数据 数字 字符串  布尔值，返回的是一个ref对象，得取value才能对属进行操作，注意html模板中不需要vue值
    //reactive 定义多个复杂类型的响应式数据  内部是通过proxy代理对象实现的
    //如果ref定义对象或者数组，那么内部会用通过proxy进行劫持，注意此时js语法中要.value  html模板语法中不需要
    const msg=ref(1)
    const msgref1=ref({name:"ref1"})
    const changeMsg=(data: any)=>{
      console.log(data)
      msg.value++
    }
    const user=reactive({
      name:"小米",
      age:20,
      wifi:{
        name:"wifi",
        arr:["奔驰","宝马"]
      }
    })
    const changeUser=()=>{
      user.name="小米111111"
      user.age=3030
      user.wifi.name="wifi+++++"
      user.wifi.arr=["奇瑞"]
    }
    const changeMsgref1=()=>{
      msgref1.value.name="ref1++++++"
    }
    return {
      msg,
      changeMsg,
      user,
      changeUser,
      msgref1,
      changeMsgref1
    };
  },
});
</script>

<style lang='less' scoped>

</style>

