import { SET_TODOS, ADD_TODO, REMOVE_TODO, ALTER_TODO } from "./store-types";

export default {
  [SET_TODOS](state, todos){
    state.todos = todos
  },
  
  [ADD_TODO](state, todo){
    state.todos.unshift(todo);
  },

  [REMOVE_TODO](state, id){
    state.todos = state.todos.filter(t => t.id !== id);
  },

  [ALTER_TODO](state, updateTodo){
    const index = state.todos.findIndex(t => t.id === updateTodo.id)
    index !== -1 ?
      state.todos.splice(index, 1, updateTodo) :
      state.todos[index] = updateTodo
  }

}