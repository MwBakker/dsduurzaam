<template>
    <div id="nav-container">
        <div id="label-main">
            <p>Direct uit voorraad leverbaar!</p>
        </div>
        <nav>
            <div class="branding">
                <img @click="routeGo('home')" src="@/assets/logo.png" alt="" />
            </div>
            <ul id="titles">
                <li id="upper-li" @click="routeGo('heat-pump')">Warmtepomp</li>
                <li @click="routeGo('airco')">Airconditioning</li>
                <li @click="routeGo('floor-heating')">Vloerverwarming</li>
                <li @click="routeGo('solar')">Zonnepanelen</li>
                <li @click="routeGo('charge-points')">Laadpaal</li>
                <!-- <li @click="routeGo('isolation')">Isolatie</li> -->
                <!-- <li @click="routeGo('advice')">Energielabel</li> -->
                <li @click="routeGo('service')">Service</li>
            </ul>
            <div id="button-tech">
                <button class="advice-button" @click="routeGo('contact')">
                    <span class="advice-button-text">Advies aan huis</span>
                </button>
                <img src="@/assets/tech.png" alt="Technisch icoon" />
            </div>
        </nav>
    </div>
    <upper_content_container :title=title :description=description :backgroundImage=headerImg>
        <!-- 
        <h1 id="lol">Insteco B.V. Uw partner in <span class="light">energiebesparing</span> met <span
                class="light">persoonlijk
                advies</span> en <span class="light">maatwerkinstallaties</span> voor een
        <span class="light">energiezuiniger</span> leven en werken.
        </h1>-->
        <h1 id="lol">Ontdek je voordeel!</h1>
        <h1 id="lol">Vraag nu vrijblijvend een offerte aan en zie hoeveel je kunt besparen.</h1>
    </upper_content_container>
</template>


<script>
import upper_content_container from "./Upper-content-container.vue"

export default {
    name: "navigation-bar",
    data() {
        return {
            title: '',
            headerImg: 'home',
            description: '',
            headerText: {
                'home': ["", ""],
                'heat-pump': ["Verwarm en koel duurzaam met onze warmtepompen!", "Ontdek de toekomst van energie-efficiëntie met op maat gemaakte oplossingen die uw comfort verhogen en uw energiekosten verlagen. Onze experts bieden persoonlijk advies en professionele installatie, zodat u verzekerd bent van optimale prestaties en maximale besparingen. Maak vandaag nog de stap naar een groenere, efficiëntere manier van verwarmen en koelen!"],
                'airco': ["Ervaar ultiem comfort met onze veelzijdige airco’s!", "Koel in de zomer, verwarm in de winter en bespaar extra met zonnepanelen. Onze op maat gemaakte oplossingen combineren efficiënte temperatuurregeling met slimme energiebesparing. Profiteer van persoonlijk advies en deskundige installatie voor het beste resultaat, het hele jaar door. Maak vandaag nog de overstap naar duurzaam en kostenbesparend klimaatbeheer!"],
                'floor-heating': ["Ervaar luxe en comfort met onze vloerverwarming!", "Geniet van gelijkmatige warmte in de winter en koel in de zomer met onze op maat gemaakte oplossingen, in combinatie met de juiste warmtepomp. Onze deskundigen bieden persoonlijk advies en professionele installatie, zodat u profiteert van energie-efficiëntie en optimaal comfort, het hele jaar door. Transformeer uw ruimte in een warme, gezellige omgeving, ongeacht het seizoen!"],
                'solar': ["Maximaliseer uw besparingen met onze zonnepanelen!", "Combineer duurzame energie met andere installaties zoals warmtepompen en vloerverwarming voor extra rendement en lagere energiekosten. Onze experts bieden persoonlijk advies en deskundige installatie om uw systeem optimaal af te stemmen. Stap vandaag nog over op een groene toekomst en geniet van maximale efficiëntie en financieel voordeel, het hele jaar door."],
                'charge-points': ["Laad uw elektrische voertuig gemakkelijk op met onze laadpalen aan huis!", "Onze op maat gemaakte oplossingen bieden snelle en betrouwbare oplading, direct vanuit uw eigen  oplaadpunt. Profiteer van persoonlijk advies en professionele installatie, en maak uw woning klaar voor de toekomst van elektrisch rijden. Kies voor gemak en efficiëntie, en laad altijd met vertrouwen op."],
                'isolation': ["Isolatie", "Warm spul"],
                'advice': ["Energielabel & advies", "Mooi spul"],
                'service': ["Blijf zorgeloos genieten met onze snelle service en onderhoud!", "Wij bieden deskundige ondersteuning en onderhoud aan uw installaties, met een korte responsietijd en inspecties wanneer nodig. Onze experts zorgen ervoor dat alles optimaal blijft functioneren, zodat u kunt vertrouwen op een probleemloze werking. Kies voor betrouwbare service en houd uw installaties in topconditie, altijd klaar voor gebruik."],
                'contact': ["Contact", "Heeft u een vraag over onze diensten of wilt u een offerte? Bel ons, of stuur ons een e-mail via het contactformulier"],
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
        handleScroll() {
            const button = document.querySelector('#button-tech button');
            if (window.scrollY > 100) { // Pas deze waarde aan voor het gewenste scroll-initiëringspunt
                button.classList.add('pulsate');
            } else {
                button.classList.remove('pulsate');
            }
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
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
    width: 100%;
    z-index: 999;
    background-color: white;
    transition: 0.5s ease all;
    position: fixed;
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
    align-items: center;
    justify-content: space-between;
    max-width: 1548px;
    margin: 0 auto; /* Zorgt dat de navigatiebalk in het midden staat */
    padding: 0 20px; /* Voeg padding toe om logo van de zijkant weg te houden */
    padding-top: 20px;
    padding-bottom: 10px;
}


#titles {
    display: flex;
    align-items: center;
    margin: 0; /* Verwijder eventuele marges die het uitlijnen kunnen beïnvloeden */
    margin-left: 48px;
    padding: 0; /* Verwijder eventuele padding die het uitlijnen kan beïnvloeden */
    list-style: none; /* Verwijder standaard lijst-stijlen */
    flex-grow: 1; /* Laat de ul uitbreiden om de beschikbare ruimte te vullen */
}

#titles li {
    margin-right: 24px; /* Verminder de ruimte tussen menu-items */
    cursor: pointer;
}

#titles li:first-child {
    margin-left: 20px; /* Voeg extra marge toe aan het eerste item */
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


#button-tech {
    position: relative;

    img {
        position: absolute;
        right: 0;
        bottom: 4px;
        height: 86px;
    }
}

@keyframes pulse {
    0% {
        transform: scale(1);
        box-shadow: 0 0 0 0 rgba(62, 175, 60, 0.4); /* Groene schaduw bij start */
    }
    50% {
        transform: scale(1.03); /* Subtiele schaalverandering */
        box-shadow: 0 0 0 6px rgba(62, 175, 60, 0.25); /* Grotere groene schaduw met meer doorzichtigheid */
    }
    100% {
        transform: scale(1);
        box-shadow: 0 0 0 0 rgba(62, 175, 60, 0); /* Terug naar origineel zonder schaduw */
    }
}

#button-tech {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end; /* Knop uitlijnen aan de rechterkant */
    margin-right: 0; /* Geen marge aan de rechterkant */
}

