<template>
  <div id="home">
    <div class="product-row" ref="productRow">
      <ProductCard route='heat-pump' title="Warmtepomp" image="heat-pump" />
      <ProductCard route='airco' title="Airconditioning" image="airco" />
      <ProductCard route='floor-heating' title="Vloerverwarming" image="floor-heating" />
      <ProductCard route='solar' title="Zonnepanelen" image="solar" />
      <ProductCard route="charge-points" title="Laadpaal" image="charge-points" />
      <ProductCard route='isolation' title="Isolatie" image="isolation" />
      <ProductCard route='advice' title="Energielabel" image="advice" />
    </div>
    <div id="quotes">
      <QuoteCard checkmark=1 title="Subsidie in ons beheer"
        description="Bij de meeste van onze duurzame installaties komt u in aanmerking voor subsidie. Wij verzorgen het volledige aanvraag- en afhandelingsproces, zodat u zich daar geen zorgen over hoeft te maken" />
      <QuoteCard checkmark=1 title="Snel terugverdiend"
        description="Klanten verdienen hun investering gemiddeld binnen 2 tot 5 jaar terug." />
      <QuoteCard checkmark=1 title="Snelle installatie"
        description="Direct leverbaar uit voorraad en geïnstalleerd door onze vakkundige en gecertificeerde installateurs." />
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
  data() {
    return {
      scrollInterval: null,
    };
  },
  methods: {
    route(direction) {
      this.$root.$refs.navBar.routeGo(direction);
    },
    autoScroll() {
      const container = this.$refs.productRow;
      const cardWidth = container.clientWidth / 3; // Breedte van één kaart
      const scrollAmount = cardWidth; // Scroll per kaart

      if (container.scrollWidth > container.clientWidth) {
        container.scrollBy({
          left: scrollAmount,
          behavior: 'smooth',
        });

        if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
          // Als je aan het einde bent, scroll terug naar het begin
          setTimeout(() => {
            container.scrollLeft = 0;
          }, 500); // Wacht even voordat je naar het begin scrolt
        }
      }
    },
  },
  mounted() {
    // Start het automatische scrollen na 5 seconden en elke 5 seconden daarna
    this.scrollInterval = setInterval(this.autoScroll, 5000);
  },
  beforeDestroy() {
    // Stop het scrollen als de component wordt vernietigd
    if (this.scrollInterval) {
      clearInterval(this.scrollInterval);
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
  overflow-x: hidden; /* Verberg de horizontale scrollbar */
  white-space: nowrap; /* Zorg ervoor dat de items niet op de volgende regel worden geplaatst */
}

.product-row > * {
  flex: 0 0 auto; /* Zorg ervoor dat de kinderen niet worden ingedrukt */
  width: calc(100% / 3); /* Zorg ervoor dat elke kaart 1/3 van de container breedte is */
}

::-webkit-scrollbar {
  height: 0; /* Verberg de scrollbar */
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
    overflow-x: scroll; /* Scrollbaar op kleinere schermen */
    white-space: normal; /* Sta toe dat de producten in de kolom worden geplaatst */
  }

  .product-row > * {
    width: 100%; /* Zorg ervoor dat de kaarten de volle breedte innemen op mobiele schermen */
  }
}
</style>
