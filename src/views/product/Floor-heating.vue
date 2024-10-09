<template>
  <div id="floor-heating">
    <div class="background-wrapper-white">
      <Accordion title="Welke soorten vloerverwarming zijn er?">
        <template v-slot="{ currentOpen, setOpen, refs }">
          <AccordionItem id="item1" :currentOpen="currentOpen" :setOpen="setOpen" title="Vloerverwarming op netten"
            paragraphText="Op netten gelegd vloerverwarming is een installatie waarbij verwarmingsbuizen op een speciaal gaasnet worden bevestigd. Dit zorgt voor een snelle en efficiënte installatie, ideaal voor renovaties. De netten bieden stabiliteit en maken het gemakkelijk om de buizen op de juiste afstand van elkaar te plaatsen voor optimale warmteverdeling. "
            :voordelen="['Voordeel 1', 'Voordeel 2', 'Voordeel 3']" />
          <AccordionItem id="item2" :currentOpen="currentOpen" :setOpen="setOpen" title="Noppenplaat vloerverwarming "
            paragraphText="Noppenplaat vloerverwarming maakt gebruik van speciale platen met noppen waarin verwarmingsbuizen eenvoudig kunnen worden geplaatst. Dit systeem zorgt voor een snelle installatie en optimale warmteverdeling. Het is lichtgewicht en perfect voor renovaties, omdat het de opbouwhoogte minimaliseert en goed samenwerkt met verschillende vloerbedekkingen. "
            :voordelen="['Voordeel 1', 'Voordeel 2', 'Voordeel 3']" />
          <AccordionItem id="item3" :currentOpen="currentOpen" :setOpen="setOpen" title="Droogopbouw vloerverwarming"
            paragraphText="Droogopbouw vloerverwarming is een snel en eenvoudig systeem waarbij verwarmingsbuizen in een droogbouwplaat worden gelegd, zonder natte mortel. Dit maakt het ideaal voor renovaties en verhoogt de snelheid van de installatie. Het zorgt voor een efficiënte warmteverdeling en minimaliseert de opbouwhoogte, waardoor het geschikt is voor verschillende vloerbedekkingen."
            :voordelen="['Voordeel 1', 'Voordeel 2', 'Voordeel 3']" />
        </template>
      </Accordion>
    </div>
    <!-- Nieuwe container met content (zoals afbeelding) -->
    <ContentCardOne title="Daarom vloerverwarming via InsteQ" :listItems="[
      'U krijgt gratis deskundig advies en een offerte op maat',
      'Installatie door vakbekwame en volledig gecertificeerde experts',
      'Perfect in combinatie met onze andere duurzame installaties'
    ]" buttonText="Gratis advies aanvragen" imageSrc="floor-heating.png" linkUrl="heat-pump" linkText="Lees meer" />
    <div class="background-wrapper-white">
      <Accordion title="Handig om te weten">
        <template v-slot="{ currentOpen, setOpen, refs }">
          <AccordionItem id="item1" :currentOpen="currentOpen" :setOpen="setOpen" title="Je warmte gelijkmatig verdelen"
            paragraphText="Vloerverwarming biedt een gelijkmatige warmteverdeling door de hele ruimte, waardoor koude plekken verleden tijd zijn. Dit betekent dat u altijd geniet van een constante, comfortabele temperatuur, zonder koude voeten. Dankzij de efficiënte werking van vloerverwarming ervaart u een aangename warmte in elke hoek van de kamer, het hele jaar door."
            :voordelen="['Voordeel 1', 'Voordeel 2', 'Voordeel 3']" />
          <AccordionItem id="item2" :currentOpen="currentOpen" :setOpen="setOpen" title="Koelen met vloerverwarming"
            paragraphText="Wist u dat vloerverwarming niet alleen verwarmt, maar ook kan koelen? In combinatie met een warmtepomp kan vloerverwarming in de zomer de temperatuur verlagen, waardoor uw woning heerlijk koel blijft. Zo geniet u het hele jaar door van optimaal comfort, zowel in de winter als in de zomer!"
            :voordelen="['Voordeel 1', 'Voordeel 2', 'Voordeel 3']" />
          <AccordionItem id="item3" :currentOpen="currentOpen" :setOpen="setOpen" title="Meer warmte, minder energie"
            paragraphText="Vloerverwarming werkt efficiënter dan traditionele radiatoren doordat het op lagere temperaturen functioneert. Dit betekent dat u minder energie verbruikt om uw woning op een comfortabele temperatuur te houden, wat resulteert in lagere stookkosten. Door deze duurzame verwarmingsmethode bespaart u aanzienlijk op uw energierekening, terwijl u geniet van constante warmte."
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
  name: "floor-heating",
  components: {
    ContentCardOne,
    Accordion,
    AccordionItem,
    WhyCards,
  }
};
</script>

<style lang="scss" scoped></style>