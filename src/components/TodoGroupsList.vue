<template>
  <div class="todo-groups-list">
    <TodoGroup
      v-for="(group, index) in getTodosList"
      :key="group.id"
      :group="group"
      :index="index"
    />
  </div>
</template>

<script>
import TodoGroup from "./TodoGroup";

import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getAllTodos", "getSearchValue"]),
    getTodosList() {
      return this.getAllTodos.filter((todo) => {
        const regex = new RegExp(this.getSearchValue, "gi");
        return todo.title.match(regex);
      });
    },
  },
  components: {
    TodoGroup,
  },
};
</script>

<style lang="scss">
.todo-groups-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 30px;
}
</style>