#button-tech img {
    position: absolute;
    right: 10px; /* Verhoog de waarde om de afbeelding verder naar rechts te verplaatsen */
    top: -20px; /* Laat de afbeelding boven de knop uitsteken */
    height: 80px; /* Vergroot de hoogte van de afbeelding */
    z-index: 2; /* Zorg ervoor dat de afbeelding boven de knop staat */
}


button {
    width: 250px;
    font-family: 'Roboto';
    font-weight: 600;
    font-size: 1.05em;
    padding-right: 80px; /* Zorg voor ruimte aan de rechterkant van de knop voor de afbeelding */
    box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 18%);
    background-color: #3eaf3c;
    margin-left: 5%;
    transition: all .3s ease-in-out;
    position: relative; /* Zorg ervoor dat de knop correct gepositioneerd is voor animatie */
    z-index: 1; /* Zorg ervoor dat de knop onder de afbeelding staat */
    animation: pulse 3s infinite; /* Langzaam en vloeiend pulsatie-effect */
}

#button-tech .advice-button {
    background-color: #3eaf3c; /* Achtergrondkleur van de knop */
    border-radius: 45px;
    width: 200px; /* Breedte van de knop */
    height: 56px;
    border: 1px solid rgba(0, 0, 0, 0.15);
    color: white;
    padding: 8px 16px; /* Padding van de knop */
    padding-left: 22px; /* Verhoogde padding-left voor tekst uitlijning naar rechts */
    text-align: left; /* Zorg ervoor dat de tekst naar links is uitgelijnd */
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    position: relative; /* Zorg ervoor dat de knop correct gepositioneerd is voor animatie */
}

.advice-button {
    /* Zorg ervoor dat hier geen extra marges/padding aan de rechterzijde zijn */
    margin-right: 0; /* Verwijder eventuele marges aan de rechterzijde */
}

#button-tech .advice-button-text {
    font-weight: 600; /* Tekst vetgedrukt met een gewicht van 600 */
    font-size: 0.85em;
}

h1, 
.light {
    margin-bottom: 28px;
    color: #2c5484;
    font-weight: 600;
}

.light {
    color: #a3b9d5;
}
</style>