export default {
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
        routeGo(page) {
            this.activePage = page; // Update de actieve pagina
            var headerParams = this.headerContent[page];
            this.headerImg = page;
            this.headerTitle = headerParams[0];
            this.headerMainUrl = headerParams[1];
            this.showHeaderBox = headerParams[2]
            this.headerBoxTitle = headerParams[3];
            this.headerBoxDescription = headerParams[4];
            this.headerBoxUrl = headerParams[5];
            this.$router.push({ name: page });
        },
    },
    data() {
        return {
            activePage: 'home',
            headerImg: 'home',
            headerTitle: 'Je huis verwarmen met een waterpomp',
            headerMainUrl: 'service',
            showHeaderBox: 1,
            headerBoxTitle: 'Tip: Subsidie',
            headerBoxDescription: 'Uw absolute partner voor een energiezuiniger leven en werken!',
            headerBoxUrl: 'heat-pump',
            headerContent: {
                'home': ['Je huis verwarmen met een waterpomp', 'heat-pump', 1, "Subsidie", "Uw absolute partner voor een energiezuiniger leven en werken!", 'service'],
                'heat-pump': ['Je bent nu op pagina warmtepomp', 'airco', 1, "Verwarm en koel duurzaam met onze warmtepompen!", "Ontdek de toekomst van energie-efficiëntie.", 'about'],
                'airco': ["Je bent nu op pagina Airco", 'floor-heating', 0, "Ervaar ultiem comfort met onze veelzijdige airco’s!", "Koel in de zomer, verwarm in de winter en bespaar.", 'jobs'],
                'floor-heating': ["Je bent nu op pagina Vloerverwarming", 'solar', 0, "Ervaar luxe en comfort met onze vloerverwarming!", "Geniet van gelijkmatige warmte in de winter en koel in de zomer.", 'heat-pump'],
                'solar': ["Je bent nu op pagina Zonnepanelen", 'charge-points', 1, "Maximaliseer uw besparingen met onze zonnepanelen!", "Combineer duurzame energie met andere installaties.", 'floor-heating'],
                'charge-points': ["Stop met balen, neem laadpalen!", 'services', 1, "Laad uw elektrische voertuig gemakkelijk op!", "Onze op maat gemaakte oplossingen bieden snelle en betrouwbare oplading.", 'about'],
                'services ': ["Je bent nu op pagina diensten", 'about', 1, "Wat wij bieden", "Onze diensten helpen u verduurzamen en besparen.", 'jobs'],
                'about': ["Ons bedrijf", 'jobs', 1, "Met ons valt niet te sollen, Ter Apel weetje", "Wij bieden deskundige ondersteuning en onderhoud.", 'service'],
                'jobs': ["Werken bij ons?", 'service', 1, "Je bent nu op pagina vacatures", "Wij bieden een geweldig wurgcontract.", 'airco'],
                'service': ["Je bent nu op pagina Service", 'heat-pump', 1, "Blijf zorgeloos genieten met onze snelle service en onderhoud!", "Wij bieden deskundige ondersteuning en onderhoud.", 'heat-pump'],
            },
        };
    },
};
