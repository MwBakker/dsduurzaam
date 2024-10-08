<template>
  <div class="container-content-card-one">
    <div class="content-wrapper">
      <!-- Tekstgedeelte -->
      <div class="content-text">
        <h2>{{ title }}</h2>
        <ul>
          <li v-for="(item, index) in listItems" :key="index">
            <img :src="checkIconUrl" alt="Check" class="check-icon" /> {{ item }}
          </li>
        </ul>
        <!-- Optionele CTA Button with Arrow -->
        <router-link v-if="showButton" :to="linkUrl" class="cta-button">
          <span>{{ buttonText }}</span>
          <svg xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="button-arrow">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </router-link>
      </div>
      <!-- Afbeeldinggedeelte -->
      <div class="content-image">
        <img :src="imageUrl" :alt="imageAlt" class="content-card-image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContentCardOne",
  props: {
    title: {
      type: String,
      required: true,
    },
    listItems: {
      type: Array,
      required: true,
    },
    buttonText: {
      type: String,
      default: "Vraag adviesgesprek aan",
    },
    imageSrc: {
      type: String,
      required: true,
    },
    imageAlt: {
      type: String,
      default: "Afbeelding",
    },
    linkUrl: {
      type: String,
      default: "/", // Standaard URL voor router-link
    },
    showButton: {
      type: Boolean, // Zorg ervoor dat de showButton een Boolean is
      default: true, // Standaardwaarde is true (knop tonen)
    },
  },
  computed: {
    imageUrl() {
      return new URL(`../../../assets/cards/${this.imageSrc}`, import.meta.url).href;
    },
    checkIconUrl() {
      return new URL(`../../../assets/icon/greencheck.png`, import.meta.url).href;
    },
  },
};
</script>

<style lang="scss" scoped>
.container-content-card-one {
  width: 75%;
  max-width: 1548px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  padding: 0 20px;
  margin-top: 150px; /* Dit verplaatst de hele container naar beneden */
}

.content-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: relative;
  margin-bottom: 100px;
  margin-top: 50px; /* Verplaats de gehele content-wrapper naar beneden */
}

.content-wrapper::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 60%;
  background: linear-gradient(to right, #b33a3a 0%, #bb4a4a 30%, #c66060 50%, #d17a7a 70%, #e28a8a 100%);


  z-index: 0;
}

.content-text {
  flex-basis: 50%;
  padding: 50px 20px; /* Verhoog de padding-top om de tekst naar beneden te verplaatsen */
  padding-right: 50px;
  position: relative;
  z-index: 1;
}

h2 {
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 20px;
}

ul {
  list-style: none;
  padding: 0;

  li {
    margin-bottom: 10px;
    font-size: 1.2rem;
    color: #ffffff;
    display: flex;
    align-items: center;
    font-weight: 500;

    .check-icon {
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }
  }
}

.cta-button {
  background-color: #ffffff;
  color: #08535e;
  padding: 15px 30px;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 800;
  text-align: center;
  margin-top: 20px;
  width: 400px;
  position: relative;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease, opacity 0.3s ease;
}

.cta-button span {
  position: relative;
}

.cta-button:hover {
  background-color: #fff;
}

.button-arrow {
  position: absolute;
  right: 30px;
  width: 1.5rem;
  height: 1.5rem;
  opacity: 0;
  transition: transform 0.3s ease, opacity 0.3s ease;
  transform: translateX(-30px);
}

.cta-button:hover .button-arrow {
  transform: translateX(0);
  opacity: 1;
}

.cta-button .button-arrow {
  stroke: #08535e !important;
}

.content-image {
  flex-basis: 45%;
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  z-index: 2;
  margin-top: -150px; /* Schuif de afbeelding omhoog */
}

.content-card-image {
  width: 100%;
  height: auto;
  object-fit: cover;
  max-width: 100%;
}

@media (max-width: 1280px) {
  .container-content-card-one {
    width: 100%;
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;
    margin: 0 auto;
  }

  .cta-button {
    width: 100%;
  }

  .content-wrapper {
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
  }

  .content-wrapper::before {
    width: 100%;
  }

  .content-image {
    display: none;
  }
}
</style>
