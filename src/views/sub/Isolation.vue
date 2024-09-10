<template>
  <div class="product">
    <h1>Een pakkende titel</h1>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
      aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
      enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
      ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
      adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
      voluptatem.</p>F
    <div class="sub-product">
      <QuoteCard title="Spouwmuurisolatie" description="Door het vullen van de spouwmuur stijgt de oppervlaktetemperatuur van het
                                                binnenspouwblad en neemt de tocht in huis af. Daarnaast bespaart u met deze vorm
                                                van isolatie behoorlijk veel energiekosten." />
      <SubProductCard class="sub-card" title="Spouwmuurisolatie" amount="2500" image="isolation" />
    </div>
    <hr>
    <div class="sub-product">
      <SubProductCard class="sub-card" title="Vloerisolatie" amount="2500" image="isolation" />
      <QuoteCard title="Vloerisolatie" description="Wanneer er een kruipruimte onder uw woning aanwezig is, kan in de meeste
                                              gevallen de onderkant van de vloer geïsoleerd worden. Door vloerisolatie voorkomt u
                                              tocht vanuit de grind in uw woning en verlaagt u uw energiegebruik." />
    </div>
    <hr>
    <div class="sub-product">
      <QuoteCard title="Dakisolatie" description="Een ongeïsoleerd dak is een enorme energieverslinder gemiddeld zit 40% van de
                                                  kieren in een woning in het dak of in de aansluiting van dak naar de gevel. Met
                                                  dakisolatie kunt u veel energie en kosten besparen." />
      <SubProductCard title="Dakisolatie" amount="2500" image="isolation" />
    </div>
  </div>
</template>

<script>
import SubProductCard from '@/components/Sub-product-card.vue';
import QuoteCard from '@/components/Quote-card.vue';

export default {
  name: "Solar",
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