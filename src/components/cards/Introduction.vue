<template>
  <div class="introduction-card">
    <div class="background-wrapper-white">
      <!-- Container voor de twee secties -->
      <div class="content-container">
        <!-- Tekst sectie (40% breedte) -->
        <div class="text-container-second-1">
          <h2 class="title1">{{ title1 }}</h2>
          <p class="text">{{ text1 }}</p>
        </div>
        <!-- Tweede sectie met twee blokken naast elkaar -->
        <div class="text-container-second-2">
          <div class="card">
            <h2 class="title2-3">{{ title2 }}</h2>
            <p class="text">{{ text2 }}</p>
          </div>
          <div class="card">
            <h2 class="title2-3">{{ title3 }}</h2>
            <p class="text">{{ text3 }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IntroductionCard",
  props: {
    title1: {
      type: String,
      required: true,
      default: "Wie wij zijn",
    },
    text1: {
      type: String,
      required: true,
      default: "Wij zijn een vooruitstrevend installatiebedrijf gespecialiseerd in duurzame oplossingen.",
    },
    title2: {
      type: String,
      required: true,
      default: "Wat wij doen",
    },
    text2: {
      type: String,
      required: true,
      default: "Wij leveren en installeren hoogwaardige duurzame installaties.",
    },
    title3: {
      type: String,
      required: true,
      default: "Waar wij voor staan",
    },
    text3: {
      type: String,
      required: true,
      default: "Wij geloven in de kracht van duurzaamheid en maatwerk.",
    },
  },
};
</script>

<style lang="scss" scoped>
.introduction-card {
  width: 75%;
  max-width: 1548px;
  margin: 0 auto;
  padding-top: 20px;
}

.background-wrapper-white {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #ffffff;
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

.text-container-second-1 {
  width: 100%;
  padding: 50px 20px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.title1 {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 10px;
}

.text {
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.6;
}

.text-container-second-2 {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin-top: 20px;
}

.card {
  width: 48%;
  background-color: #fff;
  padding: 20px;
}

.title2-3 {
  font-size: 1.4rem;
  font-weight: 800;
  margin-bottom: 10px;
}

@media (max-width: 1280px) {
  .text-container-second-1 {
    padding-left: 50px;
    padding-right: 50px;
  }

  .text-container-second-2 {
    flex-direction: column;
    width: 100%;
  }

  .card {
    width: 100%;
    margin-bottom: 20px;
  }
}
</style>
