<template>
  <div>
    <h1>Todos</h1>
    <div class="todos">
      <div class="todo" :key="todo.id" v-for="todo in a">
        {{ todo.title }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { GET_ALL_TODOS, FETCH_TODOS } from "../store/store-types";
export default {
  name: "Todos",
  computed: { ...mapGetters({ a: GET_ALL_TODOS }) },
  methods: {
    ...mapActions({FETCH_TODOS})
  },
  created() {
    this.FETCH_TODOS(); //Calls the action that gets the todos
  },
}
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

</style>