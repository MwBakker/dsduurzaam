<template>
  <div id="nav-container">
    <div id="label-main">
      <div class="label-content">
        <div class="left-content">
          <svgIcon
            iconPath="M512 32c0 113.6-84.6 207.5-194.2 222c-7.1-53.4-30.6-101.6-65.3-139.3C290.8 46.3 364 0 448 0l32 0c17.7 0 32 14.3 32 32zM0 96C0 78.3 14.3 64 32 64l32 0c123.7 0 224 100.3 224 224l0 32 0 160c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-160C100.3 320 0 219.7 0 96z" />
          <span>Uw partner voor duurzame installaties</span>
        </div>
        <div class="center-content">
          <span>Werken bij InsteQ? Bel of mail ons!</span>
        </div>
        <div class="right-content">
          <span>
            <a href="tel:0599585010">
              <svgIcon
                iconPath="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
              0599 585010
            </a>
          </span>
          <span>
            <a href="mailto:info@insteq.nl">
              <svgIcon
                iconPath="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
              info@insteq.nl
            </a>
          </span>
        </div>
      </div>
    </div>
    <!-- Overlay voor de rest van de pagina als de dropdown open is -->
    <div class="overlay" v-if="isDropdownVisible"></div>
    <nav>
      <div class="nav-left">
        <a href="/" class="logo">
          <img src="@/assets/logo insteq.png" alt="Logo" />
        </a>
      </div>
      <div class="nav-center">
        <ul id="titles">
          <li :class="{ active: activePage === 'home' }" @click="goRoute('home')">Home</li>
          <li :class="{ active: isProductActive || isDropdownVisible }" id="dropdown-toggle" @mouseenter="showDropdown"
            @mouseleave="checkIfShouldHideDropdown">
            Onze producten
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" :class="{ 'rotate-icon': isDropdownVisible }">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </li>
          <div id="mega-dropdown" v-if="isDropdownVisible" @mouseenter="showDropdown"
            @mouseleave="checkIfShouldHideDropdown">
            <div class="cards-container">
              <ProductCard route="heat-pump" title="Warmtepomp" image="home"
                subtitle="Van hybride tot en met all-electric." buttonText="Ga naar" @click="hideDropdown" />
              <ProductCard route="airco" title="Airconditioning" image="airco" subtitle="Zowel koelen als verwarmen"
                buttonText="Ga naar" @click="hideDropdown" />
              <ProductCard route="floor-heating" title="Vloerverwarming" image="floor-heating"
                subtitle="Nog duurzamer in combinatie met een warmtepomp" buttonText="Ga naar" @click="hideDropdown" />
              <ProductCard route="solar" title="Zonnepanelen" image="solar"
                subtitle="Je andere duurzame installaties voeden met eigen opgewerkte energie" buttonText="Ga naar"
                @click="hideDropdown" />
              <ProductCard route="charge-points" title="Laadpaal" image="charge-points"
                subtitle="Je auto opladen met eigen opgewerkte energie" buttonText="Ga naar" @click="hideDropdown" />
              <ProductCard route="service" title="Service" image="service" subtitle="Wij staan altijd voor u klaar"
                buttonText="Ga naar" @click="hideDropdown" />
            </div>
          </div>
          <li :class="{ active: activePage === 'subsidie' }" @click="goRoute('subsidy')">Subsidie</li>
          <li :class="{ active: activePage === 'service' }" @click="goRoute('service')">Service</li>
        </ul>
      </div>
      <div class="nav-right">
        <button class="nav-button contact-button" @click="scrollToContactForm">
          Offerte aanvragen
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
            class="button-arrow">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </nav>
  </div>
</template>

<script>
import upper_content_container from "./Upper-content-container.vue";
import svgIcon from "./icon.vue";
import ProductCard from '@/components/cards/product/Regular.vue';

