<template>
  <div id="home">
    <div id="products" class="background-wrapper">
      <!-- Container voor de twee secties -->
      <div class="content-container">
        <!-- Tekst sectie (40% breedte) -->
        <div class="text-container">
          <h1>Onze producten</h1>
          <p>
            Onze professionals nemen de volledige verduurzaming van uw woning of bedrijfspand uit handen. Of u nu
            particulier of zakelijk klant bent, u profiteert altijd van de hoogste kwaliteit en persoonlijke service.
          </p>
          <p class="extra-margin">
            Nieuwsgierig naar ons aanbod? We vertellen u er graag meer over!
          </p>
        </div>
        <!-- Productkaarten sectie (60% breedte) -->
        <div class="cards-container">
          <ProductCard route="heat-pump" title="Warmtepomp" image="home" subtitle="Van hybride tot en met all-electric."
            buttonText="Lees meer" />
          <ProductCard route="airco" title="Airconditioning" image="airco" subtitle="Zowel koelen als verwarmen"
            buttonText="Lees meer" />
          <ProductCard route="floor-heating" title="Vloerverwarming" image="floor-heating"
            subtitle="Nog duurzamer in combinatie met een warmtepomp" buttonText="Lees meer" />
          <ProductCard route="solar" title="Zonnepanelen" image="solar"
            subtitle="Je andere duurzame installaties voeden met eigen opgewerkte energie" buttonText="Lees meer" />
          <ProductCard route="charge-points" title="Laadpaal" image="charge-points"
            subtitle="Je auto opladen met eigen opgewerkte energie" buttonText="Lees meer" />
          <ProductCard route="service" title="Service" image="service" subtitle="Wij staan altijd voor u klaar"
            buttonText="Lees meer" />
        </div>
      </div>
    </div>
    <ContentCardOne title="Daarom een warmtepomp via InsteQ" :listItems="[
      'U krijgt gratis deskundig advies en een offerte op maat',
      'Installatie door vakbekwame en volledig gecertificeerde experts',
      'Wij handelen het gehele subsidietraject voor u af',
      'Uitstekende service en onderhoud'
    ]" buttonText="Gratis advies aanvragen" imageSrc="home.png" linkUrl="heat-pump" linkText="Lees meer"
      showButton="true" />
    <div class="background-wrapper-white">
      <Accordion title="Handig om te weten">
        <template v-slot="{ currentOpen, setOpen, refs }">
          <AccordionItem id="item1" :currentOpen="currentOpen" :setOpen="setOpen"
            title="Warmtepompen: Haal de warmte uit de lucht!"
            paragraphText="Wist u dat een warmtepomp zelfs bij temperaturen rond het vriespunt warmte uit de lucht kan halen? Warmtepompen gebruiken energie uit de lucht, bodem of grondwater om uw woning efficiënt te verwarmen, zelfs bij koud weer. Hierdoor bespaart u aanzienlijk op uw gasverbruik en verlaagt u uw CO2-uitstoot. Daarnaast werken warmtepompen perfect samen met zonnepanelen en vloerverwarming voor een nog duurzamer resultaat."
            :voordelen="['Voordeel 1', 'Voordeel 2', 'Voordeel 3']" />
          <AccordionItem id="item2" :currentOpen="currentOpen" :setOpen="setOpen"
            title="Airco’s: Niet alleen voor de zomer!"
            paragraphText="Airco’s kunnen tegenwoordig meer dan alleen koelen. Veel moderne airconditioningsystemen werken ook als verwarmingssysteem in de winter. Door gebruik te maken van dezelfde technologie als warmtepompen, kunt u met een airco energiezuinig verwarmen én koelen. Dit maakt het een slimme investering, want u bespaart op zowel de gas- als stroomrekening."
            :voordelen="['Voordeel 1', 'Voordeel 2', 'Voordeel 3']" />
          <AccordionItem id="item3" :currentOpen="currentOpen" :setOpen="setOpen"
            title="Vloerverwarming: Comfort en efficiëntie!"
            paragraphText="Vloerverwarming verdeelt warmte gelijkmatig door de hele ruimte, waardoor u efficiënter kunt verwarmen en minder energie verbruikt. Wist u dat vloerverwarming ideaal is in combinatie met een warmtepomp? Doordat vloerverwarming op lagere temperaturen werkt, verbruikt u minder gas of stroom, wat uw energiekosten flink kan verlagen."
            :voordelen="['Voordeel 1', 'Voordeel 2', 'Voordeel 3']" />
          <AccordionItem id="item4" :currentOpen="currentOpen" :setOpen="setOpen"
            title="Zonnepanelen: Slim gebruik voor andere duurzame installaties!"
            paragraphText="Zonnepanelen wekken stroom op uit zonlicht, waardoor u direct kunt besparen op uw energiekosten. Wist u dat de opgewekte stroom perfect kan worden gebruikt om andere duurzame installaties zoals een warmtepomp, airco of laadpaal van energie te voorzien? Hierdoor verbruikt u minder netstroom en verlaagt u uw energierekening nog verder. Door slim gebruik te maken van uw eigen zonne-energie, maximaliseert u de voordelen van uw duurzame installaties en draagt u bij aan een schonere toekomst!"
            :voordelen="['Voordeel 1', 'Voordeel 2', 'Voordeel 3']" />
          <AccordionItem id="item5" :currentOpen="currentOpen" :setOpen="setOpen"
            title="Laadpalen: Laad uw auto op met groene energie!"
            paragraphText="Wist u dat het opladen van uw elektrische auto met eigen opgewekte zonne-energie bijna niets kost? Door een laadpaal thuis te installeren, kunt u uw auto opladen wanneer de zon schijnt. Met een slimme laadpaal kunt u het laadproces zelfs zo instellen dat het optimaal gebruik maakt van uw zonnepanelen, wat u nog meer bespaart op energiekosten."
            :voordelen="['Voordeel 1', 'Voordeel 2', 'Voordeel 3']" />
        </template>
      </Accordion>
    </div>
    <WhyCards />
    <!--
        <ContentCardOne 
      title="Betrouwbare service, altijd paraat" 
      :listItems="['Van installatie tot onderhoud, wij begeleiden u in elke stap van het proces.',
          'Installatie door vakbekwame en volledig gecertificeerde experts',
          'Ontvang tot € 500,-- korting als u bij ons uw warmtepomp koopt',
          'Wij handelen het gehele subsidietraject voor uw af',
          'Wij handelen het gehele subsidietraject voor uw af',
          'Wij handelen het gehele subsidietraject voor uw af']" 
      imageSrc="service.png" 
      linkUrl="/advies" 
      :showButton="false" 
    />
    -->
  </div>
