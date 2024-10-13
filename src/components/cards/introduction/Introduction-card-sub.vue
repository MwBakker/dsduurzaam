<template>
  <div class="introduction-card">
    <h1>{{ title }}</h1>
    <p>{{ text }}</p>
    <p>{{ text2 }}</p>
    <button v-if="buttonText != ''" class=" cta-button">{{ buttonText }}</button>
  </div>
</template>
<script>


export default {
  name: "IntroductionCard",
  props: {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    text2: {
      type: String,
      required: false,
    },
    buttonText: {
      type: String,
      required: true,
    },
  },
};

</script>

<style lang="scss" scoped>
.introduction-card {
  width: 60%;
  background-color: #ffffff;
  padding: 10px 20px;
  box-sizing: border-box;
  margin: 24px auto 50px;
  position: relative;
  // text-align: center;
}

h1 {
  font-weight: 800;
  margin: 20px 0 24px 0;
  padding: 0 50px;
  text-align: center;
}

p {
  font-weight: 500;
  line-height: 1.6;
  /* Zelfde padding als de titel */
  padding: 0 50px;
  margin-bottom: 30px;
  /* Voeg wat extra ruimte toe onder de tekst indien nodig */
}

// .cta-button {
//   color: #222;
//   font-size: 1.2rem;
//   font-weight: 600;
//   padding: 10px 25px;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #ffe967;
//   }
// }

@media (max-width: 1280px) {
  .introduction-card {
    margin: auto;
    width: 80%;
  }
}

@media (max-width: 800px) {
  .introduction-card {
    width: 95%;
    padding: 2px 2% 16px 2%;
  }

  h1 {
    text-align: center;
    margin: 12px 1% 24px 1%;
  }

  p,
  h1 {
    padding: 0;
  }

  p {
    margin-bottom: 6px;
    padding: 0 16px;
  }

  h1 {
    font-size: 1.6rem;
  }

}
</style>
