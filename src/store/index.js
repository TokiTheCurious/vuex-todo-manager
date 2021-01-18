import Vuex from 'vuex';
import Vue from 'vue';
import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

//Load Vuex
Vue.use(Vuex);

//Create store
export default new Vuex.Store({
  state: { todos: []}, //state data
  getters, //state getters
  actions, //state methods
  mutations, //state setters
})