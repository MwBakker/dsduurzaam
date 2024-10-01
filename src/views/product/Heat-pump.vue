<template>
  <div id="heat-pump">


    <div class="background-wrapper">
      <IntroductionCardSub title="Gasvrij wonen of werken met een warmtepomp"   
        text="Ontdek de toekomst van energiezuinig wonen met onze warmtepompen. Bespaar flink op je energiekosten en verminder je CO₂-uitstoot terwijl je geniet van optimaal comfort in huis. Of het nu gaat om verwarmen, koelen of warm water, onze innovatieve warmtepompen bieden de perfecte, duurzame oplossing voor elke woning. "
        buttonText="Je knoptekst hier" :showButton="false" />
    </div>

    <div class="background-wrapper-white">
      <Accordion title="Welke soorten warmtepompen zijn er?">
        <template v-slot="{ currentOpen, setOpen, refs }">
          <AccordionItem id="item1" :currentOpen="currentOpen" :setOpen="setOpen" title="Hybride warmtepomp"
            paragraphText="Een hybride warmtepomp combineert een warmtepomp met een traditionele cv-ketel. Het systeem gebruikt de warmtepomp voor het grootste deel van de verwarming en schakelt over op de cv-ketel bij extreem koud weer. Dit zorgt voor efficiënter energieverbruik en lagere CO₂-uitstoot. "
            :voordelen="['Voordeel 1', 'Voordeel 2', 'Voordeel 3']" />
          <AccordionItem id="item2" :currentOpen="currentOpen" :setOpen="setOpen" title="Lucht/water warmtepomp"
            paragraphText="Een lucht/water warmtepomp haalt warmte uit de buitenlucht en zet deze om in energie voor verwarming en warm water in je woning. Dit duurzame systeem verlaagt je energiekosten aanzienlijk en werkt efficiënt, zelfs bij lage buitentemperaturen. Ideaal voor milieubewust en comfortabel wonen. "
            :voordelen="['Voordeel 1', 'Voordeel 2', 'Voordeel 3']" />
          <AccordionItem id="item3" :currentOpen="currentOpen" :setOpen="setOpen" title="Ventilatie warmtepomp"
            paragraphText="Een ventilatie warmtepomp hergebruikt de warmte uit afgevoerde binnenlucht om je woning te verwarmen of van warm water te voorzien. Dit energiezuinige systeem zorgt voor een gezond binnenklimaat door ventilatie te combineren met warmteterugwinning, wat resulteert in lagere energiekosten en een duurzamer huis. "
            :voordelen="['Voordeel 1', 'Voordeel 2', 'Voordeel 3']" />
          <AccordionItem id="item4" :currentOpen="currentOpen" :setOpen="setOpen" title="Monoblock warmtepomp"
            paragraphText="Een monoblock warmtepomp is een compact systeem waarbij alle componenten in één buitenunit zijn geïntegreerd. Het onttrekt warmte uit de lucht om je woning te verwarmen of te koelen. Dankzij de eenvoudige installatie en hoge energie-efficiëntie is het een ideale keuze voor zowel nieuwbouw als renovatie. "
            :voordelen="['Voordeel 1', 'Voordeel 2', 'Voordeel 3']" />
        </template>
      </Accordion>
    </div>

    <!-- Nieuwe container met content (zoals afbeelding) -->
    <ContentCardOne title="Daarom een warmtepomp via InsteQ" :listItems="[
      'Je krijgt gratis deskundig advies en een offerte op maat',
      'Installatie door vakbekwame en volledig gecertificeerde experts',
      'Ontvang tot € 500,-- korting als je bij ons je warmtepomp koopt',
      'Wij handelen het gehele subsidietraject voor je af'
    ]" buttonText="Vraag adviesgesprek aan" imageSrc="home.png" linkUrl="heat-pump" linkText="Lees meer" />

