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
  background-color: #eaeef3;
  border-radius: 0px;
  overflow: hidden;
  cursor: pointer; /* Change cursor to pointer on hover */
  position: relative; /* Enable absolute positioning for the glow */

  .card-image {
    flex: 1;
    overflow: hidden; /* Ensure that the zoom effect doesn't spill out of the card */
    position: relative;
    transition: transform 0.3s ease; /* Smooth transition for transform */
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover; /* Ensure the image covers the container */
      display: block;
      transition: transform 0.3s ease; /* Smooth transition for transform */
    }
    
    /* Add the blue glow with a ::before pseudo-element */
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, 0); /* Blue glow with transparency */
      z-index: 1; /* Ensure the glow is above the image */
      transition: opacity 0.3s ease; /* Smooth transition for the glow */
      opacity: 1; /* Always visible glow */
    }
  }

  .card-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px;
    background-color: #eaeef3; /* Background color of the text/arrow section */
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); /* Light shadow to accentuate the text section */
    position: relative; /* Ensures the animation is relative */
    transition: background-color 0.3s ease; /* Smooth transition for background color */
    z-index: 2; /* Ensure text and arrow are above the glow */

    h2 {
      color: #2c5484;
      font-size: 1rem;
      font-weight: 600;
      margin: 0; /* Remove default margin to keep spacing consistent */
    }

    i {
      font-size: 1rem;
      color: #2c5484; /* Same color as the text */
      transition: transform 0.3s ease; /* Smooth transition for transform */
    }
  }

  &:hover .card-image img {
    transform: scale(1.1); /* Slightly enlarge the image on hover */
  }

  &:hover .card-info i {
    animation: bounce 1s ease; /* Add bounce animation on hover */
    animation-iteration-count: 1; /* Repeat animation only once */
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
