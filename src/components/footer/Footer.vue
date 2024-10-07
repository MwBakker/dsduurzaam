<template>
    <div id="footer">
        <div id="contact-form-container" v-if="route.name !== 'manage-cookies'">
            <h2>Wij komen graag met u in contact</h2>
            <!-- <Transition name="slide-fade-up" appear> -->
            <CustomForm />
            <!-- </Transition> -->
        </div>
        <div id="black-white" v-if="route.name !== 'manage-cookies'">
            <CustomMap id="map" />
        </div>
        <div id="footer-content">
            <div class="section-info">
                <h1>InsteQ</h1>
                <p><a href="./statements/heroepingsformulier.pdf">Herroepingsformulier</a></p>
                <p><a href="./statements/privacyverklaring.pdf">Privacyverklaring</a></p>
                <p><a href="./statements/disclaimer.pdf">Disclaimer</a></p>
                <p @click="goRoute('manage-cookies')" class="clickable-route">Cookies</p>
            </div>
            <div class="section-info">
                <h1>Adres</h1>
                <a href="https://www.google.com/maps/search/?api=1&query=Hoofdstraat+4,+9561+JA,+Ter+Apel"
                    target="_blank">
                    <p>Hoofdstraat 4</p>
                    <p>9561 JA</p>
                    <p>Ter Apel</p>
                </a>
                <p><a href="tel:0887155733">088-7155733</a></p>
                <p><a href="mailto:info@insteq.nl">info@insteq.nl</a></p>
            </div>
            <div id="services" class="section-info">
                <h1>Diensten</h1>
                <p @click="goRoute('heat-pump')" class="clickable-route">Waterpomp</p>
                <p @click="goRoute('airco')" class="clickable-route">Airco</p>
                <p @click="goRoute('floor-heating')" class="clickable-route">Vloerverwarming</p>
                <p @click="goRoute('solar')" class="clickable-route">Zonnepanelen</p>
                <p @click="goRoute('charge-points')" class="clickable-route">Laadpalen</p>
            </div>
            <!--
                     <div id="logos-certification" class="logos">
                <h1>Gegarandeerde kwaliteit</h1>
                <div id="certification-logos-content">
                    <a href="#"><img class='cert-logo' src='../assets/icon/installq.png' alt="Certificering 1" /></a> 
                     <a href="#"><img class='cert-logo' src='../assets/icon/technieknederland1.png'
                           alt="Certificering 2" /></a>  
                    <a href="#"><img class='cert-logo' src='../../assets/icon/vca.png' alt="Certificering 3" /></a>
                     <a href="#"><img class='cert-logo' src='../assets/icon/stek.png' alt="Certificering 4" /></a>
                </div>
            </div>
            -->
   
            <div id='logos-social' class="logos">
                <h1>Social media</h1>
                <div id="logos-content">
                    <a href="https://www.facebook.com/dsduurzaam/">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="social-logo">
                            <path
                                d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.325 24H12.82V14.706H9.692v-3.59h3.127V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.764v2.312h3.588l-.467 3.59h-3.121V24h6.116c.728 0 1.325-.597 1.325-1.326V1.326C24 .597 23.403 0 22.675 0z" />
                        </svg>
                    </a>
                    <a href="https://www.linkedin.com/company/dsduurzaam/">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="social-logo">
                            <path
                                d="M22.23 0H1.77C.79 0 0 .774 0 1.729v20.543C0 23.225.79 24 1.77 24h20.46c.98 0 1.77-.774 1.77-1.728V1.729C24 .774 23.21 0 22.23 0zM7.07 20.452H3.56V9.047h3.51v11.405zM5.318 7.545a2.064 2.064 0 110-4.128 2.064 2.064 0 010 4.128zm15.13 12.907h-3.51v-5.518c0-1.315-.03-3.008-1.834-3.008-1.832 0-2.113 1.433-2.113 2.912v5.614h-3.51V9.047h3.264v1.564h.047c.454-.854 1.565-1.764 3.219-1.764 3.44 0 4.077 2.26 4.077 5.2v6.405z" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
        <div id="section-light">
            <!-- <img id='brand' src='../assets/logo.png' /> -->
            <div id="section-light-content">
                <div class="info">
                    <p>KVK 012345678910</p>
                    <p>BTW 012345678910</p>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

