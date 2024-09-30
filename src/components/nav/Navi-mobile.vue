<template>
    <div id="nav-container">
        <div id="label-main">
            <p>Direct uit voorraad leverbaar!</p>
        </div>
        <nav>
            <div class="branding">
                <img @click="goRoute('home')" src="@/assets/logo insteq.png" alt="" />
            </div>
            <div id="button-menu">
                <Transition name="slide-fade-right" appear>
                    <ul v-if="showNav" id="titles">
                        <div id="titles-img">
                            <div id="exit"><a @click="showNav = false" class="fa fa-arrow-left fa-2x"></a></div>
                        </div>
                        <li @click="showProductList = !showProductList">
                            Onze producten
                            <span
                                :class="{ 'fa fa-angle-down fa-2x': !showProductList, 'fa fa-angle-up fa-2x': showProductList }"></span>
                        </li>
                        <!-- <Transition name="slide-fade-right" appear> -->
                            <ul v-if="showProductList">
                                <li class="sub-li" v-for="item in items" :key="item.id" @click="goRoute(item.route)">{{
                                    item.text }}</li>
                            </ul>
                        <!-- </Transition> -->
                        <li @click="goRoute('subsidy')">
                            Subsidie
                            <span class="fa fa-angle-right fa-2x"></span>
                        </li>
                        <li @click="goRoute('service')">
                            Service
                            <span class="fa fa-angle-right fa-2x"></span>
                        </li>
                        <button>Offerte aanvragen</button>
                    </ul>
                </Transition>
                <button id="contact" @click="goRoute('contact')">Neem contact op</button>
                <div id="bars" @click="showNav = true" class="fa fa-bars fa-2x"></div>
            </div>
        </nav>
    </div>
</template>


<script>
import upper_content_container from "./Upper-content-container.vue"

export default {
    name: "navigation-bar",
    components: {
        upper_content_container
    },
    data() {
        return {
            showNav: true,
            showProductList: false,
            items: [
                { id: 1, text: 'Warmtepomp', route: 'heat-pump' },
                { id: 2, text: 'Airconditioning', route: 'airco' },
                { id: 3, text: 'Vloerverwarming', route: 'floor-heating' },
                { id: 4, text: 'Zonnepanelen', route: 'solar' },
                { id: 5, text: 'Laadpaal', route: 'charge-point' },
                { id: 6, text: 'Service', route: 'service' },
            ]
        };
    },
    methods: {
        goRoute(page) {
            this.$root.routeGo(page);
            this.showNav = false;
            this.showProductList = false;
        }
    }
};
</script>

<style lang="scss" scoped>
#nav-container {
    transition: 2s ease all;
}

.branding {
    cursor: pointer;
    text-align: center;
    margin: 0 2.5%;

    img {
        width: 120px;
    }
}

#label-main {
    height: 36px;
    background: linear-gradient(to right, #08535e, #49a3b5);

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
        font-weight: 600;
        font-size: 1rem;
        align-items: center;
        justify-content: space-between;
    }

    .sub-li {
        padding-left: 56px;
    }

    button {
        position: absolute;
        bottom: 8px;
        left: 0;
        right: 0;
        width: 95%;
        font-size: 1rem;
        margin: 0 auto;
    }
}

button {
    background-color: #ffda00;
    color: #08535e;
    width: 160px;
    font-size: 0.8em;
    font-weight: 800;
    border: none;
}

#bars {
    margin: 0 20px;
}

#titles-img {
    position: relative;
    width: 100%;
    height: 175px;
    background-image: url('@/assets/tabs/service.png');
    background-size: cover;

    #exit {
        float: right;
        margin: 8px;
        text-align: center;
        width: 60px;
        height: 60px;
        border-radius: 32px;
        background-color: #ffda00;

        a {
            top: 14px;
        }
    }
}

ul,
.link {
    color: #08535e;
    list-style: none;
    text-decoration: none;
}
</style>