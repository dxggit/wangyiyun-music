import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    loadingMore: false,
  },
  mutations: {
    chengeLoading(state, data) {
      state.loadingMore = data;
    },
  },
  actions: {},
  getters: {},
});
export default store;
