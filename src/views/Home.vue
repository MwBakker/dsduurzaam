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

#quotes {
  display: flex;
  justify-content: space-between;
  margin: 64px 0;
}

.product-row {
  margin: 0 auto;
  display: flex;
  justify-content: space-between; /* Zorgt voor gelijke ruimte tussen kaarten */
  flex-wrap: wrap;
}

.product-row > * {
  flex: 1 1 calc(32% - 20px); /* Zorgt ervoor dat kaarten niet breder zijn dan 32% van de container breedte */
  margin: 10px; /* Ruimte tussen de kaarten */
  box-sizing: border-box; /* Zorgt ervoor dat padding/margin geen invloed heeft op de breedte */
}

/* Zorg ervoor dat de laatste rij met 1 kaart niet over de hele breedte gaat */
.product-row:last-child > * {
  flex: 1 1 calc(32% - 20px); /* Zorgt ervoor dat de laatste kaart dezelfde breedte heeft als de andere kaarten */
  margin: 10px; /* Ruimte tussen de kaarten */
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

  .product-row > * {
    flex: 1 1 90%; /* Zorgt ervoor dat kaarten op mobiele schermen bijna de volledige breedte hebben */
    margin: 20px auto; /* Center de kaarten op mobiel */
  }
}
</style>