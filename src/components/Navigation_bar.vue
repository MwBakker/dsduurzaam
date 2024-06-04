<template>
    <div id="label-main">
        <p>Direct uit voorraad leverbaar!</p>
    </div>
    <header :class="{ 'scrolled-nav': scrollPosition }"></header>
    <div id="nav-container">
        <nav>
            <div class="branding">
                <img src="@/assets/logo.png" alt="" />
            </div>
            <ul v-show="!mobile" class="navigation">
                <li><router-link class="link" :to="{ name: '' }">Warmtepompen</router-link></li>
                <li><router-link class="link" :to="{ name: '' }">Airconditioning</router-link></li>
                <li><router-link class="link" :to="{ name: '' }">Vloerverwarming</router-link></li>
                <li><router-link class="link" :to="{ name: '' }">Zonnepanelen</router-link></li>
                <li><router-link class="link" :to="{ name: '' }">Laadpalen</router-link></li>
                <li><router-link class="link" :to="{ name: '' }">Isolatie</router-link></li>
                <li><router-link class="link" :to="{ name: '' }">Energielabel & advies</router-link></li>
                <li class="link"></li>
                <li class="link"></li>
                <li><router-link id="contact-link" :to="{ name: 'contact' }">
                        <button id="contact-button">Neem contact op</button></router-link>
                </li>

            </ul>
            <div class="Icon">
                <i @click="toggleMobileNav" v-show="mobile" class="far fa-bars"
                    :class="{ 'icon-active': mobileNav }"></i>
            </div>
            <Transition name="mobile-nav">
                <ul v-show="mobileNav" class="navigation">
                    <li><router-link class="link" :to="{ name: '' }">Warmtepompen</router-link></li>
                    <li><router-link class="link" :to="{ name: '' }">Airconditioning</router-link></li>
                    <li><router-link class="link" :to="{ name: '' }">Vloerverwarming</router-link></li>
                    <li><router-link class="link" :to="{ name: '' }">Zonnepanelen</router-link></li>
                    <li><router-link class="link" :to="{ name: '' }">Laadpalen</router-link></li>
                    <li><router-link class="link" :to="{ name: '' }">Isolatie</router-link></li>
                    <li class="link"></li>
                    <li class="link"></li>
                    <li><router-link class="link" :to="{ name: '' }">Energielabel & advies</router-link></li>
                </ul>
            </Transition>
        </nav>
    </div>
</template>

<script>
export default {
    name: "navigation_bar",
    data() {
        return {
            scrollPosition: null,
            mobile: false,
            mobileNav: null,
            windowWidth: null,
        };
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
        font-weight: 600;
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
    display: flex;
    align-items: center;

    img {
        width: 75px;
        margin-right: 20px;
        transition: 0.5s ease all;
    }
}

nav {
    display: flex;
    flex-direction: row;
    padding: 12px 0;
    transition: 0.5s ease all;

    @media (min-width: 1140px) {
        max-width: 1140px;
    }
}

ul,
.link {
    font-weight: 550;
    color: #29aadf;
    list-style: none;
    text-decoration: none;
}

li {
    padding: 16px;
    margin-left: 16px;
}

.link {
    font-size: 15px;
    -webkit-text-stroke: 0.1px;
    transition: 0.5s ease all;
    padding-bottom: 4px;
    border-bottom: 1px solid transparent;

    &:hover {
        color: #fbb536;
        border-color: #29aadf;
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
        background-color: #29aadf;
    }

    #contact-link {
        margin-left: 5%;
    }
}
</style>