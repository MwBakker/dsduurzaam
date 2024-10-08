<!-- <template>
  <div id="jobs">
    <div class="background-wrapper">
      <IntroductionCardSubTwoParagraphs class="no-top-margin" title="Leuk dat je er bent! Wij zijn InsteQ"
        text1="Wij zijn een jong en dynamisch bedrijf dat zich inzet voor een duurzamere toekomst. Met jarenlange ervaring in de installatietechniek helpen we je graag met slimme oplossingen zoals warmtepompen, laadpalen, airco's, zonnepanelen en vloerverwarming. Ons doel? Jouw woning of bedrijfspand energiezuiniger en comfortabeler maken, zonder in te leveren op kwaliteit."
        text2="We geloven in een persoonlijke aanpak, waarbij we altijd met jou meedenken om de beste oplossingen te vinden. Of je nu kiest voor een volledig duurzame installatie of stapsgewijs wilt verduurzamen, wij staan voor je klaar. Samen maken we de wereld een stukje groener, één installatie tegelijk."
        buttonText="Je knoptekst hier" :showButton="false" />
    </div>

    <div class="background-wrapper">
      <IntroductionCardSubTwo centerTitle="Waar wij voor staan" leftTitle="Samen werken aan jouw duurzame installatie"
        :leftText="[
          'Bij InsteQ geloven we in een persoonlijke aanpak. We gaan samen met jou een traject aan, waarbij we van begin tot eind nauw samenwerken. Het begint allemaal met een grondige opname van jouw situatie. Hier bespreken we de gewenste installatie, zoals een warmtepomp, laadpaal, airco of zonnepanelen, en kijken we naar de beste oplossing voor jouw woning of bedrijfspand.',
          'Daarnaast nemen we de tijd om samen de beschikbare subsidies en financiële voordelen te bespreken. We berekenen ook de terugverdientijd van de investering, zodat je een helder beeld hebt van wat je kunt verwachten op de lange termijn. Vanaf de planning tot de uiteindelijke oplevering en zelfs daarna met onze nazorg, staan wij voor je klaar.',
          'Onze service stopt niet bij de installatie, maar gaat verder met advies en ondersteuning voor jarenlang optimaal gebruik van jouw duurzame installatie.'
        ]" rightTitle="Hoogwaardige installaties voor de beste resultaten" :rightText="[
    'Bij InsteQ staat kwaliteit altijd voorop. Wij leveren enkel hoogwaardige installaties die voldoen aan de strengste normen op het gebied van duurzaamheid en efficiëntie. Of het nu gaat om een warmtepomp, laadpaal, airco, zonnepanelen of vloerverwarming, onze installaties zijn zorgvuldig geselecteerd om maximale prestaties en een lange levensduur te garanderen.',
    'Onze ervaren monteurs en installatietechnici zorgen ervoor dat elk project met precisie en vakmanschap wordt uitgevoerd. We maken gebruik van de nieuwste technieken en materialen om ervoor te zorgen dat jouw installatie betrouwbaar en energiezuinig is.',
    'Na oplevering blijven wij beschikbaar voor onderhoud en eventuele vragen, zodat je kunt blijven vertrouwen op een systeem dat comfort en kostenbesparingen biedt, jaar in jaar uit.'
  ]" />
    </div>

  </div>
</template>

<script>
import ParagraphCardSmall from '@/components/cards/paragraph/Small.vue';
import ParagraphCard from '@/components/cards/paragraph/Regular.vue';
import ProductCard from '@/components/cards/product/Regular.vue';
import QuoteCard from '@/components/cards/Quote.vue';
import ContentCardOne from '@/components/cards/content/Card-one.vue';
import Accordion from '@/components/accordion/Accordion.vue';
import AccordionItem from '@/components/accordion/Accordion-item.vue';
import WhyCard from '@/components/cards/Why-card.vue';
import IntroductionCardSub from '@/components/cards/introduction/Introduction-card-sub.vue';
import IntroductionCardSubTwo from '@/components/cards/introduction/Introduction-card-sub-two.vue';
import IntroductionCardSubFour from '@/components/cards/introduction/Introduction-card-sub-four.vue';
// import IntroductionCardSubTwoParagraphs from '@/components/cards/introduction/Introduction-card-sub-two-paragraphs.vue';

export default {
  name: "Service",
  components: {
    ProductCard,
    QuoteCard,
    ParagraphCard,
    ParagraphCardSmall,
    ContentCardOne,
    Accordion,
    AccordionItem,
    WhyCard,
    IntroductionCardSub,
    IntroductionCardSubTwo,
    IntroductionCardSubFour,
    // IntroductionCardSubTwoParagraphs
  }
};
</script>

