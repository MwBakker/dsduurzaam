<template>
  <div id="home">
    <div class="product-row">
      <ProductCard route='heat-pump' title="Warmtepomp" image="heat-pump" />
      <ProductCard route='airco' title="Airconditioning" image="airco" />
      <ProductCard route='floor-heating' title="Vloerverwarming" image="floor-heating" />
      <ProductCard route='solar' title="Zonnepanelen" image="solar" />
      <ProductCard route="charge-points" title="Laadpaal" image="charge-points" />
      <ProductCard route='isolation' title="Isolatie" image="isolation" />
      <ProductCard route='advice' title="Energielabel" image="advice" />
    </div>
    <div id="quotes">
      <QuoteCard checkmark=true title="Subsidie in ons beheer"
        description="Bij de meeste van onze duurzame installaties komt u in aanmerking voor subsidie. Wij verzorgen het volledige aanvraag- en afhandelingsproces, zodat u zich daar geen zorgen over hoeft te maken" />
      <QuoteCard checkmark=true title="Investering terugverdienen"
        description="Gemiddeld verdienen hun klanten hun investering binnen 2 tot 5 jaar terug." />
      <QuoteCard checkmark=true title="Snelle installatie"
        description="Direct leverbaar uit voorraad en geïnstalleerd door onze vakkundige en gecertificeerde installateurs." />
    </div>
    <Banner />
  </div>
</template>

<script>
import ProductCard from '@/components/Product-card.vue';
import QuoteCard from '@/components/Quote-card.vue';
import Banner from '@/components/Banner.vue';

export default {
  name: "Home",
  components: {
    ProductCard,
    QuoteCard,
    Banner,
  },
  methods: {
    route(direction) {
      this.$root.$refs.navBar.routeGo(direction);
    }
  }
};
</script>

<style lang="scss" scoped>
#home {
  margin: 0 auto;
  width: 1548px;
}

.product-row {
  margin: 1vh 0;
  display: flex;
  justify-content: space-around;
  overflow-x: scroll;
}

::-webkit-scrollbar {
  height: 3px;
}

::-webkit-scrollbar-thumb {
  border-radius: 12px;
}

#quotes {
  display: flex;
  justify-content: space-between;
  margin: 12vh 0;
}


/* Mobiele aanpassingen */
@media (max-width: 1024px) {
  #home {
    width: 100%;
  }

  #quotes {
    flex-direction: column;
    height: 500px;
  }

  .product-row {
    flex-direction: column;
    justify-content: center;
  }

}
</style>