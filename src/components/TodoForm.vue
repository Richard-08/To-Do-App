<template>
  <form class="todo-form">
    <AddTodo />
    <TodoFilter />
  </form>
</template>

<script>
import AddTodo from "./AddTodo";
import TodoFilter from "./TodoFilter";

export default {
  components: {
    TodoFilter,
    AddTodo,
  },
};
</script>

<style lang="scss">
.todo-form {
  padding: 20px 0;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
