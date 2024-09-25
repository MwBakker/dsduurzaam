<template>
  <div id="nav-container">
    <div id="label-main">
      <div class="label-content">
        <div class="left-content">
          <svgIcon
            iconPath="M512 32c0 113.6-84.6 207.5-194.2 222c-7.1-53.4-30.6-101.6-65.3-139.3C290.8 46.3 364 0 448 0l32 0c17.7 0 32 14.3 32 32zM0 96C0 78.3 14.3 64 32 64l32 0c123.7 0 224 100.3 224 224l0 32 0 160c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-160C100.3 320 0 219.7 0 96z" />
          <span>Uw partner voor duurzame installaties</span>
        </div>
        <div class="right-content">
          <!-- Telefoonnummer met tel-functionaliteit -->
          <span>
            <a href="tel:0599585010">
              <svgIcon
                iconPath="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
              0599 585010
            </a>
          </span>
          <!-- E-mailadres met mailto-functionaliteit -->
          <span>
            <a href="mailto:info@insteco.nl">
              <svgIcon
                iconPath="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
              info@insteco.nl
            </a>
          </span>
        </div>
      </div>
    </div>

    <nav>
      <ul id="titles">
        <!-- Home item -->
        <li :class="{ active: activePage === 'home' }" @click="routeGo('home')">
          <direction-icon v-if="activePage === 'home'" />
          Home
        </li>
        <!-- Dropdown voor "Onze producten" -->
        <li :class="{ active: isProductActive }" id="dropdown-toggle">
          <direction-icon v-if="isProductActive" />
          Onze producten
          <ul class="dropdown-menu">
            <li :class="{ active: activePage === 'heat-pump' }" @click="routeGo('heat-pump')">
              <direction-icon v-if="activePage === 'heat-pump'" />
              Warmtepomp
            </li>
            <li :class="{ active: activePage === 'airco' }" @click="routeGo('airco')">
              <direction-icon v-if="activePage === 'airco'" />
              Airconditioning
            </li>
            <li :class="{ active: activePage === 'floor-heating' }" @click="routeGo('floor-heating')">
              <direction-icon v-if="activePage === 'floor-heating'" />
              Vloerverwarming
            </li>
            <li :class="{ active: activePage === 'solar' }" @click="routeGo('solar')">
              <direction-icon v-if="activePage === 'solar'" />
              Zonnepanelen
            </li>
            <li :class="{ active: activePage === 'charge-points' }" @click="routeGo('charge-points')">
              <direction-icon v-if="activePage === 'charge-points'" />
              Laadpaal
            </li>
          </ul>
        </li>
        <li :class="{ active: isServiceActive }" id="dropdown-toggle">
          <direction-icon v-if="isServiceActive" />
          Onze diensten
          <ul class="dropdown-menu">
            <li :class="{ active: activePage === 'none' }" @click="routeGo('')">
              <direction-icon v-if="activePage === 'none'" />
              Thaiboks
            </li>
            <li :class="{ active: activePage === 'none' }" @click="routeGo('')">
              <direction-icon v-if="activePage === 'none'" />
              RS
            </li>
          </ul>
        </li>
        <!-- Andere items -->
        <li :class="{ active: activePage === 'about' }" @click="routeGo('about')">
          <direction-icon v-if="activePage === 'about'" />
          Over ons
        </li>
        <li :class="{ active: activePage === 'jobs' }" @click="routeGo('jobs')">
          <direction-icon v-if="activePage === 'jobs'" />
          Werken bij
        </li>
        <li :class="{ active: activePage === 'service' }" @click="routeGo('service')">
          <direction-icon v-if="activePage === 'service'" />
          Service
        </li>
      </ul>
    </nav>
  </div>
  <upper_content_container :mainImg="headerImg" :mainTitle="headerTitle" :mainUrl="headerMainUrl"
    :showBox="showHeaderBox" :boxTitle="headerBoxTitle" :boxDescription="headerBoxDescription" :boxUrl="headerBoxUrl">
  </upper_content_container>
</template>

<script>
import upper_content_container from "./Upper-content-container.vue";
import svgIcon from "./icon.vue";
import directionIcon from "./direction-icon.vue";

