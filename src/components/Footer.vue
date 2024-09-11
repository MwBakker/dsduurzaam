<template>
    <div id="footer">
        <div id="footer-content">
            <hr>
            <div id="section-address">
                <div>
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
                    <p @click="route('charge-point')">Service</p>
                </div>
                <div id='logos'>
                    <a href='https://www.facebook.com/dsduurzaam/'><img class='logo'
                            src='../assets/icon/facebook.png' /></a>
                    <a href='https://www.instagram.com/dsduurzaam/'><img class='logo'
                            src='../assets/icon/linkedin.png' /></a>
                </div>
            </div>
        </div>
        <div id="section-light">
            <div id="section-light-content">
                <div class="info">
                    <a href='https://www.facebook.com/dsduurzaam/'>
                        <p>Privacy verklaring</p>
                    </a>
                    <a href='https://www.instagram.com/dsduurzaam/'>
                        <p>Disclaimer</p>
                    </a>
                </div>
                <div class="info">
                    <p>KVK 012345678910</p>
                    <p>BTW 012345678910</p>
                </div>
            </div>
        </div>
        <div id="section-dark">
            <img id='brand' src='../assets/logo.png' />
        </div>
    </div>
</template>

<script setup>


</script>

<style lang="scss" scoped>
#footer {
    width: 100%;
    position: relative;
}

#footer-content {
    margin: 0 auto;
}

h1 {
    color: white;
    font-size: 1.25rem;
    font-weight: 600;
    margin: 32px 0 18px 0;
}


p {
    color: white;
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

#footer-quote {
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
        display: flex;
    }

    button {
        margin: 0 12px;
    }

    h1 {
        font-size: 1.7rem;
        font-weight: 600;
    }
}


#section-address {
    display: flex;
    margin: 1vh 0;
    justify-content: space-around;
    padding: 12px 0 24px 0;
}

h1,
p {
    color: #2c5484;
}

#logos {
    display: flex;
    align-items: center;

    img {
        margin: 6px;
        height: 42px;
    }
}

#branding {
    margin-left: 24px;
    height: 52px;
    position: absolute;
    bottom: 0;
}

#layer-two {
    height: 24px;
    background-color: #2c5484;
}

#section-light {
    height: 78px;
    background-color: rgba(191, 203, 218, 0.3215686275);

    #section-light-content {
        display: flex;
        width: 60%;
        height: 100%;
        margin: auto;
        justify-content: space-between;
        align-items: center;
    }
}

.info {
    display: flex;
    justify-content: space-around;
    width: 30%;
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
}


@media (max-width: 1024px) {

    #section-address {
        display: none;
    }

    #footer {
        text-align: center;
    }

    // #footer {
    //     text-align: center;
    //     margin-top: 64px;
    // }

    // #section-address {
    //     flex-direction: column;
    //     margin: 0;
    // }

    #section-light {
        height: initial;
    }

    #section-light-content {
        flex-direction: column;

        .info {
            flex-direction: column;
            width: 100%;
        }

        p {
            font-size: 1.1rem;
            margin: 24px 0;
        }
    }

    // #logos {
    //     justify-content: center;
    //     margin-top: 24px;
    // }
}
</style>