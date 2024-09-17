<template>
  <SubProduct>
    <div class="page-container">
      <div class="sub-product-content">
        <ParagraphCard title="Wat is een warmtepomp en waarom nu overstappen?" subtitle="Eenvoudig verduurzamen." subtitle2="Direct besparen."
        paragraphText="De snelste manier om duurzamer te gaan wonen is het combineren van je cv-ketel met een warmtepomp. Je start dan direct met verduurzamen én kan tot wel 70% op gas besparen. Omdat bij een hybride warmtepomp de cv-ketel zorgt voor het warme tapwater en de warmtepomp helpt om tijdens koude dagen je huis op temperatuur te houden, heb je hetzelfde comfort én een lagere energierekening. Benieuwd wat jij kan besparen?"
        buttonText="Ons aanbod warmtepompen" contactLink="/contact" image="home" imageAlt="Home" height="400px" />
        <!-- New H1 Above Accordion -->
        <h1 class="accordion-title">Welke soorten warmtepompen zijn er?</h1>

        <!-- Accordion Container -->
        <div class="accordion-container">
          <!-- Accordion Component -->
          <Accordion>
            <template v-slot="{ currentOpen, setOpen, refs }">
              <AccordionItem
                id="item1"
                :currentOpen="currentOpen"
                :setOpen="setOpen"
                title="Hybride warmtepomp"
              >
                <p>Een hybride warmtepomp combineert een warmtepomp met een bestaande verwarmingsketel op gas. Dit systeem schakelt automatisch tussen de warmtepomp en de ketel op basis van de buitentemperatuur.</p>
              </AccordionItem>
              <AccordionItem
                id="item2"
                :currentOpen="currentOpen"
                :setOpen="setOpen"
                title="Elektrische warmtepomp"
              >
                <p>Een volledig elektrische warmtepomp zorgt voor zowel het opwarmen van uw huis als voor warm water. Dit betekent dat u geen gasaansluiting meer nodig heeft.</p>
              </AccordionItem>
              <AccordionItem
                id="item3"
                :currentOpen="currentOpen"
                :setOpen="setOpen"
                title="Lucht/water-warmtepomp"
              >
                <p>Een buitenlucht warmtepomp haalt energie uit de buitenlucht en gebruikt deze om het verwarmingswater in uw cv-systeem op te warmen.</p>
              </AccordionItem>
              <AccordionItem
                id="item4"
                :currentOpen="currentOpen"
                :setOpen="setOpen"
                title="Lucht/lucht-warmtepomp"
              >
                <p>Een buitenlucht warmtepomp haalt energie uit de buitenlucht en gebruikt deze om het verwarmingswater in uw cv-systeem op te warmen.</p>
              </AccordionItem>
              <AccordionItem
                id="item5"
                :currentOpen="currentOpen"
                :setOpen="setOpen"
                title="Water/water-warmtepomp"
              >
                <p>Een buitenlucht warmtepomp haalt energie uit de buitenlucht en gebruikt deze om het verwarmingswater in uw cv-systeem op te warmen.</p>
              </AccordionItem>
            </template>
          </Accordion>
        </div>

        <!-- Quote Cards Section -->

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
      </div>
    </div>
  </SubProduct>
</template>



<script>
import SubProduct from './Sub-product.vue';
import SubProductCard from '@/components/Sub-product-card.vue';
import QuoteCard from '@/components/Quote-card.vue';
import Accordion from "@/components/Accordion.vue";
import AccordionItem from '@/components/AccordionItem.vue';
import ParagraphCard from '@/components/Paragraph-card.vue';

export default {
  name: "HeatPump",
  components: {
    SubProduct,
    SubProductCard,
    QuoteCard,
    Accordion,
    AccordionItem,
    ParagraphCard
  }
};
</script>

<style scoped>
.page-container {
  padding: 0 20px; /* Voeg 20px padding aan beide zijden van de pagina toe */
  box-sizing: border-box; /* Zorg ervoor dat padding wordt meegerekend in de totale breedte */
}

.sub-product-content {
  max-width: 1548px; /* Maximaliseer de breedte van de inhoud tot 1548px */
  margin: 0 auto; /* Centreer de inhoud horizontaal */
}

.title-description {
  text-align: left; /* Verander de tekst-alignment naar links */
  margin-bottom: 50px; /* Vergroot de ruimte tussen de titel en de volgende sectie */
}

.title-description h1 {
  font-size: 2.5rem;
  margin-bottom: 20px; /* Vergroot de ruimte onder de h1 */
  color: #284c78;
}

.title-description p {
  font-size: 1.25rem;
  color: #333;
  margin: 0 0 50px 0; /* Ruimte van 50px onder elke <p> tag */
  line-height: 1.875rem;
}

.title-description p:last-child {
  margin-bottom: 0; /* Verwijder de margin onder de laatste <p> tag om ongewenste ruimte onder de laatste paragraaf te voorkomen */
}

.highlight-text {
  font-weight: 600; /* Maak de tekst vetgedrukt */
  font-size: 1.25rem;
  color: #333;
}

.accordion-title {
  text-align: center; /* Centreer de H1 */
  color: #284c78;
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 40px; /* Vergroot de ruimte onder de H1 om meer afstand tot de accordion-container te creëren */
  padding-top: 50px;
}

.accordion-container {
  display: flex;
  justify-content: center; /* Centreert de accordion horizontaal */
  width: 100%; /* Zorgt ervoor dat de container de volledige breedte van het scherm benut */
  align-items: flex-start; /* Zorgt ervoor dat de accordion niet gecentreerd is in de hoogte, maar aan de bovenkant begint */
}

.accordion {
  display: flex;
  flex-direction: column; /* Zorgt ervoor dat de items onder elkaar staan */
  gap: 10px; /* Ruimte tussen de items */
  max-width: 50%; /* Maximaliseert de breedte van de accordion tot 50% van de container */
}

.quote-cards {
  margin-top: 20px; /* Ruimte boven de quote-cards sectie */
}
</style>


