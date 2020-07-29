<template>
  <div class="add-todo">
    <div class="modal-overlay" :class="{ active: modalIsShow }">
      <div class="inputs-modal">
        <label for="title">Todo title:</label>
        <input
          type="text"
          class="form__title-input"
          placeholder="Enter to do title..."
          name="title"
          v-model="title"
        />
        <label for="desc">Todo description:</label>
        <textarea
          name="desc"
          class="form__text"
          cols="30"
          rows="5"
          placeholder="Enter text..."
          v-model="description"
        ></textarea>

        <div class="modal-btns">
          <button class="cancel-btn btn" @click.prevent="closeModal">
            Cancel
          </button>
          <button class="confirm-btn btn" @click.prevent="addTodo">Ok</button>
        </div>
      </div>
    </div>

    <button class="form__create-btn" @click.prevent="openModal">
      <i class="fas fa-plus"></i> Add todo
    </button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      modalIsShow: false,
      title: "",
      description: "",
    };
  },
  methods: {
    ...mapMutations(["addNewTodo"]),
    openModal() {
      this.modalIsShow = true;
    },
    closeModal() {
      this.modalIsShow = false;
    },
    addTodo() {
      const todo = {
        id: Date.now(),
        name: this.title,
        completed: false,
        description: this.description,
        isShow: false,
      };
      this.addNewTodo(todo);
      this.modalIsShow = false;
    },
  },
};
</script>

<style lang="scss">
@import "../assets/scss/_stylebase.scss";

.add-todo {
  .modal-overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba($color: #000000, $alpha: 0.2);
    z-index: 99;
    visibility: hidden;
    pointer-events: none;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .inputs-modal {
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
      width: 100%;
    }

    label {
      font-weight: 600;
      margin-bottom: 5px;
    }

    .modal-btns {
      margin-top: 10px;
    }

    .btn {
      color: #fff;
      border-radius: 5px;
      padding: 10px;
    }

    .confirm-btn {
      background-color: $secondaryColor;
    }

    .cancel-btn {
      background-color: $light-color;
      margin-right: 20px;
    }
  }

  .modal-overlay.active {
    visibility: visible;
    pointer-events: all;
  }

  .form__text {
    padding: 10px;
    border-radius: 5px;
    font-size: 16px;
    font-family: $mainFont;
  }
}
</style>
