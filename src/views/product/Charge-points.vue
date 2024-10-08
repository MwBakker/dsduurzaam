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
            paragraphText="Een thuislaadpaal is speciaal ontworpen voor particulier gebruik, ideaal voor installatie op de oprit of in de garage. Het biedt een comfortabele en betaalbare manier om uw auto op te laden terwijl u thuis bent, zonder afhankelijk te zijn van openbare laadpunten. Deze laadpalen maken gebruik van AC-laden (wisselstroom), met een laadcapaciteit van 3,7 kW tot 22 kW, wat zorgt voor een efficiënte en flexibele oplaadmogelijkheid voor elektrische voertuigen."
            :voordelen="['Voordeel 1', 'Voordeel 2', 'Voordeel 3']" />
          <AccordionItem id="item2" :currentOpen="currentOpen" :setOpen="setOpen" title="Publieke laadpaal"
            paragraphText="Publieke laadpalen zijn beschikbaar op openbare locaties zoals winkelcentra, parkeerplaatsen en langs wegen, en zijn geschikt voor iedereen met een elektrische auto. Ze zijn toegankelijk voor alle elektrische voertuigen en maken vaak deel uit van grotere laadnetwerken. Deze laadpalen ondersteunen AC-laden en soms DC-snelladen, met laadvermogens variërend van 11 kW tot 50 kW, waardoor ze geschikt zijn voor zowel normaal laden als sneller opladen onderweg."
            :voordelen="['Voordeel 1', 'Voordeel 2', 'Voordeel 3']" />
          <AccordionItem id="item3" :currentOpen="currentOpen" :setOpen="setOpen" title="Snellaadpaal (DC-lader)"
            paragraphText="Snellaadpalen zijn speciaal ontworpen om elektrische voertuigen snel op te laden en bevinden zich meestal langs snelwegen of op strategische locaties. Ze bieden het voordeel van een snelle oplaadtijd, waardoor u auto binnen 30 tot 60 minuten volledig kan worden opgeladen, wat ideaal is voor lange ritten. Deze laadpalen maken gebruik van DC-laden (gelijkstroom) en hebben hoge laadvermogens, vaak variërend tussen 50 kW en 350 kW, voor efficiënt en snel laden onderweg."
            :voordelen="['Voordeel 1', 'Voordeel 2', 'Voordeel 3']" />
          <AccordionItem id="item4" :currentOpen="currentOpen" :setOpen="setOpen" title="Slimme laadpaal"
            paragraphText="Slimme laadpalen zijn geavanceerde oplaadsystemen die kunnen communiceren met apps en energiebeheersystemen, waardoor u het laadproces eenvoudig op afstand kunt beheren. Ze bieden voordelen zoals het optimaliseren van energieverbruik, het plannen van laadtijden en het verkrijgen van inzicht in uw energieverbruik. Bovendien zijn ze vaak geschikt voor dynamische energietarieven, wat kan helpen kosten te besparen. Deze laadpalen ondersteunen AC-laden met vermogens van 7,4 kW tot 22 kW, wat zorgt voor efficiënt thuis- of kantoorladen."
            :voordelen="['Voordeel 1', 'Voordeel 2', 'Voordeel 3']" />
          <AccordionItem id="item5" :currentOpen="currentOpen" :setOpen="setOpen" title="Zakelijke laadpaal"
            paragraphText="Zakelijke laadpalen zijn speciaal ontworpen voor bedrijven die hun werknemers en klanten willen voorzien van oplaadmogelijkheden voor elektrische voertuigen. Ze zijn geschikt voor het gelijktijdig opladen van meerdere voertuigen en kunnen worden geïntegreerd in een energiebeheersysteem. Vaak zijn deze laadpalen gekoppeld aan slimme software voor gebruikersbeheer. Afhankelijk van de bedrijfsbehoefte kunnen ze zowel AC-laden als DC-laden ondersteunen, waardoor ze flexibel in te zetten zijn voor diverse laadvereisten."
            :voordelen="['Voordeel 1', 'Voordeel 2', 'Voordeel 3']" />
        </template>
      </Accordion>
    </div>
    <!-- Nieuwe container met content (zoals afbeelding) -->
    <ContentCardOne title="Daarom een laadpaal via InsteQ" :listItems="[
      'U krijgt gratis deskundig advies en een offerte op maat',
      'Installatie door vakbekwame en volledig gecertificeerde experts',
      'Innovatieve technologieën voor hoogwaardige laadoplossingen',
      'Uitstekende service en onderhoud'
    ]" buttonText="Gratis advies aanvragen" imageSrc="charge-points.png" linkUrl="heat-pump" linkText="Lees meer" />
    <div class="background-wrapper-white">
      <Accordion title="Handig om te weten">
        <template v-slot="{ currentOpen, setOpen, refs }">
          <AccordionItem id="item1" :currentOpen="currentOpen" :setOpen="setOpen"
            title="Nog meer besparen met slim opladen"
            paragraphText="Slim opladen thuis met een slimme laadpaal biedt veel voordelen. Deze laadpalen kunnen communiceren met uw smartphone, waardoor u het laadproces eenvoudig op afstand kunt beheren. U kunt laadsessies plannen op basis van de laagste energietarieven, zodat u altijd op het voordeligste moment oplaadt. Dit helpt niet alleen om kosten te besparen, maar zorgt ook voor een efficiënter energieverbruik, vooral als u gebruik maakt van dynamische tarieven of eigen opgewekte zonne-energie."
            :voordelen="['Voordeel 1', 'Voordeel 2', 'Voordeel 3']" />
          <AccordionItem id="item2" :currentOpen="currentOpen" :setOpen="setOpen" title="Opladen met zonnne-energie"
            paragraphText="Als u zonnepanelen hebt, kunt u uw laadpaal koppelen aan uw zonnestroomsysteem, waardoor u uw elektrische auto direct kunt opladen met 100% duurzame energie. Dit betekent niet alleen dat u kosten bespaart, maar ook dat u een stap zet richting een volledig groene energievoorziening. Zo maakt u optimaal gebruik van de energie die u zelf opwekt en rijdt u nog milieuvriendelijker."
            :voordelen="['Voordeel 1', 'Voordeel 2', 'Voordeel 3']" />
          <AccordionItem id="item3" :currentOpen="currentOpen" :setOpen="setOpen"
            title="Universele stekker voor elke elektrische auto"
            paragraphText="Moderne laadpalen zijn voorzien van universele stekkers, zoals de Type 2-connector, die compatibel zijn met vrijwel alle elektrische voertuigen. Of u nu een compacte stadswagen of een luxe elektrische SUV rijdt, u kunt uw auto eenvoudig en snel opladen. Deze veelzijdigheid maakt moderne laadpalen een ideale keuze voor elk type elektrische auto, waardoor u altijd verzekerd bent van een probleemloze laadervaring."
            :voordelen="['Voordeel 1', 'Voordeel 2', 'Voordeel 3']" />
        </template>
      </Accordion>
    </div>
    <WhyCards />
  </div>
</template>

<script>
import ContentCardOne from '@/components/cards/content/Card-one.vue';
import Accordion from '@/components/accordion/Accordion.vue';
import AccordionItem from '@/components/accordion/Accordion-item.vue';
import WhyCards from '@/components/Why-cards.vue';
import IntroductionCardSub from '@/components/cards/introduction/Introduction-card-sub.vue';

export default {
  name: "Charge-points",
  components: {
    ContentCardOne,
    Accordion,
    AccordionItem,
    WhyCards,
    IntroductionCardSub,
  }
};
</script>

<style lang="scss" scoped></style>