export default {
  name: "navigation-bar",
  data() {
    return {
      activePage: 'home',  // Stel standaard de actieve pagina in op 'home'
      isDropdownVisible: false,
      hideDropdownTimer: null, // Timer om te voorkomen dat de dropdown te snel verdwijnt
    };
  },
  methods: {
    showDropdown() {
      this.isDropdownVisible = true;
      clearTimeout(this.hideDropdownTimer); // Zorg ervoor dat het verbergen niet direct gebeurt
    },
    checkIfShouldHideDropdown() {
      // Voeg een korte vertraging toe voordat de dropdown verdwijnt
      this.hideDropdownTimer = setTimeout(() => {
        this.isDropdownVisible = false;
      }, 0); // Vertraging om de gebruiker de tijd te geven om te hoveren
    },
    hideDropdown() {
      this.isDropdownVisible = false;
    },
    goRoute(page) {
      this.activePage = page;  // Werk de waarde van 'activePage' bij wanneer een nieuwe pagina wordt geselecteerd
      this.$root.routeGo(page); // Navigeer naar de opgegeven pagina
    },
    // Toegevoegde scrollToContactForm methode
    scrollToContactForm() {
      const contactForm = document.getElementById("contact-form-container");
      if (contactForm) {
        const elementPosition = contactForm.getBoundingClientRect().top + window.pageYOffset; // Positie van het element
        const offset = 200; // Pas deze waarde aan naar hoeveel je naar boven wilt scrollen
        window.scrollTo({
          top: elementPosition - offset, // Verplaats de scrollpositie met de offset naar boven
          behavior: "smooth" // Zorg voor een vloeiende scroll
        });
      }
    }

  },
  computed: {
    isProductActive() {
      return ['heat-pump', 'airco', 'floor-heating', 'solar', 'charge-points', 'service'].includes(this.activePage);
    },
  },
  components: {
    upper_content_container,
    svgIcon,
    ProductCard,
  },
};
</script>




<style lang="scss" scoped>
#nav-container {
  width: 100%;
  z-index: 999;
  /* Zorg ervoor dat de navigatie boven de overlay blijft */
  background-color: white;
  transition: 0.5s ease all;
  position: fixed;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

#label-main {
  height: 36px;
  background-color: #fff;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  box-sizing: border-box;
}

.label-content {
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
}

.left-content {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #2e8b57;
  font-size: 0.9rem;
  font-weight: 600;
}

.left-content svg {
  fill: #2e8b57;
}

.left-content span {
  font-weight: 600;
}

/* Right content */
.right-content {
  display: flex;
  gap: 20px;
  align-items: center;
}

.right-content span {
  display: flex;
  align-items: center;
  gap: 5px;
  color: #08535e;
  font-size: 0.9rem;
  font-weight: 600;
}

.right-content a:hover {
  font-size: 0.9rem;
  /* Pas de waarde aan naar wens */
  font-weight: 700;
}

.right-content svg {
  fill: #08535e;
}

.right-content a:hover svg {}

.right-content a {
  text-decoration: none;
  color: #08535e;
  display: flex;
  align-items: center;
  gap: 5px;
}

.right-content span:hover {
  color: #2e8b57;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 0;
  position: relative;
  /* Zorg dat z-index werkt */
  z-index: 1100;
  /* Hoger dan de z-index van de mega-dropdown */
  border-bottom: 1px solid #d3d3d3;
  /* Lichtgrijze border aan de onderkant */

}

/* Logo in het linkerdeel van de navigatie */
.nav-left {
  flex: 1;
  /* Logo vult de linker ruimte */
  display: flex;
  align-items: center;
}

.logo {
  z-index: 1101; /* Zorg ervoor dat het boven de mega-dropdown (z-index: 1000) komt */
  position: relative; /* Zorg ervoor dat de z-index correct wordt toegepast */
}

.logo img {
  height: 60px;
  width: auto;
  margin-left: 20px;
  /* Logo iets naar links verschuiven */
}

/* Titel-items (ul/li's) in het midden van de navigatie */
.nav-center {
  flex: 3;
  display: flex;
  justify-content: flex-start;
  /* Lijn items links uit */
  align-items: center;
}

/* Knoppen of andere elementen in het rechterdeel van de navigatie */
.nav-right {
  flex: 2;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  /* Voeg een kleine ruimte tussen de knoppen toe */
  padding-right: 20px;
}

/* Stijl voor een eventuele knop in de rechterkant */
.contact-button {
  background-color: #2e8b57;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.contact-button:hover {
  background-color: #105490;
}

/* Titel-items */
#titles {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0;
  padding: 0;
  list-style: none;
}

#titles li {
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-right: 0px;
  font-weight: 600;
  font-size: 1.1rem;
  color: #08535e;
  padding: 20px;
}

#titles li:hover {
  color: #2e8b57;
}


#dropdown-toggle {
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
}

#dropdown-toggle svg {
  margin-left: 8px;
  transition: transform 0.3s ease;
  transform: rotate(0deg);
}

/* Zorg dat de hover-kleur blauw wordt op het menu-item en mega-dropdown */
#dropdown-toggle:hover,
#mega-dropdown:hover,
#mega-dropdown:hover svg {
  color: #2e8b57;
}

