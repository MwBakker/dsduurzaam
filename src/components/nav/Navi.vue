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
                <li @click="routeGo('isolation')">Isolatie</li>
                <li @click="routeGo('advice')">Energielabel</li>
                <li @click="routeGo('service')">Service</li>
            </ul>
            <div id="button-tech">
                <img src="@/assets/tech.png" />
                <button @click="routeGo('contact')">Advies aan huis</button>
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
            title: 'Insteco B.V. Uw partner in energiebesparing met persoonlijk advies en maatwerkinstallaties voor een energiezuiniger leven en werken.',
            headerImg: 'home',
            description: '',
            headerText: {
                'home': ["Insteco B.V. Uw partner in energiebesparing met persoonlijk advies en maatwerkinstallaties voor een energiezuiniger leven en werken.", ""],
                'heat-pump': ["Verwarm en koel duurzaam met onze warmtepompen!", "Ontdek de toekomst van energie-efficiëntie met op maat gemaakte oplossingen die uw comfort verhogen en uw energiekosten verlagen. Onze experts bieden persoonlijk advies en professionele installatie, zodat u verzekerd bent van optimale prestaties en maximale besparingen. Maak vandaag nog de stap naar een groenere, efficiëntere manier van verwarmen en koelen!"],
                'airco': ["Ervaar ultiem comfort met onze veelzijdige airco’s!", "Koel in de zomer, verwarm in de winter en bespaar extra met zonnepanelen. Onze op maat gemaakte oplossingen combineren efficiënte temperatuurregeling met slimme energiebesparing. Profiteer van persoonlijk advies en deskundige installatie voor het beste resultaat, het hele jaar door. Maak vandaag nog de overstap naar duurzaam en kostenbesparend klimaatbeheer!"],
                'floor-heating': ["Ervaar luxe en comfort met onze vloerverwarming!", "Geniet van gelijkmatige warmte in de winter en koel in de zomer met onze op maat gemaakte oplossingen, in combinatie met de juiste warmtepomp. Onze deskundigen bieden persoonlijk advies en professionele installatie, zodat u profiteert van energie-efficiëntie en optimaal comfort, het hele jaar door. Transformeer uw ruimte in een warme, gezellige omgeving, ongeacht het seizoen!"],
                'solar': ["Maximaliseer uw besparingen met onze zonnepanelen!", "Combineer duurzame energie met andere installaties zoals warmtepompen en vloerverwarming voor extra rendement en lagere energiekosten. Onze experts bieden persoonlijk advies en deskundige installatie om uw systeem optimaal af te stemmen. Stap vandaag nog over op een groene toekomst en geniet van maximale efficiëntie en financieel voordeel, het hele jaar door."],
                'charge-points': ["Laad uw elektrische voertuig gemakkelijk op met onze laadpalen aan huis!", "Onze op maat gemaakte oplossingen bieden snelle en betrouwbare oplading, direct vanuit uw eigen  oplaadpunt. Profiteer van persoonlijk advies en professionele installatie, en maak uw woning klaar voor de toekomst van elektrisch rijden. Kies voor gemak en efficiëntie, en laad altijd met vertrouwen op."],
                'isolation': ["Isolatie", "Warm spul"],
                'advice': ["Energielabel & advies", "Mooi spul"],
                'service': ["Blijf zorgeloos genieten met onze snelle service en onderhoud!", "Wij bieden deskundige ondersteuning en onderhoud aan uw installaties, met een korte responsietijd en inspecties wanneer nodig. Onze experts zorgen ervoor dat alles optimaal blijft functioneren, zodat u kunt vertrouwen op een probleemloze werking. Kies voor betrouwbare service en houd uw installaties in topconditie, altijd klaar voor gebruik."],
                'contact': ["Contact", ""],
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
    font-family: 'Roboto';
    font-weight: 600;
    font-size: 1.05em;
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