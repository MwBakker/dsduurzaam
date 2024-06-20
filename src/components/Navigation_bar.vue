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
                    </ul>
                </div>
                <button id="contact-button" @click="route('contact')">Advies aan huis</button>
            </div>
            <div class="Icon">
                <i @click="toggleMobileNav" v-show="mobile" class="far fa-bars" :class="{ 'icon-active': mobileNav }"></i>
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
                    <li><router-link class="link" :to="{ name: '' }">Energielabel</router-link></li>
                </ul>
            </Transition>
        </nav>
    </div>
    <upper_content_container v-if="!headerHidden" :title=title :description=description :backgroundImage=headerImg />
</template>


<script>
import upper_content_container from "./Upper_content_container.vue"

export default {
    name: "navigation_bar",
    data() {
        return {
            headerHidden: false,
            scrollPosition: null,
            mobile: false,
            mobileNav: null,
            windowWidth: null,
            title: 'D&S Duurzame Installaties uw complete verduurzamer.',
            headerImg: 'home',
            description: 'VVVVVVVVVVVVVVVVVVVVVVVVVVVVV',
            headerText: {
                'home': ["DS Duurzaam", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."],
                'heat-pump': ["Wartmepomp", "OOOOOOOOOOOOOOOOOOOOO"],
                'airco': ["Airconditioning", "XXXXXXXXXXXXXXXXXXXXX"],
                'floor-heating': ["Vloerverwarming", "UUUUUUUUUUUUUUUUUUUUU"],
                'solar': ["Zonnepanelen", "PPPPPPPPPPPPPPPPPPPPP"],
                'charge-points': ["Laadpalen", "GGGGGGGGGGGGGGGGGGGGG"],
                'isolation': ["Isolatie", "MMMMMMMMMMMMMMMMMMMMM"],
                'advice': ["Energielabel & advies", "AAAAAAAAAAAAAAAAAAAAA"],
                'contact': ["Contact", "WWWWWWWWWWWWWWWWWWWWWW"],
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
        font-size: 13px;
        padding-top: 10px;
        color: #fbb536;
        font-weight: 400;
    }
}

header {
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 99;
    width: 100%;
    position: fixed;
    transition: 0.5s ease all;
    color: #fff
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

    &:hover {
        color: #dea130;
    }
}

#contact-button {
    -moz-transition: all .2s ease-in;
    -o-transition: all .2s ease-in;
    -webkit-transition: all .2s ease-in;
    transition: all .2s ease-in;
    background-color: #fbb536;
    border-radius: 45px;
    width: 200px;
    height: 56px;
    border-color: rgba(0, 0, 0, 0.15);
    border-width: 1px;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    font-weight: 600;
    margin: 4px 2px;
    cursor: pointer;

    &:hover {
        background-color: #2c5484;
    }

    #contact-link {
        margin-left: 5%;
    }
}
</style>