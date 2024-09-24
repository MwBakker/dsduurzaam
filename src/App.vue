<template>
  <div class="app">
    <navBar v-if="windowWidth > 1280" ref="navBar" />
    <navBarMobile v-else ref="navBar" />
    <router-view />
    <customFooter />
  </div>
</template>

<script>
import navBar from "./components/nav/Navi.vue";
import navBarMobile from "./components/nav/Navi-mobile.vue";
import customFooter from "./components/Footer.vue";

export default {
  name: "App",
  data() {
    return {
      windowWidth: window.innerWidth
    };
  },
  components: {
    navBar,
    navBarMobile,
    customFooter,
  },
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif !important;
  word-spacing: 0px !important;
  /*font-weight: 600;*/
}

p {
  font-family: 'Montserrat', sans-serif !important;
  color: #222222;
  word-spacing: 0px !important;
}

a {
  text-decoration: none;
}

li {
  cursor: pointer;
  font-family: 'Montserrat', sans-serif !important;
  word-spacing: 0px !important;
  font-weight: 0;
  font-size: 0.9em;
  padding-bottom: 4px;
  padding: 10px;
  color: #222222;

  &:hover {
    color: #fbb536;
  }
}

h1,
.light,
h2 {
  font-family: 'Montserrat', sans-serif !important;
  font-size: 38px;
  font-weight: 550;
  word-spacing: 0px !important;
}

h2 {
  font-size: 1.2rem;
}

button,
#button-send {
  width: 250px;
  background-color: #5178a5;
  border-radius: 0px;
  border: 1px solid rgba(0, 0, 0, 0.15);
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
  box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 18%);
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
  background: #222222;
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

#scroll-button {
  position: fixed;
  /* Zorg ervoor dat de knop altijd zichtbaar is */
  bottom: 20px;
  /* Plaats de knop 20px vanaf de onderkant van het scherm */
  right: 20px;
  /* Plaats de knop 20px vanaf de rechterkant van het scherm */
  background-color: #5178a5;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
}

#scroll-button:hover {
  background-color: #3e5b7a;
}

a {
  position: relative; /* Zorg ervoor dat de tooltip relatief is aan de link */
}
</style>
