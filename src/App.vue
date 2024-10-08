<template>
  <navBar v-if="windowWidth > 1280" ref="navBar" />
  <navBarMobile v-else ref="navBar" />
  <upperContentContainer v-if="showHeader()" :mainImg="headerImg" :mainTitle="headerTitle" :showMainUrl="showHeaderUrl"
    :mainUrl="headerMainUrl" :showBox="showHeaderBox" :boxTitle="headerBoxTitle" :boxDescription="headerBoxDescription"
    :boxUrl="headerBoxUrl">
  </upperContentContainer>
  <div :style="{ height: getHeaderHeight() }" v-else></div>
  <router-view />
  <customFooter />
  <CookieConsent />
</template>
<script>
import navBar from "./components/nav/Navi.vue";
import navBarMobile from "./components/nav/Navi-mobile.vue";
import customFooter from "./components/footer/Footer.vue";
import upperContentContainer from "./components/nav/Upper-content-container.vue";
import CookieConsent from "@/components/CookieConsent.vue";

export default {
  name: "App",
  data() {
    return {
      windowWidth: window.innerWidth,
      activePage: 'home', // Default waarde, maar we gaan dit updaten op basis van de route
      headerImg: 'home',
      headerTitle: 'Uw huis verwarmen met een waterpomp',
      showHeaderUrl: 1,
      headerMainUrl: 'heat-pump',
      showHeaderBox: 0,
      headerBoxTitle: 'Tip: Subsidie',
      headerBoxDescription: 'Uw absolute partner voor een energiezuiniger leven en werken!',
      headerBoxUrl: 'heat-pump',
      headerContent: {
        'home': ['Uw huis verwarmen met een waterpomp', 1, 'heat-pump', 0, "Subsidie", "Uw absolute partner voor een energiezuiniger leven en werken!", 'service'],
        'heat-pump': ['Duurzaam verwarmen met onze warmtepompen', 0, 'airco', 0, "Verwarm en koel duurzaam met onze warmtepompen!", "Ontdek de toekomst van energie-efficiëntie.", 'about'],
        'airco': ["Uw huis koelen en verwarmen met airco's", 0, 'floor-heating', 0, "Ervaar ultiem comfort met onze veelzijdige airco’s!", "Koel in de zomer, verwarm in de winter en bespaar.", 'jobs'],
        'floor-heating': ["Efficiënt verwarmen met vloerverwarming", 0, 'solar', 0, "Ervaar luxe en comfort met onze vloerverwarming!", "Geniet van gelijkmatige warmte in de winter en koel in de zomer.", 'heat-pump'],
        'solar': ["Uw huis voorzien van stroom met zonnepanelen", 0, 'charge-points', 0, "Maximaliseer uw besparingen met onze zonnepanelen!", "Combineer duurzame energie met andere installaties.", 'floor-heating'],
        'charge-points': ["Uw voertuig(en) opladen met een laadpaal", 0, 'services', 0, "Laad uw elektrische voertuig gemakkelijk op!", "Onze op maat gemaakte oplossingen bieden snelle en betrouwbare oplading.", 'about'],
        'services ': ["Pakkende slogan voor product (service)", 0, 'about', 0, "Wat wij bieden", "Onze diensten helpen u verduurzamen en besparen.", 'jobs'],
        'about': ["Ons bedrijf", 0, 'jobs', 0, "Met ons valt niet te sollen, Ter Apel weetje", "Wij bieden deskundige ondersteuning en onderhoud.", 'service'],
        'subsidy': ["Maximaal van de staat pakken!", 0, 'jobs', 0, "Vis het meest uit de potjes!", "Het ligt er toch?", 'service'],
        'jobs': ["Werken bij ons?", 0, 'service', 0, "Je bent nu op pagina vacatures", "Wij bieden een geweldig wurgcontract.", 'airco'],
        'service': ["Nazorg aan onze installaties", 0, 'heat-pump', 0, "Blijf zorgeloos genieten met onze snelle service en onderhoud!", "Wij bieden deskundige ondersteuning en onderhoud.", 'heat-pump'],
      },
    };
  },
  components: {
    navBar,
    navBarMobile,
    customFooter,
    upperContentContainer,
    CookieConsent
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
    showHeader() {
      return this.activePage !== 'subsidy' && this.activePage !== 'service' && this.activePage !== 'manage-cookies' && this.activePage !== 'about';
    },
    getHeaderHeight() {
      return this.windowWidth < 1280 ? '0px' : '150px';
    },
    updatePageContent(pageName) {
      // Werk de actieve pagina en header content bij op basis van de route
      const headerParams = this.headerContent[pageName];
      if (headerParams) {
        this.activePage = pageName;
        this.headerImg = pageName;
        this.headerTitle = headerParams[0];
        this.showHeaderUrl = headerParams[1];
        this.headerMainUrl = headerParams[2];
        this.showHeaderBox = headerParams[3];
        this.headerBoxTitle = headerParams[4];
        this.headerBoxDescription = headerParams[5];
        this.headerBoxUrl = headerParams[6];
      }
    },
    routeGo(page) {
      this.$router.push({ name: page });
      this.updatePageContent(page); // Werk de inhoud bij na navigatie
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

p {
  font-size: 1.2rem;
  word-spacing: 0px !important;
}

h2 {
  font-size: 2.5rem;
}

p,
h2 {
  color: #08535e;
}

a {
  text-decoration: none;
  position: relative;
}

li {
  cursor: pointer;
  word-spacing: 0px !important;
  font-size: 1.2em;
  padding-bottom: 4px;
  padding: 10px;
  color: #08535e;
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

#app {
  min-height: 100vh;
  position: relative;
}

.background-wrapper {
  margin-top: 20px;
  background-color: rgba(238, 238, 238, 0.4117647059);
}

.background-wrapper,
.background-wrapper-white {
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% - 40px);
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

.background-wrapper-white {
  background-color: #ffffff;
  padding: 20px 0;
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
  background: #08535e;
  ;
}

.slide-fade-up-enter-active,
.slide-fade-down-enter-active,
.slide-fade-left-enter-active,
.slide-fade-right-enter-active {
  transition: all 1s ease;
}

.slide-fade-up-leave-active,
.slide-fade-down-enter-active,
.slide-fade-left-leave-active {
  transition: all 1s;
}

.slide-fade-up-enter-from,
.slide-fade-up-leave-to {
  transform: translateY(100%);
  opacity: 0;
}

.slide-fade-down-enter-from,
.slide-fade-down-leave-to {
  transform: translateY(-100%);
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

@media (max-width: 1280px) {
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

@media (max-width: 1280px) {
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
