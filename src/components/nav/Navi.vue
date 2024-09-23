<template>
  <div id="nav-container">
    <div id="label-main">
      <p>Direct uit voorraad leverbaar!</p>
    </div>
    <nav>
      <ul id="titles">
        <!-- Home item -->
        <li :class="{ active: activePage === 'home' }" @click="routeGo('home')">
          <template v-if="activePage === 'home'">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#ffda00" viewBox="0 0 24 24">
              <rect width="12" height="12" />
            </svg>
          </template>
          Home
        </li>

        <!-- Dropdown voor "Onze producten" -->
        <li :class="{ active: isProductActive }" id="dropdown-toggle">
          <template v-if="isProductActive">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#ffda00" viewBox="0 0 24 24">
              <rect width="12" height="12" />
            </svg>
          </template>
          Onze producten
          <ul class="dropdown-menu">
            <li :class="{ active: activePage === 'heat-pump' }" @click="routeGo('heat-pump')">
              <template v-if="activePage === 'heat-pump'">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#ffda00" viewBox="0 0 24 24">
                  <rect width="12" height="12" />
                </svg>
              </template>
              Warmtepomp
            </li>
            <li :class="{ active: activePage === 'airco' }" @click="routeGo('airco')">
              <template v-if="activePage === 'airco'">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#ffda00" viewBox="0 0 24 24">
                  <rect width="12" height="12" />
                </svg>
              </template>
              Airconditioning
            </li>
            <li :class="{ active: activePage === 'floor-heating' }" @click="routeGo('floor-heating')">
              <template v-if="activePage === 'floor-heating'">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#ffda00" viewBox="0 0 24 24">
                  <rect width="12" height="12" />
                </svg>
              </template>
              Vloerverwarming
            </li>
            <li :class="{ active: activePage === 'solar' }" @click="routeGo('solar')">
              <template v-if="activePage === 'solar'">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#ffda00" viewBox="0 0 24 24">
                  <rect width="12" height="12" />
                </svg>
              </template>
              Zonnepanelen
            </li>
            <li :class="{ active: activePage === 'charge-points' }" @click="routeGo('charge-points')">
              <template v-if="activePage === 'charge-points'">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#ffda00" viewBox="0 0 24 24">
                  <rect width="12" height="12" />
                </svg>
              </template>
              Laadpaal
            </li>
          </ul>
        </li>

        <!-- Andere items -->
        <li :class="{ active: activePage === 'about' }" @click="routeGo('about')">
          <template v-if="activePage === 'about'">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#ffda00" viewBox="0 0 24 24">
              <rect width="12" height="12" />
            </svg>
          </template>
          Over ons
        </li>
        <li :class="{ active: activePage === 'jobs' }" @click="routeGo('jobs')">
          <template v-if="activePage === 'jobs'">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#ffda00" viewBox="0 0 24 24">
              <rect width="12" height="12" />
            </svg>
          </template>
          Werken bij
        </li>
        <li :class="{ active: activePage === 'service' }" @click="routeGo('service')">
          <template v-if="activePage === 'service'">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#ffda00" viewBox="0 0 24 24">
              <rect width="12" height="12" />
            </svg>
          </template>
          Service
        </li>
      </ul>
    </nav>
  </div>
  <upper_content_container :title="title" :description="description" :backgroundImage="headerImg">
    <h1 id="lol">Subsidie op al onze systemen! Laat ons uw voordeel berekenen!</h1>
  </upper_content_container>
</template>

<script>
import upper_content_container from "./Upper-content-container.vue";

