<template>
  <div class="content-card-two">
    <div class="image-wrapper">
      <img :src="imageUrl" :alt="imageAlt" class="content-image" />
    </div>
    <div class="text-wrapper">
      <h2>{{ title }}</h2>
      <div class="feature">
        <div class="feature-icon">
          <img :src="iconUrl1" alt="Icon" />
        </div>
        <div class="feature-text">
          <h3>{{ feature1Title }}</h3>
          <p>{{ feature1Description }}</p>
        </div>
      </div>
      <div class="feature">
        <div class="feature-icon">
          <img :src="iconUrl2" alt="Icon" />
        </div>
        <div class="feature-text">
          <h3>{{ feature2Title }}</h3>
          <p>{{ feature2Description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContentCardTwo",
  props: {
    imageSrc: {
      type: String,
      required: true,
    },
    imageAlt: {
      type: String,
      default: "Image",
    },
    title: {
      type: String,
      required: true,
    },
    feature1Title: {
      type: String,
      required: true,
    },
    feature1Description: {
      type: String,
      required: true,
    },
    feature2Title: {
      type: String,
      required: true,
    },
    feature2Description: {
      type: String,
      required: true,
    },
    iconSrc1: {
      type: String,
      required: true,
    },
    iconSrc2: {
      type: String,
      required: true,
    },
  },
  computed: {
    imageUrl() {
      return new URL(`../../../assets/cards/${this.imageSrc}`, import.meta.url).href;
    },
    iconUrl1() {
      return new URL(`../../../assets/icons/${this.iconSrc1}`, import.meta.url).href;
    },
    iconUrl2() {
      return new URL(`../../../assets/icons/${this.iconSrc2}`, import.meta.url).href;
    },
  },
};
</script>

<style scoped>
.content-card-two {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  padding: 20px; /* Padding verkleind */
  margin: 20px auto; /* Margin auto zorgt voor centreren */
  max-width: 1458px; /* Maximale breedte zodat het geheel niet te breed is */
  width: 80%; /* Zorg dat de kaart 90% van het scherm beslaat */
}

.image-wrapper {
  flex-basis: 40%; /* Breedte van de afbeelding */
}

.content-image {
  width: 100%;
  object-fit: cover;
}

.text-wrapper {
  flex-basis: 55%; /* Breedte van de tekstsectie */
  padding-left: 20px; /* Wat ruimte tussen tekst en afbeelding */
}

h2 {
  font-weight: 800;
  margin-bottom: 15px; /* Minder ruimte onder de titel */
}

.feature {
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px; /* Minder ruimte tussen de features */
}

.feature-icon {
  flex-basis: 10%;
  margin-right: 10px; /* Iets minder ruimte tussen de iconen en tekst */
}

.feature-icon img {
  width: 35px; /* Iets kleinere iconen */
  height: 35px;
}

.feature-text {
  flex-basis: 90%;
}

.feature-text h3 {
  font-size: 1.2rem; /* Verklein de feature titels */
  font-weight: 700;
  color: #08535e;
}

.feature-text p {
  font-weight: 500;
}

/* Media queries voor verdere aanpassingen op kleinere schermen */
@media (max-width: 1280px) {
  .content-card-two {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 15px;
  }

  .image-wrapper, .text-wrapper {
    flex-basis: 100%;
  }

  .feature-icon img {
    width: 30px;
    height: 30px;
  }
}
</style>
