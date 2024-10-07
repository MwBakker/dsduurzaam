<template>
  <div class="why-card">
    <img :src="imageUrl" alt="icon" />
    <div class="why-card-content">
      <div id="title">
        <h3>{{ title }}</h3>
      </div>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: String,
  description: String,
  icon: String
})

const imageUrl = computed(
  () => new URL(`../../assets/icon/${props.icon}.png`, import.meta.url).href
);
</script>


<style scoped>
.why-card {
  background-color: #fff;
  padding: 30px;
  /* Vergroot de padding */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  /* Vergroot de schaduw voor meer diepte */
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 350px;
  /* max-width: 350px;
  min-width: 260px; */
  /* Verhoog de maximale breedte van de kaart */
  min-height: 350px;
  /* Voeg een minimale hoogte toe om de kaart hoger te maken */
  margin: 15px;
  /* Voeg iets meer marge toe rondom de kaarten */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  /* Maak transformatie en schaduw soepeler */

  img {
    height: 80px;
    margin-bottom: 25px;
  }
}

/* .why-card-icon {
  width: 80px; */
/* Vergroot de icoon */
/* height: 80px;
  margin-bottom: 25px; */
/* Iets meer ruimte tussen het icoon en de tekst */
/* } */

/* .why-card-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
} */

.why-card-content h3 {
  font-size: 1.4rem;
  font-weight: 800;
  color: #08535e !important;
  margin-bottom: 10px;
  margin-bottom: 50px;
}

.why-card-content p {
  color: #08535e !important;
  font-weight: 500;
}

.why-card:hover {
  transform: scale(1.05);
  /* Vergroot de kaart met 5% bij hover */
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  /* Voeg een schaduw toe bij hover */
}

@media (max-width: 800px) {
  .why-card {
    width: 172px;
    max-width: initial;
    min-height: initial;
    margin: 6px 4px;
    padding: 28px 12px;

    img {
      height: 46px;
      margin-bottom: 12px;
    }

    #title {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 56px;
      margin-bottom: 20px;

      h3 {
        font-size: 1.25rem;
        margin: 0;
      }
    }

    p {
      font-size: 1rem;
    }
  }
}
</style>
