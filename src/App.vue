<template>
  <div class="app">
    <navBar />
    <router-view />
    <customFooter />
  </div>
</template>

<script>
import navBar from "./components/Navigation_bar.vue"
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
  font-family: Manrope, Trebuchet MS, Helvetica, sans-serif
}

button {
  -moz-transition: all .2s ease-in;
  -o-transition: all .2s ease-in;
  -webkit-transition: all .2s ease-in;
  box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 18%);
  transition: all .2s ease-in;
  background-color: #fbb536;
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

  &:hover {
    background-color: #2c5484;
  }

  #contact-link {
    margin-left: 5%;
  }

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