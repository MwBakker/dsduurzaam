<template>
  <div class="app">
    <navBar />
    <router-view />
    <customFooter/>
  </div>
</template>

<script>
import navBar from "./components/Navigation_bar.vue"
import customFooter from "./components/Footer.vue"

export default {
  name: "App",
  components:{ 
    navBar,
    customFooter,
  }
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: Manrope,Trebuchet MS,Helvetica,sans-serif;
  font-weight: 400;
  font-size: 1rem;
}

p {
  color: gray;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
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