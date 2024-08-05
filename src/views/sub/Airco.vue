<template>
  <div id="airco">
    <div id="quotes">
      <QuoteCard title="LG RAC sets (Single Split)"
        description="Bieden een perfecte combinatie van modern design en krachtige prestaties. 
                     Ideaal voor huishoudelijk gebruik, deze units zorgen voor een comfortabele 
                     warme en koele leefomgeving met minimale geluidsproductie." />
      <QuoteCard title="LG CAC sets (Casette)"
        description="Ontworpen voor commerciële en
                    grotere residentiële ruimtes. Deze units bieden flexibele installatieopties en zorgen
                    voor een optimale luchtverdeling, wat resulteert in een consistente en aangename
                    temperatuur in elke hoek van de ruimte."/>
      <QuoteCard title="LG Multi F (Multi Split)"
        description="zijn perfect voor grotere woningen of commerciële
                    gebouwen waar meerdere ruimtes individueel gekoeld moeten worden. Met de
                    mogelijkheid om meerdere binnenunits aan één buiteneenheid te koppelen, bieden
                    deze systemen een energiezuinige en ruimtebesparende oplossing." />
    </div>
    <div class="product-row">
      <ProductCard title="LG RAC sets (Single Split)" image="airco" />
      <ProductCard title="LG CAC sets (Casette)" image="airco" />
      <ProductCard title="LG Multi F (Multi Split)" image="floor-heating" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import ProductCard from '@/components/Product-card.vue';
import QuoteCard from '@/components/Quote-card.vue';

export default {
  name: "Home",
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
#airco {
  margin: 0 auto;
  width: 1548px;
}

#quotes {
  display: flex;
  justify-content: space-around;
  margin: 64px 0;
}

.product-row {
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

#second-row {
  justify-content: flex-start;
}
</style>