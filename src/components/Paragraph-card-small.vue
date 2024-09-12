<template>
  <div id="paragraphcard" :style="{ height: height }">
    <div id="content">
      <h1 class="title">{{ title }}</h1>
      <h2 class="subtitle">{{ subtitle }}</h2>
      <p class="paragraph">{{ paragraphText }}</p>
      <div class="card-info" @mouseover="isHovered = true" @mouseleave="isHovered = false" @click="route(contactLink)">
        <span class="info-text">{{ buttonText }}</span>
        <i class="fas fa-arrow-right"></i>
      </div>
    </div>
    <div class="image-wrapper">
      <img :src="imageUrl" :alt="imageAlt" :class="{ zoomed: isHovered }">
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const isHovered = ref(false);

const props = defineProps({
  title: String,
  subtitle: String,
  paragraphText: String,
  buttonText: String,
  contactLink: String,
  image: String,
  imageAlt: String,
  height: String,
});

const router = useRouter();

function route(link) {
  router.push({ path: link });
}

const imageUrl = computed(() => {
  if (!props.image) {
    console.error('No image prop provided.');
    return '';
  }
  const imagePath = `../assets/cards/${props.image}.png`;
  return new URL(imagePath, import.meta.url).href;
});
</script>

<style lang="scss" scoped>
#paragraphcard {
  display: flex;
  width: 50%; /* Kaart breedte is 50% van de container */
  height: 350px; /* Pas de hoogte aan naar wens */
  border-radius: 12px;
  margin: 32px auto; /* Centreer de kaart horizontaal */
  position: relative;
  overflow: hidden;
}

#content, .image-wrapper {
  width: 50%; /* Beide secties nemen elk 50% van de breedte in */
  height: 100%; /* Zorg ervoor dat beide secties de volledige hoogte innemen */
}

#content {
  padding: 20px;
  background-color: #0073ff;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  overflow: auto; /* Zorg ervoor dat de inhoud niet buiten de sectie valt */
}

.title {
  color: #3eaf3c;
  font-size: 2rem;
  margin-bottom: 10px;
  font-weight: 600;
}

.subtitle {
  color: #fbb536;
  font-weight: 600;
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.paragraph {
  color: #2c5484;
  font-size: 1.25rem;
  line-height: 1.6;
  margin-bottom: 20px;
  margin-right: 20px; /* Verander dit naar een kleiner getal als de tekst niet past */
}

.card-info {
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #2c5484;
  font-size: 1rem;  /* Pas font-size aan voor de gehele card-info */
  font-weight: 600; /* Pas font-weight aan voor de gehele card-info */
}

.card-info .info-text {
  margin-right: 10px;
  font-size: 1rem;  /* Specifieke font-size voor tekst */
  font-weight: 600; /* Specifieke font-weight voor tekst */
}

.card-info i {
  font-size: 1rem;  /* Specifieke font-size voor het icoon */
  font-weight: 600; /* Specifieke font-weight voor het icoon (indien van toepassing) */
  transition: transform 0.3s ease;
}

.card-info:hover i {
  animation: bounce 0.5s infinite;
}

/* Stijlen voor de afbeelding */
.image-wrapper {
  overflow: hidden;
  z-index: 1;
}

.image-wrapper img {
  width: 100%;
  height: 100%; /* Zorg ervoor dat de afbeelding de volledige hoogte van de sectie bedekt */
  object-fit: cover; /* Zorg ervoor dat de afbeelding de sectie volledig bedekt */
  transition: transform 0.5s ease;
}

/* Voeg de zoomed class toe als isHovered true is */
.image-wrapper img.zoomed {
  transform: scale(1.05); /* Verminder de zoom factor indien nodig */
}

</style>
