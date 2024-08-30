<template>
    <div id="nav-container">
        <div id="label-main">
            <p>Direct uit voorraad leverbaar!</p>
        </div>
        <nav>
            <div class="branding">
                <img @click="routeGo('home')" src="@/assets/logo.png" alt="" />
            </div>
            <Transition name="slide-fade-left" appear>
                <ul v-if="showMenu" id="titles">
                    <a @click="showMenu = false" class="fa fa-times fa-3x"></a>
                    <li id="upper-li" @click="routeGo('heat-pump')">Warmtepomp</li>
                    <li @click="routeGo('airco')">Airconditioning</li>
                    <li @click="routeGo('floor-heating')">Vloerverwarming</li>
                    <li @click="routeGo('solar')">Zonnepanelen</li>
                    <li @click="routeGo('charge-points')">Laadpaal</li>
                    <li @click="routeGo('isolation')">Isolatie</li>
                    <li @click="routeGo('advice')">Energielabel</li>
                    <li @click="routeGo('service')">Service</li>
                </ul>
            </Transition>
            <div id="button-tech">
                <img src="@/assets/tech.png" />
                <button @click="routeGo('contact')">Advies aan huis</button>
            </div>
            <a @click="showMenu = !showMenu" class="fa fa-bars fa-2x"></a>
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
            showMenu: (window.innerWidth > 1548),
            title: 'D&S Duurzame Installaties uw complete verduurzamer.',
            headerImg: 'home',
            description: 'Uw partner in verduurzaming van A tot Z',
            headerText: {
                'home': ["D&S Duurzame Installaties uw complete verduurzamer", "Uw partner in verduurzaming van A tot Z"],
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
            });
            if (window.innerWidth < 1548) {
                this.showMenu = false;
            } 
        },
        toggleMenu() {
            this.showMenu = window.innerWidth < 1548 ? ref(false) : ref(true);
        },
    }
};
</script>

<style lang="scss" scoped>
a {
    cursor: pointer;
    visibility: hidden;
    top: 32px;
    right: 56px;
}

#nav-container {
    background-color: white;
    transition: 0.5s ease all;
}

#label-main {
    height: 36px;
    background-color: #2c5484;

    p {
        text-align: center;
        padding-top: 10px;
        color: #ffffff;
        font-weight: 400;
    }
}

nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1548px;
    height: 128px;
    margin: 0 auto;
    padding: 12px 0;
}

#titles {
    display: flex;
    align-items: center;

    img {
        width: 50px;
    }

    transition: 0.5s ease all;
}

.branding {
    cursor: pointer;

    img {
        width: 64px;
        margin-left: 24px;
    }
}



ul,
.link {
    color: #2c5484;
    list-style: none;
    text-decoration: none;
}

li {
    cursor: pointer;
    font-weight: 400;
    font-size: 1.075rem;
    -webkit-text-stroke: 0.1px;
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
    margin-left: 40px;

    img {
        position: absolute;
        right: 0;
        bottom: 4px;
        height: 76px;
    }
}

button {
    width: 230px;
    height: 50px;
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


@media screen and (max-width: 1548px) {
    nav {
        justify-content: space-around;
        align-items: center;
    }

    .branding img {
        margin: 0;
    }

    #button-tech {
        margin: 0 6% 0 0;
    }

    #titles {
        width: 320px;
        top: 36px;
        z-index: 99;
        background-color: #f9f9f9;
        display: block;
        position: absolute;
        right: 0;
        padding: 32px 64px 12px 64px;
        // box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 18%);

        li {
            margin: 13.7px 0;
        }

        #upper-li {
            margin-top: 64px;
        }

        a {
            float: right;
        }
    }

    a {
        visibility: visible;
    }
}
</style>