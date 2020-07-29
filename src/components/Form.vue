<template>
  <form class="form" @submit.prevent="createGroup">
    <div class="form__create">
      <input
        type="text"
        class="form__title-input"
        placeholder="Enter group title..."
        v-model="title"
      />
      <button class="form__create-btn">
        <i class="fas fa-plus"></i> Create
      </button>
    </div>
    <div class="form__search">
      <label for="search"><i class="fas fa-search"></i></label>
      <input
        type="search"
        name="search"
        class="form__search-input"
        placeholder="Search by group title"
        v-model="search"
        @input="searchGroup"
      />
    </div>
  </form>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      title: "",
      search: "",
    };
  },
  methods: {
    ...mapMutations(["addNewGroup", "updateSearch"]),
    createGroup() {
      const group = {
        id: Date.now(),
        title: this.title,
        tasks: [],
      };
      this.addNewGroup(group);
      this.title = "";
    },
    searchGroup() {
      this.updateSearch(this.search);
    },
  },
};
</script>

<style lang="scss">
@import "../assets/scss/_stylebase.scss";

.form {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  margin-bottom: 20px;
  border-bottom: 2px solid $horizontalLineColor;

  @include media(756px) {
    flex-direction: column-reverse;
  }

  &__create {
    @include media(756px) {
      margin-top: 20px;
    }
  }
  &__create-btn {
    background-color: $secondaryColor;
    color: #fff;
    padding: 10px;
    border-radius: 5px;
    margin-left: 10px;

    @include media(410px) {
      width: 100%;
      margin-left: 0;
    }
  }

  &__search {
    label {
      margin-right: 10px;
    }
  }

  &__title-input {
    @include media(410px) {
      width: 100%;
      margin-bottom: 10px;
    }
  }

  &__search-input,
  &__title-input {
    padding: 10px;
    border-radius: 5px;
  }
}
</style>
