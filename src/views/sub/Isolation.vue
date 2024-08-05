<template>
  <div id="solar">
    <div id="quotes">
      <QuoteCard title="Spouwmuurisolatie" description="Door het vullen van de spouwmuur stijgt de oppervlaktetemperatuur van het
                                                binnenspouwblad en neemt de tocht in huis af. Daarnaast bespaart u met deze vorm
                                                van isolatie behoorlijk veel energiekosten." />
      <QuoteCard title="Vloerisolatie" description="Wanneer er een kruipruimte onder uw woning aanwezig is, kan in de meeste
                                              gevallen de onderkant van de vloer geïsoleerd worden. Door vloerisolatie voorkomt u
                                              tocht vanuit de grind in uw woning en verlaagt u uw energiegebruik." />
      <QuoteCard title="Dakisolatie" description="Een ongeïsoleerd dak is een enorme energieverslinder gemiddeld zit 40% van de
                                                  kieren in een woning in het dak of in de aansluiting van dak naar de gevel. Met
                                                  dakisolatie kunt u veel energie en kosten besparen." />
    </div>
    <div class="product-row">
      <ProductCard title="Spouwmuurisolatie" image="isolation" />
      <ProductCard title="Vloerisolatie" image="isolation" />
      <ProductCard title="Dakisolatie" image="isolation" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import ProductCard from '@/components/Product-card.vue';
import QuoteCard from '@/components/Quote-card.vue';

export default {
  name: "Isolation",
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