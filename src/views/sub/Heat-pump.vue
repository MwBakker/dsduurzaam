<template>
  <SubProduct>
    <div class="sub-product-content">
      <div class="sub-product">
        <QuoteCard class="sub-product-quote" title="Split" description="Bieden een uitstekende balans tussen prestaties en
                                            installatiegemak. Ideaal voor zowel nieuwbouw als renovaties, deze systemen
                                            zorgen voor een comfortabele en energiezuinige verwarming en koeling van uw
                                            woning." />
        <div class="cards">
          <SubProductCard title="Split" amount="2500" image="heat-pump" />
          <SubProductCard title="Split" amount="2500" image="heat-pump" />
          <SubProductCard title="Split" amount="2500" image="heat-pump" />
        </div>
      </div>
      <hr>
      <div class="sub-product">
        <QuoteCard class="sub-product-quote" title="Hydrosplit" description="De Hydrosplit warmtepompen combineren maximale efficiëntie met eenvoudige
                                                installatie. Perfect voor grotere woningen, deze systemen zorgen voor een stabiele
                                                en duurzame warmtevoorziening, met flexibele installatie-opties die aan uw
                                                behoeften voldoen." />
        <div class="cards">
          <SubProductCard title="Hydrosplit" amount="2500" image="heat-pump" />
        </div>
      </div>
      <hr>
      <div class="sub-product">
        <QuoteCard class="sub-product-quote" title="Monobloc" description="Bieden een alles-in-één oplossing voor verwarming en
                                              koeling. Met een compact ontwerp dat eenvoudig te installeren is, zijn deze systemen
                                              ideaal voor woningen met beperkte ruimte, zonder in te boeten op efficiëntie en
                                              comfort." />
        <div class="cards">
          <SubProductCard title="Monobloc" amount="2500" image="heat-pump" />
        </div>
      </div>
      <hr>
      <div class="sub-product">
        <QuoteCard class="sub-product-quote" title="Warmtepompboilers" description="Onze warmtepompboilers zorgen voor een constante toevoer van warm water op een
                                                  energiezuinige manier. Ze zijn eenvoudig te installeren en vormen een
                                                  milieuvriendelijk alternatief voor traditionele boilers, waardoor u op lange termijn
                                                  bespaart op energiekosten." />
        <div class="cards">
          <SubProductCard title="Warmtepompboilers" amount="2500" image="heat-pump" />
        </div>
      </div>
    </div>
  </SubProduct>
</template>

<script>

import SubProduct from './Sub-product.vue';
import SubProductCard from '@/components/Sub-product-card.vue';
import QuoteCard from '@/components/Quote-card.vue';

export default {
  name: "Heat-pump",
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