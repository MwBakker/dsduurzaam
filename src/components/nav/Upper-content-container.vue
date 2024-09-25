<template>
  <!-- Container-main voor de bestaande content -->
  <div id="header-content" :style="{ backgroundImage: `url(../src/assets/tabs/${mainImg}.png)` }">
    <div id="titles-header">
      <h2>{{ mainTitle }}</h2>
      <span id="link-with-arrow" @click="routeGoo(mainUrl)">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7" />
        </svg>
        <p>Lees meer</p>
      </span>
    </div>
    <div id="overlay-square" v-if="showBox == 1">
      <h1>{{ boxTitle }}</h1>
      <p>{{ boxDescription }}</p>
      <button @click="routeGoo(boxUrl)">
        Klik hier
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
    showBox: {
      type: Number,
      required: true,
    },
    boxTitle: {
      type: String,
      required: true,
    },
    boxDescription: {
      type: String,
      required: true,
    },
    boxUrl: {
      type: String,
      required: true
    }
  },
  components: {
    titleIcon,
    ServiceLine,
  },
  methods: {
    routeGoo(url) {
      console.log("yoooo");
      this.routeGo(url);
      this.$forceUpdate();
    }
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
  margin: 24px 0 0 10.5%;
  display: flex;
  flex-direction: column;
  width: 30vw;
  color: white;

  // titles
  h2 {
    width: 50%;
    font-size: 60px;
    font-weight: 800;
    margin-bottom: 5px;
    text-align: left;
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
    margin-bottom: 20px;
  }

  // description
  p {
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 20px;
  }

  button {
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
</style>
