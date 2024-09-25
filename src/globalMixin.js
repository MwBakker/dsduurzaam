export default {
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
            // var headerContentArray = this.headerContent[page];
            var headerBoxArray = this.headerBoxContent[page];
            this.showBox = headerBoxArray[0]
            this.boxTitle = headerBoxArray[1];
            this.boxDescription = headerBoxArray[2];
            this.headerImg = page;
            this.$router.push({ name: page });
        },
    },
    data() {
        return {
            activePage: 'home',
            headerImg: 'home',
            showBox: 1,
            boxTitle: 'Ontdek wat bij je huis past',
            boxDescription: 'Heb je een koophuis en overweeg je een warmtepomp? Laat je gegevens achter en kom in contact met één van onze experts. Zij helpen je met een advies op maat en een offerte. Je ontvangt tot € 500,-- korting op je warmtepomp.',
            headerBoxContent: {
                'home': [0, "Ontdek wat bij je huis past", "Uw absolute partner voor een energiezuiniger leven en werken!"],
                'heat-pump': [1, "Verwarm en koel duurzaam met onze warmtepompen!", "Ontdek de toekomst van energie-efficiëntie."],
                'airco': [0, "Ervaar ultiem comfort met onze veelzijdige airco’s!", "Koel in de zomer, verwarm in de winter en bespaar."],
                'floor-heating': [0, "Ervaar luxe en comfort met onze vloerverwarming!", "Geniet van gelijkmatige warmte in de winter en koel in de zomer."],
                'solar': [1, "Maximaliseer uw besparingen met onze zonnepanelen!", "Combineer duurzame energie met andere installaties."],
                'charge-points': [0, "Laad uw elektrische voertuig gemakkelijk op!", "Onze op maat gemaakte oplossingen bieden snelle en betrouwbare oplading."],
                'services ': [1, "Wat wij bieden", "Onze diensten helpen u verduurzamen en besparen."],
                'about': [1, "Ons bedrijf", "Wij bieden deskundige ondersteuning en onderhoud."],
                'jobs': [1, "Werken bij ons?", "Wij bieden een geweldig wurgcontract."],
                'service': [1, "Blijf zorgeloos genieten met onze snelle service en onderhoud!", "Wij bieden deskundige ondersteuning en onderhoud."],
            },
        };
    },
};
