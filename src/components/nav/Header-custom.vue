<template>
  <!-- Check of the header een titel heeft, anders geen header maar een vulop div -->
  <div v-if="mainTitle != ''">
    <div id="header-content" :style="{ backgroundImage: `url(../src/assets/tabs/${mainImg}.png)` }">
      <div id="titles-header">
        <h2>{{ mainTitle }}</h2>
        <span v-if="mainUrl != ''" id="link-with-arrow" @click="goRoute(mainUrl)">
          <svg xmlns=" https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7" />
          </svg>
          <p>Lees meer</p>
        </span>
      </div>
    </div>
  </div>
  <div :style="{ height: getHeaderHeight() }" v-else></div>
</template>

<script>
export default {
  name: "upper_content_container",
  props: {
    mainImg: {
      type: String,
      required: true,
    },
    mainTitle: {
      type: String,
      required: true
    },
    mainUrl: {
      type: String,
      required: true
    },
  },
  methods: {
    getHeaderHeight() {
      return this.windowWidth < 1280 ? '0px' : '150px';
    },
    goRoute(page) {
      this.$root.routeGo(page);
    },
  }
};
</script>

<style lang="scss" scoped>
#header-content {
  height: 845px;
  padding-top: 245px;
  display: flex;
  justify-content: space-around;
  width: 98%;
  margin: 0 auto;
  position: relative;
  // maakt de afbeelding donkerder
  background-color: rgba(0, 0, 0, 0.2);
  background-blend-mode: darken;
  background-repeat: no-repeat;
  background-size: 100% 740px;
  background-position: bottom;
}

p,
h1 {
  color: white;
}

/* de 4 titels + link onder elkaar */
#titles-header {
  margin: 24px 0 0 17.5%;
  display: flex;
  flex-direction: column;
  width: 35vw;
  color: white;

  // titles
  h2 {
    width: 65%;
    font-size: 60px;
    color: white;
    font-weight: 800;
    margin-bottom: 5px;
    text-align: left;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
    /* Donkere schaduw voor meer contrast */
  }

  // lees meer
  p {
    margin-left: 20px;
  }

  svg {
    height: 24px;
  }
}

#link-with-arrow {
  cursor: pointer;
  display: flex;
  font-size: 1.25rem;
  font-weight: 600;
}

/* Blauwe box */
#overlay-square {
  position: absolute;
  /* Zorgt ervoor dat de box zich absoluut positioneert binnen de container */
  right: 75px;
  /* Plaatst de box tegen de rechterkant van de container */
  top: 50%;
  /* Optioneel: plaats de box verticaal gecentreerd */
  transform: translateY(-50%);
  /* Optioneel: houd de box verticaal gecentreerd */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* Zorgt ervoor dat de inhoud aan de bovenkant van de container wordt uitgelijnd */
  padding-top: 40px;
  /* Alleen padding bovenaan */
  padding-left: 40px;
  /* Alleen padding aan de linkerkant */
  padding-right: 20px;
  width: 16vw;
  /* Zet de breedte op 1/6e van de totale schermbreedte */
  height: 350px;
  background-color: #3eaf3c;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 10px 20px 0px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  color: white;

  // title in box
  h1 {
    font-weight: 800;
    margin-bottom: 20px;
  }

  // description
  p {
    font-weight: 500;
    margin-bottom: 20px;
  }

  button {
    background-color: #ffda00;
    font-size: 1.2em;
    font-weight: 800;
    position: relative;
    /* Zorg ervoor dat de tekst gecentreerd is */
    transition: background-color 0.3s ease, opacity 0.3s ease;

    &:hover {
      background-color: #ffe967;
    }
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
button:hover .button-arrow {
  transform: translateX(0);
  /* Schuift naar binnen */
  opacity: 1;
  /* Wordt zichtbaar */
}

@media (max-width: 1280px) {
  #header-content {
    width: 100%;
    background-size: cover;
    padding-top: 40px;
  }

  #titles {
    margin: 0;
    width: 80%;
  }

  #titles-header {
    width: 97.5%;
    margin: 0 auto;
    justify-content: center;

    h2 {
      text-align: center;
      font-size: 2.6em;
      width: initial;
    }

    #link-with-arrow {
      justify-content: center;
      margin: 24px 24px 0 0;
    }
  }

  #overlay-square {
    width: 80%;
    height: 320px;
    right: 0;
    left: 0;
    margin: 160px auto 0 auto;
    text-align: center;
    padding: 24px;
  }
}

@media (max-width: 800px) {
  #titles-header {
    width: 90%;
    margin: 0 auto;

    h2 {
      font-size: 2.3em;
    }
  }

  #header-content {
    height: 456px;
    padding: 0 0 120px 0;
  }
}
</style>
