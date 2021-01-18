<template>
  <div>
    Filter Todos:
    <select @change="onChange($event)">
      <option :key="value" v-for="value in filterValues" :value="value">
        {{ value }}
      </option>
    </select>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { FILTER_TODOS } from "../store/store-types";

export default {
  name: "FilterTodos",
  data() {
    return {
      filterValues: [200, 100, 50, 20, 10, 5],
    };
  },
  methods: {
    ...mapActions({filterTodos: FILTER_TODOS}),

    onChange(event) {
      const limit = parseInt(event.target.value);
      this.filterTodos(limit);
    },
  },
};
</script>

<style>
</style>