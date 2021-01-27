<template>
  <div id="app">
    <Nav></Nav>
    <div class="page-content-wrapper">
      <router-view />
    </div>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
export default {
  components: {
    Nav,
  }
};
</script>

<style>
:root {
  --blue:#0f49b4;
  --red: #B82929;
  --green: #1D8F2E;
  --StandardTextColor: rgba(255, 255, 255, 0.800);
}

#app {
  font-family: "JetBrains Mono", monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--StandardTextColor);
  background: rgb(19, 19, 19);
}

.page-content-wrapper {
  min-height: calc(100vh - 80px);
  min-width: 100%;
}

.page {
  width: 80%;
  max-width: 1100px;
  margin: 0px auto 0px auto;
  text-align: left;
  font-size: 18px;
  padding: 30px 30px 30px 30px;
}

a {
  color: rgba(255, 255, 255, 0.801);
}
</style>
