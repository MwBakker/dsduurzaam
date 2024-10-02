<template>
  <div id="solar">
   
    <div class="background-wrapper">
      <IntroductionCardSub title="Zelf stroom opwekken voor al uw apparaten en (duurzame) installaties"
        text="Zonnepanelen blijven een slimme investering, zelfs met de afbouw van de salderingsregeling. Je hoeft minder stroom terug te leveren, omdat je andere duurzame installaties zoals warmtepompen of elektrische auto's direct kunt voeden. Dit verlaagt je energiekosten en maakt je minder afhankelijk van energieleveranciers. Ondanks de regeling verdienen zonnepanelen zich nog steeds snel terug door lagere kosten en duurzaamheid."
        buttonText="Je knoptekst hier" :showButton="false" />
    </div>

    <div class="background-wrapper-white">
      <Accordion title="Welke soorten zonnepanelen zijn er?">
        <template v-slot="{ currentOpen, setOpen, refs }">
          <AccordionItem id="item1" :currentOpen="currentOpen" :setOpen="setOpen" title="Monokristallijne zonnepanelen"
            paragraphText="Monokristallijne zonnepanelen hebben een donkerblauwe tot zwarte kleur met uniforme cellen. Ze staan bekend om hun hoge rendement en zijn vooral geschikt voor daken met beperkte ruimte, omdat ze de hoogste energieopbrengst per vierkante meter leveren. Deze panelen zijn zeer efficiënt, vooral bij direct zonlicht, en hebben een lange levensduur, wat ze tot een uitstekende keuze maakt voor maximale energieproductie."
            :voordelen="['Voordeel 1', 'Voordeel 2', 'Voordeel 3']" />
          <AccordionItem id="item2" :currentOpen="currentOpen" :setOpen="setOpen" title="Polykristallijne zonnepanelen"
            paragraphText="Polykristallijne zonnepanelen hebben een lichtere blauwe kleur met een minder uniform patroon. Hoewel hun rendement iets lager is dan dat van monokristallijne panelen, zijn ze voordeliger in aanschaf. Ze zijn ideaal voor grotere dakoppervlakken en presteren goed bij diffuus zonlicht, wat ze een betaalbare en effectieve keuze maakt voor wie voldoende ruimte heeft voor installatie."
            :voordelen="['Voordeel 1', 'Voordeel 2', 'Voordeel 3']" />
          <AccordionItem id="item3" :currentOpen="currentOpen" :setOpen="setOpen" title="Dunnefilm zonnepanelen (amorf)"
            paragraphText="Dunnefilm zonnepanelen (amorf) hebben een dunne, flexibele laag met een strak, egaal zwart uiterlijk. Hoewel ze minder efficiënt zijn dan andere typen panelen, presteren ze uitstekend bij diffuus licht en hoge temperaturen. Ze zijn bijzonder geschikt voor niet-standaard daken, zoals gebogen oppervlakken. Deze panelen zijn flexibel, betaalbaar en werken goed in schaduwrijke gebieden, wat ze een veelzijdige en voordelige optie maakt."
            :voordelen="['Voordeel 1', 'Voordeel 2', 'Voordeel 3']" />
          <AccordionItem id="item4" :currentOpen="currentOpen" :setOpen="setOpen" title="Bifaciale zonnepanelen"
            paragraphText="Bifaciale zonnepanelen hebben een transparante achterkant, waardoor zowel de voor- als achterkant energie kan opwekken. Deze panelen kunnen licht aan beide zijden opvangen, wat resulteert in een hoger rendement, vooral wanneer licht wordt gereflecteerd van oppervlakken zoals witte daken of zand. Dit maakt bifaciale panelen bijzonder geschikt voor locaties met reflecterende ondergronden, waardoor ze een hogere energieopbrengst per paneel bieden."
            :voordelen="['Voordeel 1', 'Voordeel 2', 'Voordeel 3']" />
          <AccordionItem id="item5" :currentOpen="currentOpen" :setOpen="setOpen" title="Glas-glas zonnepanelen"
            paragraphText="Glas-glas zonnepanelen hebben zonnecellen die zijn ingekapseld tussen twee lagen glas, wat zorgt voor extra duurzaamheid. Deze panelen zijn minder gevoelig voor slijtage en degradatie, waardoor ze vaak een langere levensduur hebben dan traditionele zonnepanelen. Ze bieden bovendien betere weerstand tegen extreme weersomstandigheden, wat ze tot een robuuste en betrouwbare keuze maakt voor langdurige energieoplossingen."
            :voordelen="['Voordeel 1', 'Voordeel 2', 'Voordeel 3']" />
        </template>
      </Accordion>
    </div>

    <!-- Nieuwe container met content (zoals afbeelding) -->
    <ContentCardOne title="Daarom zonnepanelen via InsteQ" :listItems="[
      'Je krijgt gratis deskundig advies en een offerte op maat',
      'Installatie door vakbekwame en volledig gecertificeerde experts',
      'Wij berekenen uw financiële voordeel'
    ]" buttonText="Gratis advies aanvragen" imageSrc="zonnepanelen sub 4.png" linkUrl="heat-pump" linkText="Lees meer" />