<style lang="scss" scoped>
#home {
  margin: 0 auto;
  width: 100%;
  padding-top: 20px;
}

.content-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.product-cards-container {
  display: flex;
  justify-content: space-between;
  max-width: 1548px;
  /* Maximale breedte van de product-cards-container */
  width: 75%;
  /* Zorg ervoor dat de breedte 75% van de beschikbare ruimte is */
  margin: 0 auto;
}

.text-container {
  width: 50%;
  /* Zorgt ervoor dat de tekstcontainer 40% breed is */
  padding-top: 50px;
  padding-left: 170px;
  padding-right: 100px;
  line-height: 1.6;
}

.product-card {
  position: relative;
  cursor: pointer;
  overflow: hidden;
  aspect-ratio: 1 / 1;
  /* Zorg ervoor dat de kaart vierkant blijft */
  background-color: white;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  /* Zorg ervoor dat de inhoud netjes gestapeld wordt */
}

.product-card:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}

.product-cards-container .card-image {
  width: 100%;
  height: auto;
}

.product-cards-container .button {
  display: flex;
  justify-content: flex-start;
}

.card-title h2 {
  font-size: 1.2rem;
  font-weight: 800;
  margin-bottom: 10px;
}


.cards-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* 3 kolommen */
  grid-gap: 20px;
  /* Ruimte tussen kaarten */
  width: 50%;
  /* Zorg ervoor dat de kaartencontainer 60% breed is */
  padding-right: 20px;
  /* Voeg dezelfde padding toe als de bovenkant en onderkant */
}

.product-cards-container>* {
  flex: 1 1 calc(19.5% - 2px);
  box-sizing: border-box;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: auto;
  padding: 0;
  position: relative;
  z-index: 10;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.product-cards-container .card-image {
  width: 100%;
  height: auto;
  margin: 0;
  padding: 0;
  display: block;
}

.card-image {
  position: relative;
  width: 100%;
  height: 100%;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* Zorg ervoor dat de afbeelding zich aanpast aan de container */
}

.product-cards-container .button {
  display: flex;
  justify-content: flex-start;
}

.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  /* Semi-transparante zwarte achtergrond */
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.product-container {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: space-between;
  max-width: 1548px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
}

#quotes {
  display: flex;
  width: 78.8%;
  justify-content: center;
  background-color: #eaeef3;
  margin-bottom: 50px;
}

.cta-button {
  background-color: #ffda00;
  color: #08535e;
  padding: 15px 30px;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 800;
  text-align: center;
  margin-top: 20px;
  position: relative;
  overflow: hidden;
  /* Verberg wat buiten de knop valt */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  /* Zorg ervoor dat de tekst gecentreerd is */
  transition: background-color 0.3s ease, opacity 0.3s ease;
  width: 400px;
}

.cta-button span {
  position: relative;
}

.cta-button:hover {
  background-color: #ffe967;
  /* Pas de achtergrondkleur aan bij hover */
}

/* Zorg dat de pijl start buiten zicht, aan de rechterkant */
.button-arrow {
  position: absolute;
  right: 30px;
  width: 1.5rem;
  height: 1.5rem;
  opacity: 0;
  transition: transform 0.3s ease, opacity 0.3s ease;
  transform: translateX(-30px);
  /* Start buiten de knop */
}

/* Laat de pijl naar binnen schuiven en zichtbaar worden bij hover */
.cta-button:hover .button-arrow {
  transform: translateX(0);
  /* Schuift naar binnen */
  opacity: 1;
  /* Wordt zichtbaar */
}

.why-cards-container {
  padding: 40px 20px;
  text-align: center;
  max-width: 90%;
}

.why-cards-container h2 {
  font-weight: 800;
  margin-bottom: 40px;
}

.why-cards {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.card-button .btn-link {
  display: inline-flex;
  align-items: center;
  color: white;
  font-weight: 600;
  font-size: 1.1rem;
  transition: color 0.3s ease;
}

.btn-link:hover {
  color: #ffda00;
  /* Kleur bij hover */
}

.text-container h2 {
  font-weight: 800;
  margin-bottom: 20px;
}

.text-container p {
  font-weight: 500;
}

.extra-margin {
  margin-top: 40px;
  /* Verhoog de waarde als je meer ruimte wilt */
}

.cta-button .button-arrow {
  stroke: #08535e !important;
  /* Zorg ervoor dat de pijl zwart wordt */
}

.no-top-margin {
  top: 0 !important;
  /* Dit overschrijft de top: -150px; */
}
</style> -->