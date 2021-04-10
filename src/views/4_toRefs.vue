<template>
  <div>torefs</div>
  <p>{{name}}</p>
   <p>{{age}}</p>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs } from 'vue'
export default defineComponent({
  name: '',
  setup() {
    //toRefs可以包包裹的响应式对象变成普通的对象，每一个对象都是响应式的ref对象
    //shallowRef  shallowReactive   浅响应式  只对最外层响应
    //readonly深度只读  shallowReadonly浅度只读
    //toRaw返回普通对象，不是响应式   markRaw标记普通对象 不是响应式  用于不可变数据量比较大的列表
    //把代理对象变成普通对象，数据变化界面不更新
    const state=reactive({
      name:"xiaomi",
      age:20
    })
    return {
      ...toRefs(state)
    };
  },
});
</script>

<style lang='less' scoped>

</style>
