<template>
  <div>hook</div>
  <p>{{ x }}</p>
  <p>{{ y }}</p>
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount, onMounted,ref } from 'vue'
export default defineComponent({
  name: '',
  setup() {
    const x=ref(-1)
    const y=ref(-1)
    const handleClick=(event: any)=>{
      x.value=event.pageX
      y.value=event.pageY
    }
    onMounted(()=>{
      window.addEventListener("click",handleClick)
    })
    onBeforeUnmount(()=>{
      window.removeEventListener("click",handleClick)
    })
    return {
      x,
      y
    };
  },
});
</script>

<style lang="less" scoped></style>
