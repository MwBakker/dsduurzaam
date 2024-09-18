<template>
  <SubProduct>
    <div class="sub-product-content">
      <ParagraphCard title="Wat is een warmtepomp?" subtitle="Eenvoudig verduurzamen." subtitle2="Direct besparen."
        paragraphText="Een warmtepomp is een duurzame en slimme manier om je woning te verwarmen en koelen. In plaats van gas gebruikt de warmtepomp warmte uit de buitenlucht, grond of het grondwater, wat je energiekosten verlaagt en je CO2-uitstoot vermindert. Zelfs op koude dagen werkt een warmtepomp efficiënt en zorgt het voor een comfortabel binnenklimaat. In combinatie met duurzame installaties zoals vloerverwarming en zonnepanelen wordt het rendement nog hoger, waardoor je energieverbruik verder daalt. Stap over op een warmtepomp en maak je huis klaar voor een energiezuinige toekomst!"
        buttonText="Waarom nu overstappen?" contactLink="/contact" image="home" imageAlt="Home" height="400px"
        :showButton="true" />

      <h1 class="accordion-title">Welke soorten warmtepompen zijn er?</h1>
      <div class="accordion-container">
        <Accordion>
          <template v-slot="{ currentOpen, setOpen, refs }">
            <AccordionItem id="item1" :currentOpen="currentOpen" :setOpen="setOpen" title="Hybride warmtepomp"
              paragraphText="Een hybride warmtepomp combineert een warmtepomp met een bestaande verwarmingsketel op gas. Dit systeem schakelt automatisch tussen de warmtepomp en de ketel op basis van de buitentemperatuur."
              :voordelen="['Voordeel 1', 'Voordeel 2', 'Voordeel 3']" />
            <AccordionItem id="item2" :currentOpen="currentOpen" :setOpen="setOpen" title="Elektrische warmtepomp"
              paragraphText="Een volledig elektrische warmtepomp zorgt voor zowel het opwarmen van uw huis als voor warm water. Dit betekent dat u geen gasaansluiting meer nodig heeft."
              :voordelen="['Voordeel 1', 'Voordeel 2', 'Voordeel 3']" />
            <AccordionItem id="item3" :currentOpen="currentOpen" :setOpen="setOpen" title="Lucht/water-warmtepomp"
              paragraphText="Een buitenlucht warmtepomp haalt energie uit de buitenlucht en gebruikt deze om het verwarmingswater in uw cv-systeem op te warmen."
              :voordelen="['Voordeel 1', 'Voordeel 2', 'Voordeel 3']" />
            <AccordionItem id="item4" :currentOpen="currentOpen" :setOpen="setOpen" title="Lucht/lucht-warmtepomp"
              paragraphText="Een buitenlucht warmtepomp haalt energie uit de buitenlucht en gebruikt deze om het verwarmingswater in uw cv-systeem op te warmen."
              :voordelen="['Voordeel 1', 'Voordeel 2', 'Voordeel 3']" />
            <AccordionItem id="item5" :currentOpen="currentOpen" :setOpen="setOpen" title="Water/water-warmtepomp"
              paragraphText="Een buitenlucht warmtepomp haalt energie uit de buitenlucht en gebruikt deze om het verwarmingswater in uw cv-systeem op te warmen."
              :voordelen="['Voordeel 1', 'Voordeel 2', 'Voordeel 3']" />
          </template>
        </Accordion>
      </div>

      <!--
                <div class="sub-product">
          <QuoteCard class="sub-product-quote" title="Split" description="Bieden een uitstekende balans tussen prestaties en installatiegemak. Ideaal voor zowel nieuwbouw als renovaties, deze systemen zorgen voor een comfortabele en energiezuinige verwarming en koeling van uw woning." />
          <div class="cards">
            <SubProductCard title="Split" amount="2500" image="heat-pump" />
            <SubProductCard title="Split" amount="2500" image="heat-pump" />
            <SubProductCard title="Split" amount="2500" image="heat-pump" />
          </div>
        </div>

        <hr>

        <div class="sub-product">
          <QuoteCard class="sub-product-quote" title="Split" description="Bieden een uitstekende balans tussen prestaties en installatiegemak. Ideaal voor zowel nieuwbouw als renovaties, deze systemen zorgen voor een comfortabele en energiezuinige verwarming en koeling van uw woning." />
          <div class="cards">
            <SubProductCard title="Split" amount="2500" image="heat-pump" />
            <SubProductCard title="Split" amount="2500" image="heat-pump" />
            <SubProductCard title="Split" amount="2500" image="heat-pump" />
          </div>
        </div>

        <hr>
        -->
      <ParagraphCardRight title="Waarom nu overstappen?" subtitle="Eenvoudig verduurzamen." subtitle2="Direct besparen."
        paragraphText="De snelste manier om duurzamer te gaan wonen is het combineren van je cv-ketel met een warmtepomp. Je start dan direct met verduurzamen én kan tot wel 70% op gas besparen. Omdat bij een hybride warmtepomp de cv-ketel zorgt voor het warme tapwater en de warmtepomp helpt om tijdens koude dagen je huis op temperatuur te houden, heb je hetzelfde comfort én een lagere energierekening. Benieuwd wat jij kan besparen?"
        buttonText="Meer info en producten " contactLink="/contact" image="home" imageAlt="Home" height="400px"
        :showButton="false" />

      <Banner :text="bannerText"></Banner>

    </div>
  </SubProduct>
</template>

<script>
import SubProduct from './Sub-product.vue';
import SubProductCard from '@/components/Sub-product-card.vue';
import QuoteCard from '@/components/Quote-card.vue';
import Accordion from "@/components/Accordion.vue";
import AccordionItem from '@/components/Accordion-item.vue';
import ParagraphCard from '@/components/Paragraph-card.vue';
import Banner from '@/components/Banner.vue';

export default {
  name: "HeatPump",
  components: {
    SubProduct,
    SubProductCard,
    QuoteCard,
    Accordion,
    AccordionItem,
    ParagraphCard,
    Banner,
  }, data() {
    return {
      showNav: false,
      bannerText: "Ontdek de ideale oplossing voor uw wensen en behoeften. Laat ons vrijblijvend een op maat gemaakte oplossing voor u ontwerpen – inclusief het berekenen en afhandelen van de subsidie. Vraag nu advies aan!"
    };
  }
};
</script>

<style scoped>
.accordion-title {
  text-align: center;
  /* Centreert de H1 */
  color: #284c78;
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 40px;
  /* Vergroot de ruimte onder de H1 om meer afstand tot de accordion-container te creëren */
}
</style>
