<template>
  <div class="product">
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