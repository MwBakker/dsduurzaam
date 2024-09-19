<template>
    <div id="nav-container">
        <div id="label-main">
            <p>Direct uit voorraad leverbaar!</p>
        </div>
        <nav>
            <div class="branding">
                <img @click="routeGo('home')" src="@/assets/logo.png" alt="" />
            </div>
            <div id="button-menu">
                <Transition name="slide-fade-right" appear>
                    <ul v-if="showNav" id="titles">
                        <div id="titles-img">
                            <div id="exit"><a @click="showNav = false" class="fa fa-arrow-left fa-2x"></a></div>
                        </div>
                        <li id="upper-li" @click="routeGo('heat-pump')">
                            Warmtepomp
                            <span class="fa fa-angle-right fa-2x"></span>
                        </li>
                        <li @click="routeGo('airco')">Airconditioning
                            <span class="fa fa-angle-right fa-2x"></span>
                        </li>
                        <li @click="routeGo('floor-heating')">Vloerverwarming
                            <span class="fa fa-angle-right fa-2x"></span>
                        </li>
                        <li @click="routeGo('solar')">Zonnepanelen
                            <span class="fa fa-angle-right fa-2x"></span>
                        </li>
                        <li @click="routeGo('charge-points')">Laadpaal
                            <span class="fa fa-angle-right fa-2x"></span>
                        </li>
                        <!-- <li @click="routeGo('isolation')">Isolatie</li> -->
                        <!-- <li @click="routeGo('advice')">Energielabel</li> -->
                        <li @click="routeGo('service')">Service
                            <span class="fa fa-angle-right fa-2x"></span>
                        </li>
                        <button>Offerte aanvragen</button>
                    </ul>
                </Transition>
                <button @click="routeGo('contact')">Advies aan huis</button>
                <a @click="showNav = true" class="fa fa-bars fa-2x"></a>
            </div>
        </nav>
    </div>
    <upper_content_container :title=title :description=description :backgroundImage=headerImg />
</template>


<script>
import upper_content_container from "./Upper-content-container.vue"

export default {
    name: "navigation-bar",
    data() {
        return {
            showNav: false,
            title: 'Insteco B.V.',
            headerImg: 'home',
            description: 'Uw absolute partner voor een energiezuiniger leven en werken!',
            headerText: {
                'home': ["Insteco B.V.", "Uw asbolute partner voor een energiezuiniger leven en werken!"],
                'heat-pump': ["Verwarm en koel duurzaam met onze warmtepompen!", "Ontdek de toekomst van energie-efficiëntie."],
                'airco': ["Ervaar ultiem comfort met onze veelzijdige airco’s!", "Koel in de zomer, verwarm in de winter en bespaar."],
                'floor-heating': ["Ervaar luxe en comfort met onze vloerverwarming!", "Geniet van gelijkmatige warmte in de winter en koel in de zomer."],
                'solar': ["Maximaliseer uw besparingen met onze zonnepanelen!", "Combineer duurzame energie met andere installaties."],
                'charge-points': ["Laad uw elektrische voertuig gemakkelijk op!", "Onze op maat gemaakte oplossingen bieden snelle en betrouwbare oplading."],
                'isolation': ["Isolatie", "Warm spul"],
                'advice': ["Energielabel & advies", "Mooi spul"],
                'service': ["Blijf zorgeloos genieten met onze snelle service en onderhoud!", "Wij bieden deskundige ondersteuning en onderhoud."],
            },
        };
    },
    components: {
        upper_content_container
    },
    methods: {
        routeGo(direction) {
            var array = this.headerText[direction];
            this.title = array[0];
            this.description = array[1];
            this.headerImg = direction;
            this.$router.push({
                name: direction,
            })
        },
    }
};
</script>

<style lang="scss" scoped>
a {
    cursor: pointer;
    float: left;
    top: 32px;
    right: 56px;
}

#nav-container {
    transition: 2s ease all;
}

#label-main {
    height: 36px;
    background-color: #222222;

    p {
        text-align: center;
        font-size: 0.9rem;
        padding-top: 10px;
        color: #ffffff;
        font-weight: 400;
    }
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 106px;
    padding: 12px 0;
}

#button-menu {
    width: 60%;
    margin: 0 5%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

#titles {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 99;
    background-color: #f4f4f4;
    transition: 0.5s ease all;

    li {
        border-bottom: 1px solid rgb(220, 220, 220);
        padding: 16px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    button {
        position: absolute;
        bottom: 8px;
        left: 0;
        right: 0;
        width: 95%;
        margin: 0 auto;
    }
}

#titles-img {
    position: relative;
    width: 100%;
    height: 175px;
    background-image: url('@/assets/tabs/service.png');
    background-size: cover;

    #exit {
        position: absolute;
        width: 50px;
        height: 50px;
        top: 12px;
        right: 24px;
        border-radius: 25px;
        background-color: #fbb536;

        a {
            margin: auto;
        }
    }
}

.branding {
    cursor: pointer;
    text-align: center;
    margin: 0 7.5%;

    img {
        width: 75px;
    }
}

ul,
.link {
    color: #222222;
    list-style: none;
    text-decoration: none;
}
</style>