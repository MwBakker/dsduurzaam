<template>
    <!-- Container-main voor de bestaande content -->
    <div id="container-main">
        <div id="container-elements">
            <!-- Achtergrondsectie achter de afbeelding -->
            <div id="background-section"></div>

            <!-- Tekstsectie -->
            <div id="container-text">
                <!-- Voeg hier de inhoud van de tekstsectie toe -->
            </div>

            <!-- Afbeeldingsectie -->
            <div id="container-image" :style="{ backgroundImage: `url(${'src/assets/tabs/' + backgroundImage + '.png'})` }">
            </div>

            <!-- Overlappende sectie -->
            <div id="overlay-section">
                <!-- Inhoud van de overlappende sectie -->
                <h1 v-if="backgroundImage != 'home'">{{ title }}</h1>
                <slot v-else></slot>
                <p>{{ description }}</p>
                <button v-if="backgroundImage != 'contact'" id="contact-button" @click="handleAdviceButtonClick">Gratis advies ontvangen</button>
            </div>
        </div>
    </div>

    <!-- Nieuwe container buiten container-main -->
    <div id="new-container">
        <div id="new-elements">
            <!-- Content voor de nieuwe container -->
            <div id="new-content">
                <div v-if="backgroundImage != 'contact'" id="service-row">
                <div id="service-content">
                    <div class="service-line-wrapper">
                        <ServiceLine title="Hoge kwaliteit" icon="quality" />
                    </div>
                    <div class="service-line-wrapper">
                        <ServiceLine title="Tot 10 jaar garantie" icon="warranty" />
                    </div>
                    <div class="service-line-wrapper">
                        <ServiceLine title="Direct leverbaar" icon="delivery" />
                    </div>
                    <div class="service-line-wrapper">
                        <ServiceLine title="Snelle installatie" icon="installation" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import titleIcon from "../Title-icon.vue";
import ServiceLine from "@/components/Service-line.vue";

export default {
  name: "upper_content_container",
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    backgroundImage: {
      type: String,
      required: true,
    },
  },
  components: {
    titleIcon,
    ServiceLine,
  },
  methods: {
    handleAdviceButtonClick() {
      // Roep de scrollToFooter methode aan op de root instance
      this.$root.scrollToFooter();
    }
  }
};
</script>

<style lang="scss">
#container-main {
    background-color: #0c8bbd05;
    margin: 0;
    padding: 0;
    width: 100%;
    padding-top: 145px; /* Zorgt ervoor dat de afbeelding niet achter het menu komt */
    position: relative; /* Zorg ervoor dat de overlay correct wordt gepositioneerd */
}

#container-elements {
    width: 100%;
    height: 460px;
    display: flex;
    position: relative; /* Maak deze container de referentie voor absolute positionering */
}

#background-section {
    position: absolute;
    top: 0;
    left: 0;
    width: 80%; /* Breedte van 80% */
    height: 100%;
    background-color: #2c5484; /* Achtergrondkleur van de nieuwe div */
    z-index: 0; /* Zorg ervoor dat deze sectie achter de afbeelding ligt */
}

#container-text {
    flex: 0 0 20%; /* Zet de breedte van de tekstsectie op 20% */
    padding: 115px 50px;
    background-color: #2c5484; /* Achtergrondkleur van de tekstsectie */
    color: white; /* Tekstkleur voor contrast */
    z-index: 1; /* Zorg ervoor dat deze sectie onder de overlappende sectie ligt */
}

#container-image {
    flex: 0 0 80%; /* Zet de breedte van de afbeeldingssectie op 80% */
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    height: 100%;
    width: 100%;
    position: relative;
    z-index: 2; /* Zorg ervoor dat deze sectie onder de overlappende sectie ligt */
    clip-path: polygon(0 0, 100% 0, 100% 100%, 20% 100%); /* Uitsparing in de linkerbovenhoek */
}

