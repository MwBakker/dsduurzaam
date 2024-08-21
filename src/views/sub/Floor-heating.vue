<template>
  <div class="product" id="floor-heating">
    <div id="quotes">
      <QuoteCard title="Ok" description="Bieden een uitstekende balans tussen prestaties en
                                            installatiegemak. Ideaal voor zowel nieuwbouw als renovaties, deze systemen
                                            zorgen voor een comfortabele en energiezuinige verwarming en koeling van uw
                                            woning." />
      <QuoteCard title="Jawel" description="De Hydrosplit warmtepompen combineren maximale efficiëntie met eenvoudige
                                                installatie. Perfect voor grotere woningen, deze systemen zorgen voor een stabiele
                                                en duurzame warmtevoorziening, met flexibele installatie-opties die aan uw
                                                behoeften voldoen." />
    </div>
    <div class="product-row">
      <SubProductCard title="Split" amount="2500" image="heat-pump" />
      <SubProductCard title="Hydrosplit" amount="2500" image="heat-pump" />
    </div>
  </div>
</template>

<script>

import SubProductCard from '@/components/Sub-product-card.vue';
import QuoteCard from '@/components/Quote-card.vue';

export default {
  name: "floor-heating",
  components: {
    SubProductCard,
    QuoteCard,
  },
  methods: {
    route(direction) {
      this.$root.$refs.navBar.routeGo(direction);
    }
  }
};
</script>