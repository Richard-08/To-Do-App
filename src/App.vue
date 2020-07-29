<template>
  <div id="app">
    <Header />

    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header";

export default {
  components: {
    Header,
  },
};
</script>

<style lang="scss">
@import "./assets/scss/_stylebase.scss";

#app {
  font-family: $mainFont;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $mainFontColor;
  background-color: $bgColor;
  min-height: 100vh;
}

.container {
  max-width: 100%;
  width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
}

img {
  max-width: 100%;
}

button {
  cursor: pointer;
}
</style>