#overlay-section {
   position: absolute;
    top: 50%;
    left: 25%; /* Positie naar links */
    transform: translate(-50%, -50%);
    color: white; /* Zorg ervoor dat de tekstkleur wit is */
    padding: 20px;
    z-index: 3; /* Zorg ervoor dat deze sectie boven de andere secties ligt */
    max-width: 25%; /* Maximaal 30% van de breedte van de container */
    background-color: #3eaf3c; /* Optioneel, achtergrondkleur blijft behouden */
    box-sizing: border-box; /* Zorg ervoor dat padding wordt meegerekend bij de breedte */
    box-shadow: rgba(0, 0, 0, 0.5) 0px 10px 20px 0px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px; /* Versterkte schaduw */
}

#overlay-section h1,
#overlay-section p {
    color: white; /* Zorg ervoor dat deze elementen ook wit zijn */
}

/* Nieuwe container styling */
#new-container {
    width: 100%;
    background-color: #f5f5f5;
    display: flex;
    justify-content: center;
    align-items: center; /* Centreert de inhoud verticaal */
    box-sizing: border-box; /* Zorgt ervoor dat padding wordt meegenomen in de hoogte */
}

#new-elements {
    width: 100%;
    text-align: center;
}

#new-content h2 {
    color: #333;
    font-size: 2rem;
    margin-bottom: 20px;
}


#new-button {
    padding: 10px 20px;
    background-color: #2c5484;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

#new-button:hover {
    background-color: #1b3a62;
}

#service-row {
    height: 142px; /* Hoogte van de rij */
    background-color: white;
    box-shadow: inset 0px 8px 6px -6px #d7d7d778;
    display: flex;
    justify-content: center; /* Centreert de inhoud horizontaal */
    align-items: center; /* Centreert de inhoud verticaal */
}

#service-content {
    display: flex;
    justify-content: space-between; /* Verdeel de items gelijkmatig */
    align-items: center; /* Centreer de inhoud verticaal */
    max-width: 1548px; /* Maximale breedte */
    width: 100%; /* Gebruik volledige breedte */
    margin: 0 auto; /* Centreer de inhoud */
    padding: 0 16px; /* Optioneel: wat padding aan de zijkanten */
    height: 100%; /* Zorg ervoor dat de container de volledige hoogte inneemt */
}

.service-line-wrapper {
    flex: 1; /* Laat elk service-item evenveel ruimte innemen */
    display: flex;
    flex-direction: column; /* Zet de inhoud van elke service-line verticaal */
    justify-content: center; /* Centreer de inhoud verticaal */
    align-items: center; /* Centreer de inhoud horizontaal */
    text-align: center; /* Zorg ervoor dat de tekst gecentreerd is */
    height: 100%; /* Zorg ervoor dat de wrapper de volledige hoogte gebruikt */
    padding: 0 10px; /* Optioneel: geef wat padding tussen de items */
}

/* Zorg ervoor dat de ServiceLine tekst en iconen goed worden weergegeven */
.service-line-wrapper h3, /* Of welke tag je ook gebruikt */
.service-line-wrapper p {
    margin: 0; /* Verwijder ongewenste marges */
    padding: 0; /* Verwijder ongewenste padding */
    font-size: 1rem; /* Stel de gewenste fontgrootte in */
    line-height: 1.5; /* Zorg voor een goede regelhoogte */
    color: #333; /* Of de gewenste tekstkleur */
}

.service-line-wrapper svg, /* Stel iconen goed af */
.service-line-wrapper img {
    width: auto;
    max-height: 50px; /* Beperk de hoogte van de iconen als ze te groot zijn */
}

/* Voor mobiele weergave */
@media (max-width: 768px) {
    #service-content {
        flex-direction: column;
        align-items: center;
    }

    .service-line-wrapper {
        margin-bottom: 20px; /* Ruimte tussen de iconen op mobiele weergave */
    }
}

#contact-button {
    padding: 10px 20px;
    background-color: #ffffff; /* Witte achtergrondkleur */
    color: #2c5484; /* Tekstkleur */
    border: none;
    cursor: pointer;
    font-size: 0.85rem; /* Font-grootte */
    font-weight: 600; /* Font-weight */
}

/* Dit is een voorbeeld van CSS die je mogelijk in je ServiceLine component moet opnemen */
.service-line-title {
    color: #284c78;
    font-weight: 600;
    font-size: 1.25rem;
    text-align: center;
    margin: 0;
    padding: 0;
}

</style>