import CustomForm from './contact/Contact-form.vue';
import CustomMap from './Map.vue';
import SocialIcon from './social-icon.vue';
import { useRoute } from 'vue-router';

export default {
    setup() {
        const route = useRoute();
        return { route };
    },
    components: {
        CustomForm,
        CustomMap,
        SocialIcon,
    },
    methods: {
        goRoute(page) {
            this.$root.routeGo(page);
        },
    },
};
</script>

<style lang="scss" scoped>
#footer {
    width: 100%;
    position: relative;
    color: #08535e;
    background-color: white;
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
    color: #08535e;
    text-decoration: none;
}

#contact-form-container {
    position: relative;
    width: 100%;
    background-color: #ffffff;
    height: 800px;
    text-align: center;
    padding: 0px 20px;
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
#logos-social,
#logos-certification {
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

#logos-social {
    flex: 0;
    margin-left: 2.5%;
}

#services {
    p {
        cursor: pointer;
    }
}

#black-white {
    filter: brightness(100%) contrast(100%) saturate(0%) blur(0px) hue-rotate(0deg);
}

.logos {
    display: flex;
    flex-direction: column;
    /* Zorg ervoor dat de h1 boven de knoppen en logo's staat */
    align-items: flex-start;
    /* Uitlijnen van de inhoud naar links */

    div {
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
}


#logos-certification {
    margin-top: 0;

    /* Verwijder eventuele extra margin boven de #certification-logos sectie */
    h1 {
        margin-bottom: 10px;
    }
}

.cert-logo {
    width: 60%;
    /* Verklein de breedte met 25% van 80% */
    height: 74px;
    /* Verklein de hoogte met 25% van 80% */
    object-fit: contain;
    /* Zorg ervoor dat de afbeelding wordt geschaald zodat deze binnen de container past zonder afgesneden te worden */
}

#section-light {
    background: linear-gradient(to right, #08535e, #49a3b5);
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
    background-color: #08535e;
    width: 100%;
    /* Zorg ervoor dat de section-dark de volledige breedte benut */
}

#logos-content {
    display: flex;
    /* Zorg ervoor dat de logo's naast elkaar worden weergegeven */
    gap: 15px;
    /* Zorg ervoor dat de logo's verticaal uitgelijnd zijn */
    justify-content: flex-start;
    /* Zorg ervoor dat de logo's links uitgelijnd zijn */
    padding: 10px 0;
    /* Voeg wat padding toe boven en onder de logo's */
}

.social-logo {
    width: 40px;
    height: 40px;
    fill: #08535e;
    /* Verander de vulkleur van de SVG naar de gewenste kleur */
}

#contact-form-container h2 {
    font-weight: 800;
}

#section-light-content p {
    color: white;
}

p a:hover {
    font-size: 0.9rem;
    /* Pas de waarde aan naar wens */
    font-weight: 700;
}

p.clickable-route:hover {
    font-size: 0.9rem;
    /* Pas de waarde aan naar wens */
    font-weight: 700;
}

.social-logo:hover {
    transform: scale(1.1);
    /* Vergroot het logo iets bij hover */
}

.clickable-route {
    cursor: pointer;
    /* Zorgt voor het handje-icoon */
    color: #08535e;
    /* Optioneel: Houd de stijl consistent met links */
}

@media (max-width: 1280px) {
    #footer-content {
        flex-direction: column;
        /* Zet secties onder elkaar op kleinere schermen */
        align-items: center;
        margin: 0 auto;
    }

    #contact-form-container {
        height: 1100px;
    }

    .section-info,
    #logos-social {
        align-items: center;
        display: block;
        text-align: center;
    }

    #logos-content {
        display: block;

        a {
            margin: 0 6px;
        }
    }

    #logos-certification {
        text-align: center;
        display: block;
        flex: initial;
    }

    #certification-logos-content {
        display: block;
        margin-left: 14px;
    }

    .section-info {
        flex: 0;
    }
}

@media (max-width: 800px) {
    
    #contact-form-container {
        height: 1000px;
        h2 {
            margin: 24px 0;
        }
    }
} 
</style>