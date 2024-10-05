<template>
  <div class="introduction-card">
    <div class="background-wrapper-red">
      <!-- Centrale titel boven de vier kaarten -->
      <h2 class="center-title">{{ centerTitle }}</h2>
      <!-- Container voor de eerste twee secties naast elkaar -->
      <div class="content-container">
        <!-- Eerste witte kaart -->
        <div class="text-container left-card">
          <h2 class="title">{{ leftTitle }}</h2>
          <p class="text">{{ leftText }}</p>
        </div>
        <!-- Tweede witte kaart -->
        <div class="text-container right-card">
          <h2 class="title">{{ rightTitle }}</h2>
          <p class="text">{{ rightText }}</p>
        </div>
      </div>
      <!-- Container voor de tweede twee secties naast elkaar met extra ruimte -->
      <div class="content-container second-row">
        <!-- Derde witte kaart -->
        <div class="text-container left-card">
          <h2 class="title">{{ thirdTitle }}</h2>
          <p class="text">{{ thirdText }}</p>
        </div>
        <!-- Vierde witte kaart -->
        <div class="text-container right-card">
          <h2 class="title">{{ fourthTitle }}</h2>
          <p class="text">{{ fourthText }}</p>
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
      type: String,
      required: true,
      default: "Wij bieden een breed scala aan duurzame producten.",
    },
    rightTitle: {
      type: String,
      required: true,
      default: "Service en Onderhoud",
    },
    rightText: {
      type: String,
      required: true,
      default: "Wij bieden uitstekende service voor al uw duurzame installaties.",
    },
    thirdTitle: {
      type: String,
      required: true,
      default: "Advies op maat",
    },
    thirdText: {
      type: String,
      required: true,
      default: "Onze experts staan klaar om u te helpen met persoonlijk advies.",
    },
    fourthTitle: {
      type: String,
      required: true,
      default: "Snelle installatie",
    },
    fourthText: {
      type: String,
      required: true,
      default: "Wij zorgen voor een snelle en professionele installatie van uw systemen.",
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
  align-items: stretch; /* Zorgt ervoor dat beide containers dezelfde hoogte hebben */
  gap: 20px; /* Voeg transparante ruimte toe tussen de kaarten */
  margin-bottom: 20px; /* Voeg ruimte toe onder de content-container */
}

.second-row {
  margin-top: 30px; /* Ruimte tussen de eerste en tweede rij */
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
    text-align: center;
  }
}

</style>
