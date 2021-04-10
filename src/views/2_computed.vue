<template>
  <h2>计算属性和监视</h2>
  <p>
    <input type="text" v-model="user.firstName" placeholder="请输入姓"><br>
    <input type="text" v-model="user.lastName" placeholder="请输入名"><br>
    <input type="text" v-model="fullName1" placeholder="请输入名"><br>
    <input type="text" v-model="fullName2" placeholder="请输入名"><br>
    <input type="text" v-model="fullName3" placeholder="请输入名"><br>
  </p>
</template>

<script lang='ts'>
import { computed, defineComponent, reactive,watch,ref,watchEffect } from 'vue'
export default defineComponent({
  name: '',
  setup() {
    const user=reactive({
      firstName:"东方",
      lastName:"不败"
    })
    // 通过计算属性实现姓名  第一个
    //只传一个回调函数表示的是get
    const fullName1= computed(()=>{
      return user.firstName+user.lastName
    })
    // 、、第二个
    const fullName2= computed({
      get(){
        return user.firstName+user.lastName
      },
      set(val: any){
        console.log(val)
      }
    })
    //监视 指定的数据  immediate  默认执行一次  deep深度监听
    const fullName3=ref("")
    // watch(user,({firstName,lastName})=>{
    //   fullName3.value=firstName+"_"+lastName
    // },{immediate:true,deep:true})
    //监视 不需要immediate  本身就会默认执行一次  
    watchEffect(()=>{
      fullName3.value=user.firstName+"_"+user.lastName
    })
    //watch可以监视多个  注意监听非响应式变化时候 代码需要改一下
    watch([()=>user.firstName,()=>user.lastName,fullName3],()=>{
      console.log("===========")
    })
    return {
      user,
      fullName1,
      fullName2,
      fullName3
    };
  },
});
</script>

<style lang='less' scoped>

</style>
