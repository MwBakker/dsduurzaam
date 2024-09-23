<template>
  <SubProduct>
    <div class="sub-product-content">
      <div class="sub-product">
      </div>
      <div class="sub-product">
      </div>
      <div class="sub-product">
      </div>
      <div class="sub-product">
      </div>
      <div class="sub-product">
      </div>
      <div class="sub-product">
      </div>
      <!-- <QuoteCard title="Subsidie in ons beheer"
          description="Bij de meeste van onze duurzame installaties komt u in aanmerking voor subsidie. Wij verzorgen het volledige aanvraag- en afhandelingsproces, zodat u zich daar geen zorgen over hoeft te maken" />
        <ProductCard @click="route('heat-pump')" title="Warmtepomp" image="heat-pump" /> -->
      <!-- <div id="quotes">

        <QuoteCard title="Investering terugverdienen"
          description="Gemiddeld verdienen hun klanten hun investering binnen 2 tot 5 jaar terug." />
        <QuoteCard title="Snelle installatie"
          description="Direct leverbaar uit voorraad en geïnstalleerd door onze vakkundige en gecertificeerde installateurs." />
      </div>
      <div class="product-row">
        <ProductCard @click="route('airco')" title="Airconditioning" image="airco" />
        <ProductCard @click="route('floor-heating')" title="Vloerverwarming" image="floor-heating" />
        <ProductCard @click="route('solar')" title="Zonnepanelen" image="solar" />
      </div>
      <div id="second-row" class="product-row">
        <ProductCard @click="route('charge-points')" title="Laadpaal" image="charge-points" />
        <ProductCard @click="route('isolation')" title="Isolatie" image="isolation" />
        <ProductCard @click="route('advice')" title="Energielabel" image="advice" />
      </div> -->
    </div>
  </SubProduct>
</template>

<script>

import SubProduct from './Sub-product.vue';
import ProductCard from '@/components/product-card/Product-card.vue';
import QuoteCard from '@/components/Quote-card.vue';

export default {
  name: "Service",
  components: {
    SubProduct,
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