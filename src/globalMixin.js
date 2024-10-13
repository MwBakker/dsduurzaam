export default {
    data() {
        return {
            windowWidth: window.innerWidth,
            activePage: 'home', // Default waarde, maar we gaan dit updaten op basis van de route
            headerTitle: 'Uw huis verwarmen met een waterpomp',
            headerMainUrl: 'heat-pump',
            introCardTitle: 'Duurzaam wonen: verlaag uw maandlasten',
            introCardText: 'Bespaar op uw gas- en stroomkosten en vergroot uw onafhankelijkheid met onze duurzame installaties. Verlaag uw energierekening, verhoog de waarde van uw woning en bescherm uzelf tegen stijgende energieprijzen. Wij bieden oplossingen voor elk budget.',
            introCardText2: '',
            introCardUrl: '',
            headerMap: {
                'home': {
                    'title': 'Uw huis verwarmen met een waterpomp',
                    'url': 'heat-pump',
                    'box': {
                        'title': 'Duurzaam wonen: verlaag uw maandlasten',
                        'text': 'Bespaar op uw gas- en stroomkosten en vergroot uw onafhankelijkheid met onze duurzame installaties. Verlaag uw energierekening, verhoog de waarde van uw woning en bescherm uzelf tegen stijgende energieprijzen. Wij bieden oplossingen voor elk budget.',
                        'text2': '',
                        'url': '',
                    },
                },
                'heat-pump': {
                    'title': 'Duurzaam verwarmen met onze warmtepompen',
                    'url': '',
                    'box': {
                        'title': 'Gasvrij wonen of werken met een warmtepomp',
                        'text': 'Ontdek de toekomst van energiezuinig wonen met onze warmtepompen. Bespaar flink op uw energiekosten en verminder uw CO₂-uitstoot terwijl u geniet van optimaal comfort in huis. Of het nu gaat om verwarmen, koelen of warm water, onze innovatieve warmtepompen bieden de perfecte, duurzame oplossing voor elke woning.',
                        'text2': '',
                        'url': '',
                    },
                },
                'airco': {
                    'title': "Uw huis koelen en verwarmen met airco's",
                    'url': '',
                    'box': {
                        'title': 'Comfortabel in de zomer en in de winter',
                        'text': "Airco's zijn systemen die zowel kunnen koelen als verwarmen, waardoor ze het hele jaar door voor een comfortabele temperatuur zorgen.Ze zijn steeds energiezuiniger en dragen bij aan duurzaamheid, vooral wanneer ze gecombineerd worden met zonnepanelen die de benodigde stroom leveren.Hierdoor zijn airco’s een milieuvriendelijke en kostenefficiënte keuze voor klimaatregeling in huis of op kantoor.",
                        'text2': '',
                        'url': '',
                    },
                },
                'floor-heating': {
                    'title': "Efficiënt verwarmen met vloerverwarming",
                    'url': '',
                    'box': {
                        'title': 'Comfortabel en efficiënt',
                        'text': 'Ervaar het ultieme comfort van vloerverwarming! Deze moderne verwarmingsoplossing werkt op lage temperaturen, waardoor het uiterst efficiënt is. Het zorgt voor een gelijkmatige warmteverdeling door uw hele huis, zonder koude plekken. Vloerverwarming is niet alleen energiezuinig, maar ook subtiel weggewerkt en geschikt voor verschillende soorten vloeren. Ontdek hoe deze duurzame manier van verwarmen uw huis aangenamer maakt en geniet het hele jaar door van een warm, comfortabel thuis.',
                        'text2': '',
                        'url': '',
                    },
                },
                'solar': {
                    'title': 'Uw huis voorzien van stroom met zonnepanelen',
                    'url': '',
                    'box': {
                        'title': 'Zelf stroom opwekken voor al uw apparaten en (duurzame) installaties',
                        'text': "Zonnepanelen blijven een slimme investering, zelfs met de afbouw van de salderingsregeling. U hoeft minder stroom terug te leveren, omdat uw andere duurzame installaties zoals warmtepompen of elektrische auto's direct kunt voeden. Dit verlaagt uw energiekosten en maakt u minder afhankelijk van energieleveranciers. Ondanks de regeling verdienen zonnepanelen zich nog steeds snel terug door lagere kosten en duurzaamheid.",
                        'text2': '',
                        'url': '',
                    },
                },
                'charge-points':
                {
                    'title': '',
                    'url': '',
                    'box': {
                        'title': 'Duurzaam rijden begint met een eigen laadpaal',
                        'text': 'Laadpalen zijn essentieel voor de transitie naar elektrisch rijden en dragen bij aan een duurzamere toekomst. Ze maken het mogelijk voertuigen op te laden met groene energie, zoals die van zonnepanelen, waardoor de CO₂-uitstoot aanzienlijk wordt verminderd. Door fossiele brandstoffen te vermijden, bieden laadpalen een milieuvriendelijke oplossing voor schonere lucht en minder vervuiling, zowel thuis als op het werk.',
                        'text2': '',
                        'url': '',
                    },
                },
                'service':
                {
                    'title': '',
                    'url': '',
                    'box': {
                        'title': 'Zorgeloos besparen door uitstekende service',
                        'text': 'Goede service is essentieel voor het optimaal functioneren en de levensduur van uw duurzame installatie. Door het verlenen van onderhoud, verzekert u energiezuinig gebruik en maximaal rendement. Bij InsteQ staan vakprofessionals voor u klaar met diepgaande kennis en advies.',
                        'text2': 'Heeft u specifieke vragen over uw installatie of wilt u meer informatie over onze diensten? Neem gerust contact met ons op, wij helpen u graag verder om uw installatie in topconditie te houden.',
                        'url': '',
                    },
                },
                'subsidy':
                {
                    'title': '',
                    'url': '',
                    'box': {
                        'title': 'Wij berekenen uw (subsidie)voordeel',
                        'text': 'Er zijn verschillende subsidies en financiële voordelen beschikbaar die helpen bij het verduurzamen van uw woning of bedrijf. Hieronder vertellen we per duurzame installatie meer over de beschikbare subsidies en andere financiële voordelen, om zodoende de aanschaf van uw duurzame installatie te verlagen.',
                        'text2': '',
                        'url': '',
                    },
                },
                'about':
                {
                    'title': '',
                    'url': '',
                    'box': {
                        'title': 'Leuk dat u er bent! Wij zijn InsteQ',
                        'text': 'Wij zijn een jong en dynamisch bedrijf dat zich inzet voor een duurzamere toekomst. Met jarenlange ervaring in de installatietechniek helpen we u graag met duurzame en slimme oplossingen. Ons doel? Uw woning of bedrijfspand energiezuiniger en comfortabeler maken, zonder in te leveren op kwaliteit.',
                        'text2': 'We geloven in een persoonlijke aanpak, waarbij we altijd met u meedenken om de beste oplossingen te vinden. Of u nu kiest voor een volledig duurzame installatie of stapsgewijs wilt verduurzamen, wij staan voor u klaar. Samen maken we de wereld een stukje groener, één installatie tegelijk.',
                        'url': '',
                    },
                },
            },
        };
    },
    computed: {
        imageUrl(src) {
            return new URL(`./assets/${src}`, import.meta.url).href;
        },
    },
    methods: {
        mounted() {
            // Event listener voor venstergrootte wijziging
            window.addEventListener('scroll', this.handleScroll);
            window.addEventListener('resize', this.handleResize);
        },
        beforeUnmount() {
            // Verwijder de event listener om geheugenlekken te voorkomen
            window.removeEventListener('resize', this.handleResize);
            window.removeEventListener('scroll', this.handleScroll);
        },
        scrollTo(id) {
            const elementToScrollTo = document.getElementById(id);
            elementToScrollTo.scrollIntoView({
                behavior: 'smooth', block:
                    'center',
            });
        },
    },
};
