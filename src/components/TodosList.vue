<template>
  <div class="todos">
    <div
      class="todos__item"
      v-for="(todo, index) in getFilteredTodos"
      :key="todo.id"
      :class="{done: todo.completed}"
    >
      <div class="todos__header">
        <label for="filter" class="checkbox-container">
          <input
            class="checkbox"
            type="checkbox"
            name="filter"
            @change="changeComplete(index)"
            :checked="todo.completed"
          />
          <span class="checkmark"></span>
        </label>

        <div class="todos__title" @click.prevent="toggle(index)">
          <h2>{{ todo.name }}</h2>

          <div class="todos__controls">
            <button class="delete-btn btn" @click.stop="removeTodo(todo.id)">
              <i class="far fa-trash-alt"></i>
            </button>
            <button class="toggle-btn btn">
              <i class="fas fa-chevron-down"></i>
            </button>
          </div>
        </div>
      </div>

      <div class="todos__body" :class="{ show: todo.isShow }">
        <p>{{ todo.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  data() {
    return {
      isShow: false,
    };
  },
  created() {
    this.loadTodoGroup(this.$route.params.index);
  },
  computed: {
    ...mapGetters(["getFilteredTodos", "getAllTodos"]),
    check() {},
  },
  methods: {
    ...mapActions(["loadTodoGroup"]),
    ...mapMutations([
      "toggleTodoDescription",
      "changeTodoComplete",
      "deleteTodo",
    ]),
    toggle(index) {
      this.toggleTodoDescription(index);
    },
    changeComplete(index) {
      this.changeTodoComplete(index);
    },
    removeTodo(id) {
      this.deleteTodo(id);
    },
  },
};
</script>

<style lang="scss">
@import "../assets/scss/_stylebase.scss";

.todos {
  &__item {
    background-color: #fff;
    margin-bottom: 20px;
    overflow: hidden;
    border-radius: 5px;
  }

  &__item.done {
    text-decoration: line-through;
  }

  &__header {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 0 15px;
  }

  &__title {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0;
  }

  &__controls {
    .btn {
      padding: 5px;
      background-color: transparent;
    }

    .delete-btn {
      color: $danger-color;
      margin-right: 15px;
    }

    .toggle-btn {
    }
  }

  &__body {
    border-top: 1px solid $horizontalLineColor;
    max-height: 0;
    transition: max-height 0.5s ease;

    p {
      padding: 15px;
      line-height: 1.5;
      transition: transform 0.5s ease;
      transform: translateX(-100%);
    }
  }

  &__body.show {
    max-height: 1000px;

    p {
      transform: translateX(0);
    }
  }
}

/* --------------Checkboxes style------------ */

.checkbox-container {
  display: block;
  position: relative;
  padding-left: 30px;
  margin-bottom: 19px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-family: $mainFont;
  font-size: 14px;
  font-weight: 500;
}

.checkbox-container .checkbox {
  position: absolute;
  left: 0;
  opacity: 0;
  cursor: pointer;
  height: 18px;
  width: 18px;
  z-index: 99;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 18px;
  width: 18px;
  background-color: transparent;
  border: 1px solid #b9bdcf;
  box-sizing: border-box;
  border-radius: 2px;
}

.checkbox-container:hover .checkbox ~ .checkmark {
  background-color: #ccc;
}

.checkbox-container .checkbox:checked ~ .checkmark {
  background-color: $secondaryColor;
  border: 1px solid $secondaryColor;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.checkbox-container .checkbox:checked ~ .checkmark:after {
  display: block;
}

.checkbox-container .checkmark:after {
  left: 15%;
  top: 45%;
  width: 7px;
  height: 13px;
  border: solid white;
  border-width: 0 2px 2px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg) translate(-50%, -50%);
}
</style>
