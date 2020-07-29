<template>
  <div class="about">
    <div class="container">
      <router-link to="/" class="go-back">
        <h2><i class="fas fa-arrow-left"></i> Back to groups</h2>
      </router-link>

      <TodoForm />

      <TodosList />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TodosList from "../components/TodosList";
import TodoForm from "../components/TodoForm";

export default {
  name: "Todo",
  components: {
    TodosList,
    TodoForm,
  },
};
</script>

<style lang="scss">
@import "../assets/scss/_stylebase.scss";

.go-back {
  color: $mainFontColor;
}
</style>
