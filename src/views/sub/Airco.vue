<template>
  <div class="product">
    <h1>Een pakkende titel</h1>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
      aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
      enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
      ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
      adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
      voluptatem.</p>
    <div class="sub-product">
      <QuoteCard title="LG RAC sets (Single Split)" description="Bieden een perfecte combinatie van modern design en krachtige prestaties. 
                     Ideaal voor huishoudelijk gebruik, deze units zorgen voor een comfortabele 
                     warme en koele leefomgeving met minimale geluidsproductie." />
      <SubProductCard class="sub-card" title="LG RAC sets (Single Split)" amount="2500" image="airco" />
    </div>
    <hr>
    <div class="sub-product">
      <SubProductCard class="sub-card" title="LG CAC sets (Casette)" amount="2500" image="airco" />
      <QuoteCard title="LG CAC sets (Casette)" description="Ontworpen voor commerciële en
                    grotere residentiële ruimtes. Deze units bieden flexibele installatieopties en zorgen
                    voor een optimale luchtverdeling, wat resulteert in een consistente en aangename
                    temperatuur in elke hoek van de ruimte." />
    </div>
    <div class="sub-product">
      <QuoteCard title="LG CAC sets (Casette)" description="Ontworpen voor commerciële en
                    grotere residentiële ruimtes. Deze units bieden flexibele installatieopties en zorgen
                    voor een optimale luchtverdeling, wat resulteert in een consistente en aangename
                    temperatuur in elke hoek van de ruimte." />
      <SubProductCard class="sub-card" title="LG RAC sets (Single Split)" amount="2500" image="airco" />
    </div>
  </div>
</template>

<script>
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
      this.$root.$refs.navBar.routeGo(direction);
    }
  }
};
</script>