#dropdown-toggle:hover svg,
#mega-dropdown:hover svg,
#dropdown-toggle.active svg,
#mega-dropdown:hover svg {
  transform: rotate(180deg);
  /* Icoon 180 graden draaien */
  transition: transform 0.3s ease;
  /* Zachte animatie */
}

.rotate-icon {
  transform: rotate(180deg);
  /* Draai de pijl omhoog als de dropdown zichtbaar is */
}

#dropdown-toggle:hover svg {
  transform: rotate(180deg);
}

/* Mega dropdown styling */
#mega-dropdown {
  display: none;
  position: absolute;
  top: calc(100% - 20px);
  left: 0;
  width: 100vw;
  background-color: white;
  padding: 20px 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  /* Zorg dat het boven de overlay blijft */
  justify-content: space-around;
  padding-top: 50px;
}

#dropdown-toggle:hover+#mega-dropdown,
#mega-dropdown:hover {
  display: flex !important;
}

/* Verwijder de negatieve marge */
#dropdown-toggle {
  margin-bottom: 0;
  /* Verwijderde marge om probleem op te lossen */
}

#mega-dropdown {
  margin-top: 0;
  /* Zorg ervoor dat het dropdown-menu naadloos aansluit */
}

#mega-dropdown ul {
  list-style: none;
  padding: 0;
}

#mega-dropdown li {
  padding: 10px 20px;
  font-size: 1rem;
  white-space: nowrap;
  cursor: pointer;
}

#mega-dropdown li:hover {
  color: #2e8b57;
  text-decoration: underline;
}

#mega-dropdown li:nth-child(1) {
  transition-delay: 0.1s;
}

#mega-dropdown li:nth-child(2) {
  transition-delay: 0.15s;
}

#mega-dropdown li:nth-child(3) {
  transition-delay: 0.2s;
}

#mega-dropdown li:nth-child(4) {
  transition-delay: 0.25s;
}

#mega-dropdown li:nth-child(5) {
  transition-delay: 0.3s;
}

.cards-container {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  /* 6 kolommen voor de productcards */
  grid-gap: 20px;
  padding: 0 20px;
  box-sizing: border-box;
  width: 100%;
}

.product-card {
  position: relative;
  cursor: pointer;
  overflow: hidden;
  aspect-ratio: 1 / 1;
  background-color: white;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
}

.product-card:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}

.product-card img {
  width: 100%;
  height: auto;
}

.card-title h2 {
  font-size: 1.2rem;
  font-weight: 800;
  margin-bottom: 10px;
}

.overlay {
  position: fixed;
  top: 130px;
  /* Zorg dat de overlay onder de navigatie begint */
  left: 0;
  width: 100vw;
  height: calc(100vh - 130px);
  /* Overlay bedekt de rest van de pagina */
  background: rgba(0, 0, 0, 0.5);
  z-index: 998;
  /* Zorg dat de overlay onder het dropdownmenu en navigatie blijft */
  pointer-events: none;
  /* Overlay blokkeert geen interacties */
}

.nav-button {
  display: flex;
  width: 50%;
  justify-content: center;
  /* Zorgt ervoor dat de tekst en pijl horizontaal gecentreerd worden */
  align-items: center;
  /* Verticaal centreren van de tekst en de pijl */
  gap: 8px;
  /* Ruimte tussen de tekst en de pijl */
  background-color: #2e8b57;
  color: #fff;
  font-size: 1.3em;
  font-weight: 700;
  border: none;
  padding: 10px 20px;
  position: relative;
  cursor: pointer;
  transition: background-color 0.3s ease, opacity 0.3s ease;
}

.nav-button:hover {
  background-color: #2e8b56dc;
}


/* De pijl in de knop */
.button-arrow {
  position: absolute;
  right: 20px;
  width: 1.5rem;
  height: 1.5rem;
  opacity: 0;
  transition: transform 0.3s ease, opacity 0.3s ease;
  transform: translateX(-30px);
  /* Startpositie buiten de knop */
}

/* Animatie bij hover */
.nav-button:hover .button-arrow {
  transform: translateX(0);
  /* Schuift naar binnen */
  opacity: 1;
  /* Wordt zichtbaar */
}

.center-content {
  flex: 1;
  text-align: center;
}

.center-content h2 {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  color: #2e8b57;
  /* Aangepaste kleur, je kunt deze aanpassen naar wens */
}

.center-content span {
  font-size: 0.9rem;
  font-weight: 600;
  color: #08535e;
  /* Aangepaste kleur, indien gewenst */
}

.nav-right .contact-button {
  position: relative;
  z-index: 1200;
  /* Zorg dat de knop "Offerte op maat" boven de mega-dropdown komt */
}
</style>
