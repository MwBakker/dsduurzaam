<template>
  <SubProduct>
    <div class="sub-product-content">
      <div class="sub-product">
        <QuoteCard class="sub-product-quote" title="Ok" description="Bieden een uitstekende balans tussen prestaties en
                                            installatiegemak. Ideaal voor zowel nieuwbouw als renovaties, deze systemen
                                            zorgen voor een comfortabele en energiezuinige verwarming en koeling van uw
                                            woning." />
        <SubProductCard title="Split" amount="2500" image="heat-pump" />
        <div class="sub-product">
          <QuoteCard class="sub-product-quote" title="Jawel" description="De Hydrosplit warmtepompen combineren maximale efficiëntie met eenvoudige
                                                installatie. Perfect voor grotere woningen, deze systemen zorgen voor een stabiele
                                                en duurzame warmtevoorziening, met flexibele installatie-opties die aan uw
                                                behoeften voldoen." />
          <SubProductCard title="Hydrosplit" amount="2500" image="heat-pump" />
        </div>
      </div>
    </div>
  </SubProduct>
</template>

<script>

import SubProduct from './Sub-product.vue';
import SubProductCard from '@/components/product-card/Sub-product-card.vue';
import QuoteCard from '@/components/Quote-card.vue';

export default {
  name: "floor-heating",
  components: {
    SubProduct,
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