<template>
  <div class="product-card" @click="goRoute(route)">
    <div class="card-image">
      <img :src="imageUrl" alt="Product image">
      <div class="overlay">
        <div class="card-title">
          <h3>{{ title }}</h3>
        </div>
        <div class="card-button">
          <span class="btn-link">
            {{ buttonText }} <!-- Dynamische tekst -->
            <span class="arrow">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    title: String,
    image: String,
    route: String,
    buttonText: {
      type: String,
      default: 'Lees meer' // Standaardtekst voor de knop
    }
  },
  computed: {
    imageUrl() {
      return new URL(`../../../assets/cards/${this.image}.png`, import.meta.url).href;
    }
  },
  methods: {
    goRoute(page) {
      this.$root.routeGo(page);
    },
  },
};
</script>


<style lang="scss" scoped>
.product-card {
  position: relative;
  cursor: pointer;
  overflow: hidden;
  width: 100%;
  /* Zorg dat de breedte van de kaart 100% is binnen zijn container */
  aspect-ratio: 1 / 1;
  /* Houd de kaarten vierkant */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  max-width: 315px;
  max-height: 225px;
}

h3 {
  color: white;
  font-weight: 700;
  margin-bottom: 10px;
}

.product-card:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}

.card-image {
  position: relative;
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    /* Zorg dat de afbeelding de volledige kaart vult */
    object-fit: cover;
    /* Behoud de verhoudingen van de afbeelding */
  }
}

.card-image .overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0));
  /* Gradient van zwart naar transparant */
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}


.btn-link {
  display: inline-flex;
  align-items: center;
  /* Zorgt ervoor dat de items op het verticale middelpunt worden uitgelijnd */
  color: white;
  font-weight: 600;
  font-size: 1.1rem;
  transition: color 0.3s ease;

  .arrow {
    margin-left: 5px;
    /* Verhoog de marge om meer ruimte te geven */
    display: inline-flex;

    svg {
      width: 1.25rem;
      height: 1.25rem;
      stroke: white;
      vertical-align: middle;
    }
  }
}


@media (max-width: 800px) {

  .card-image .overlay {
    padding: 4px;
  }

  h3 {
    margin: 0;
    font-size: 1em;
  }

  .btn-link {
    font-size: 0.8em;

    .arrow {

      svg {
        width: 20px;
        height: 16px;
        stroke: white;
        vertical-align: middle;
      }
    }
  }
}
</style>
