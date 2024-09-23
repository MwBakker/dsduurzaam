<template>
  <!-- Container-main voor de bestaande content -->
  <div id="header-content">
    <div id="titles">
      <span class="overlay-text">Je huis</span>
      <span class="overlay-text">verwarmen</span>
      <span class="overlay-text">met een</span>
      <span class="overlay-text">warmtepomp</span>
      <a href="#" class="link-with-arrow" :style="{ fontSize: '1.25rem', fontWeight: 600 }">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7" />
        </svg>
        <p>Lees meer</p>
      </a>
    </div>
    <div id="overlay-square">
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>
      <button id="cta-button">
        <span> Klik hier </span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
          class="button-arrow">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </button>
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
#header-content {
  height: 845px;
  padding-top: 0px;
  display: flex;
  justify-content: space-around;
  width: 98%;
  margin: 0 auto;
  position: relative;
  // maakt de afbeelding donkerder
  background: rgba(0, 0, 0, 0.2) url('src/assets/tabs/home.png');
  background-blend-mode: darken;
  background-repeat: no-repeat;
  background-size: 100% 700px;
  background-position: bottom;
}

/* de 4 titels + link onder elkaar */
#titles {
  margin: 24px 0 0 10.5%;
  display: flex;
  flex-direction: column;
  width: 30vw;
  background-color: transparent;
  color: white;

  // titles
  .overlay-text {
    font-size: 60px;
    font-weight: 800;
    margin-bottom: 5px;
    text-align: left;
  }

  // totale link
  a {
    padding-top: 20px;
    color: white;
    display: flex;
  }

  // lees meer
  p {
    color: white;
    margin-left: 12px;
  }

  svg {
    height: 24px;
  }
}


/* Blauwe box */
#overlay-square {
  display: flex;
  margin-right: 70px;
  flex-direction: column;
  justify-content: space-between;
  padding: 50px;
  /* Zorg ervoor dat de tekst boven de overlay staat */
  width: 31.25vw;
  height: 400px;
  background-color: #2071b5;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 10px 20px 0px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  color: white;

  // title in box
  h1 {
    font-weight: 800;
    color: white;
    margin-bottom: 20px;
  }

  // description
  p {
    font-size: 1.2rem;
    font-weight: 500;
    color: white;
    margin-bottom: 20px;
  }


}

#overlay-square #cta-button {
  background-color: #ffda00;
  color: #222222;
  font-size: 1.2em;
  font-weight: 800;
  position: relative;
  /* Zorg ervoor dat de tekst gecentreerd is */
  transition: background-color 0.3s ease, opacity 0.3s ease;

  &:hover {
    background-color: #ffe967;
  }
}


/* Zorg dat de pijl start buiten zicht, aan de linkerkant */
.button-arrow {
  position: absolute;
  /* Maak de pijl absoluut gepositioneerd */
  right: 30px;
  /* Plaats de pijl aan de rechterkant van de knop */
  width: 1.5rem;
  height: 1.5rem;
  opacity: 0;
  transition: transform 0.3s ease, opacity 0.3s ease;
  transform: translateX(-30px);
  /* Start buiten de knop aan de rechterkant */
}

/* Laat de pijl naar binnen schuiven en zichtbaar worden bij hover */
#cta-button:hover .button-arrow {
  transform: translateX(0);
  /* Schuift naar binnen */
  opacity: 1;
  /* Wordt zichtbaar */
}

@media (max-width: 1280px) {
  #header-content {
    width: 100%;
    flex-direction: column;
    align-items: center;
    background-size: cover;
    padding: 0;
  }

  #titles {
    margin: 0;
    width: 80%;
  }

  #overlay-square {
    width: 80%;
    margin: 0;
  }
}

// /* Styling voor de link met pijl */
// #container-main #container-elements .link-with-arrow {
//   display: inline-flex;
//   align-items: center;
//   font-size: 1.25rem !important;
//   font-weight: 600 !important;
//   color: #ffffff !important;
//   text-decoration: none;
//   transition: color 0.3s ease;
//   margin-top: 10px;

//   svg {
//     margin-right: 8px;
//     width: 1.25rem;
//     /* Zet de breedte van het pijl-icoon */
//     height: 1.25rem;
//     /* Zet de hoogte van het pijl-icoon */
//     stroke: #ffffff !important;
//   }

//   &:hover {
//     color: #f0f0f0;
//   }
// }</style>
