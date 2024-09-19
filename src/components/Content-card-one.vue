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

        <!-- CTA Button with Arrow -->
        <button class="cta-button">
          <span>{{ buttonText }}</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="button-arrow">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
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
      default: "#", // Default URL
    },
    linkText: {
      type: String,
      default: "Lees meer", // Default text
    },
  },
  computed: {
    imageUrl() {
      return new URL(`../assets/tabs/${this.imageSrc}`, import.meta.url).href;
    },
    checkIconUrl() {
      return new URL(`../assets/icon/greencheck.png`, import.meta.url).href;
    },
  },
};
</script>

<style lang="scss" scoped>
.container-content-card-one {
  width: 75%; /* Beperk de breedte tot 75% van het scherm */
  max-width: 1548px; /* Blijf een maximum breedte hebben */
  margin: 0 auto; /* Centreer de container */
  display: flex;
  justify-content: center;
  padding: 0 20px;
  margin-top: 150px;
}

.content-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: relative;
  margin-bottom: 100px;
}

.content-wrapper::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 60%;
  background-color: #edf1f6;
  z-index: 0;
}

.content-text {
  flex-basis: 55%;
  padding: 50px 20px;
  padding-right: 50px;
  position: relative;
  z-index: 1;
}

h2 {
  font-size: 2.5rem;
  font-weight: 800;
  color: #222222;
  margin-bottom: 20px;
}

ul {
  list-style: none;
  padding: 0;

  li {
    margin-bottom: 10px;
    font-size: 1.2rem;
    color: #222222;
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

/* Pijl en link */
.link-arrow {
  margin-top: 20px;
  margin-bottom: 20px;
}

.arrow-link {
  text-decoration: none;
  color: #222222; /* Standaard tekstkleur */
  font-weight: 600;
  font-size: 1.2rem;
  display: inline-flex;
  align-items: center;
  transition: color 0.3s ease;
}

.arrow-link:hover {
  color: #2071b5; /* Verander de tekstkleur bij hover */
}

.arrow {
  margin-right: 8px;
  color: #2071b5; /* Pijl heeft altijd deze kleur */
  display: inline-flex;
  align-items: center;

  svg {
    width: 1.25rem; /* Zorg dat de pijl even groot is als de tekst */
    height: 1.25rem;
  }
}

.cta-button {
  background-color: #ffda00;
  color: #222222;
  padding: 15px 30px;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 800;
  text-align: center;
  margin-top: 20px;
  width: 60%; /* Zorg ervoor dat de knop 60% van de breedte inneemt */
  position: relative;
  overflow: hidden; /* Verberg wat buiten de knop valt */
  display: inline-flex;
  align-items: center;
  justify-content: center; /* Zorg ervoor dat de tekst gecentreerd is */
  transition: background-color 0.3s ease, opacity 0.3s ease;
}

.cta-button span {
  position: relative;
}

.cta-button:hover {
  background-color: #ffe967; /* Pas de achtergrondkleur aan bij hover */
}

/* Zorg dat de pijl start buiten zicht, aan de rechterkant */
.button-arrow {
  position: absolute;
  right: 30px;
  width: 1.5rem;
  height: 1.5rem;
  opacity: 0;
  transition: transform 0.3s ease, opacity 0.3s ease;
  transform: translateX(-30px); /* Start buiten de knop */
}

/* Laat de pijl naar binnen schuiven en zichtbaar worden bij hover */
.cta-button:hover .button-arrow {
  transform: translateX(0); /* Schuift naar binnen */
  opacity: 1; /* Wordt zichtbaar */
}

.content-image {
  flex-basis: 45%; /* Gebruik percentage voor flex-basis */
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  z-index: 2;
  margin-top: -150px; /* Dit zorgt ervoor dat de afbeelding naar boven verschuift, altijd van toepassing */
}

.content-card-image {
  width: 100%;
  height: auto;
  object-fit: cover;
  max-width: 100%;
}

/* Media queries voor verschillende schermgroottes */
@media (max-width: 1920px) {
  .content-image {
    margin-top: -200px; /* Voor schermen kleiner dan 1920px */
  }
}

@media (max-width: 1600px) {
  .content-image {
    margin-top: -325px; /* Voor schermen kleiner dan 1600px */
  }
}

@media (max-width: 1380px) {
  .content-image {
    margin-top: -375px; /* Voor schermen kleiner dan 1600px */
  }
}

@media (max-width: 1280px) {
  .container-content-card-one {
    width: 100%; /* Gebruik de volledige breedte */
    max-width: 100%; /* Zorg ervoor dat de maximale breedte ook 100% is */
    display: flex;
    justify-content: center; /* Horizontale centrering */
    align-items: center; /* Verticale centrering */
    flex-direction: column; /* Stapel de inhoud verticaal */
    padding: 20px; /* Voeg wat padding toe rond de container */
    margin: 0 auto; /* Centreer de container horizontaal */
  }

  h2 {
    font-size: 2.5rem;
  }

  .cta-button {
    font-size: 1.2rem;
    width: 80%; /* Zorg ervoor dat de knop iets smaller is */
  }

  .content-wrapper {
    flex-direction: column; /* Stapel de tekst en afbeelding onder elkaar */
    width: 100%; /* Zorg ervoor dat de wrapper 100% breed is */
    justify-content: center; /* Centreer de inhoud verticaal */
    align-items: center; /* Centreer de inhoud horizontaal */
  }

  .content-wrapper::before {
    width: 100%; /* Zorg ervoor dat het pseudo-element 100% breed is op kleinere schermen */
  }

  .content-image {
    display: none; /* Verberg de afbeelding onder de 1280px */
  }
}


@media (max-width: 1024px) {
  h2 {
    font-size: 2.5rem;
  }

  .cta-button {
    font-size: 1.2rem;
    width: 90%; /* Vergroot de breedte van de knop op kleinere schermen */
  }

  .content-image {
    margin-top: -150px; /* Voor schermen kleiner dan 1024px */
  }
}

@media (max-width: 768px) {
  .cta-button {
    font-size: 1.2rem;
    width: 100%;
  }

  .content-wrapper {
    flex-direction: column;
    text-align: center;
  }

  .content-image {
    margin-top: -150px; /* Geen negatieve margin-top meer op kleinere schermen */
  }
}
</style>
