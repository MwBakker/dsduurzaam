<template>
  <div id="solar">
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
      'U krijgt gratis deskundig advies en een offerte op maat',
      'Installatie door vakbekwame en volledig gecertificeerde experts',
      'Wij berekenen uw financiële voordeel'
    ]" buttonText="Gratis advies aanvragen" imageSrc="zonnepanelen sub 4.png" linkUrl="heat-pump"
      linkText="Lees meer" />

    <div class="background-wrapper-white">
      <Accordion title="Handig om te weten">
        <template v-slot="{ currentOpen, setOpen, refs }">
          <AccordionItem id="item1" :currentOpen="currentOpen" :setOpen="setOpen"
            title="Stroom opwekken op bewolkte dagen"
            paragraphText="Zonnepanelen werken ook op bewolkte dagen! 🌥️ Ze vangen niet alleen direct zonlicht, maar ook diffuus licht dat door de wolken heen komt. Hoewel de energieproductie wat lager is dan op zonnige dagen, blijven de zonnepanelen toch efficiënt stroom opwekken, zelfs zonder volle zon"
            :voordelen="['Voordeel 1', 'Voordeel 2', 'Voordeel 3']" />
          <AccordionItem id="item2" :currentOpen="currentOpen" :setOpen="setOpen"
            title="Levensduur van 25 jaar of langer"
            paragraphText="Moderne zonnepanelen gaan 25 tot 30 jaar mee en behouden na twintig jaar nog steeds ongeveer 80% van hun oorspronkelijke capaciteit. Dit betekent dat ze op de lange termijn betrouwbaar energie blijven leveren, waardoor de investering in zonnepanelen een duurzame en rendabele keuze is voor de toekomst."
            :voordelen="['Voordeel 1', 'Voordeel 2', 'Voordeel 3']" />
          <AccordionItem id="item3" :currentOpen="currentOpen" :setOpen="setOpen" title="Duurzame investering"
            paragraphText="Zonnepanelen verdienen de energie die nodig is voor hun productie binnen 1 tot 3 jaar terug. Daarna leveren ze tientallen jaren schone energie, wat ze een efficiënte en milieuvriendelijke keuze maakt voor duurzame energieoplossingen."
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
  name: "Solar",
  components: {
    ContentCardOne,
    Accordion,
    AccordionItem,
    WhyCards,
  }
};
</script>

<style lang="scss" scoped>

@media (max-width: 1280px) {}
</style>