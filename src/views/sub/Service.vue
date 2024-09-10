<template>
  <div class="product">
    <h1>Een pakkende titel</h1>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
      aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
      enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
      ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
      adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
      voluptatem.</p>
    <div id="quotes">
      <QuoteCard title="Subsidie in ons beheer"
        description="Bij de meeste van onze duurzame installaties komt u in aanmerking voor subsidie. Wij verzorgen het volledige aanvraag- en afhandelingsproces, zodat u zich daar geen zorgen over hoeft te maken" />
      <QuoteCard title="Investering terugverdienen"
        description="Gemiddeld verdienen hun klanten hun investering binnen 2 tot 5 jaar terug." />
      <QuoteCard title="Snelle installatie"
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
  name: "Service",
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