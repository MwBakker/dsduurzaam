<template>
  <div id="paragraphcard" :style="{ height: height }">
    <div class="image-wrapper">
      <img :src="imageUrl" :alt="imageAlt" :class="{ zoomed: isHovered }">
    </div>
    <div id="content">
      <h1 class="title">{{ title }}</h1>
      <h2 class="subtitle">{{ subtitle }}</h2>
      <p class="paragraph">{{ paragraphText }}</p>
      <div class="card-info" @mouseover="isHovered = true" @mouseleave="isHovered = false" @click="route(contactLink)">
        <span class="info-text">{{ buttonText }}</span>
        <i class="fas fa-arrow-right"></i>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

// Reactieve variabele om de hover status bij te houden
const isHovered = ref(false);

const props = defineProps({
  title: String,
  subtitle: String,
  paragraphText: String,
  buttonText: String,
  contactLink: String,
  image: String, // e.g., "home"
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
  width: 100%;
  height: 350px;
  border-radius: 12px;
  margin: 32px auto;
  position: relative;
  overflow: hidden;
}

#content {
  width: 60%;
  height: 100%;
  padding: 20px;
  background-color: #006ff7;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end; /* Uitlijnen aan de rechterkant */
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
  margin-right: 0; /* Verwijder extra marges aan de rechterkant */
}

.card-info {
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #2c5484;
  font-size: 1rem;
  font-weight: 600;
  margin-right: 0; /* Zorg ervoor dat de card-info ook niet verschuift */
}

.card-info .info-text {
  margin-right: 10px;
  font-size: 1rem;
  font-weight: 600;
}

.card-info i {
  font-size: 1rem;
  font-weight: 600;
  transition: transform 0.3s ease;
}

.card-info:hover i {
  animation: bounce 0.5s infinite;
}

/* Stijlen voor de afbeelding */
.image-wrapper {
  width: 50%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
}

.image-wrapper img {
  width: 100%;
  height: auto;
  object-fit: cover;
  transition: transform 0.5s ease;
}

/* Voeg de zoomed class toe als isHovered true is */
.image-wrapper img.zoomed {
  transform: scale(1.1);
}
</style>
