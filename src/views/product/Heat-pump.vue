<template>
  <div id="heat-pump">
    <div id="intro-heat-pump" class="background-wrapper">
      <IntroductionCardSub title="Gasvrij wonen of werken met een warmtepomp"
        text="Ontdek de toekomst van energiezuinig wonen met onze warmtepompen. Bespaar flink op uw energiekosten en verminder uw CO₂-uitstoot terwijl u geniet van optimaal comfort in huis. Of het nu gaat om verwarmen, koelen of warm water, onze innovatieve warmtepompen bieden de perfecte, duurzame oplossing voor elke woning. "
        buttonText="Je knoptekst hier" :showButton="false" />
    </div>
    <div class="background-wrapper-white">
      <Accordion title="Welke soorten warmtepompen zijn er?">
        <template v-slot="{ currentOpen, setOpen, refs }">
          <AccordionItem id="item1" :currentOpen="currentOpen" :setOpen="setOpen" title="Hybride warmtepomp"
            paragraphText="Een hybride warmtepomp combineert een warmtepomp met een traditionele cv-ketel. Het systeem gebruikt de warmtepomp voor het grootste deel van de verwarming en schakelt over op de cv-ketel bij extreem koud weer. Dit zorgt voor efficiënter energieverbruik en lagere CO₂-uitstoot. "
            :voordelen="['Voordeel 1', 'Voordeel 2', 'Voordeel 3']" />
          <AccordionItem id="item2" :currentOpen="currentOpen" :setOpen="setOpen" title="Lucht/water warmtepomp"
            paragraphText="Een lucht/water warmtepomp haalt warmte uit de buitenlucht en zet deze om in energie voor verwarming en warm water in uw woning. Dit duurzame systeem verlaagt uw energiekosten aanzienlijk en werkt efficiënt, zelfs bij lage buitentemperaturen. Ideaal voor milieubewust en comfortabel wonen. "
            :voordelen="['Voordeel 1', 'Voordeel 2', 'Voordeel 3']" />
          <AccordionItem id="item3" :currentOpen="currentOpen" :setOpen="setOpen" title="Ventilatie warmtepomp"
            paragraphText="Een ventilatie warmtepomp hergebruikt de warmte uit afgevoerde binnenlucht om uw woning te verwarmen of van warm water te voorzien. Dit energiezuinige systeem zorgt voor een gezond binnenklimaat door ventilatie te combineren met warmteterugwinning, wat resulteert in lagere energiekosten en een duurzamer huis. "
            :voordelen="['Voordeel 1', 'Voordeel 2', 'Voordeel 3']" />
          <AccordionItem id="item4" :currentOpen="currentOpen" :setOpen="setOpen" title="Monoblock warmtepomp"
            paragraphText="Een monoblock warmtepomp is een compact systeem waarbij alle componenten in één buitenunit zijn geïntegreerd. Het onttrekt warmte uit de lucht om uw woning te verwarmen of te koelen. Dankzij de eenvoudige installatie en hoge energie-efficiëntie is het een ideale keuze voor zowel nieuwbouw als renovatie. "
            :voordelen="['Voordeel 1', 'Voordeel 2', 'Voordeel 3']" />
        </template>
      </Accordion>
    </div>
    <!-- Nieuwe container met content (zoals afbeelding) -->
    <ContentCardOne title="Daarom een warmtepomp via InsteQ" :listItems="[
      'U krijgt gratis deskundig advies en een offerte op maat',
      'Installatie door vakbekwame en volledig gecertificeerde experts',
      'Wij handelen het gehele subsidietraject voor u af',
      'Uitstekende service en onderhoud'
    ]" buttonText="Vraag adviesgesprek aan" imageSrc="home.png" linkUrl="heat-pump" linkText="Lees meer" />
    <div class="background-wrapper-white">
      <Accordion title="Handig om te weten">
        <template v-slot="{ currentOpen, setOpen, refs }">
          <AccordionItem id="item1" :currentOpen="currentOpen" :setOpen="setOpen"
            title="Efficiënt verwarmen én koelen voor optimaal comfort"
            paragraphText="Wist u dat warmtepompen niet alleen verwarmen, maar ook kunnen koelen? In de zomer kan een warmtepomp de werking omdraaien en warmte uit uw woning onttrekken, waardoor het heerlijk koel blijft. Dit maakt de warmtepomp een veelzijdige en energiezuinige oplossing voor zowel de warme als koude maanden."
            :voordelen="['Voordeel 1', 'Voordeel 2', 'Voordeel 3']" />
          <AccordionItem id="item2" :currentOpen="currentOpen" :setOpen="setOpen"
            title="Lever tot 4 keer meer energie dan je verbruikt"
            paragraphText="Wist u dat warmtepompen maar liefst 3 tot 4 keer meer energie leveren dan ze verbruiken? Dit komt doordat ze warmte uit de buitenlucht, grond of ventilatielucht halen en deze efficiënt omzetten in bruikbare energie voor uw woning. Hierdoor zijn warmtepompen extreem efficiënt en kunt u aanzienlijk besparen op uw energiekosten, terwijl u op een duurzame manier verwarmt en koelt. Dit maakt het een van de meest milieuvriendelijke verwarmingsopties voor moderne huizen."
            :voordelen="['Voordeel 1', 'Voordeel 2', 'Voordeel 3']" />
          <AccordionItem id="item3" :currentOpen="currentOpen" :setOpen="setOpen"
            title="Verhoog de waarde van je woning en bespaar energie"
            paragraphText="Wist u dat warmtepompen niet alleen de waarde van uw woning verhogen, maar ook uw energielabel verbeteren? Een energiezuinige woning is aantrekkelijker voor kopers, omdat het lagere energiekosten en een beter energielabel biedt. Bovendien kunt u momenteel nog subsidie krijgen op de installatie van een warmtepomp, wat de investering nog voordeliger maakt en de woningwaarde verder verhoogt. Dit maakt een warmtepomp een slimme keuze voor zowel uw portemonnee als de toekomst van uw huis."
            :voordelen="['Voordeel 1', 'Voordeel 2', 'Voordeel 3']" />
          <AccordionItem id="item4" :currentOpen="currentOpen" :setOpen="setOpen"
            title="Haal duurzame energie direct uit de lucht"
            paragraphText="Wist u dat warmtepompen lucht kunnen gebruiken als energiebron? Luchtwarmtepompen onttrekken warmte uit de buitenlucht, zelfs bij lage temperaturen, en zetten deze om in energie voor het verwarmen van uw woning. Dit maakt ze niet alleen efficiënt en milieuvriendelijk, maar ook voordelig in gebruik. Daarnaast komt u in aanmerking voor subsidies, wat de investering in een luchtwarmtepomp nog aantrekkelijker maakt. Een slimme manier om duurzaam te verwarmen met behulp van de buitenlucht!"
            :voordelen="['Voordeel 1', 'Voordeel 2', 'Voordeel 3']" />
        </template>
      </Accordion>
    </div>
    <WhyCards />
  </div>
</template>

<script>
import Accordion from '@/components/accordion/Accordion.vue';
import AccordionItem from '@/components/accordion/Accordion-item.vue';
import WhyCards from '@/components/Why-cards.vue';
import IntroductionCardSub from '@/components/cards/introduction/Introduction-card-sub.vue';
import ContentCardOneRed from '@/components/cards/content/Card-one-red.vue';

export default {
  name: "Heat-pump",
  components: {
    Accordion,
    AccordionItem,
    WhyCards,
    IntroductionCardSub,
    ContentCardOneRed
  }
};
</script>

<style lang="scss" scoped>
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

@media (max-width: 800px) {}
</style>