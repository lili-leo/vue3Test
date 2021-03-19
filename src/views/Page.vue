<template>
  <button @click="goHome(456)">回到首页</button>
  <h3>{{ name1 }}</h3>
  <h3>{{ namaA1 }}</h3>
  <button @click="changeName1">回到首页</button>
</template>
<script lang="ts">
import { computed, defineComponent, toRaw } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
export default defineComponent({
  setup() {
    const route = useRoute();
    const router = useRouter();
    console.log(toRaw(route));
    const goHome = (val: any) => {
      router.push({ path: `/about/${val}` });
    };

    const store = useStore();
    const name1 = computed(() => store.state.name1);
    const namaA1 = computed(() => store.state.a.namaA1);
    const changeName1 = () => {
      console.log(toRaw(store.commit));
      // store.dispatch("actionsChangeName1", "name8989+11111");
      store.commit("a/changeNamaA1", "a/changeNamaA1");
    };
    return {
      router,
      goHome,
      name1,
      changeName1,
      namaA1,
    };
  },
});
</script>
