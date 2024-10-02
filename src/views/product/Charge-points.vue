<template>
  <div id="charge-points">

    <div class="background-wrapper">
      <IntroductionCardSub title="Duurzaam rijden begint met een eigen laadpaal"
        text="Laadpalen zijn essentieel voor de transitie naar elektrisch rijden en dragen bij aan een duurzamere toekomst. Ze maken het mogelijk voertuigen op te laden met groene energie, zoals die van zonnepanelen, waardoor de CO₂-uitstoot aanzienlijk wordt verminderd. Door fossiele brandstoffen te vermijden, bieden laadpalen een milieuvriendelijke oplossing voor schonere lucht en minder vervuiling, zowel thuis als op het werk."
        buttonText="Je knoptekst hier" :showButton="false" />
    </div>

    <div class="background-wrapper-white">
      <Accordion title="Welke soorten laadpalen zijn er?">
        <template v-slot="{ currentOpen, setOpen, refs }">
          <AccordionItem id="item1" :currentOpen="currentOpen" :setOpen="setOpen" title="Thuis laadpaal"
            paragraphText="Een thuislaadpaal is speciaal ontworpen voor particulier gebruik, ideaal voor installatie op de oprit of in de garage. Het biedt een comfortabele en betaalbare manier om je auto op te laden terwijl je thuis bent, zonder afhankelijk te zijn van openbare laadpunten. Deze laadpalen maken gebruik van AC-laden (wisselstroom), met een laadcapaciteit van 3,7 kW tot 22 kW, wat zorgt voor een efficiënte en flexibele oplaadmogelijkheid voor elektrische voertuigen."
            :voordelen="['Voordeel 1', 'Voordeel 2', 'Voordeel 3']" />
          <AccordionItem id="item2" :currentOpen="currentOpen" :setOpen="setOpen" title="Publieke laadpaal"
            paragraphText="Publieke laadpalen zijn beschikbaar op openbare locaties zoals winkelcentra, parkeerplaatsen en langs wegen, en zijn geschikt voor iedereen met een elektrische auto. Ze zijn toegankelijk voor alle elektrische voertuigen en maken vaak deel uit van grotere laadnetwerken. Deze laadpalen ondersteunen AC-laden en soms DC-snelladen, met laadvermogens variërend van 11 kW tot 50 kW, waardoor ze geschikt zijn voor zowel normaal laden als sneller opladen onderweg."
            :voordelen="['Voordeel 1', 'Voordeel 2', 'Voordeel 3']" />
          <AccordionItem id="item3" :currentOpen="currentOpen" :setOpen="setOpen" title="Snellaadpaal (DC-lader)"
            paragraphText="Snellaadpalen zijn speciaal ontworpen om elektrische voertuigen snel op te laden en bevinden zich meestal langs snelwegen of op strategische locaties. Ze bieden het voordeel van een snelle oplaadtijd, waardoor je auto binnen 30 tot 60 minuten volledig kan worden opgeladen, wat ideaal is voor lange ritten. Deze laadpalen maken gebruik van DC-laden (gelijkstroom) en hebben hoge laadvermogens, vaak variërend tussen 50 kW en 350 kW, voor efficiënt en snel laden onderweg."
            :voordelen="['Voordeel 1', 'Voordeel 2', 'Voordeel 3']" />
          <AccordionItem id="item4" :currentOpen="currentOpen" :setOpen="setOpen" title="Slimme laadpaal"
            paragraphText="Slimme laadpalen zijn geavanceerde oplaadsystemen die kunnen communiceren met apps en energiebeheersystemen, waardoor je het laadproces eenvoudig op afstand kunt beheren. Ze bieden voordelen zoals het optimaliseren van energieverbruik, het plannen van laadtijden en het verkrijgen van inzicht in je energieverbruik. Bovendien zijn ze vaak geschikt voor dynamische energietarieven, wat kan helpen kosten te besparen. Deze laadpalen ondersteunen AC-laden met vermogens van 7,4 kW tot 22 kW, wat zorgt voor efficiënt thuis- of kantoorladen."
            :voordelen="['Voordeel 1', 'Voordeel 2', 'Voordeel 3']" />
          <AccordionItem id="item5" :currentOpen="currentOpen" :setOpen="setOpen" title="Zakelijke laadpaal"
            paragraphText="Zakelijke laadpalen zijn speciaal ontworpen voor bedrijven die hun werknemers en klanten willen voorzien van oplaadmogelijkheden voor elektrische voertuigen. Ze zijn geschikt voor het gelijktijdig opladen van meerdere voertuigen en kunnen worden geïntegreerd in een energiebeheersysteem. Vaak zijn deze laadpalen gekoppeld aan slimme software voor gebruikersbeheer. Afhankelijk van de bedrijfsbehoefte kunnen ze zowel AC-laden als DC-laden ondersteunen, waardoor ze flexibel in te zetten zijn voor diverse laadvereisten."
            :voordelen="['Voordeel 1', 'Voordeel 2', 'Voordeel 3']" />
        </template>
      </Accordion>
    </div>

    <!-- Nieuwe container met content (zoals afbeelding) -->
    <ContentCardOne title="Daarom een laadpaal via InsteQ" :listItems="[
      'Je krijgt gratis deskundig advies en een offerte op maat',
      'Installatie door vakbekwame en volledig gecertificeerde experts',
      'Innovatieve technologieën voor hoogwaardige laadoplossingen',
      'Uitstekende service en onderhoud'
    ]" buttonText="Gratis advies aanvragen" imageSrc="charge-points.png" linkUrl="heat-pump" linkText="Lees meer" />

    <div class="background-wrapper-white">
      <Accordion title="Handig om te weten">
        <template v-slot="{ currentOpen, setOpen, refs }">
          <AccordionItem id="item1" :currentOpen="currentOpen" :setOpen="setOpen"
            title="Nog meer besparen met slim opladen"
            paragraphText="Slim opladen thuis met een slimme laadpaal biedt veel voordelen. Deze laadpalen kunnen communiceren met je smartphone, waardoor je het laadproces eenvoudig op afstand kunt beheren. Je kunt laadsessies plannen op basis van de laagste energietarieven, zodat je altijd op het voordeligste moment oplaadt. Dit helpt niet alleen om kosten te besparen, maar zorgt ook voor een efficiënter energieverbruik, vooral als je gebruik maakt van dynamische tarieven of eigen opgewekte zonne-energie."
            :voordelen="['Voordeel 1', 'Voordeel 2', 'Voordeel 3']" />
          <AccordionItem id="item2" :currentOpen="currentOpen" :setOpen="setOpen" title="Opladen met zonnne-energie"
            paragraphText="Als je zonnepanelen hebt, kun je jouw laadpaal koppelen aan je zonnestroomsysteem, waardoor je je elektrische auto direct kunt opladen met 100% duurzame energie. Dit betekent niet alleen dat je kosten bespaart, maar ook dat je een stap zet richting een volledig groene energievoorziening. Zo maak je optimaal gebruik van de energie die je zelf opwekt en rijd je nog milieuvriendelijker."
            :voordelen="['Voordeel 1', 'Voordeel 2', 'Voordeel 3']" />
          <AccordionItem id="item3" :currentOpen="currentOpen" :setOpen="setOpen"
            title="Universele stekker voor elke elektrische auto"
            paragraphText="Moderne laadpalen zijn voorzien van universele stekkers, zoals de Type 2-connector, die compatibel zijn met vrijwel alle elektrische voertuigen. Of je nu een compacte stadswagen of een luxe elektrische SUV rijdt, je kunt je auto eenvoudig en snel opladen. Deze veelzijdigheid maakt moderne laadpalen een ideale keuze voor elk type elektrische auto, waardoor je altijd verzekerd bent van een probleemloze laadervaring."
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
import QuoteCard from '@/components/unused/Quote.vue';
import ContentCardOne from '@/components/cards/content/Card-one.vue';
import Accordion from '@/components/accordion/Accordion.vue';
import AccordionItem from '@/components/accordion/Accordion-item.vue';
import WhyCard from '@/components/cards/Why-card.vue';
import IntroductionCardSub from '@/components/cards/introduction/Introduction-card-sub.vue';
import ContentCardOneGreen from '@/components/cards/content/Card-one-green.vue';

export default {
  name: "Charge-points",
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


@media (max-width: 1280px) {
  .cta-button {
    font-size: 1.2rem;
  }
}
</style>