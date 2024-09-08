<template>
  <navBar v-if="windowWidth > 1548" ref="navBar" />
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
  font-family: Manrope, sans-serif;
  font-weight: 400;
  font-size: 0.925rem;
}

p {
  font-family: 'Roboto';
  color: rgb(107, 107, 107);
}

li {
  cursor: pointer;
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 1.05em;
  padding-bottom: 4px;
  padding: 32px;

  &:hover {
    color: #dea130;
  }
}

h1 {
  font-family: 'Roboto';
  font-size: 38px;
  font-weight: 550;
}

h2 {
  font-family: Manrope, sans-serif;
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

.product-row {
  margin: 14vh 0 45vh 0;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

#quotes {
  display: flex;
  justify-content: space-around;
}

.product {
  margin: 0 auto;
  width: 1548px;
}

.sub-card {
  margin: 0 5%;
}

.sub-product {
  display: flex;
  justify-content: space-between;
  margin: 96px 0;
  align-items: center;

  .sub-product-card {
    margin: 0 5%;
  }
}

hr {
  margin: 128px 0;
  border: 0.25px solid #00000013;
}

.quotes {
  display: flex;
  justify-content: space-around;
  margin: 64px 0;
}

.product-row {
  margin: 16vh 0 33vh 0;
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

@media (max-width: 1548px) {
  .product {
    width: 100%;
  }

  .sub-product {
    flex-direction: column;
  }
}
</style>