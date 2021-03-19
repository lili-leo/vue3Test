// import { createStore } from "vuex";
export default {
  namespaced: true, //命名空间为true
  state: {
    namaA1: "namaA1",
  },
  mutations: {
    changeNamaA1(state: any, val: any) {
      state.namaA1 = val;
    },
  },
}