</template>

<script>
import ProductCard from '@/components/cards/product/Regular.vue';
import ContentCardOne from '@/components/cards/content/Card-one.vue';
import Accordion from '@/components/accordion/Accordion.vue';
import AccordionItem from '@/components/accordion/Accordion-item.vue';
import WhyCards from '@/components/Why-cards.vue';
import IntroductionCardSub from '@/components/cards/introduction/Introduction-card-sub.vue';

export default {
  name: "Home",
  components: {
    ProductCard,
    ContentCardOne,
    Accordion,
    AccordionItem,
    WhyCards,
    IntroductionCardSub,
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

.text-container {
  width: 50%;
  /* Zorgt ervoor dat de tekstcontainer 40% breed is */
  padding-top: 50px;
  padding-left: 170px;
  padding-right: 100px;
  line-height: 1.6;

  h1 {
    margin-bottom: 20px;
  }

  p {
    font-weight: 500;
  }
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

.extra-margin {
  margin-top: 40px;
  /* Verhoog de waarde als je meer ruimte wilt */
}

@media (max-width: 1280px) {
  .background-wrapper {
    margin: 8px auto 0 auto;
    padding: 0;

    .text-container {
      width: 90%;
      padding: 16px;
      // text-align: center;
    }
  }

  .content-container {
    flex-direction: column;
    align-items: center;
  }

  .cards-container {
    width: 95%;
  }
}

@media (max-width: 800px) {
  #intro {
    height: 390px;
  }

  #products {
    height: 880px;
  }

  .cards-container {
    width: 90%;
    padding: 0;
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>