<div class="background-wrapper-white">
      <Accordion title="Handig om te weten">
        <template v-slot="{ currentOpen, setOpen, refs }">
          <AccordionItem id="item1" :currentOpen="currentOpen" :setOpen="setOpen" title="Efficiënt verwarmen én koelen voor optimaal comfort"
            paragraphText="Wist u dat warmtepompen niet alleen verwarmen, maar ook kunnen koelen? In de zomer kan een warmtepomp de werking omdraaien en warmte uit uw woning onttrekken, waardoor het heerlijk koel blijft. Dit maakt de warmtepomp een veelzijdige en energiezuinige oplossing voor zowel de warme als koude maanden."
            :voordelen="['Voordeel 1', 'Voordeel 2', 'Voordeel 3']" />
          <AccordionItem id="item2" :currentOpen="currentOpen" :setOpen="setOpen" title="Lever tot 4 keer meer energie dan je verbruikt"
            paragraphText="Wist u dat warmtepompen maar liefst 3 tot 4 keer meer energie leveren dan ze verbruiken? Dit komt doordat ze warmte uit de buitenlucht, grond of ventilatielucht halen en deze efficiënt omzetten in bruikbare energie voor uw woning. Hierdoor zijn warmtepompen extreem efficiënt en kunt u aanzienlijk besparen op uw energiekosten, terwijl u op een duurzame manier verwarmt en koelt. Dit maakt het een van de meest milieuvriendelijke verwarmingsopties voor moderne huizen."
            :voordelen="['Voordeel 1', 'Voordeel 2', 'Voordeel 3']" />
          <AccordionItem id="item3" :currentOpen="currentOpen" :setOpen="setOpen" title="Verhoog de waarde van je woning en bespaar energie"
            paragraphText="Wist u dat warmtepompen niet alleen de waarde van uw woning verhogen, maar ook uw energielabel verbeteren? Een energiezuinige woning is aantrekkelijker voor kopers, omdat het lagere energiekosten en een beter energielabel biedt. Bovendien kunt u momenteel nog subsidie krijgen op de installatie van een warmtepomp, wat de investering nog voordeliger maakt en de woningwaarde verder verhoogt. Dit maakt een warmtepomp een slimme keuze voor zowel uw portemonnee als de toekomst van uw huis."
            :voordelen="['Voordeel 1', 'Voordeel 2', 'Voordeel 3']" />
          <AccordionItem id="item4" :currentOpen="currentOpen" :setOpen="setOpen" title="Haal duurzame energie direct uit de lucht"
            paragraphText="Wist u dat warmtepompen lucht kunnen gebruiken als energiebron? Luchtwarmtepompen onttrekken warmte uit de buitenlucht, zelfs bij lage temperaturen, en zetten deze om in energie voor het verwarmen van uw woning. Dit maakt ze niet alleen efficiënt en milieuvriendelijk, maar ook voordelig in gebruik. Daarnaast komt u in aanmerking voor subsidies, wat de investering in een luchtwarmtepomp nog aantrekkelijker maakt. Een slimme manier om duurzaam te verwarmen met behulp van de buitenlucht!"
            :voordelen="['Voordeel 1', 'Voordeel 2', 'Voordeel 3']" />
        </template>
      </Accordion>
    </div>

    <div class="background-wrapper products-background">
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
import ContentCardOneRed from '@/components/cards/content/Card-one-red.vue';

export default {
  name: "Heat-pump",
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
    ContentCardOneRed
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


/* Media queries voor verschillende schermgroottes */
@media (max-width: 1920px) {
  .product-cards-container {
    max-width: 1548px;
    width: 200px;
  }

  .cta-button {
    width: 400px;
  }
}

@media (max-width: 1750px) {
  .product-cards-container {
    max-width: 1548px;
    width: 85%;
  }

  .cta-button {
    width: 400px;
  }
}

@media (max-width: 1600px) {
  .product-cards-container {
    max-width: 1548px;
    width: 85%;
  }

  .cta-button {
    width: 350px;
  }
}

@media (max-width: 1380px) {
  .product-cards-container {
    width: 85%;
  }

  .cta-button {
    width: 100%;
    /* Standaard vaste breedte */
  }
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

.products-background {
  background-color: #eeeeee69;
}
</style>