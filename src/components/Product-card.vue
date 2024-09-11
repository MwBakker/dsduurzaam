<template>
  <div class="product-card" @mouseenter="startAnimation" @mouseleave="stopAnimation" @click="route">
    <div class="card-image">
      <img :src="imageUrl" alt="Product image">
    </div>
    <div class="card-info">
      <h2>{{ title }}</h2>
      <i class="fas fa-arrow-right" :class="{ 'bounce': isBouncing }"></i>
    </div>
  </div>
</template>


<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router'; // Import Vue Router

const props = defineProps({
  title: String,
  image: String,
  route: String,
  subtitle: String, // Nieuwe prop voor de tekst boven de kaart
});

// Router instance
const router = useRouter();

// Function to handle routing
function route() {
  router.push({ path: props.route }); // Navigate to the route passed via props
}

// Compute the image URL
const imageUrl = computed(() => {
  return new URL(`../assets/cards/${props.image}.png`, import.meta.url).href;
});

const isBouncing = ref(false);

function startAnimation() {
  isBouncing.value = true;
}

function stopAnimation() {
  // Remove the class after animation ends
  setTimeout(() => {
    isBouncing.value = false;
  }, 1000); // 1 second, match the duration of the animation
}
</script>

<style lang="scss" scoped>
.product-card {
  display: flex;
  flex-direction: column;
  background-color: #bfcbda52;
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer; /* Change cursor to pointer on hover */
  position: relative; /* Maak het mogelijk om absolute positioning te gebruiken voor de gloed */
  
  .card-image {
    flex: 1;
    overflow: hidden; /* Zorg ervoor dat de zoom niet uit de kaart steekt */
    position: relative;
    transition: transform 0.3s ease; /* Maak de transformatie soepel */
    
    img {
      width: 100%;
      height: auto;
      display: block;
      transition: transform 0.3s ease; /* Maak de transformatie soepel */
    }
    
    /* Voeg de blauwe gloed toe met een ::before pseudo-element */
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, 0); /* Blauwe gloed met transparantie */
      z-index: 1; /* Zorg ervoor dat de gloed boven de afbeelding zit */
      transition: opacity 0.3s ease; /* Maak de transitie van de gloed soepel */
      opacity: 1; /* Altijd zichtbare gloed */
    }
  }

  .card-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px;
    background-color: #ffffff; /* Achtergrondkleur van de tekst/pijl sectie */
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); /* Licht schaduw om de tekst sectie te accentueren */
    position: relative; /* Zorgt ervoor dat de animatie relatief is */
    transition: background-color 0.3s ease; /* Maak de achtergrondkleurtransitie soepel */
    z-index: 2; /* Zorg ervoor dat de tekst en pijltje boven de gloed staan */

    h2 {
      color: #2c5484;
      font-size: 1rem;
      font-weight: 600;
      margin: 0; /* Verwijder standaard marge om spacing consistent te houden */
    }

    i {
      font-size: 1rem;
      color: #2c5484; /* Dezelfde kleur als de tekst */
      transition: transform 0.3s ease; /* Maak de transformatie soepel */
    }
  }

  &:hover .card-image img {
    transform: scale(1.1); /* Vergroot de afbeelding lichtjes bij hover */
  }

  &:hover .card-info i {
    animation: bounce 1s ease; /* Voeg de stuiter-animatie toe bij hover */
    animation-iteration-count: 1; /* Herhaal de animatie slechts één keer */
  }

  @keyframes bounce {
    0%, 100% {
      transform: translateX(0);
    }
    20% {
      transform: translateX(-15px);
    }
    40% {
      transform: translateX(10px);
    }
    60% {
      transform: translateX(-5px);
    }
    80% {
      transform: translateX(2px);
    }
  }
}
</style>


