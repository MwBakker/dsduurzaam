<template>
  <div class="product-card" :style="{ maxWidth: maxWidth + `px`, backgroundImage: `url(${imageUrl})` }" @click="goRoute(route)">
    <div class="overlay">
      <h3>{{ title }}</h3>
      <span class="btn-link">
        {{ buttonText }} <!-- Dynamische tekst -->
        <Arrow id="arrow" height="20" />
      </span>
    </div>
  </div>
</template>

<script>

import Arrow from '@/components/arrow.vue';

export default {
  props: {
    maxWidth: String, // VOOR DE NAVI
    image: String,
    title: String,
    route: String,
    buttonText: {
      type: String,
      default: 'Lees meer' // Standaardtekst voor de knop
    }
  },
  components: {
    Arrow,
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
  min-height: 225px;
  position: relative;
  cursor: pointer;
  /* Houd de kaarten vierkant */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-size: cover;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }
}

.overlay {
  position: absolute;
  width: 100%;
  bottom: 0;
  padding: 16px;
  background: linear-gradient(to top, #000000e6, #0000);

  h3 {
    color: white;
    font-weight: 700;
    margin-bottom: 10px;
  }

  .btn-link {
    display: inline-flex;
    align-items: center;
    /* Zorgt ervoor dat de items op het verticale middelpunt worden uitgelijnd */
    color: white;
    font-weight: 600;
    font-size: 1.1rem;
    transition: color 0.3s ease;

    #arrow {
      margin-left: 10px;
    }
  }
}

@media (max-width: 1280px) {
  .product-card {
    min-height: initial;
  }
}

@media (max-width: 800px) {

  .overlay {

    padding: 8px;

    h3 {
      margin: 0;
      font-size: 0.8em;
    }

    .btn-link {
      font-size: 0.7em;

      #arrow {
        margin-left: 6px;
        height: 16px;
      }
    }
  }
}
</style>
