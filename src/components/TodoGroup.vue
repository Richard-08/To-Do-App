<template>
  <div class="todo-group">
    <router-link :to="{ name: 'Todo', params: { index: index } }"
      ><h2 class="todo-group__title">{{ group.title }}</h2>
    </router-link>

    <p class="todo-group__tasks">
      All tasks - <span>{{ group.tasks.length }}</span>
    </p>

    <p class="todo-group__active-tasks">
      Active tasks - <span>{{ activeTasks }}</span>
    </p>

    <p class="todo-group__complete-tasks">
      Complete tasks - <span>{{ completeTasks }}</span>
    </p>

    <button class="todo-group__remove-btn" @click="removeGroup(group.id)">
      <i class="fas fa-trash-alt"></i>
      Remove
    </button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  props: ["group", "index"],
  computed: {
    activeTasks() {
      return this.group.tasks.filter((value) => !value.completed).length;
    },
    completeTasks() {
      return this.group.tasks.filter((value) => value.completed).length;
    },
  },
  methods: {
    ...mapMutations(["deleteGroup"]),
    removeGroup(id) {
      this.deleteGroup(id);
    },
  },
};
</script>

<style lang="scss">
@import "../assets/scss/_stylebase.scss";

.todo-group {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 0px 5px 3px rgba($color: #000000, $alpha: 0.08);
  padding: 15px;
  border-radius: 5px;

  &__title {
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 20px;
    color: $mainFontColor;
  }

  p {
    color: $paragraphText;
    span {
      font-weight: 600;
    }
  }

  &__tasks {
    margin-bottom: 10px;
  }

  &__active-tasks {
    margin-bottom: 10px;
  }

  &__complete-tasks {
  }

  &__remove-btn {
    margin-top: 20px;
    padding: 5px;
    background-color: $danger-color;
    border: 1px solid #f1f1f1;
    border-radius: 5px;
    color: #fff;
  }
}
</style>
