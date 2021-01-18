import axios from "axios";
import { FETCH_TODOS, SET_TODOS } from "./store-types";

export default {
  async [FETCH_TODOS]({commit}){
    const response = await axios.get(`https://jsonplaceholder.typicode.com/todos`)
    commit(SET_TODOS, response.data)
  }
}