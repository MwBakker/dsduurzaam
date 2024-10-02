<template>
  <navBar v-if="windowWidth > 1280" ref="navBar" />
  <navBarMobile v-else ref="navBar" />
  <upperContentContainer :mainImg="headerImg" :mainTitle="headerTitle" :showMainUrl="showHeaderUrl"
    :mainUrl="headerMainUrl" :showBox="showHeaderBox" :boxTitle="headerBoxTitle" :boxDescription="headerBoxDescription"
    :boxUrl="headerBoxUrl">
  </upperContentContainer>
  <router-view />
  <customFooter />
</template>

<script>
import navBar from "./components/nav/Navi.vue";
import navBarMobile from "./components/nav/Navi-mobile.vue";
import customFooter from "./components/footer/Footer.vue";
import upperContentContainer from "./components/nav/Upper-content-container.vue";

export default {
  name: "App",
  data() {
    return {
      windowWidth: window.innerWidth,
      activePage: 'home',
      headerImg: 'home',
      headerTitle: 'Je huis verwarmen met een waterpomp',
      showHeaderUrl: 1,
      headerMainUrl: 'heat-pump',
      showHeaderBox: 0,
      headerBoxTitle: 'Tip: Subsidie',
      headerBoxDescription: 'Uw absolute partner voor een energiezuiniger leven en werken!',
      headerBoxUrl: 'heat-pump',
      headerContent: {
        'home': ['Je huis verwarmen met een waterpomp', 1, 'heat-pump', 0, "Subsidie", "Uw absolute partner voor een energiezuiniger leven en werken!", 'service'],
        'heat-pump': ['Duurzaam verwarmen met onze warmtepompen', 0, 'airco', 0, "Verwarm en koel duurzaam met onze warmtepompen!", "Ontdek de toekomst van energie-efficiëntie.", 'about'],
        'airco': ["Uw huis koelen en verwarmen met airco's", 0, 'floor-heating', 0, "Ervaar ultiem comfort met onze veelzijdige airco’s!", "Koel in de zomer, verwarm in de winter en bespaar.", 'jobs'],
        'floor-heating': ["Efficiënt verwarmen met vloerverwarming", 0, 'solar', 0, "Ervaar luxe en comfort met onze vloerverwarming!", "Geniet van gelijkmatige warmte in de winter en koel in de zomer.", 'heat-pump'],
        'solar': ["Uw huis voorzien van stroom met zonnepanelen", 0, 'charge-points', 0, "Maximaliseer uw besparingen met onze zonnepanelen!", "Combineer duurzame energie met andere installaties.", 'floor-heating'],
        'charge-points': ["Uw voertuig(en) opladen met een laadpaal", 0, 'services', 0, "Laad uw elektrische voertuig gemakkelijk op!", "Onze op maat gemaakte oplossingen bieden snelle en betrouwbare oplading.", 'about'],
        'services ': ["Pakkende slogan voor product (service)", 0, 'about', 0, "Wat wij bieden", "Onze diensten helpen u verduurzamen en besparen.", 'jobs'],
        'about': ["Ons bedrijf", 0, 'jobs', 0, "Met ons valt niet te sollen, Ter Apel weetje", "Wij bieden deskundige ondersteuning en onderhoud.", 'service'],
        'subsidy': ["Maximaal van de staat pakken!", 0, 'jobs', 0, "Vis het meest uit de potjes!", "Het ligt er toch?", 'service'],
        'jobs': ["Werken bij ons?", 0, 'service', 0, "Je bent nu op pagina vacatures", "Wij bieden een geweldig wurgcontract.", 'airco'],
        'service': ["Je bent nu op pagina Service", 0, 'heat-pump', 0, "Blijf zorgeloos genieten met onze snelle service en onderhoud!", "Wij bieden deskundige ondersteuning en onderhoud.", 'heat-pump'],
      },
    };
  },
  components: {
    navBar,
    navBarMobile,
    customFooter,
    upperContentContainer,
  },
  methods: {
    routeGo(page) {
      this.activePage = page; // Update de actieve pagina
      this.$router.push({ name: page });
      var headerParams = this.headerContent[page];
      this.headerImg = page;
      this.headerTitle = headerParams[0];
      this.showHeaderUrl = headerParams[1]
      this.headerMainUrl = headerParams[2];
      this.showHeaderBox = headerParams[3];
      this.headerBoxTitle = headerParams[4];
      this.headerBoxDescription = headerParams[5];
      this.headerBoxUrl = headerParams[6];
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

p {
  color: #08535e;
  word-spacing: 0px !important;
}

a {
  text-decoration: none;
  position: relative;
}

li {
  cursor: pointer;
  word-spacing: 0px !important;
  font-size: 0.9em;
  padding-bottom: 4px;
  padding: 10px;
  color: #08535e;
}

h1,
.light,
h2 {
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

#app {
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

::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: #ffffff;
}

::-webkit-scrollbar-thumb {
  background: #08535e;;
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
