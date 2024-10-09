<template>
  <div id="airco">
    <div class="background-wrapper-white">
      <Accordion title="Welke soorten airconditioners zijn er?">
        <template v-slot="{ currentOpen, setOpen, refs }">
          <AccordionItem id="item1" :currentOpen="currentOpen" :setOpen="setOpen" title="Single-split airconditioning"
            paragraphText="Een single-split airconditioning bestaat uit één binnenunit en één buitenunit en is ideaal voor het koelen of verwarmen van één ruimte, zoals een woonkamer of slaapkamer. Deze systemen zijn efficiënt, betaalbaar en eenvoudig te installeren, waardoor ze een populaire keuze zijn voor woningen. Ze bieden een gerichte oplossing voor klimaatregeling en zijn daardoor perfect voor kleinere ruimtes waar comfort en kostenbesparing hand in hand gaan."
            :voordelen="['Voordeel 1', 'Voordeel 2', 'Voordeel 3']" />
          <AccordionItem id="item2" :currentOpen="currentOpen" :setOpen="setOpen" title="Multi-split airconditioning"
            paragraphText="Een multi-split airconditioning maakt gebruik van één buitenunit om meerdere binnenunits te bedienen, waardoor het ideaal is voor het koelen of verwarmen van meerdere kamers in huis of een klein kantoor. Dit systeem biedt flexibiliteit en ruimtebesparing, omdat u meerdere ruimtes kunt beheren met slechts één buitensysteem. Multi-split airco's zijn een uitstekende keuze voor situaties waar een uniforme temperatuurregeling in verschillende ruimtes gewenst is."
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
    <WhyCards />
  </div>
</template>

<script>
import ContentCardOne from '@/components/cards/content/Card-one.vue';
import Accordion from '@/components/accordion/Accordion.vue';
import AccordionItem from '@/components/accordion/Accordion-item.vue';
import WhyCards from '@/components/Why-cards.vue';

export default {
  name: "Airco",
  components: {
    ContentCardOne,
    Accordion,
    AccordionItem,
    WhyCards,
  }
};
</script>

<style lang="scss" scoped>
</style>