export default {
  name: "navigation-bar",
  data() {
    return {
      activePage: "home", // Begin met 'home' als standaard actieve pagina
      title: 'Ontdek wat bij je huis past',
      headerImg: 'home',
      description: 'Heb je een koophuis en overweeg je een warmtepomp? Laat je gegevens achter en kom in contact met één van onze experts. Zij helpen je met een advies op maat en een offerte. Je ontvangt tot € 500,-- korting op je warmtepomp.',
      headerText: {
        'home': ["Ontdek wat bij je huis past", "Uw absolute partner voor een energiezuiniger leven en werken!"],
        'heat-pump': ["Verwarm en koel duurzaam met onze warmtepompen!", "Ontdek de toekomst van energie-efficiëntie."],
        'airco': ["Ervaar ultiem comfort met onze veelzijdige airco’s!", "Koel in de zomer, verwarm in de winter en bespaar."],
        'floor-heating': ["Ervaar luxe en comfort met onze vloerverwarming!", "Geniet van gelijkmatige warmte in de winter en koel in de zomer."],
        'solar': ["Maximaliseer uw besparingen met onze zonnepanelen!", "Combineer duurzame energie met andere installaties."],
        'charge-points': ["Laad uw elektrische voertuig gemakkelijk op!", "Onze op maat gemaakte oplossingen bieden snelle en betrouwbare oplading."],
        'service': ["Blijf zorgeloos genieten met onze snelle service en onderhoud!", "Wij bieden deskundige ondersteuning en onderhoud."],
      },
    };
  },
  components: {
    upper_content_container
  },
  computed: {
    isProductActive() {
      // Controleer of een van de productpagina's actief is
      return ['heat-pump', 'airco', 'floor-heating', 'solar', 'charge-points'].includes(this.activePage);
    }
  },
  methods: {
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.handleScroll);
    },
    routeGo(page) {
      this.activePage = page; // Update de actieve pagina
      var array = this.headerText[page];
      this.title = array[0];
      this.description = array[1];
      this.headerImg = page;
      this.$router.push({ name: page });
    },
  },
};
</script>

<style lang="scss">
#nav-container {
  width: 100%;
  z-index: 999;
  background-color: white;
  transition: 0.5s ease all;
  position: fixed;
}

#label-main {
  height: 36px;
  background-color: #222222;

  p {
    text-align: center;
    font-size: 0.9rem;
    padding-top: 10px;
    color: #ffffff;
    font-weight: 400;
  }
}

nav {
  display: flex;
  align-items: center;
  justify-content: flex-start; /* Zorg ervoor dat alle items links beginnen */
  max-width: 1548px;
  width: 75%; /* Zorg ervoor dat de navigatiebalk 100% breed is */
  margin: 0 auto;
  padding: 0 20px;
  padding-top: 20px;
  padding-bottom: 10px;
}

#titles {
  display: flex;
  align-items: center;
  justify-content: flex-start; /* Zorg ervoor dat de items in de ul aan de linkerkant staan */
  margin: 0;
  padding: 0;
  list-style: none;
  flex-grow: 1;
  margin-left: 0; /* Verwijder eventuele extra marge aan de linkerkant */
}

#titles li {
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-right: 10px;
  font-weight: 600;
  font-size: 1.2rem;
  line-height: 1.5rem;
  color: #222222;

  &:hover {
    color: #2071b5;
  }
}

/* Styling voor de actieve link */
#titles li.active {
  color: #2071b5; /* Blauw voor actieve pagina */
}

/* Voor dropdown-menu-items */
.dropdown-menu li.active {
  color: #2071b5; /* Blauw voor actieve dropdown-item */
}

#dropdown-toggle {
  position: relative; /* Zorg ervoor dat de dropdown ten opzichte van dit element is gepositioneerd */
}

.dropdown-menu {
  display: none; /* Verberg standaard de dropdown */
  position: absolute; /* Positioneer de dropdown absoluut ten opzichte van de ouder */
  top: 100%; /* Plaats de dropdown direct onder het menu-item */
  left: 0;
  z-index: 999; /* Zorg ervoor dat de dropdown boven andere elementen wordt weergegeven */
  background-color: white;
  padding: 10px 0;
  list-style: none;
  margin: 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Voeg schaduw toe voor zichtbaarheid */
}

/* Toon de dropdown bij hover */
#dropdown-toggle:hover .dropdown-menu {
  display: block; /* Toon de dropdown wanneer er over het menu-item wordt gehoverd */
}

.dropdown-menu li {
  padding: 10px 20px;
  white-space: nowrap; /* Zorg ervoor dat de tekst niet afbreekt */
  text-align: left; /* Uitlijning van de tekst naar links */
}

</style>
