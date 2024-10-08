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
                        <div id="titles-header">
                            <p id="menu-header">Menu</p> <!-- Toegevoegd tekst "Menu" -->
                            <div id="exit">
                                <a @click="toggleMenu()" :class="[showNav ? 'fa-times' : 'fa-arrow-left', 'fa', 'fa-2x']"></a> <!-- Dynamische klasse voor pijl of kruis -->
                            </div>
                        </div>
                        <li v-for="item in items" :key="item.id" @click="goRoute(item.route)">
                            {{ item.text }}<span class="fa fa-angle-right fa-2x"></span>
                        </li>
                        <button @click="goContact()">Offerte aanvragen</button>
                    </ul>
                </Transition>
                <button id="contact" @click="goContact()">Contact</button>
                <div id="bars" @click="toggleMenu()">
                    <span class="fa fa-bars fa-2x"></span> <!-- Verwijder de p-tag voor het menu tekst -->
                    <p>Menu</p>
                </div>

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
            showNav: false,
            items: [
                { id: 1, text: 'Home', route: 'home' },
                { id: 2, text: 'Warmtepomp', route: 'heat-pump' },
                { id: 3, text: 'Airconditioning', route: 'airco' },
                { id: 4, text: 'Vloerverwarming', route: 'floor-heating' },
                { id: 5, text: 'Zonnepanelen', route: 'solar' },
                { id: 6, text: 'Laadpalen', route: 'charge-points' },
                { id: 7, text: 'Service', route: 'service' },
                { id: 8, text: 'Subsidie', route: 'subsidy' },
                { id: 9, text: 'Over ons', route: 'about' },
            ]
        };
    },
    methods: {
        toggleMenu() {
            this.showNav = !this.showNav;
            const body = document.getElementById('app-body');
            body.style.overflow = this.showNav ? 'hidden' : 'auto';
        },
        closeMenu() {
            this.showNav = false; // Sluit het menu
            const body = document.getElementById('app-body');
            body.style.overflow = 'auto'; // Zorg ervoor dat scrollen weer mogelijk is
        },
        goContact() {
            this.closeMenu(); // Sluit het menu als contact wordt geselecteerd
            this.scrollTo('vue-form');
        },
        goRoute(page) {
            this.$root.routeGo(page);
            this.closeMenu(); // Sluit het menu na het navigeren naar een nieuwe pagina
        }
    }
};
</script>


<style lang="scss" scoped>
#nav-container {
    transition: 2s ease all;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 106px;
    padding: 12px 0;
}

.branding {
    cursor: pointer;
    text-align: center;
    margin-left: 10px;

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

#button-menu {
    display: flex;
    align-items: center;
}

#titles {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 99;
    background-color: #f4f4f4;
    transition: 0.25s ease all;

    li {
        border-bottom: 1px solid rgb(220, 220, 220);
        padding: 16px;
        display: flex;
        font-weight: 600;
        font-size: 1rem;
        align-items: center;
        justify-content: space-between;
        position: relative; /* Hiermee kunnen we de pijlen absoluut positioneren */
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

/* Header met tekst "Menu" en kruisje in één lijn */
#titles-header {
    display: flex;
    justify-content: center; /* Centreer de tekst "Menu" */
    align-items: center; /* Zorg ervoor dat de tekst en het kruisje verticaal gecentreerd zijn */
    position: relative; /* Zorg dat we de positie van het kruisje rechts kunnen instellen */
    padding: 16px;
    background-color: #f4f4f4;
    border-bottom: 1px solid #ccc;
}

#menu-header {
    font-size: 1.5rem;
    font-weight: 700;
    color: #08535e;
    margin: 0;
}

/* Zorg ervoor dat het kruisje aan de rechterkant staat en op dezelfde hoogte als "Menu" */
#exit {
    position: absolute;
    top: 50%;
    right: 20px; /* Zelfde waarde als het pijltje voor uitlijning */
    transform: translateY(-50%); /* Centreert het kruisje verticaal */
    color: #08535e;
    background-color: transparent;

    a {
        cursor: pointer;
        font-size: 1.5rem;
    }
}

/* Pijltjes positioneren direct onder het kruisje */
#titles li span.fa-angle-right {
    position: absolute;
    right: 20px; /* Zelfde waarde als het kruisje voor uitlijning */
    top: 50%;
    transform: translateY(-50%); /* Centreer verticaal in de li */

    font-size: 1.5rem; /* Maak het icoon kleiner zodat het dunner lijkt */
    color: #08535e; /* Houd de kleur consistent met de rest van de stijl */
}

button {
    background-color: #8dc63f;
    color: white;
    width: 145px;
    font-size: 0.8em;
    font-weight: 800;
    border: none;
}

/* Kleur voor het bars-icoon */
#bars {
    margin: 0 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .fa-bars {
        color: #08535e; /* Kleur van het bars-icoon */
    }

    p {
        font-size: 0.4em;
        font-weight: 600;
        margin-top: 4px;
        color: #08535e; /* Kleur van de "Menu" tekst */
    }
}

ul,
.link {
    color: #08535e;
    list-style: none;
    text-decoration: none;
}

@media (max-height: 768px) {
    #titles {
        li {
            padding: 8px;
        }
    }
}

</style>
