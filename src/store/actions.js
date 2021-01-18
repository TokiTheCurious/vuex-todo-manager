import axios from "axios";
import { FETCH_TODOS, FILTER_TODOS ,SET_TODOS, CREATE_TODO, UPDATE_TODO, ALTER_TODO , ADD_TODO, DELETE_TODO, REMOVE_TODO } from "./store-types";

export default {
  async [FETCH_TODOS]({ commit }) {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/todos`)
    commit(SET_TODOS, response.data)
  },

  async [FILTER_TODOS]({ commit }, limit) {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`)
    commit(SET_TODOS, response.data)
  },

  async [CREATE_TODO]({ commit }, title) {
    const response = await axios.post(`https://jsonplaceholder.typicode.com/todos`, { title, completed: false })
    commit(ADD_TODO, response.data)
  },

  async [UPDATE_TODO]({ commit }, updateTodo) {
    const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${updateTodo.id}`, updateTodo)
    commit(ALTER_TODO, response.data)
  },

  async [DELETE_TODO]({ commit }, id) {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
    commit(REMOVE_TODO, id)
  }
}