export default {
  name: "navigation-bar",
  computed: {
    isProductActive() {
      // Controleer of een van de productpagina's actief is
      return ['heat-pump', 'airco', 'floor-heating', 'solar', 'charge-points'].includes(this.activePage);
    },
    isServiceActive() {
      // Controleer of een van de productpagina's actief is
      return ['thaiboks', 'RS'].includes(this.activePage);
    }
  },
  components: {
    upper_content_container,
    directionIcon,
    svgIcon,
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
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  /* Schaduw aan de onderkant */
}

#label-main {
  height: 36px;
  background-color: #edf1f6ad;
  display: flex;
  align-items: center;
  justify-content: center;
}

.label-content {
  display: flex;
  justify-content: space-between;
  /* Verdeel de ruimte tussen de twee elementen */
  width: 100%;
  padding: 0 20px;
  align-items: center;
}

.left-content {
  display: flex;
  align-items: center;
  gap: 10px;
  /* Ruimte tussen het icoon en de tekst */
  color: #222222;
  font-size: 0.9rem;
  font-weight: 400;
  color: #59b557;
  /* Kleur voor zowel de tekst als het icoon */
}

.left-content svg {
  fill: #59b557;
  /* Kleur van het icoon */
}

.left-content span {
  font-weight: 600;
  /* Font-weight voor de tekst */
}

.right-content {
  display: flex;
  gap: 20px;
  /* Ruimte tussen telefoon en e-mail */
  align-items: center;
}

.right-content span {
  display: flex;
  align-items: center;
  gap: 5px;
  /* Ruimte tussen het icoon en de tekst */
  color: #222222;
  font-size: 0.9rem;
  font-weight: 600;
}

.right-content svg {
  fill: #222222;
  /* Kleur van de iconen */
}

/* Hover-stijl voor elk afzonderlijk span-item */
.right-content span:hover {
  color: #2071b5;
  /* Nieuwe kleur voor de tekst bij hover */
}

.right-content span:hover svg {
  fill: #2071b5;
  /* Nieuwe kleur voor het icoon bij hover */
}

.right-content a {
  text-decoration: none;
  /* Verwijder de onderstreping van de link */
  color: inherit;
  /* Zorg dat de link de kleur erft van de omringende tekst */
  display: flex;
  align-items: center;
  gap: 5px;
  /* Ruimte tussen het icoon en de tekst binnen de link */
}

nav {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  /* Zorg ervoor dat alle items links beginnen */
  max-width: 1548px;
  width: 75%;
  /* Zorg ervoor dat de navigatiebalk 100% breed is */
  margin: 0 auto;
  padding: 0 20px;
  padding-top: 20px;
  padding-bottom: 10px;
}

#titles {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  /* Zorg ervoor dat de items in de ul aan de linkerkant staan */
  margin: 0;
  padding: 0;
  list-style: none;
  flex-grow: 1;
  margin-left: 0;
  /* Verwijder eventuele extra marge aan de linkerkant */
}

// uppper-content-spans
.overlay-text {
  font-size: 60px;
  font-weight: 800;
  margin-bottom: 5px;
  text-align: left;
}

#titles li {
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-right: 10px;
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 1.5rem;
  color: #222222;

  &:hover {
    color: #2071b5;
  }
}

/* Styling voor de actieve link */
#titles li.active {
  color: #2071b5;
  /* Blauw voor actieve pagina */
}

/* Voor dropdown-menu-items */
.dropdown-menu li.active {
  color: #2071b5;
  /* Blauw voor actieve dropdown-item */
}

#dropdown-toggle {
  position: relative;
  /* Zorg ervoor dat de dropdown ten opzichte van dit element is gepositioneerd */
}

.dropdown-menu {
  display: none;
  /* Verberg standaard de dropdown */
  position: absolute;
  /* Positioneer de dropdown absoluut ten opzichte van de ouder */
  top: 100%;
  /* Plaats de dropdown direct onder het menu-item */
  left: 0;
  z-index: 999;
  /* Zorg ervoor dat de dropdown boven andere elementen wordt weergegeven */
  background-color: white;
  padding: 10px 0;
  list-style: none;
  margin: 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  /* Voeg schaduw toe voor zichtbaarheid */
}

/* Toon de dropdown bij hover */
#dropdown-toggle:hover .dropdown-menu {
  display: block;
  /* Toon de dropdown wanneer er over het menu-item wordt gehoverd */
}

.dropdown-menu li {
  padding: 10px 20px;
  white-space: nowrap;
  /* Zorg ervoor dat de tekst niet afbreekt */
  text-align: left;
  /* Uitlijning van de tekst naar links */
}
</style>