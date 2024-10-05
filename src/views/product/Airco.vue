<template>
  <div id="airco">


    <div class="background-wrapper">
      <IntroductionCardSub title="Comfortabel in de zomer en in de winter"
        text="Airco's zijn systemen die zowel kunnen koelen als verwarmen, waardoor ze het hele jaar door voor een comfortabele temperatuur zorgen. Ze zijn steeds energiezuiniger en dragen bij aan duurzaamheid, vooral wanneer ze gecombineerd worden met zonnepanelen die de benodigde stroom leveren. Hierdoor zijn airco’s een milieuvriendelijke en kostenefficiënte keuze voor klimaatregeling in huis of op kantoor."
        buttonText="Je knoptekst hier" :showButton="false" />
    </div>

    <div class="background-wrapper-white">
      <Accordion title="Welke soorten airconditioners zijn er?">
        <template v-slot="{ currentOpen, setOpen, refs }">
          <AccordionItem id="item1" :currentOpen="currentOpen" :setOpen="setOpen" title="Single-split airconditioning"
            paragraphText="Een single-split airconditioning bestaat uit één binnenunit en één buitenunit en is ideaal voor het koelen of verwarmen van één ruimte, zoals een woonkamer of slaapkamer. Deze systemen zijn efficiënt, betaalbaar en eenvoudig te installeren, waardoor ze een populaire keuze zijn voor woningen. Ze bieden een gerichte oplossing voor klimaatregeling en zijn daardoor perfect voor kleinere ruimtes waar comfort en kostenbesparing hand in hand gaan."
            :voordelen="['Voordeel 1', 'Voordeel 2', 'Voordeel 3']" />
          <AccordionItem id="item2" :currentOpen="currentOpen" :setOpen="setOpen" title="Multi-split airconditioning"
            paragraphText="Een multi-split airconditioning maakt gebruik van één buitenunit om meerdere binnenunits te bedienen, waardoor het ideaal is voor het koelen of verwarmen van meerdere kamers in huis of een klein kantoor. Dit systeem biedt flexibiliteit en ruimtebesparing, omdat je meerdere ruimtes kunt beheren met slechts één buitensysteem. Multi-split airco's zijn een uitstekende keuze voor situaties waar een uniforme temperatuurregeling in verschillende ruimtes gewenst is."
            :voordelen="['Voordeel 1', 'Voordeel 2', 'Voordeel 3']" />
          <AccordionItem id="item3" :currentOpen="currentOpen" :setOpen="setOpen" title="Cassette airconditioning"
            paragraphText="Een cassette airconditioning heeft een binnenunit die in het plafond wordt gemonteerd, vaak met vier luchtuitlaten voor een optimale luchtverdeling. Dit type airco wordt veel gebruikt in kantoren en grote open ruimtes met verlaagde plafonds. Het systeem is discreet, neemt weinig ruimte in beslag en zorgt voor een gelijkmatige luchtverspreiding in de ruimte, wat het ideaal maakt voor grotere ruimtes waar esthetiek en efficiëntie samenkomen."
            :voordelen="['Voordeel 1', 'Voordeel 2', 'Voordeel 3']" />
          <AccordionItem id="item4" :currentOpen="currentOpen" :setOpen="setOpen"
            title="Vloer- of wandmodel airconditioning"
            paragraphText="Een vloer- of wandmodel airconditioning wordt aan de muur of op de vloer gemonteerd en is geschikt voor ruimtes waar plafondruimte beperkt is, zoals woningen of commerciële omgevingen. Deze units zijn eenvoudig te installeren en bieden een efficiënte oplossing voor kleinere ruimtes. Dankzij hun flexibele plaatsing kunnen ze optimaal worden ingezet in situaties waar traditionele plafond- of cassette-installaties niet mogelijk zijn, zonder in te leveren op comfort en prestaties."
            :voordelen="['Voordeel 1', 'Voordeel 2', 'Voordeel 3']" />
        </template>
      </Accordion>
    </div>

    <!-- Nieuwe container met content (zoals afbeelding) -->
    <ContentCardOne title="Daarom een airconditoning via InsteQ" :listItems="[
      'U krijgt gratis deskundig advies en een offerte op maat',
      'Installatie door vakbekwame en volledig gecertificeerde experts',
      'Innovatieve technologieën voor maximale efficiëntie',
      'Uitstekende service en onderhoud'
    ]" buttonText="Gratis advies aanvragen" imageSrc="airco.png" linkUrl="heat-pump" linkText="Lees meer" />

    <div class="background-wrapper-white">
      <Accordion title="Handig om te weten">
        <template v-slot="{ currentOpen, setOpen, refs }">
          <AccordionItem id="item1" :currentOpen="currentOpen" :setOpen="setOpen" title="Efficiënt koelen én verwarmen"
            paragraphText="Airco's kunnen niet alleen koelen, maar ook verwarmen, waardoor ze ideaal zijn voor elk seizoen. In de winter onttrekken ze warmte uit de buitenlucht en blazen deze naar binnen, zelfs bij lage temperaturen. Dit maakt airco's efficiënter en veelzijdiger dan traditionele verwarmingssystemen, waardoor ze een energiezuinige oplossing bieden voor zowel verwarming als verkoeling."
            :voordelen="['Voordeel 1', 'Voordeel 2', 'Voordeel 3']" />
          <AccordionItem id="item2" :currentOpen="currentOpen" :setOpen="setOpen" title="Verhoogt de productiviteit"
            paragraphText="Onderzoek wijst uit dat mensen productiever zijn in een goed gekoelde werkomgeving. Een comfortabele temperatuur helpt stress en vermoeidheid te verminderen, waardoor medewerkers zich beter kunnen concentreren en efficiënter werken. Vooral in kantoren kan een aangenaam binnenklimaat leiden tot verbeterde prestaties en verhoogde tevredenheid, wat uiteindelijk ook het werkresultaat ten goede komt."
            :voordelen="['Voordeel 1', 'Voordeel 2', 'Voordeel 3']" />
          <AccordionItem id="item3" :currentOpen="currentOpen" :setOpen="setOpen" title="Goed voor uw gezondheid"
            paragraphText="Airco's dragen bij aan een gezondere leefomgeving doordat ze de lucht zuiveren van pollen, stof en allergenen, wat vooral gunstig is voor mensen met allergieën. Daarnaast helpt een airco de luchtvochtigheid op een comfortabel niveau te houden, wat belangrijk is tijdens klamme zomers. Dit kan ook schimmelvorming en vochtproblemen voorkomen, wat de algehele luchtkwaliteit in huis of op kantoor verbetert en bijdraagt aan een betere gezondheid."
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

export default {
  name: "Airco",
  components: {
    ProductCard,
    QuoteCard,
    ParagraphCard,
    ParagraphCardSmall,
    ContentCardOne,
    Accordion,
    AccordionItem,
    WhyCard,
    IntroductionCardSub
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
</style>
