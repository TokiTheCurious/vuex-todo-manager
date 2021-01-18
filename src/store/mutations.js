import { SET_TODOS } from "./store-types";

export default {
  [SET_TODOS](state, todos){
    state.todos = todos
  }
}