<template>
  <div class="introduction-card">
    <div class="background-wrapper-red">
      <!-- Centrale titel boven de twee kaarten -->
      <h2 class="center-title">{{ centerTitle }}</h2>
      <!-- Container voor twee secties naast elkaar -->
      <div class="content-container">
        <!-- Eerste witte kaart -->
        <div class="text-container left-card">
          <h2 class="title">{{ leftTitle }}</h2>
          <!-- Loop door de leftText array en render elke tekst in een aparte paragraaf -->
          <p class="text" v-for="(paragraph, index) in leftText" :key="index">{{ paragraph }}</p>
        </div>
        <!-- Tweede witte kaart -->
        <div class="text-container right-card">
          <h2 class="title">{{ rightTitle }}</h2>
          <!-- Loop door de rightText array en render elke tekst in een aparte paragraaf -->
          <p class="text" v-for="(paragraph, index) in rightText" :key="index">{{ paragraph }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IntroductionCard",
  props: {
    centerTitle: {
      type: String,
      required: true,
      default: "Welkom bij onze diensten",
    },
    leftTitle: {
      type: String,
      required: true,
      default: "Onze producten",
    },
    leftText: {
      type: Array, // We verwachten een array van strings voor meerdere paragrafen
      required: true,
      default: () => ["Wij bieden een breed scala aan duurzame producten."],
    },
    rightTitle: {
      type: String,
      required: true,
      default: "Service en Onderhoud",
    },
    rightText: {
      type: Array, // We verwachten een array van strings voor meerdere paragrafen
      required: true,
      default: () => ["Wij bieden uitstekende service voor al uw duurzame installaties."],
    },
  },
};
</script>



<style lang="scss" scoped>
.introduction-card {
  width: 100%;
  max-width: 1548px;
  margin: 0 auto;
  padding-top: 20px;
}

.background-wrapper-red {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #ffffff00;
  padding: 20px 0;
  box-sizing: border-box;
  margin: 0 auto 50px;
}

.center-title {
  font-weight: 800;
  text-align: center;
  margin-bottom: 30px;
}

.content-container {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: stretch;
  /* Zorgt ervoor dat beide containers dezelfde hoogte hebben */
  gap: 20px;
  /* Voeg transparante ruimte toe tussen de kaarten */
}


.text-container {
  width: 48%;
  padding: 10px 20px;
  background-color: #fff;
  text-align: left;
}

.title {
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 10px;
  color: #08535e;
}

.text {
  font-weight: 500;
  line-height: 1.6;
  margin-bottom: 20px;
}

@media (max-width: 1280px) {
  .content-container {
    flex-direction: column;
  }

  .text-container {
    width: 100%;
    margin-bottom: 20px;
  }
}
</style>
