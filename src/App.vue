<template>
  <div class="app">
    <navBar />
    <upper_content_container/>
    <router-view />
  </div>
</template>

<script>
import navBar from "./components/Navigation_bar.vue"
import Upper_content_container from "./components/Upper_content_container.vue"
export default {
  name: "App",
  components:{ 
    navBar,
    Upper_content_container
  }
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
}

.app {
  min-height: 100vh;
  position: relative;
  background-color: #f1f1f1;
}
.container {
  padding: 0 20px;
  margin: 0 auto;
}
</style>