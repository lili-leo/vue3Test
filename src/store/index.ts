import { createStore } from "vuex";
import a from "./modules/a";
export default createStore({
  state: {
    name1: "name11",
  },
  mutations: {
    changeName1(state: any, val: any) {
      state.name1 = val;
    },
  },
  actions: {
    actionsChangeName1({ commit }, val) {
      console.log(val);
      commit("changeName1", val);
    },
  },
  modules: {
    a,
  },
});
