<template>
    <div id="nav-container">
        <div id="label-main">
            <p>Direct uit voorraad leverbaar!</p>
        </div>
        <nav>
            <div class="branding">
                <img @click="routeGo('home')" src="@/assets/logo.png" alt="" />
            </div>
            <Transition name="slide-fade-right" appear>
                <ul v-if="showNav" id="titles">
                    <a id="exit-menu" @click="showNav = false" class="fa fa-times fa-2x"></a>
                    <li id="upper-li" @click="routeGo('heat-pump')">Warmtepomp</li>
                    <li @click="routeGo('airco')">Airconditioning</li>
                    <li @click="routeGo('floor-heating')">Vloerverwarming</li>
                    <li @click="routeGo('solar')">Zonnepanelen</li>
                    <li @click="routeGo('charge-points')">Laadpaal</li>
                    <!-- <li @click="routeGo('isolation')">Isolatie</li> -->
                    <!-- <li @click="routeGo('advice')">Energielabel</li> -->
                    <li @click="routeGo('service')">Service</li>
                </ul>
            </Transition>
            <div id="button-tech">
                <img src="@/assets/tech.png" />
                <button @click="routeGo('contact')">Advies aan huis</button>
            </div>
            <a @click="showNav = true" class="fa fa-bars fa-2x"></a>
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
                'service': ["Service", "Ons gewoon bellen"],
                'contact': ["Contact", "Durf ons te bellen"],
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

// #exit-menu {
//     position: absolute;
//     right: 64px;
//     top: 0;
// }

#nav-container {
    transition: 2s ease all;
}

#label-main {
    height: 36px;
    background-color: #2c5484;

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
    justify-content: space-around;
    align-items: center;
    max-width: 1548px;
    height: 128px;
    margin: 0 auto 32px auto;
    padding: 12px 0;
}

#titles {
    position: absolute;
    padding-top: 700px;
    z-index: 99;
    width: 100%;
    background-color: #f4f4f4;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        width: 50px;
    }

    transition: 0s ease all;
}

.branding {
    cursor: pointer;

    display: flex;
    align-items: center;

    img {
        width: 75px;
    }
}

ul,
.link {
    color: #2c5484;
    list-style: none;
    text-decoration: none;
}

// li {
//     cursor: pointer;
//     width: 100%;
//     font-size: 1.1rem;
//     border-bottom: 0.5px solid #2c54843f;
//     font-weight: 400;
//     -webkit-text-stroke: 0.1px;
//     padding-bottom: 4px;
//     padding: 16px;
//     margin: 24px 0;
//     font-weight: 550;

//     &:hover {
//         color: #dea130;
//     }
// }

// #upper-li {
//     margin-top: 64px;

// }

#button-tech {
    position: relative;
    margin-right: 7.5%;

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