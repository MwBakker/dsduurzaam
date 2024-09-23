<template>
  <div class="product-card" @click="emitMyEvent">
    <!-- Titel -->
    <div class="card-title">
      <h2>{{ title }}</h2>
    </div>
    <!-- Subtitle -->
    <div class="card-subtitle">
      <p>{{ subtitle }}</p>
    </div>
    <!-- Knop met pijl en dynamische tekst -->
    <span class="btn-link">
      <!-- SVG pijl met horizontaal streepje -->
      <span class="arrow">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24"
          stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </span>
      {{ buttonText }}
    </span>
    <!-- Afbeelding -->
    <img :src="imageUrl" alt="Product image">
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { getCurrentInstance } from 'vue';

// Props definiëren
const props = defineProps({
  title: String,
  image: String,
  route: String,
  subtitle: String,
  buttonText: String, // Nieuw attribuut voor de knoptekst
});

const internalInstance = getCurrentInstance();
// get the emitter from the instance
const emitter = internalInstance.appContext.config.globalProperties.emitter;

function emitMyEvent() {
  emitter.emit('my-event', { 'direction': props.route });
};

const imageUrl = computed(() => {
  return new URL(`../../assets/cards/${props.image}.png`, import.meta.url).href;
});
</script>

<style lang="scss" scoped>
.product-card {
  display: flex;
  flex-direction: column;
  background-color: #eaeef3;
  border-radius: 0px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  margin: 4px;
  height: 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  /* Maak de kaarten iets smaller zodat er 5 naast elkaar passen */
  flex: 1 1 calc(19% - 10px);
  /* Zorgt ervoor dat er 5 kaarten naast elkaar passen */
}

.card-title,
.card-subtitle,
.card-button {
  text-align: left;
}

.card-title {
  padding: 12px;
  background-color: #fff;

  h2 {
    color: #222222;
    font-size: 1.4rem;
    font-weight: 800;
    margin-bottom: 8px;
    min-height: 50px;
  }
}

.card-subtitle {
  padding: 12px;
  flex-grow: 1;

  p {
    color: #222222;
    font-size: 1.2rem;
    font-weight: 500;
    min-height: 50px;
  }
}

.btn-link {
  padding: 12px;
  background-color: transparent;
  color: #222222;
  border: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 1.25rem;
  display: inline-flex;
  align-items: center;
  transition: color 0.3s ease;
}

.btn-link:hover {
  color: #2071b5;
}

.arrow {
  margin-right: 8px;
  color: #2071b5;

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
}

img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
}

.product-card:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}

/* Media Queries for Responsiveness */

/* Voor schermen kleiner dan 1280px */
@media (max-width: 1600px) {
  .product-card {
    display: flex;
    flex-direction: column;
    background-color: #eaeef3;
    border-radius: 0px;
    overflow: hidden;
    cursor: pointer;
    position: relative;
    margin: 4px;
    height: 100%;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    /* Maak de kaarten iets smaller zodat er 5 naast elkaar passen */
    flex: 1 1 calc(19% - 10px);
    /* Zorgt ervoor dat er 5 kaarten naast elkaar passen */
    max-width: 19%;
  }
}

/* Voor schermen kleiner dan 1280px */
@media (max-width: 1280px) {}

/* Voor schermen kleiner dan 1024px */
@media (max-width: 1024px) {}

/* Voor schermen kleiner dan 768px (mobiel) */
@media (max-width: 768px) {}
</style>
