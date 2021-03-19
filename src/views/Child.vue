<template>
  <div>{{ msg }}</div>
  <div>{{ msg2 }}</div>
  <slot name="aaaa" />
  <button @click="fn"></button>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: ["msg"],
  setup(props, { attrs, slots, emit }) {
    console.log(props, attrs, slots, emit);
    console.log(attrs);
    console.log(slots);
    console.log(emit);
    const fn=()=>{
      emit('custom-event',123)
    }
    return {
      msg2: attrs.msg2,
      fn,
    };
  },
});
</script>
