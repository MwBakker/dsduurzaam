<template>
  <div id="paragraphcard-right" :style="{ height: height }">
    <div class="image-wrapper" @click="scrollTo(scrollToId)">
      <img :src="imageUrl" :alt="imageAlt" :class="{ zoomed: isHovered }">
    </div>
    <div id="content">
      <h1 class="title">{{ title }}</h1>
      <h2 class="subtitle">{{ subtitle }}</h2>
      <h2 class="subtitle2">{{ subtitle2 }}</h2>
      <p class="paragraph">{{ paragraphText }}</p>
      <!-- Conditie om de knop alleen te tonen als showButton waar is -->
      <div v-if="showButton" class="card-info" @mouseover="isHovered = true" @mouseleave="isHovered = false"
        @click="scrollTo(scrollToId)">
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
  subtitle2: String,
  paragraphText: String,
  buttonText: String,
  image: String, // e.g., "home"
  imageAlt: String,
  height: String,
  scrollToId: String,
  showButton: {
    type: Boolean,
    default: true, // standaard wordt de knop getoond
  }
});

const imageUrl = computed(() => {
  return new URL(`../../../assets/cards/${props.image}.png`, import.meta.url).href;
});
</script>

<style lang="scss" scoped>
#paragraphcard-right {
  display: flex;
  width: 100%;
  height: 350px;
  /* Zorg voor een consistente hoogte */
  margin: 32px auto;
  position: relative;
  overflow: hidden;
  margin-bottom: 75px;
}

#content {
  width: 50%;
  /* 50% van de breedte om ruimte te geven aan de afbeelding */
  height: 100%;
  /* Volledige hoogte van de kaart */
  position: relative;
  background-color: #0a63cf00;
  /* Transparante achtergrond */
  z-index: 2;
  padding: 20px;
  /* Voeg padding toe om consistente afstand te krijgen */
  box-sizing: border-box;
  /* Zorg ervoor dat padding en border worden meegerekend in de totale breedte/hoogte */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.title {
  color: #222222;
  font-size: 2.5rem;
  margin-bottom: 10px;
  font-weight: 600;
}

.subtitle {
  color: #3eaf3c;
  font-weight: 600;
  font-size: 2rem;
  margin-bottom: 10px;
}

.subtitle2 {
  color: #3eaf3c;
  font-weight: 600;
  font-size: 2rem;
  margin-bottom: 10px;
}

.paragraph {
  color: #222222;
  font-size: 1.25rem;
  line-height: 1.6;
  margin-bottom: 20px;
  width: 100%;
  /* Volledige breedte van de beschikbare ruimte */
}

.card-info {
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #222222;
  font-size: 1rem;
  font-weight: 600;
  margin-top: auto;
  /* Zorg ervoor dat de knop onderaan staat */
}

.card-info .info-text {
  margin-right: 10px;
  font-size: 1rem;
  font-weight: 600;
}

.card-info i {
  font-size: 1rem;
  font-weight: 600;
  color: #222222;
  transition: transform 0.3s ease;
}

/* Animatie bij hover voor ParagraphCard */
.card-info:hover i {
  animation: bounce 1s ease;
  animation-iteration-count: 1;
}

/* Stijlen voor de afbeelding met schuine uitsnijding */
.image-wrapper {
  width: 50%;
  /* 50% van de breedte om ruimte te geven aan de tekst */
  height: 100%;
  /* Volledige hoogte van de kaart */
  overflow: hidden;
  z-index: 1;
  position: relative;
  cursor: pointer;
  /* Cursor verandert bij hover */
  padding-left: 20px;
  /* Zorg voor een afstand tussen de afbeelding en de tekst */
  box-sizing: border-box;
  /* Padding wordt meegerekend in de breedte/hoogte */
}

/* Voeg een schuine uitsnijding toe aan de afbeelding in de rechterbovenhoek */
.image-wrapper::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  /* Verplaats naar de rechterbovenhoek */
  width: 100%;
  height: 100%;
  clip-path: polygon(100% 0, 80% 0, 100% 35%);
  /* Schuine uitsnijding in de rechterbovenhoek */
  background: transparent;
  z-index: 2;
}

.image-wrapper::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  /* Verplaats naar de rechterbovenhoek */
  width: 100%;
  height: 100%;
  background: #fff;
  clip-path: polygon(100% 0, 80% 0, 100% 35%);
  /* Schuine uitsnijding in de rechterbovenhoek */
  z-index: 1;
}

.image-wrapper img {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 99%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

/* Voeg de zoomed class toe als isHovered true is */
.image-wrapper img.zoomed {
  transform: scale(1.1);
  /* Zoom de afbeelding in */
}

@keyframes bounce {

  0%,
  100% {
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

@media (max-width: 1280px) {
  #paragraphcard-right {
    margin: 12px 0;
  }

  #content {
    width: initial;
    padding: 10px;
    /* Zorg voor een kleinere padding op kleinere schermen */

    h1,
    h2,
    h3 {
      margin: 8px 0;
    }

    p {
      margin: 12px auto;
    }
  }
}
</style>
