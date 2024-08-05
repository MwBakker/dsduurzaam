<template>
  <div id="airco">
    <div id="quotes">
      <QuoteCard title="LG RAC sets (Single Split)" description="Bieden een perfecte combinatie van modern design en krachtige prestaties. 
                     Ideaal voor huishoudelijk gebruik, deze units zorgen voor een comfortabele 
                     warme en koele leefomgeving met minimale geluidsproductie." />
      <QuoteCard title="LG CAC sets (Casette)" description="Ontworpen voor commerciële en
                    grotere residentiële ruimtes. Deze units bieden flexibele installatieopties en zorgen
                    voor een optimale luchtverdeling, wat resulteert in een consistente en aangename
                    temperatuur in elke hoek van de ruimte." />
      <QuoteCard title="LG Multi F (Multi Split)" description="zijn perfect voor grotere woningen of commerciële
                    gebouwen waar meerdere ruimtes individueel gekoeld moeten worden. Met de
                    mogelijkheid om meerdere binnenunits aan één buiteneenheid te koppelen, bieden
                    deze systemen een energiezuinige en ruimtebesparende oplossing." />
    </div>
    <div class="product-row">
      <SubProductCard title="LG RAC sets (Single Split)" amount="2500" image="airco" />
      <SubProductCard title="LG CAC sets (Casette)" amount="2500" image="airco" />
      <SubProductCard title="LG Multi F (Multi Split)" amount="2500" image="airco" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import SubProductCard from '@/components/Sub-product-card.vue';
import QuoteCard from '@/components/Quote-card.vue';

export default {
  name: "Heat-pump",
  components: {
    SubProductCard,
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
#airco {
  margin: 0 auto;
  width: 1548px;
}

#quotes {
  display: flex;
  justify-content: space-around;
  margin: 64px 0;
}
</style>