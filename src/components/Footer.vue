<template>
    <div id="footer">
        <div id="contact-form-container">
            <Transition name="slide-fade-up" appear>
                <CustomForm />
            </Transition>
        </div>
        <CustomMap id="map" />
        <div id="footer-content">
            <div id="section-aboutus">
                <h1>Insteco</h1>
                <p>Over ons</p>
                <p>Service</p>
                <p>Herroepingsformulier</p>
                <p>Privacyverklaring</p>
                <p>Disclaimer</p>
            </div>
            <div id="section-address">
                <h1>Adres</h1>
                <p>Hoofdstraat 4</p>
                <p>9561 JA</p>
                <p>Ter Apel</p>
                <p>088-7155733</p>
                <p>info@duureco.nl</p>
            </div>
            <div id="services">
                <h1>Diensten</h1>
                <p @click="route('heat-pump')">Waterpomp</p>
                <p @click="route('airco')">Airco</p>
                <p @click="route('isolation')">Vloerverwarming</p>
                <p @click="route('solar')">Zonnepanelen</p>
                <p @click="route('charge-point')">Laadpalen</p>
            </div>

            <div id="certification-logos">
                <h1>Gegarandeerde kwaliteit</h1>
                <div id="certification-logos-content">
                    <a href="#" class="cert-logo-container">
                        <img class='cert-logo' src='../assets/icon/installq.png' alt="Certificering 1" />
                    </a>
                    <a href="#" class="cert-logo-container">
                        <img class='cert-logo' src='../assets/icon/technieknederland1.png' alt="Certificering 2" />
                    </a>
                    <a href="#" class="cert-logo-container">
                        <img class='cert-logo' src='../assets/icon/vca.png' alt="Certificering 3" />
                    </a>
                    <a href="#" class="cert-logo-container">
                        <img class='cert-logo' src='../assets/icon/stek.png' alt="Certificering 4" />
                    </a>
                </div>
            </div>
            <div id='logos'>
                <h1>Insteco media</h1>
                <div id="logos-content">
                    <a href='https://www.facebook.com/dsduurzaam/'><img class='logo'
                            src='../assets/icon/facebook.png' /></a>
                    <a href='https://www.instagram.com/dsduurzaam/'><img class='logo'
                            src='../assets/icon/linkedin.png' /></a>
                </div>
            </div>
        </div>
    </div>
    <div id="section-light">
        <div id="section-light-content">
            <div class="info">
                <p>KVK 012345678910</p>
                <p>BTW 012345678910</p>
            </div>
        </div>
    </div>
    <div id="section-dark">
        <img id='brand' src='../assets/logo.png' />
    </div>
</template>

<script setup>

import CustomForm from '../components/contact/Contact-form.vue';
import CustomMap from '../components/Map.vue';

</script>

<style lang="scss" scoped>
#footer {
    width: 100%;
    position: relative;
    color: #2c5484;
}

#contact-form-container {
    position: relative;
    width: 100%;
    background-color: #2c5484;
    height: 760px;
}

#map {
    width: 100%;
    height: 440px;
}

#footer-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    /* Centreer de footer-inner container */
    padding: 0 10px;
    /* Voeg wat padding toe om te voorkomen dat secties tegen de randen aan plakken */
    width: 72.5%;
    /* Zorg ervoor dat de footer-content de volledige breedte benut */
    max-width: 1548px;
    /* Stel de max-width in op 1548px */
    margin: 32px auto 24px auto;
    margin-left: 17.5%;
    /* Centreer de footer-content binnen de pagina */
}

#section-address,
#services,
#logos,
#certification-logos,
#section-aboutus {
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
    align-items: flex-start;
    /* Uitlijnen van de inhoud naar links */
}

h1 {
    font-size: 1.25rem;
    font-weight: 600;
    margin: 32px 0 18px 0;
}

p {
    font-size: 0.9rem;
    font-weight: 100;
    margin: 6px 0;
}

#services {
    p {
        cursor: pointer;
    }
}

hr {
    margin: 16px 0 0 0;
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

.cert-logo-container,
.logo-container {
    display: flex;
    align-items: center;

    width: 100%;
    /* Zorg ervoor dat de container de volledige breedte benut */
    height: 75px;
    /* Verklein de hoogte met 25% van 100px */
    box-sizing: border-box;
    /* Zorg ervoor dat padding wordt meegerekend in de breedte en hoogte */
    overflow: hidden;
    /* Zorg ervoor dat geen delen van de afbeelding buiten de container zichtbaar zijn */
}

.cert-logo,
.logo {
    width: 60%;
    /* Verklein de breedte met 25% van 80% */
    height: 60%;
    /* Verklein de hoogte met 25% van 80% */
    object-fit: contain;
    /* Zorg ervoor dat de afbeelding wordt geschaald zodat deze binnen de container past zonder afgesneden te worden */
}

#section-light {
    background-color: #eaeef3;
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
    height: 56px;
    bottom: 2px;
    left: 16px;
}

#section-dark {
    position: relative;
    height: 16px;
    background-color: #2c5484;
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
    }

    .footer-inner {
        width: 100%;
        /* Zorg ervoor dat de inner container 100% breed is op kleinere schermen */
    }

    #section-light {
        padding: 15px 0;
        /* Voeg padding toe voor consistentie */
    }

    #section-light-content {
        flex-direction: column;

        .info {
            flex-direction: column;
            width: 100%;
            align-items: center;
            /* Centreer de items binnen de info sectie */
        }

        p {
            font-size: 1.1rem;
            margin: 24px 0;
        }
    }
}
</style>