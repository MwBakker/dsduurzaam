<template>
    <div id="info-line">
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

const imageUrl = computed(
    () => new URL(`../../assets/icon/${props.icon}.png`, import.meta.url).href
);
</script>

<style lang="scss" scoped>
#info-line {
    display: flex;
    align-items: center; /* Zorgt ervoor dat afbeelding en tekst op dezelfde hoogte zijn */
    padding: 28px;
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
    font-size: 1.8rem;
    font-weight: 600;
    color: #2c5484;
    margin: 0; /* Verwijder eventuele standaard marges */
}

.primary-text {
    margin: 0; /* Verwijder eventuele standaard marges */
    padding-top: 15px; /* Voeg wat ruimte toe boven de paragraaf om deze naar beneden te verplaatsen */
    color: #2c5484;
    font-size: 0.9rem;
    font-weight: 100;
}

.secondary-text {
    margin: 0; /* Verwijder eventuele standaard marges */
    padding-top: 0; /* Geen extra ruimte boven de tweede paragraaf */
    color: #2c5484;
    font-size: 0.9rem;
    font-weight: 100;
}

@media (max-width: 1024px) {
   #info-line {
        width: 80%;
        margin: 0 auto;
        padding: initial;
   }
}
</style>
