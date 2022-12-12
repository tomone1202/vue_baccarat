import { createStore } from "vuex";

export default createStore({
  state: {
    chipMount: 10,
  },
  getters: {},
  mutations: {
    setChipMount(state, chipMount) {
      state.chipMount = chipMount;
    },
  },
  actions: {},
  modules: {},
});
