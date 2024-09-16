<template>
  <div id="paragraphcard" :style="{ height: height }">
    <div id="content">
      <h1 class="title">{{ title }}</h1>
      <h2 class="subtitle">{{ subtitle }}</h2>
      <h2 class="subtitle2">{{ subtitle2 }}</h2>
      <p class="paragraph">{{ paragraphText }}</p>
      <div class="card-info" 
           @mouseover="isHovered = true" 
           @mouseleave="isHovered = false" 
           @click="route(contactLink)">
        <span class="info-text">{{ buttonText }}</span>
        <i class="fas fa-arrow-right"></i>
      </div>
    </div>
    <div class="image-wrapper" @click="route(contactLink)">
      <img :src="imageUrl" :alt="imageAlt" :class="{ zoomed: isHovered }">
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
  height: 350px; /* Stel hier je gewenste hoogte in */
  margin: 32px auto;
  position: relative;
  overflow: hidden;
}

#content {
  width: 50%; /* Zorg ervoor dat dit gedeelte 50% van de breedte is */
  height: 100%; /* Zorg ervoor dat de hoogte van de inhoud gelijk is aan de hoogte van de kaart */
  position: relative;
  background-color: #0a63cf00; /* Volledig transparant */
  z-index: 2;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* Begin de inhoud bovenaan */
  align-items: flex-start; /* Begin de inhoud aan de linkerkant */
}

.title {
  color: #2c5484;
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
  color: #2c5484;
  font-size: 1.25rem;
  line-height: 1.6;
  margin-bottom: 20px;
  width: 100%; /* Maak de tekstbreedte 100% van de beschikbare breedte */
}

.card-info {
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #2c5484;
  font-size: 1rem;
  font-weight: 600;
}

.card-info .info-text {
  margin-right: 10px;
  font-size: 1rem;
  font-weight: 600;
}

.card-info i {
  font-size: 1rem;
  font-weight: 600;
  color: #2c5484;
  transition: transform 0.3s ease;
}

/* Voeg animatie toe bij hover voor ParagraphCard */
.card-info:hover i {
  animation: bounce 1s ease; /* Pas de duur van de animatie aan zoals in ProductCard */
  animation-iteration-count: 1; /* Zorg ervoor dat de animatie maar één keer herhaald wordt */
}

/* Stijlen voor de afbeelding met schuine uitsnijding */
.image-wrapper {
  width: 50%; /* Zorg ervoor dat de afbeelding 50% van de breedte is */
  height: 100%; /* Zorg ervoor dat de afbeelding de volledige hoogte benut */
  overflow: hidden;
  z-index: 1;
  position: relative;
  cursor: pointer; /* Zorg ervoor dat de cursor verandert bij hover op de afbeelding */
}

/* Voeg een schuine uitsnijding toe aan de afbeelding */
.image-wrapper::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%; /* Breedte van de uitsnijding */
  height: 100%; /* Hoogte van de uitsnijding */
  clip-path: polygon(0 0, 20% 0, 0 35%); /* Schuine uitsnijding in de bovenhoek */
  background: transparent; /* Maak de achtergrond transparant */
  z-index: 2;
}

.image-wrapper::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff; /* Achtergrondkleur die overeenkomt met je achtergrond om het uitsnijdingsgebied onzichtbaar te maken */
  clip-path: polygon(0 0, 20% 0, 0 35%); /* Schuine uitsnijding in de bovenhoek */
  z-index: 1; /* Zorg ervoor dat deze laag onder de afbeelding staat */
}

.image-wrapper img {
  position: absolute; /* Verander naar absolute positionering */
  bottom: 0; /* Uitlijning aan de onderkant */
  left: 0;
  width: 100%;
  height: 99%; /* Zorg ervoor dat de afbeelding iets korter is dan de container */
  object-fit: cover; /* Zorg ervoor dat de afbeelding wordt bijgesneden en niet vervormd */
  transition: transform 0.5s ease;
}

/* Voeg de zoomed class toe als isHovered true is */
.image-wrapper img.zoomed {
  transform: scale(1.1);
  /* Zoom de afbeelding in */
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

@media (max-width: 1024px) {
  #paragaphcard {
    margin: 12px 0;
  }
  
  #content {
    width: initial;
    
    h1,h2,h3 {
      margin: 8px 0;
    }
    
    p {
      margin: 12px auto;
    }
  }
}
</style>
