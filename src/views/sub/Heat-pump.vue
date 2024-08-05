<template>
  <div id="solar">
    <div id="quotes">
      <QuoteCard title="Split" description="Bieden een uitstekende balans tussen prestaties en
                                            installatiegemak. Ideaal voor zowel nieuwbouw als renovaties, deze systemen
                                            zorgen voor een comfortabele en energiezuinige verwarming en koeling van uw
                                            woning." />
      <QuoteCard title="Hydrosplit" description="De Hydrosplit warmtepompen combineren maximale efficiëntie met eenvoudige
                                                installatie. Perfect voor grotere woningen, deze systemen zorgen voor een stabiele
                                                en duurzame warmtevoorziening, met flexibele installatie-opties die aan uw
                                                behoeften voldoen." />
      <QuoteCard title="Monobloc" description="Bieden een alles-in-één oplossing voor verwarming en
                                              koeling. Met een compact ontwerp dat eenvoudig te installeren is, zijn deze systemen
                                              ideaal voor woningen met beperkte ruimte, zonder in te boeten op efficiëntie en
                                              comfort." />
      <QuoteCard title="Warmtepompboilers" description="Onze warmtepompboilers zorgen voor een constante toevoer van warm water op een
                                                  energiezuinige manier. Ze zijn eenvoudig te installeren en vormen een
                                                  milieuvriendelijk alternatief voor traditionele boilers, waardoor u op lange termijn
                                                  bespaart op energiekosten." />
    </div>
    <div class="product-row">
      <ProductCard title="Split" image="heat-pump" />
      <ProductCard title="Hydrosplit" image="heat-pump" />
      <ProductCard title="Monobloc" image="heat-pump" />
      <ProductCard title="Warmtepompboilers" image="heat-pump" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import ProductCard from '@/components/Product-card.vue';
import QuoteCard from '@/components/Quote-card.vue';

export default {
  name: "Heatpump",
  components: {
    ProductCard,
    QuoteCard,
  },
  methods: {
    route(direction) {
      // must direct through navigation component

      this.$root.$refs.navBar.routeGo(direction);
      //this.$root.$refs.A.foo();
    }
  }
};
</script>

<style lang="scss" scoped>
#solar {
  margin: 0 auto;
  width: 1548px;
}

#quotes {
  display: flex;
  justify-content: space-around;
  margin: 64px 0;
}

.product-row {
  margin: 32px 0;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>