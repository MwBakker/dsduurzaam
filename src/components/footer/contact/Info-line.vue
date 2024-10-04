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
const imageUrl = computed(() => new URL(`../../../assets/icon/${props.icon}.png`, import.meta.url).href)

const handleClick = () => {
  if (props.icon === 'phone') {
    // Verwijder spaties en zorg dat tel-link werkt
    window.open(`tel:${props.text.replace(/\s+/g, '')}`, '_self'); // Voor telefoons in hetzelfde tabblad
  } else if (props.icon === 'mail') {
    // mailto-link met het e-mailadres
    window.open(`mailto:${props.text}`, '_self'); // Voor e-mails in hetzelfde tabblad
  } else if (props.icon === 'map') {
    // Google Maps-link met het adres en eventuele extra informatie
    let query = encodeURIComponent(props.text);
    
    // Voeg additionalText toe als het bestaat
    if (props.additionalText) {
      query += `%20${encodeURIComponent(props.additionalText)}`; // Voeg extra tekst toe met spatie (%20)
    }
    
    // Open Google Maps in een nieuw tabblad
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
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
  text-align: left; /* Zorgt ervoor dat alle teksten in de container links worden uitgelijnd */
}

h1 {
  font-size: 1.4rem;
  font-weight: 800;
  color: #08535e;
  margin: 0; /* Verwijder eventuele standaard marges */
  text-align: left; /* Zorg ervoor dat de h1-tekst links wordt uitgelijnd */
}

.primary-text {
  margin: 0; /* Verwijder eventuele standaard marges */
  padding-top: 15px; /* Voeg wat ruimte toe boven de paragraaf om deze naar beneden te verplaatsen */
  color: #08535e !important;
  font-size: 1.2rem; /* Pas de font-size aan */
  font-weight: 500; /* Pas de font-weight aan */
  text-align: left; /* Zorg ervoor dat de paragraaftekst links wordt uitgelijnd */
}

.secondary-text {
  margin: 0; /* Verwijder eventuele standaard marges */
  color: #08535e;
  font-size: 1.2rem; /* Pas de font-size aan */
  font-weight: 500; /* Pas de font-weight aan */
  text-align: left; /* Zorg ervoor dat de tweede paragraaftekst links wordt uitgelijnd */
}

@media (max-width: 1280px) {
  #info-line {
    width: 232px;
    height: 110px;
    margin: auto;
    padding: 0;
  }
}
</style>
