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
          <span>
            <a href="tel:0599585010">
              <svgIcon
                iconPath="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
              0599 585010
            </a>
          </span>
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
        <li :class="{ active: activePage === 'home' }" @click="routeGo('home')">Home</li>
        <!-- Dropdown voor "Onze producten" -->
        <li
          :class="{ active: isProductActive }"
          id="dropdown-toggle"
        >
          Onze producten
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </li>

        <li :class="{ active: activePage === 'about' }" @click="routeGo('about')">Over ons</li>
        <li :class="{ active: activePage === 'jobs' }" @click="routeGo('jobs')">Werken bij</li>
        <li :class="{ active: activePage === 'service' }" @click="routeGo('service')">Service</li>
      </ul>
    </nav>

    <!-- Mega dropdown die verschijnt bij hover -->
    <div id="mega-dropdown">
      <ul>
        <li :class="{ active: activePage === 'heat-pump' }" @click="routeGo('heat-pump')">Warmtepomp</li>
        <li :class="{ active: activePage === 'airco' }" @click="routeGo('airco')">Airconditioning</li>
        <li :class="{ active: activePage === 'floor-heating' }" @click="routeGo('floor-heating')">Vloerverwarming</li>
        <li :class="{ active: activePage === 'solar' }" @click="routeGo('solar')">Zonnepanelen</li>
        <li :class="{ active: activePage === 'charge-points' }" @click="routeGo('charge-points')">Laadpaal</li>
      </ul>
    </div>
  </div>
  <upper_content_container :mainImg="headerImg" :mainTitle="headerTitle" :mainUrl="headerMainUrl"
    :showBox="showHeaderBox" :boxTitle="headerBoxTitle" :boxDescription="headerBoxDescription" :boxUrl="headerBoxUrl">
  </upper_content_container>





<script>
import upper_content_container from "./Upper-content-container.vue";
import svgIcon from "./icon.vue";

export default {
  name: "navigation-bar",
  computed: {
    isProductActive() {
      return ['heat-pump', 'airco', 'floor-heating', 'solar', 'charge-points'].includes(this.activePage);
    },
    isServiceActive() {
      return ['thaiboks', 'RS'].includes(this.activePage);
    }
  },
  components: {
    upper_content_container,
    svgIcon,
  },
};
</script>

<style lang="scss" scoped>
#nav-container {
  width: 100%;
  z-index: 999;
  background-color: white;
  transition: 0.5s ease all;
  position: fixed;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

#label-main {
  height: 36px;
  background-color: #edf1f6ad;
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
  color: #59b557;
  font-size: 0.9rem;
  font-weight: 600;
}

.left-content svg {
  fill: #59b557;
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
  color: #222222;
  font-size: 0.9rem;
  font-weight: 600;
}

.right-content a:hover {
  color: #2071b5;
}

.right-content svg {
  fill: #222222;
}

.right-content a:hover svg {
  fill: #2071b5;
}

.right-content a {
  text-decoration: none;
  color: #222222;
  display: flex;
  align-items: center;
  gap: 5px;
}

.right-content svg {
  fill: #222222;
}

.right-content span:hover {
  color: #2071b5;
}

nav {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  max-width: 1548px;
  width: 75%;
  margin: 0 auto;
  padding: 20px 20px 10px;
  z-index: 999;
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
  margin-right: 10px;
  font-weight: 600;
  font-size: 1.1rem;
  color: #222222;
}

#titles li:hover {
  color: #2071b5;
}

#titles li.active {
  color: #2071b5;
}

/* Dropdown-menu */
#dropdown-toggle {
  position: relative;
  display: flex;
  align-items: center;
}

#dropdown-toggle svg {
  margin-left: 8px;
  transition: transform 0.3s ease;
  transform: rotate(0deg);
}

#dropdown-toggle:hover svg {
  transform: rotate(180deg);
}

::v-deep .mega-dropdown {
  background-color: red !important;
  /* Andere stijlen */
}

/* Mega dropdown styling */
.mega-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100vw;
  background-color: red !important;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 999;
  display: none; /* Verberg de dropdown standaard */
  justify-content: space-around;
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition: max-height 0.3s ease, opacity 0.3s ease;
  display:none !important;
}

/* Toon de mega-dropdown bij hover over #dropdown-toggle of .mega-dropdown */
#dropdown-toggle:hover .mega-dropdown,
#dropdown-toggle:hover + #mega-dropdown,
#mega-dropdown:hover {
  display: flex;
}

.mega-dropdown ul {
  list-style: none;
  padding: 0;
}

.mega-dropdown li {
  list-style: none;
  padding: 10px 20px;
  font-size: 1rem;
  white-space: nowrap;
  cursor: pointer;
}

.mega-dropdown li:hover {
  color: #2071b5;
  text-decoration: underline;
}

.mega-dropdown li:nth-child(1) {
  transition-delay: 0.1s;
}

.mega-dropdown li:nth-child(2) {
  transition-delay: 0.15s;
}

.mega-dropdown li:nth-child(3) {
  transition-delay: 0.2s;
}

.mega-dropdown li:nth-child(4) {
  transition-delay: 0.25s;
}

.mega-dropdown li:nth-child(5) {
  transition-delay: 0.3s;
}

</style>
