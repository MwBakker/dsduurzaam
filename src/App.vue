<template>
  <div class="app">
    <navBar />
    <router-view />
    <customFooter />
  </div>
</template>

<script>
import navBar from "./components/Navigation-bar.vue"
import customFooter from "./components/Footer.vue"

export default {
  name: "App",
  components: {
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
  font-family: Manrope, Trebuchet MS, Helvetica, sans-serif;
  font-weight: 400;
  font-size: 1rem;
}

p {
  font-family: Manrope, Trebuchet MS, Helvetica, sans-serif;
  color: rgb(107, 107, 107);
}

button,
#button-send {
  background-color: #2c5484;
  border-radius: 45px;
  width: 200px;
  height: 56px;
  border-color: rgba(0, 0, 0, 0.15);
  border-width: 1px;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  font-weight: 600;
  margin: 4px 2px;
  cursor: pointer;
}

.app {
  min-height: 100vh;
  position: relative;
}

.container {
  padding: 0 20px;
  margin: 0 auto;
}

.slide-fade-up-enter-active,
.slide-fade-left-enter-active,
.slide-fade-right-enter-active {
  transition: all 1s ease;
}

.slide-fade-up-leave-active,
.slide-fade-left-leave-active {
  transition: all 1s;
}

.slide-fade-up-enter-from,
.slide-fade-up-leave-to {
  transform: translateY(100%);
  opacity: 0;
}

.slide-fade-left-enter-from,
.slide-fade-left-leave-to {
  transform: translateX(80%);
  opacity: 0;
}

.slide-fade-right-enter-from,
.slide-fade-right-leave-to {
  transform: translateX(-80%);
  opacity: 0;
}
</style>