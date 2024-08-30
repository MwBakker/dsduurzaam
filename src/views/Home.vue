<template>
  <div id="home">
    <div id="quotes">
      <QuoteCard checkmark=true title="Subsidie in ons beheer"
        description="Bij de meeste van onze duurzame installaties komt u in aanmerking voor subsidie. Wij verzorgen het volledige aanvraag- en afhandelingsproces, zodat u zich daar geen zorgen over hoeft te maken" />
      <QuoteCard checkmark=true title="Investering terugverdienen"
        description="Gemiddeld verdienen hun klanten hun investering binnen 2 tot 5 jaar terug." />
      <QuoteCard checkmark=true title="Snelle installatie"
        description="Direct leverbaar uit voorraad en geïnstalleerd door onze vakkundige en gecertificeerde installateurs." />
    </div>
    <div class="product-row">
      <ProductCard @click="route('heat-pump')" title="Warmtepomp" image="heat-pump" />
      <ProductCard @click="route('airco')" title="Airconditioning" image="airco" />
      <ProductCard @click="route('floor-heating')" title="Vloerverwarming" image="floor-heating" />
      <ProductCard @click="route('solar')" title="Zonnepanelen" image="solar" />
    </div>
    <div id="second-row" class="product-row">
      <ProductCard @click="route('charge-points')" title="Laadpaal" image="charge-points" />
      <ProductCard @click="route('isolation')" title="Isolatie" image="isolation" />
      <ProductCard @click="route('advice')" title="Energielabel" image="advice" />
    </div>
  </div>
</template>

<script>
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

#quotes {
  display: flex;
  justify-content: space-between;
  margin: 64px 0;
}

.product-row {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

#second-row {
  justify-content: center;
}


@media (max-width: 1548px) {
  #home {
    width: 100%;
  }

  #quotes {
    flex-direction: column;
    height: 500px;
  }

  .product-row {
    flex-direction: column;
  }
}
</style>