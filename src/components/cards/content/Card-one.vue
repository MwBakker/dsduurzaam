<template>
  <div class="container-content-card-one">
    <div class="content-wrapper">
      <div class="content-text">
        <h1>{{ title }}</h1>
        <ul>
          <li v-for="(item, index) in listItems" :key="index">
            <img :src="checkIconUrl" alt="Check" class="check-icon" /> {{ item }}
          </li>
        </ul>
        <ButtonArrow :text="buttonText" @click="scrollTo('vue-form')" />
      </div>
      <div class="content-image">
        <img :src="imageUrl" :alt="imageAlt" class="content-card-image" />
      </div>
    </div>
  </div>
</template>

<script>
import ButtonArrow from '@/components/Button-arrow.vue';

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
  methods: {
    scrollTo(targetId) {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        const offset = 225; // Pas deze waarde aan voor je offset
        window.scrollTo({
          top: elementPosition - offset,
          behavior: "smooth",
        });
      }
    },
  },
  components: {
    ButtonArrow,
  }
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
  margin-top: 150px;
  /* Dit verplaatst de hele container naar beneden */
}

.content-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: relative;
  margin-bottom: 100px;
  margin-top: 50px;
  /* Verplaats de gehele content-wrapper naar beneden */
}

.content-wrapper::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 60%;
  background: linear-gradient(to right, #08535e, #49a3b5);
  z-index: 0;
}

h1 {
  color: #ffffff;
  margin-bottom: 20px;
}

ul {
  list-style: none;
  padding: 0;

  li {
    margin-bottom: 10px;
    font-size: 1.075rem;
    color: #ffffff;
    display: flex;
    align-items: center;
    font-weight: 500;

    .check-icon {
      width: 20px;
      height: 20px;
      margin-right: 14px;
    }
  }
}

button {
  background-color: white;
  font-size: 1em;
  width: 400px;
  font-weight: 800;
  margin-top: 24px;
  color: #08535e;

  &:hover {
    background-color: white;
  }
}

.content-text {
  flex-basis: 50%;
  padding: 50px 20px;
  /* Verhoog de padding-top om de tekst naar beneden te verplaatsen */
  padding-right: 50px;
  position: relative;
  z-index: 1;
}

.content-image {
  flex-basis: 45%;
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  z-index: 2;
  margin-top: -150px;
  /* Schuif de afbeelding omhoog */
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
    margin: 0 auto;
  }

  button {
    width: 50%;
    margin: 36px auto 0 auto;
  }

  .cta-button {
    width: 100%;
  }

  .content-wrapper {
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-bottom: 36px;
  }

  .content-wrapper::before {
    width: 100%;
  }

  .content-text {
    padding: 50px;
  }

  .content-image {
    display: none;
  }
}

@media (max-width: 800px) {
  .content-wrapper {
    margin: 48px 0 24px 0;
  }

  button {
    width: 100%;
  }

  .content-text {
    padding: 16px;

    h1 {
      text-align: center;
    }
  }

}
</style>
