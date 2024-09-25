<template>
    <div id="footer">
        <div id="contact-form-container">
            <Transition name="slide-fade-up" appear>
                <CustomForm />
            </Transition>
        </div>
        <div id="black-white">
            <CustomMap id="map" />
        </div>
        <div id="footer-content">
            <div class="section-info">
                <h1>Insteco</h1>
                <p>Service</p>
                <p><a href="./statements/heroepingsformulier.pdf">Herroepingsformulier</a></p>
                <p><a href="./statements/privacyverklaring.pdf">Privacyverklaring</a></p>
                <p><a href="./statements/disclaimer.pdf">Disclaimer</a></p>
            </div>
            <div class="section-info">
                <h1>Adres</h1>
                <p>Hoofdstraat 4</p>
                <p>9561 JA</p>
                <p>Ter Apel</p>
                <p>088-7155733</p>
                <p>info@duureco.nl</p>
            </div>
            <div id="services" class="section-info">
                <h1>Diensten</h1>
                <p @click="emitRoute('heat-pump')">Waterpomp</p>
                <p @click="emitRoute('airco')">Airco</p>
                <p @click="emitRoute('isolation')">Vloerverwarming</p>
                <p @click="emitRoute('solar')">Zonnepanelen</p>
                <p @click="emitRoute('charge-point')">Laadpalen</p>
            </div>
            <div id="certification-logos">
                <h1>Gegarandeerde kwaliteit</h1>
                <div id="certification-logos-content">
                    <a href="#"><img class='cert-logo' src='../assets/icon/installq.png' alt="Certificering 1" /></a>
                    <a href="#"><img class='cert-logo' src='../assets/icon/technieknederland1.png'
                            alt="Certificering 2" /></a>
                    <a href="#"><img class='cert-logo' src='../assets/icon/vca.png' alt="Certificering 3" /></a>
                    <a href="#"><img class='cert-logo' src='../assets/icon/stek.png' alt="Certificering 4" /></a>
                </div>
            </div>
            <div id='logos'>
                <h1>Insteco media</h1>
                <div id="logos-content">
                    <a href="https://www.facebook.com/dsduurzaam/" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor" class="social-logo">
                        <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.325 24H12.82V14.706H9.692v-3.59h3.127V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.764v2.312h3.588l-.467 3.59h-3.121V24h6.116c.728 0 1.325-.597 1.325-1.326V1.326C24 .597 23.403 0 22.675 0z"/>
                    </svg>
                    </a>
                    <a href="https://www.linkedin.com/company/dsduurzaam/" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="40" height="40" viewBox="0 0 24 24" class="social-logo">
                        <path d="M22.23 0H1.77C.79 0 0 .774 0 1.729v20.543C0 23.225.79 24 1.77 24h20.46c.98 0 1.77-.774 1.77-1.728V1.729C24 .774 23.21 0 22.23 0zM7.07 20.452H3.56V9.047h3.51v11.405zM5.318 7.545a2.064 2.064 0 110-4.128 2.064 2.064 0 010 4.128zm15.13 12.907h-3.51v-5.518c0-1.315-.03-3.008-1.834-3.008-1.832 0-2.113 1.433-2.113 2.912v5.614h-3.51V9.047h3.264v1.564h.047c.454-.854 1.565-1.764 3.219-1.764 3.44 0 4.077 2.26 4.077 5.2v6.405z"/>
                    </svg>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div id="section-light">
        <img id='brand' src='../assets/logo.png' />
        <div id="section-light-content">
            <div class="info">
                <p>KVK 012345678910</p>
                <p>BTW 012345678910</p>
            </div>
        </div>
    </div>
</template>

<script setup>

import CustomForm from '../components/contact/Contact-form.vue';
import CustomMap from '../components/Map.vue';
import { getCurrentInstance } from 'vue';

const internalInstance = getCurrentInstance();
// get the emitter from the instance
const emitter = internalInstance.appContext.config.globalProperties.emitter;

function emitRoute(direction) {
    emitter.emit('my-event', { 'direction': direction });
};

</script>

<style lang="scss" scoped>
#footer {
    width: 100%;
    position: relative;
    color: #222222;
}

#contact-form-container {
    position: relative;
    width: 100%;
    background-color: #edf1f6ad;
    height: 760px;

}

#map {
    width: 100%;
    height: 440px;
}

#footer-content {
    display: flex;
    width: 75%;
    margin: 32px auto 24px auto;
}

.section-info,
#logos,
#certification-logos {
    flex: 1 1 200px;
    /* Flex-grow en flex-shrink instellen met een basis breedte van 200px */
    margin: 0 10px;
    /* Zorg voor ruimte tussen de secties */
    min-width: 150px;
    /* Zorg ervoor dat secties niet te smal worden */
    display: flex;
    /* Voeg flex toe voor alignment binnen deze secties */
    flex-direction: column;
    /* Zorg ervoor dat de items verticaal gestapeld worden */
}