<div class="background-wrapper-white">
      <Accordion title="Handig om te weten">
        <template v-slot="{ currentOpen, setOpen, refs }">
          <AccordionItem id="item1" :currentOpen="currentOpen" :setOpen="setOpen" title="Stroom opwekken op bewolkte dagen"
            paragraphText="Zonnepanelen werken ook op bewolkte dagen! 🌥️ Ze vangen niet alleen direct zonlicht, maar ook diffuus licht dat door de wolken heen komt. Hoewel de energieproductie wat lager is dan op zonnige dagen, blijven de zonnepanelen toch efficiënt stroom opwekken, zelfs zonder volle zon"
            :voordelen="['Voordeel 1', 'Voordeel 2', 'Voordeel 3']" />
          <AccordionItem id="item2" :currentOpen="currentOpen" :setOpen="setOpen" title="Levensduur van 25 jaar of langer"
            paragraphText="Moderne zonnepanelen gaan 25 tot 30 jaar mee en behouden na twintig jaar nog steeds ongeveer 80% van hun oorspronkelijke capaciteit. Dit betekent dat ze op de lange termijn betrouwbaar energie blijven leveren, waardoor de investering in zonnepanelen een duurzame en rendabele keuze is voor de toekomst."
            :voordelen="['Voordeel 1', 'Voordeel 2', 'Voordeel 3']" />
          <AccordionItem id="item3" :currentOpen="currentOpen" :setOpen="setOpen" title="Duurzame investering"
            paragraphText="Zonnepanelen verdienen de energie die nodig is voor hun productie binnen 1 tot 3 jaar terug. Daarna leveren ze tientallen jaren schone energie, wat ze een efficiënte en milieuvriendelijke keuze maakt voor duurzame energieoplossingen."
            :voordelen="['Voordeel 1', 'Voordeel 2', 'Voordeel 3']" />
        </template>
      </Accordion>
    </div>

    <div class="background-wrapper">
      <div class="why-cards-container">
        <h2>Waarom kiest u voor InsteQ?</h2>
        <div class="why-cards">
          <WhyCard title="Duurzaam totaaladvies"
            description="Met onze producten en diensten helpen wij u vandaag bij uw volgende stap in duurzaam comfortabel wonen en werken."
            icon="sustainable" />
          <WhyCard title="Gecertificeerd"
            description="Wij combineren kennis met vakmanschap en dat maakt onze collega's echte specialisten met de juiste certificering."
            icon="certified" />
          <WhyCard title="Hoge kwaliteit en garantie"
            description="Wij werken met merken en fabrikanten die marktleider zijn in ons vakgebied. Denk aan; Vaillaint, LG, etc."
            icon="quality" />
          <WhyCard title="Direct leverbaar"
            description="Met onze producten en diensten helpen wij u vandaag bij uw volgende stap in duurzaam comfortabel wonen en werken."
            icon="delivery" />
        </div>
      </div>
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
import ContentCardOneGreen from '@/components/cards/content/Card-one-green.vue';

export default {
  name: "Solar",
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
    ContentCardOneGreen
  }
};
</script>

<style lang="scss" scoped>
#home {
  margin: 0 auto;
  width: 100%;
  padding-top: 20px;
}

.background-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% - 40px);
  background-color: rgba(238, 238, 238, 0.4117647059);
  padding: 20px 0;
  box-sizing: border-box;
  margin: 0 auto 50px;
  position: relative;
  margin-top: 20px;
}

.background-wrapper-grey {
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% - 40px);
  background-color: #edf1f6ad;
  padding: 20px 0;
  box-sizing: border-box;
  margin: 0 auto 50px;
  position: relative;
}

.content-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.background-wrapper-white {
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% - 40px);
  background-color: #ffffff;
  padding: 20px 0;
  box-sizing: border-box;
  margin: 0 auto 50px;
  position: relative;
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

@media (max-width: 1280px) {
  .cta-button {
    font-size: 1.2rem;
  }
}

.why-cards-container {
  padding: 40px 20px;
  text-align: center;
  max-width: 90%;
}

.why-cards-container h2 {
  font-size: 2.5rem;
  font-weight: 800;
  color: #08535e;
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
  font-size: 2.5rem;
  font-weight: 800;
  color: #08535e;
  margin-bottom: 20px;
}

.text-container p {
  font-size: 1.2rem;
  font-weight: 500;
  color: #08535e;
}

.extra-margin {
  margin-top: 40px;
  /* Verhoog de waarde als je meer ruimte wilt */
}

.cta-button .button-arrow {
  stroke: #08535e !important;
  /* Zorg ervoor dat de pijl zwart wordt */
}
</style>