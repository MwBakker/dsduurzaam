<template>
  <NavBar v-if="windowWidth > 1280" ref="navBar" />
  <NavBarMobile v-else ref="navBar" />
  <CustomHeader :mainImg="activePage" :mainTitle="getHeaderMapVal('title')" :mainUrl="getHeaderMapVal('url')"
    :mobileImgOffset="getHeaderMapVal('img-offset')" />
  <!-- introcard checkt hoe hoog top is op basis van of er een main header is of niet -->
  <div class="background-wrapper" id="intro" :style="{ padding: getPadding() }">
    <IntroCard :title="getHeaderMapBoxVal('title')" :text="getHeaderMapBoxVal('text')"
      :text2="getHeaderMapBoxVal('text2')" :buttonText="getHeaderMapBoxVal('url')" :style="{ top: getCardTop() }" />
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
  data() {
    return {
      activePage: 'home',
    };
  },
  mounted() {
    this.activePage = this.$route.name;
  },
  watch: {
    $route(to) {
      this.activePage = to.name;
    }
  },
  methods: {
    getHeaderMapVal(value) {
      if (this.checkMapEntry())
        return this.headerMap[this.activePage][value];
    },
    getHeaderMapBoxVal(value) {
      if (this.checkMapEntry())
        return this.headerMap[this.activePage]['box'][value];
    },
    checkMapEntry() {
      var mapEntry = this.headerMap[this.activePage];
      return (mapEntry != null)
    },
    routeGo(page) {
      this.$router.push({ name: page });
      this.activePage = page; // Werk de inhoud bij na navigatie
    },
    getPadding() {
      return (this.getHeaderMapVal('title') == '') ? '12px 0' : '0';
    },
    getCardTop() {
      return (this.getHeaderMapVal('title') == '') ? '0' : '-86px';
    }
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

html {
  -webkit-text-size-adjust: none;
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
  font-weight: 700;
}

h3 {
  font-size: 1.075em;
}

p {
  font-size: 1.075rem;
  word-spacing: 0px !important;
  color: #222222;
}

a {
  color: #222222;
}

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
  width: 98%;
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
  .background-wrapper-white .background-wrapper-red {
    width: initial;
  }

  .background-wrapper-red {
    padding: 8px;
    margin: 0;
  }

  h1 {
    font-size: 1.6rem;
    text-align: center;
  }

  h2 {
    font-size: 1.15rem;
    text-align: center;
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
