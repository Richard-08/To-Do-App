<template>
  <ul class="dropdown page-filter">
    <li class="dropdown__title" @click="showFilter">
      <span>{{ getSelectedFilter }}</span>
      <i class="fas fa-chevron-down"></i>
    </li>

    <ul class="dropdown__filter" :class="{ show: isShow }">
      <li
        class="dropdown__filter-item"
        v-for="(filter, index) in filters"
        :key="index"
        @click="changeFilter(filter)"
      >
        {{ filter }}
      </li>
    </ul>
  </ul>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {
      filters: ["All", "Active", "Completed"],
      isShow: false,
    };
  },
  computed: {
    ...mapGetters(["getSelectedFilter"]),
  },
  methods: {
    ...mapMutations(["changeTodoFilter"]),
    showFilter() {
      this.isShow = !this.isShow;
    },
    changeFilter(filter) {
      this.changeTodoFilter(filter);
      this.isShow = false;
    },
  },
};
</script>

<style lang="scss">
@import "../assets/scss/_stylebase.scss";

.dropdown {
  position: relative;

  &__title {
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    background-color: #fff;
    border-radius: 5px;
    padding: 10px;
    color: $dropdownFontColor;
    user-select: none;
  }

  &__filter {
    position: absolute;
    left: 0;
    top: 140%;
    @include size(150px, auto);
    overflow-y: auto;
    background-color: #fff;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.16);
    border-radius: 5px;
    z-index: 10;
    padding: 15px 0;
    transform: translateY(-55%) scaleY(0);
    transition: all 0.3s ease;
  }

  &__filter.show {
    transform: translateY(0) scaleY(1);
  }

  &__filter-item {
    cursor: pointer;
    padding: 10px 0;
    transition: all 0.3s ease;
    text-align: center;

    &:hover {
      background-color: #f1f1f1;
    }
  }
}
</style>
