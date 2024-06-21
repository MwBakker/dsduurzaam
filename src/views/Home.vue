<template>
  <div id="home">
    <div id="service-row">
      <ServiceLine title="Hoge kwaliteit" icon="quality" />
      <ServiceLine title="Tot 10 jaar garantie" icon="warranty" />
      <ServiceLine title="Direct leverbaar" icon="delivery" />
      <ServiceLine title="Binnen 1-3 dagen geplaatst" icon="installation" />
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
// @ is an alias to /src

import ProductCard from '@/components/Product-card.vue';
import ServiceLine from '@/components/Service-line.vue';

export default {
  name: "Home",
  components: {
    ProductCard,
    ServiceLine,
  },
  methods: {
    route(direction) {
      // must direct through navigation component

      // this.$root.$refs.navigation_bar.route(direction);
      //this.$root.$refs.A.foo();
    }
  }
};
</script>

<style lang="scss" scoped>
#home {
  margin: 0 auto;
  width: 1548px;
  height: 1400px;
}

#service-row {
  margin: 120px 0 96px 0; 
  display: flex;
  justify-content: space-between;
}

.product-row {
  margin: 0 auto;
  display: flex;
  justify-content: center;
}
</style>