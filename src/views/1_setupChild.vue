<template>
  <div>洒洒水</div>
  <button @click="emitChangeMsg">点击子组件</button>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
  name: '',
  props: ["msg"],
  emit:["changeMsg"],
  setup(props,context) {
    console.log(props)
    console.log(context)
    console.log(context.emit)
    console.log(context.attrs)
    console.log(context.slots)
    const emitChangeMsg=()=>{
      console.log("asasasas")
      context.emit("changeMsg",545454)
    }
    return {
      emitChangeMsg
    };
  },
});
</script>

<style lang='less' scoped>

</style>
