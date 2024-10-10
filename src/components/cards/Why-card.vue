<template>
  <div class="why-card">
    <img :src="imageUrl" alt="icon" />
    <div id="content">
      <h3>{{ title }}</h3>
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

  &:hover {
    transform: scale(1.05);
    /* Vergroot de kaart met 5% bij hover */
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
    /* Voeg een schaduw toe bij hover */
  }
}

#content {
  h3 {
    font-size: 1.4rem;
    font-weight: 800;
    color: #08535e !important;
    margin-bottom: 10px;
    margin-bottom: 50px;
  }

  p {
    color: #08535e !important;
    font-weight: 500;
  }
}


@media (max-width: 800px) {
  .why-card {
    width: 97.5%;
    max-width: 320px;
    min-height: initial;
    margin: 6px 4px;
    padding: 28px 12px;

    img {
      height: 46px;
      margin-bottom: 12px;
    }

    p {
      font-size: 1rem;
    }
  }

  #title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 46px;

    h3 {
      font-size: 1.25rem;
      margin: 0;
    }
  }
}
</style>
