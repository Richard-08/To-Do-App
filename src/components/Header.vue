<template>
  <header class="header">
    <div class="container">
      <div class="header__logo">
        <router-link to="/">
          <h1>To-Do App</h1>
        </router-link>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
@import "../assets/scss/_stylebase.scss";

.header {
  padding: 25px 0;

  &__logo {
    h1 {
      font-size: 24px;
      color: $mainFontColor;
      font-weight: 700;
    }
  }
}
</style>