#logos {
    flex: 0;
    margin-left: 2.5%;
}

h1 {
    font-size: 1.25rem;
    font-weight: 600;
    margin: 32px 0 18px 0;
}

p {
    font-size: 0.9rem;
    font-weight: 600;
    margin: 6px 0;
}

a {
    color: #222222;
    text-decoration: none;

    &:hover {
        color: #2071b5;
    }
}


#services {
    p {
        cursor: pointer;
    }
}

#black-white {
    filter: brightness(100%) contrast(100%) saturate(0%) blur(0px) hue-rotate(0deg);
}

#logos,
#certification-logos {
    display: flex;
    flex-direction: column;
    /* Zorg ervoor dat de h1 boven de knoppen en logo's staat */
    align-items: flex-start;
    /* Uitlijnen van de inhoud naar links */
}

#logos-content,
#certification-logos-content {
    display: grid;
    /* Gebruik grid voor het layouten van logo's */
    grid-template-columns: repeat(2, 1fr);
    /* Twee kolommen */
    gap: 10px;
    /* Ruimte tussen de logo's */
    width: 100%;
    /* Zorg ervoor dat de grid de volledige breedte benut */
    justify-items: start;
    /* Zorg ervoor dat de logo's links uitgelijnd zijn */
}

#certification-logos {
    margin-top: 0;
    /* Verwijder eventuele extra margin boven de #certification-logos sectie */
}

#certification-logos h1 {
    margin-bottom: 10px;
    /* Verlaag de marge onder de h1 naar 10px in de #certification-logos sectie */
}

.cert-logo,
.logo {
    width: 60%;
    /* Verklein de breedte met 25% van 80% */
    height: 74px;
    /* Verklein de hoogte met 25% van 80% */
    object-fit: contain;
    /* Zorg ervoor dat de afbeelding wordt geschaald zodat deze binnen de container past zonder afgesneden te worden */
}

#section-light {
    background-color: #edf1f6ad;
    padding: 15px 0;
    /* Voeg wat padding toe boven en onder de inhoud */
    width: 100%;
    /* Zorg ervoor dat de section-light de volledige breedte benut */
}

#section-light-content {
    display: flex;
    justify-content: center;
    /* Centreer de inhoud horizontaal binnen de sectie */
    align-items: center;
    /* Centreer de inhoud verticaal binnen de sectie */
    width: 100%;
    /* Zorg ervoor dat de section-light-content de volledige breedte benut */
    max-width: 1548px;
    /* Maximaliseer de breedte van de inhoud binnen section-light */
    margin: 0 auto;
    /* Centreer de inhoud binnen deze sectie */
}

.info {
    display: flex;
    flex-direction: row;
    /* Zet de items naast elkaar */
    justify-content: center;
    /* Centreer de items horizontaal binnen .info */
    gap: 20px;
    /* Voeg ruimte toe tussen de items */
}

#brand {
    position: absolute;
    height: 50px;
    bottom: 2px;
    left: 25px;
}

#section-dark {
    position: relative;
    height: 16px;
    background-color: #222222;
    width: 100%;
    /* Zorg ervoor dat de section-dark de volledige breedte benut */
}

#logos-content {
    display: flex;
    /* Zorg ervoor dat de logo's naast elkaar worden weergegeven */
    gap: 15px;
    /* Voeg ruimte toe tussen de logo's */
    align-items: center;
    /* Zorg ervoor dat de logo's verticaal uitgelijnd zijn */
    justify-content: flex-start;
    /* Zorg ervoor dat de logo's links uitgelijnd zijn */
    padding: 10px 0;
    /* Voeg wat padding toe boven en onder de logo's */
}

.logo {
    width: 40px;
    /* Pas de breedte van de logo's aan */
    height: 40px;
    /* Pas de hoogte van de logo's aan */
    object-fit: contain;
    /* Zorg ervoor dat de logo's binnen hun container passen zonder vervorming */
}

@media (max-width: 1024px) {
    #footer-content {
        flex-direction: column;
        /* Zet secties onder elkaar op kleinere schermen */
        align-items: center;
        margin: 0 auto;
    }

    #contact-form-container {
        height: 836px;
    }

    .section-info,
    #logos {
        align-items: center;
        display: block;
        text-align: center;
    }

    #logos-content {
        display: block;

        .logo {
            margin: 0 12px;
        }
    }

    #certification-logos {
        text-align: center;
        display: block;
    }

    .section-info,
    #logos,
    #certification-logos {
        flex: 0;
    }
}
.social-logo {
  width: 40px;
  height: 40px;
  fill: #2071b5; 
}

</style>