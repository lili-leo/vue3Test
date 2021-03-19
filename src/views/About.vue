<template>
  <div class="about">
    <h1>{{ color }}</h1>
  </div>
  <child msg="HelloWorld" msg2="你好vue3" @customEvent="customEvent">
    <template #aaa>我是插槽</template>
  </child>
</template>
<script lang="ts">
import child from "./Child.vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: {
    child,
  },
  setup() {
    const customEvent = (val: string) => {
      console.log(val);
    };
    //布尔类型boolean 数字类型number 字符串类型string
    //undefined  null  是任意类型的子集
    //元组 类似于数组
    //枚举
    //c 任意类型
    //void  没有返回的返回值
    //object类型
    enum Color { //index  red默认从0开始
      red = 11,
      green,
      blue,
    }
    enum Sex { //index  red默认从0开始
      男,
      女,
    }
    function getObj(obj: object): object {
      return {
        name: "2",
      };
    }
    interface Iperson {
      readonly id: number; //添加只读属性
      name: string;
      age: number;
      sex?: string; //?代表可选属性
    }
    // console.log(getObj({name:'name'}))
    const color: Color = Color.red;
    const flag = true;
    const person: Iperson = {
      id: 1,
      name: "1",
      age: 11,
      // sex: "女",
    };
    console.log(getObj({ name: "name" }));
    // person.id=100
    return {
      flag,
      color,
      Sex,
      person,
      customEvent,
    };
  },
});
</script>
