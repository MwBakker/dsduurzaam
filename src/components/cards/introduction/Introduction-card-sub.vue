<template>
  <div class="introduction-card">
    <div class="background-wrapper-red">
      <!-- Container voor de tekst sectie -->
      <div class="content-container">
        <!-- Tekst sectie met titel en tekst -->
        <div class="text-container">
          <h2 class="title">{{ title }}</h2>
          <p class="text">{{ text }}</p>
          <!-- Conditie om de knop weer te geven -->
          <button v-if="showButton" class="cta-button">{{ buttonText }}</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "IntroductionCard",
  props: {
    title: {
      type: String,
      required: true,
      default: "Via slecht geïsoleerde ramen verliest uw huis warmte.",
    },
    text: {
      type: String,
      required: true,
      default: "Glasisolatie kan dan een goed idee zijn. Heb jij interesse in het vervangen van je ramen? Doe dan nu onze check en ontvang gratis advies op maat van onze glasisolatie-partner Glaspunt. Als je klant van ons bent, ontvang je 5% korting.",
    },
    buttonText: {
      type: String,
      required: true,
      default: "Start de check",
    },
    showButton: {
      type: Boolean,
      default: true, // Standaard wordt de knop weergegeven
    },
  },
};

</script>

<style lang="scss" scoped>
.introduction-card {
  width: 60%;
  max-width: 1548px;
  margin: 0 auto;
  padding-top: 20px;
  position: relative;
  top: -100px; /* Verplaatst het element 150px naar boven */
}

.background-wrapper-red {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #ffffff; /* Rode achtergrond */
  padding: 20px 0;
  box-sizing: border-box;
  margin: 0 auto 50px;
  position: relative;
}

.content-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
}

.text-container {
  width: 100%;
  padding: 10px 20px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.title {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 20px;
}

.text {
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.6;
  margin-bottom: 30px;
}

.cta-button {
  background-color: #982434;
  color: #222;
  font-size: 1.2rem;
  font-weight: 600;
  padding: 10px 25px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: #ffe967;
}

@media (max-width: 1280px) {
  .text-container {
    padding-left: 50px;
    padding-right: 50px;
  }
}

.text-container h2 {
  font-size: 2.5rem;
  font-weight: 800;
  color: #1b3a5d;
  margin-bottom: 20px;
  padding-left: 50px; /* Consistente padding voor zowel titel als tekst */
  padding-right: 50px; 
}

.text-container p {
  font-size: 1.2rem;
  font-weight: 500;
  color: #4a4a4a;
  padding-left: 50px; /* Zelfde padding als de titel */
  padding-right: 50px;
  margin-bottom: 30px; /* Voeg wat extra ruimte toe onder de tekst indien nodig */
}

</style>
