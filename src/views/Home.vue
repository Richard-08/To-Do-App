<template>
  <div class="home">
    <div class="container">
      <Form />
      <TodoGroupsList/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TodoGroupsList from "../components/TodoGroupsList";
import Form from "../components/Form";

export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    TodoGroupsList,
    Form,
  },
};
</script>
