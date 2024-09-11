<template>
  <navBar v-if="windowWidth > 1024" ref="navBar" />
  <navBarMobile v-else ref="navBar" />
  <router-view />
  <customFooter />
</template>

<script>
import navBar from "./components/nav/Navi.vue"
import navBarMobile from "./components/nav/Navi-mobile.vue"
import customFooter from "./components/Footer.vue"

export default {
  name: "App",
  data() {
    return {
      windowWidth: window.innerWidth
    }
  },
  components: {
    navBar,
    navBarMobile,
    customFooter,
  }
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: Robotoo, sans-serif;
  font-weight: 400;
  font-size: 0.9rem;
}

p {
  font-family: 'Roboto';
  color: rgb(107, 107, 107);
}

a {
  text-decoration: none;
}

li {
  cursor: pointer;
  font-family: 'Roboto';
  font-weight: 0;
  font-size: 0.9em;
  padding-bottom: 4px;
  padding: 10px;
  color: #2c5484;

  &:hover {
    color: #fbb536;
  }
}

h1,
.light,
h2 {
  font-family: 'Roboto';
  font-size: 38px;
  font-weight: 550;
}

h2 {
  font-size: 1.3rem;
}

button,
#button-send {
  background-color: #5178a5;
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

#quotes {
  display: flex;
  justify-content: space-around;
}

.product {
  margin: 0 auto;
  width: 1548px;
}

.sub-product-content {
  max-width: 1548px;
  margin: 0 auto;
}

.sub-product-quote {
  margin-right: 5%;
}

.sub-product {
  display: flex;
  margin-top: 120px;

  .cards {
    display: flex;
    flex-wrap: wrap;
  }
}

hr {
  margin: 0;
  border: 0.25px solid #00000013;
}

.quotes {
  display: flex;
  justify-content: space-around;
  margin: 64px 0;
}

::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: #ffffff;
}

::-webkit-scrollbar-thumb {
  background: #2c5484;
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

@media (max-width: 1024px) {
  .product {
    width: 100%;
  }

  .sub-product {
    margin: 0;
    margin-top: 64px;
    text-align: center;
    flex-direction: column;
    align-items: center;
  }
}
</style>