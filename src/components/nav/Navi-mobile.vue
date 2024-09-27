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
                        <li id="upper-li" @click="goRoute('heat-pump')">
                            Warmtepomp
                            <span class="fa fa-angle-right fa-2x"></span>
                        </li>
                        <li @click="goRoute('airco')">Airconditioning
                            <span class="fa fa-angle-right fa-2x"></span>
                        </li>
                        <li @click="goRoute('floor-heating')">Vloerverwarming
                            <span class="fa fa-angle-right fa-2x"></span>
                        </li>
                        <li @click="goRoute('solar')">Zonnepanelen
                            <span class="fa fa-angle-right fa-2x"></span>
                        </li>
                        <li @click="goRoute('charge-points')">Laadpaal
                            <span class="fa fa-angle-right fa-2x"></span>
                        </li>
                        <li @click="goRoute('service')">Service
                            <span class="fa fa-angle-right fa-2x"></span>
                        </li>
                        <button>Offerte aanvragen</button>
                    </ul>
                </Transition>
                <button id="contact" @click="goRoute('contact')">Neem contact op</button>
                <a @click="showNav = true" class="fa fa-bars fa-2x"></a>
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
    methods: {
        goRoute(page) {
            this.$root.routeGo(page);
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
        width: 132px;
        height: 28px;
    }
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

button {
    background-color: #ffda00;
    color: #222222;
    width: 160px;
    font-size: 0.8em;
    font-weight: 800;
    border: none;
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

ul,
.link {
    color: #222222;
    list-style: none;
    text-decoration: none;
}
</style>