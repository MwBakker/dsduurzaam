<template>
    <!-- Container-main voor de bestaande content -->
    <div id="container-main">
      <div id="container-elements">
        <!-- Afbeelding wrapper sectie -->
        <div id="container-image-wrapper">
          <img :src="'src/assets/tabs/' + backgroundImage + '.png'" alt="Background Image" id="container-image">
          <div id="dark-overlay"></div>
        </div>
  
        <!-- Eerste overlappende sectie -->
        <div id="overlay-section">
          <h1>{{ title }}</h1>
          <h2>{{ description }}</h2>
          <button id="cta-button">
            <span> Klik hier </span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="button-arrow">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
  
        <!-- Tweede overlappende sectie -->
        <div id="overlay-section-30">
          <span class="overlay-text">Je huis</span>
          <span class="overlay-text">verwarmen</span>
          <span class="overlay-text">met een</span>
          <span class="overlay-text">warmtepomp</span>
  
          <!-- Pijl met tekst als link -->
          <a href="#" class="link-with-arrow" :style="{ fontSize: '1.25rem', fontWeight: 600 }">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            <span>Lees meer</span>
          </a>
        </div>
      </div>
    </div>
  </template>

<script>
import titleIcon from "../Title-icon.vue";
import ServiceLine from "@/components/Service-line.vue";

export default {
    name: "upper_content_container",
    props: {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        backgroundImage: {
            type: String,
            required: true,
        },
    },
    components: {
        titleIcon,
        ServiceLine,
    },
};
</script>

<style lang="scss" scoped>
#container-main {
    background-color: #0c8bbd05;
    margin: 0;
    padding: 0;
    width: 100%;
    padding-top: 145px;
    position: relative;
}

#container-elements {
    width: 100%;
    height: auto;
    display: flex;
    position: relative;
    flex-direction: column;
}

#container-image-wrapper {
    width: calc(100% - 40px);
    margin: 0 auto;
    position: relative;
}

#container-image {
    width: 100%;
    height: auto;
    display: block;
}

/* Zwarte overlay over de afbeelding om deze donkerder te maken */
#dark-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.2;
  z-index: 1; /* Zorg dat deze alleen onder de content overlays valt */
}

/* Eerste overlay-sectie op 70% */
#overlay-section {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    top: 50%;
    left: 73.75%;
    transform: translate(-50%, -50%);
    padding: 50px;
    z-index: 3; /* Zorg ervoor dat de tekst boven de overlay staat */
    width: 31.25vw;
    background-color: #2071b5;
    box-sizing: border-box;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 10px 20px 0px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    color: white;
}

#overlay-section h1 {
    font-weight: 800;
    color: white;
    margin-bottom: 20px;
}

#overlay-section h2 {
    font-weight: 500;
    color: white;
    margin-bottom: 20px;
}

#cta-button {
  background-color: #ffda00;
  color: #222222;
  padding: 15px 30px;
  border: none;
  cursor: pointer;
  font-size: 1.2em;
  font-weight: 800;
  text-align: center;
  margin-top: 20px;
  align-self: flex-start;
  width: 50%;
  position: relative;
  overflow: hidden; /* Verberg wat buiten de knop valt */
  display: inline-flex;
  align-items: center;
  justify-content: center; /* Zorg ervoor dat de tekst gecentreerd is */
  transition: background-color 0.3s ease, opacity 0.3s ease;
}

#cta-button span {
  position: relative; /* Zorg dat de tekst onafhankelijk is */
}

#cta-button:hover {
  background-color: #ffe967;
}

/* Zorg dat de pijl start buiten zicht, aan de linkerkant */
.button-arrow {
  position: absolute; /* Maak de pijl absoluut gepositioneerd */
  right: 30px; /* Plaats de pijl aan de rechterkant van de knop */
  width: 1.5rem;
  height: 1.5rem;
  opacity: 0;
  transition: transform 0.3s ease, opacity 0.3s ease;
  transform: translateX(-30px); /* Start buiten de knop aan de rechterkant */
}

/* Laat de pijl naar binnen schuiven en zichtbaar worden bij hover */
#cta-button:hover .button-arrow {
  transform: translateX(0); /* Schuift naar binnen */
  opacity: 1; /* Wordt zichtbaar */
}



/* Tweede overlay-sectie op 30% */
#overlay-section-30 {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    top: 50%;
    left: 30%;
    transform: translate(-50%, -50%);
    padding: 50px;
    z-index: 3;
    width: 30vw;
    background-color: transparent;
    color: white;
}

.overlay-text {
    font-size: 60px;
    font-weight: 800;
    margin-bottom: 5px;
    text-align: left;
}

@media (max-width: 768px) {
    #container-main {
        padding: 0;
    }

    #container-elements {
        flex-direction: column;
    }

    #overlay-section, #overlay-section-30 {
        width: 90vw;
        height: auto;
        left: 50%;
        transform: translate(-50%, 0);
        top: 25px;
    }
}

@media (max-width: 1200px) {
    #overlay-section, #overlay-section-30 {
        width: 50vw;
    }
}

@media (max-width: 992px) {
    #overlay-section, #overlay-section-30 {
        width: 60vw;
    }
}

@media (max-width: 480px) {
    #overlay-section, #overlay-section-30 {
        width: 90vw;
    }
}

/* Styling voor de link met pijl */
#container-main #container-elements #overlay-section-30 .link-with-arrow {
    display: inline-flex;
    align-items: center;
    font-size: 1.25rem !important;
    font-weight: 600 !important;
    color: #ffffff !important;
    text-decoration: none;
    transition: color 0.3s ease;
    margin-top: 10px;

    svg {
        margin-right: 8px;
        width: 1.25rem; /* Zet de breedte van het pijl-icoon */
        height: 1.25rem; /* Zet de hoogte van het pijl-icoon */
        stroke: #ffffff !important;
    }

    &:hover {
        color: #f0f0f0;
    }
}
</style>
