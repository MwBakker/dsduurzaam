<template>
    <div id="footer">
        <div id="contact-form-container" v-if="route.name !== 'manage-cookies'">
            <h1>Wij komen graag met u in contact</h1>
            <!-- <Transition name="slide-fade-up" appear> -->
            <CustomForm />
            <!-- </Transition> -->
        </div>
        <div id="black-white" v-if="route.name !== 'manage-cookies'">
            <CustomMap id="map" />
        </div>
        <div id="footer-content">
            <div class="section-info">
                <h2>InsteQ</h2>
                <p><a href="./statements/heroepingsformulier.pdf">Herroepingsformulier</a></p>
                <p><a href="./statements/privacyverklaring.pdf">Privacyverklaring</a></p>
                <p><a href="./statements/disclaimer.pdf">Disclaimer</a></p>
                <p @click="goRoute('manage-cookies')" class="clickable-route">Cookies</p>
            </div>
            <div class="section-info">
                <h2>Adres</h2>
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
                <h2>Diensten</h2>
                <p @click="goRoute('heat-pump')">Waterpomp</p>
                <p @click="goRoute('airco')">Airco</p>
                <p @click="goRoute('floor-heating')">Vloerverwarming</p>
                <p @click="goRoute('solar')">Zonnepanelen</p>
                <p @click="goRoute('charge-points')">Laadpalen</p>
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
                <h2>Social media</h2>
                <div id="logos-content">
                    <a href="https://www.facebook.com/Insteqdi/">
                        <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" class="social-logo">
                            <path
                                d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.325 24H12.82V14.706H9.692v-3.59h3.127V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.764v2.312h3.588l-.467 3.59h-3.121V24h6.116c.728 0 1.325-.597 1.325-1.326V1.326C24 .597 23.403 0 22.675 0z" />
                        </svg>
                    </a>
                    <a href="https://www.linkedin.com/company/insteqdi">
                        <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" class="social-logo">
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
import { useRoute } from 'vue-router';

export default {
    setup() {
        const route = useRoute();
        return { route };
    },
    components: {
        CustomForm,
        CustomMap,
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
    background-color: white;
}

h2 {
    margin: 32px 0 18px 0;
}

p {
    font-size: 0.8rem;
    font-weight: 600;
    margin: 6px 0;
}

a {
    text-decoration: none;
}

#contact-form-container {
    position: relative;
    text-align: center;
    padding-bottom: 76px;
}

#map {
    width: 100%;
    height: 400px;
}

#black-white {
    filter: grayscale(100%);
}

#footer-content {
    display: flex;
    width: 75%;
    height: 212px;
    margin: 32px auto 24px auto;

    p,
    a {
        cursor: pointer;

        &:hover {
            font-size: 0.9rem;
            font-weight: 700;
        }
    }
}

.section-info,
#logos-social,
#logos-certification {
    flex: 1 1 200px;
    margin: 0 10px;
    min-width: 150px;
    display: flex;
    flex-direction: column;
}

#logos-social {
    flex: 0;
    margin-left: 2.5%;
}

.logos {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    div {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
        width: 100%;
        justify-items: start;
    }
}


#logos-certification {
    margin-top: 0;

    h1 {
        margin-bottom: 10px;
    }
}

.cert-logo {
    width: 60%;
    height: 74px;
    object-fit: contain;
}

#section-light {
    background: linear-gradient(to right, #08535e, #49a3b5) !important;
    padding: 15px 0;
    width: 100%;
}

#section-light-content {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 1548px;
    margin: 0 auto;

    p,
    a {
        color: white;
    }
}

.info {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 20px;
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
}

#logos-content {
    display: flex;
    gap: 15px;
    justify-content: flex-start;
    padding: 10px 0;
}

.social-logo {
    width: 36px;
    height: 36px;
    fill: #08535e;
    /* Verander de vulkleur van de SVG naar de gewenste kleur */
}

.social-logo:hover {
    transform: scale(1.1);
    /* Vergroot het logo iets bij hover */
}

@media (max-width: 1280px) {
    #footer-content {
        flex-direction: column;
        align-items: center;
        margin: 0 auto;
        height: 660px;
    }

    #contact-form-container {
        width: 90%;
        margin: 0 auto;

        h1 {
            margin: 28px 0;
        }
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

    p,
    a {
        font-size: 0.8rem;
    }

    h1 {
        margin: 24px 0;
    }

}
</style>