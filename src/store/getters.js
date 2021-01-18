import { GET_ALL_TODOS } from "./store-types";

export default {
  [GET_ALL_TODOS](state) {
    return state.todos;
  }
}