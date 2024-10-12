<template>
  <NavBar v-if="windowWidth > 1280" ref="navBar" />
  <NavBarMobile v-else ref="navBar" />
  <CustomHeader :mainImg="activePage" :mainTitle="headerTitle" :mainUrl="headerMainUrl" />
  <!-- introcard checkt hoe hoog top is op basis van of er een main header is of niet -->
  <div class="background-wrapper" id="intro" :style="{ marginTop: (headerTitle == '') ? '0' : '24px' }">
    <IntroCard :title="introCardTitle" :text="introCardText" :text2="introCardText2" :buttonText="introCardUrl"
      :style="{ top: (headerTitle == '') ? '10px' : '-110px' }" />
  </div>
  <router-view />
  <CustomFooter />
  <!-- <CookieConsent /> -->
</template>
<script>
import NavBar from "./components/nav/Navi.vue";
import NavBarMobile from "./components/nav/Navi-mobile.vue";
import CustomHeader from "./components/nav/Header-custom.vue";
import IntroCard from "./components/cards/introduction/Introduction-card-sub.vue";
import CustomFooter from "./components/footer/Footer.vue";
// import CookieConsent from "@/components/CookieConsent.vue";

export default {
  name: "App",
  components: {
    NavBar,
    NavBarMobile,
    CustomHeader,
    IntroCard,
    CustomFooter,
    // CookieConsent
  },
  mounted() {
    // Update de pagina inhoud op basis van de huidige route zodra de component gemount is
    this.updatePageContent(this.$route.name);
  },
  watch: {
    // Kijk naar routeveranderingen en update de inhoud bij elke wijziging
    $route(to) {
      this.updatePageContent(to.name);
    }
  },
  methods: {
    updatePageContent(pageName) {
      // Werk de actieve pagina en header content bij op basis van de route
      this.activePage = pageName;
      this.headerImg = pageName;
      var headerContent = this.headerMap[this.activePage];
      if (headerContent != null) {
        this.headerTitle = headerContent['title'];
        this.headerMainUrl = headerContent['url'];
        this.introCardTitle = headerContent['box']['title'];
        this.introCardText = headerContent['box']['text'];
        this.introCardText2 = headerContent['box']['text2'];
        this.introCardUrl = headerContent['box']['url'];
      }
    },
    routeGo(page) {
      this.$router.push({ name: page });
      this.updatePageContent(page); // Werk de inhoud bij na navigatie
    },
  }
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
  word-spacing: 0px !important;
  /*font-weight: 600;*/
}

#app {
  min-height: 100vh;
  position: relative;
}

h1 {
  font-size: 2.25rem;
  font-weight: 800;
}

h2 {
  font-size: 1.15rem;
  font-weight: 600;
}

h3 {
  font-size: 1.075em;
}

p {
  font-size: 1.075rem;
  word-spacing: 0px !important;
}

p,
a,
h1,
h2,
h3,
li {
  color: #08535e;
}

a {
  text-decoration: none;
  position: relative;
}

li {
  cursor: pointer;
  word-spacing: 0px !important;
  padding-bottom: 4px;
  padding: 10px;
}

hr {
  margin: 0;
  border: 0.25px solid #00000013;
}

#intro {
  padding: 0;
}

.background-wrapper {
  margin-top: 20px;
  background-color: rgba(238, 238, 238, 0.4117647059);
}

.background-wrapper,
.background-wrapper-white {
  display: flex;
  width: 98%;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  box-sizing: border-box;
  margin: 0 auto 50px;
  position: relative;
}

.background-wrapper-red {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #14121200;
  padding: 20px 0;
  box-sizing: border-box;
  margin: 0 auto 50px;
}

.no-top {
  top: 0 !important;
}

.background-wrapper-white {
  background-color: #ffffff;
  padding: 20px 0;
}

::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: #ffffff;
}

::-webkit-scrollbar-thumb {
  background: #08535e;
  ;
}

.slide-fade-right-enter-active {
  transition: all 1s ease;
}

.slide-fade-right-enter-from,
.slide-fade-right-leave-to {
  transform: translateX(-80%);
  opacity: 0;
}

@media (max-width: 1280px) {

  button {
    height: 46px;
  }

  .background-wrapper {
    margin: 8px auto 0 auto;
    padding: 0;
  }
}

@media (max-width: 800px) {

  .background-wrapper,
  .background-wrapper-white {
    width: initial;
    margin: 0 12px;
  }

  h2 {
    font-size: 1.6rem;
  }

  h3 {
    font-size: 1.1em;
  }

  li,
  p,
  a {
    font-size: 1rem;
  }

  button {
    height: 50px;
  }
}
</style>
