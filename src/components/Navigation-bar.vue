<template>
    <div id="label-main">
        <p>Direct uit voorraad leverbaar!</p>
    </div>
    <header :class="{ 'scrolled-nav': scrollPosition }"></header>
    <div id="nav-container">
        <nav>
            <div class="branding">
                <img @click="route('home')" src="@/assets/logo.png" alt="" />
            </div>
            <div id="nav-elements">
                <div id="nav-titles">
                    <ul v-show="!mobile" class="navigation">
                        <li @click="route('heat-pump')">Warmtepomp</li>
                        <li @click="route('airco')">Airconditioning</li>
                        <li @click="route('floor-heating')">Vloerverwarming</li>
                        <li @click="route('solar')">Zonnepanelen</li>
                        <li @click="route('charge-points')">Laadpaal</li>
                        <li @click="route('isolation')">Isolatie</li>
                        <li @click="route('advice')">Energielabel</li>
                        <li @click="route('service')">Service</li>
                    </ul>
                </div>
                <div id="button-tech">
                    <img src="@/assets/tech.png" />
                    <button @click="route('contact')">Advies aan huis</button>
                </div>
            </div>
            <div class="Icon">
                <i @click="toggleMobileNav" v-show="mobile" class="far fa-bars"
                    :class="{ 'icon-active': mobileNav }"></i>
            </div>
            <Transition name="mobile-nav">
                <ul v-show="mobileNav" class="navigation">
                    <li @click="route('heat-pump')">Warmtepomp</li>
                    <li @click="route('airco')">Airconditioning</li>
                    <li @click="route('floor-heating')">Vloerverwarming</li>
                    <li @click="route('solar')">Zonnepanelen</li>
                    <li @click="route('charge-points')">Laadpaal</li>
                    <li @click="route('isolation')">Isolatie</li>
                    <li @click="route('advice')">Energielabel</li>
                    <li @click="route('service')">Service</li>
                    <li><router-link class="link" :to="{ name: '' }">Energielabel</router-link></li>
                </ul>
            </Transition>
        </nav>
    </div>
    <upper_content_container v-if="!headerHidden" :title=title :description=description :backgroundImage=headerImg />
</template>


<script>
import upper_content_container from "./Upper-content-container.vue"

export default {
    name: "navigation-bar",
    data() {
        return {
            headerHidden: false,
            scrollPosition: null,
            mobile: false,
            mobileNav: null,
            windowWidth: null,
            title: 'D&S Duurzame Installaties uw complete verduurzamer.',
            headerImg: 'home',
            description: 'Uw partner in verduurzaming van A tot Z',
            headerText: {
                'home': ["Uw partner in verduurzaming van A tot Z", ""],
                'heat-pump': ["Wartmepomp", "Mooi spul"],
                'airco': ["Airconditioning", "Mooi spul"],
                'floor-heating': ["Vloerverwarming", "Mooi spul"],
                'solar': ["Zonnepanelen", "Mooi spul"],
                'charge-points': ["Laadpalen", "Mooi spul"],
                'isolation': ["Isolatie", "Warm spul"],
                'advice': ["Energielabel & advies", "Mooi spul"],
                'service:': ["Service", "Ons niet bellen"],
                'contact': ["Contact", "Durf ons te bellen"],
            },
        };
    },
    components: {
        upper_content_container
    },
    methods: {
        route(direction) {
            var array = this.headerText[direction];
            this.title = array[0];
            this.description = array[1];
            this.headerImg = direction;
            this.$router.push({
                name: direction,
            })
        }
    }
};
</script>

<style lang="scss" scoped>
#label-main {
    height: 36px;
    width: 100%;
    background-color: #2c5484;

    p {
        text-align: center;
        font-size: 0.9rem;
        padding-top: 10px;
        color: #ffffff;
        font-weight: 400;
    }
}

header {
    z-index: 99;
    width: 100%;
    position: fixed;
    transition: 0.5s ease all;
    color: white;
}

.navigation {
    display: flex;
    align-items: center;

    img {
        width: 50px;
        transition: 0.5s ease all;
    }
}

.branding {
    cursor: pointer;

    display: flex;
    align-items: center;

    img {
        width: 75px;
        transition: 0.5s ease all;
    }
}

nav {
    max-width: 1548px;
    height: 128px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    padding: 12px 0;
    transition: 0.5s ease all;
}

#nav-elements {
    width: 100%;
    align-items: center;
    display: flex;
    justify-content: space-between;
}

ul,
.link {
    color: #2c5484;
    list-style: none;
    text-decoration: none;
}

li {
    cursor: pointer;
    font-size: 1.1rem;
    font-weight: 400;
    -webkit-text-stroke: 0.1px;
    transition: 0.5s ease all;
    padding-bottom: 4px;
    border-bottom: 1px solid transparent;
    padding: 16px;
    margin-left: 16px;
    font-weight: 550;

    &:hover {
        color: #dea130;
    }
}

#button-tech {
    position: relative;

    img {
        position: absolute;
        right: 0;
        bottom: 4px;
        height: 86px;
    }
}

button {
    width: 250px;
    padding-right: 72px;
    -moz-transition: all .2s ease-in;
    -o-transition: all .2s ease-in;
    -webkit-transition: all .2s ease-in;
    box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 18%);
    transition: all .2s ease-in;
    background-color: #fbb536;
    margin-left: 5%;

    &:hover {
        background-color: #2c5484;
    }

}
</style>