<template>
  <div>
    <h3>Todos</h3>
    <div class="legend">
      <span>Double click to mark as complete</span>
      <span> <span class="incomplete-box"></span> = Incomplete </span>
      <span> <span class="complete-box"></span> = Complete </span>
    </div>
    <div class="todos">
      <div
        class="todo"
        :class="{ 'is-completed': todo.completed }"
        :key="todo.id"
        @dblclick="updateTodo({ ...todo, completed: !todo.completed })"
        v-for="todo in allTodos"
      >
        {{ todo.title }}
        <i @click="deleteTodo(todo.id)" class="fas fa-trash-alt"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import {
  GET_ALL_TODOS,
  FETCH_TODOS,
  DELETE_TODO,
  UPDATE_TODO,
} from "../store/store-types";
export default {
  name: "Todos",
  computed: { ...mapGetters({ allTodos: GET_ALL_TODOS }) },
  methods: {
    ...mapActions({
      fetchTodos: FETCH_TODOS,
      deleteTodo: DELETE_TODO,
      updateTodo: UPDATE_TODO,
    }),
  },
  created() {
    this.fetchTodos(); //Calls the action that gets the todos
  },
};
</script>
<style scoped>
.todos {
  /* Grid system, here we are making it 3 across */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}

.todo {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem; /* Make text appear more inside of the div */
  border-radius: 5px; /* Add rounding to corners of border */
  text-align: center;
  position: relative;
  cursor: pointer;
}

i {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #fff;
  cursor: pointer;
}

.legend {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}

.is-completed {
  background: #35495e;
  color: white;
}

.complete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #35495e;
}

.incomplete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #41b883;
}

@media (max-width: 500px) {
  .todos {
    grid-template-columns: 1fr;
  }
}
</style>