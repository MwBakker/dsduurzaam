<template>
    <div id="info-line" @click="handleClick" style="cursor: pointer;">
      <img :src="imageUrl" />
      <div id="text">
        <h1>{{ title }}</h1>
        <p class="primary-text">{{ text }}</p> <!-- Eerste tekst -->
        <p class="secondary-text" v-if="additionalText">{{ additionalText }}</p> <!-- Tweede tekst -->
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  
  const props = defineProps({
    icon: String,
    title: String,
    text: String,
    additionalText: String, // Extra attribuut
  })
  
  // Dynamische afbeelding URL op basis van de icon-prop
  const imageUrl = computed(() => new URL(`../../assets/icon/${props.icon}.png`, import.meta.url).href)
  
  // Methode om te bepalen of het om een 'phone' of 'mail' gaat en de juiste actie uit te voeren
  const handleClick = () => {
    if (props.icon === 'phone') {
      // Verwijder spaties en zorg dat tel-link werkt
      window.location.href = `tel:${props.text.replace(/\s+/g, '')}`;
    } else if (props.icon === 'mail') {
      // mailto-link met het e-mailadres
      window.location.href = `mailto:${props.text}`;
    }
  };
  </script>
  
  <style lang="scss" scoped>
  #info-line {
    display: flex;
    align-items: center; /* Zorgt ervoor dat afbeelding en tekst op dezelfde hoogte zijn */
    padding: 28px;
    cursor: pointer; /* Zorg ervoor dat het element aanklikbaar lijkt */
  }
  
  img {
    height: 64px;
    width: 64px;
    margin-right: 24px;
  }
  
  #text {
    display: flex;
    flex-direction: column; /* Zorg ervoor dat h1 en p onder elkaar worden weergegeven */
  }
  
  h1 {
    font-size: 1.4rem;
    font-weight: 800;
    color: #222222;
    margin: 0; /* Verwijder eventuele standaard marges */
  }
  
  .primary-text {
    margin: 0; /* Verwijder eventuele standaard marges */
    padding-top: 15px; /* Voeg wat ruimte toe boven de paragraaf om deze naar beneden te verplaatsen */
    color: #222222;
    font-size: 1.2rem; /* Pas de font-size aan */
    font-weight: 500; /* Pas de font-weight aan */
  }
  
  .secondary-text {
    margin: 0; /* Verwijder eventuele standaard marges */
    color: #222222;
    font-size: 1.2rem; /* Pas de font-size aan */
    font-weight: 500; /* Pas de font-weight aan */
  }
  
  @media (max-width: 1024px) {
    #info-line {
      width: 80%;
      margin: 0 auto;
      padding: initial;
    }
  }
  </style>
  