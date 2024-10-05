<template>
  <div class="introduction-card">
    <div id="content">
      <h2>{{ title }}</h2>
      <p>{{ text }}</p>
      <p v-if="text2 != ''">{{ text2 }}</p>
      <button v-if="showButton" class="cta-button">{{ buttonText }}</button>
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
      default: "Glasisolatie kan dan een goed idee zijn. Heeft u interesse in het vervangen van uw ramen? Doe dan nu onze check en ontvang gratis advies op maat van onze glasisolatie-partner Glaspunt. Als u klant van ons bent, ontvangt u 5% korting.",
    },
    text2: {
      type: String,
      required: false,
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
  display: flex;
  width: 60%;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  /* Rode achtergrond */
  padding: 20px 0;
  box-sizing: border-box;
  margin: 0 auto 50px;
  position: relative;
  top: -80px;
  text-align: center;
}

#content {
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;

  h2 {
    font-weight: 800;
    margin-bottom: 20px;
    padding: 0 50px;
  }

  p {
    font-weight: 500;
    line-height: 1.6;
    /* Zelfde padding als de titel */
    padding: 0 50px;
    margin-bottom: 30px;
    /* Voeg wat extra ruimte toe onder de tekst indien nodig */
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

    &:hover {
      background-color: #ffe967;
    }
  }
}

@media (max-width: 800px) {
  .introduction-card {
    top: 0;
    width: 95%;
  }

  #content {
    padding: 0 12px;

    p,
    h2 {
      padding: 0;
      text-align: center;
    }

    h2 {
      font-size: 2rem;
    }
  }
}
</style>
