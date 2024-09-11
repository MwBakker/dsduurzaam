<template>
  <div id="home">
    <div class="product-container">
      <ProductCard route='heat-pump' title="Warmtepomp" image="home" subtitle="Van hybride tot en met all-electric"/>
      <ProductCard route='airco' title="Airconditioning" image="airco" subtitle="Zowel koelen als verwarmen"/>
      <ProductCard route='floor-heating' title="Vloerverwarming" image="floor-heating" subtitle="Nog duurzamer in combinatie met een warmtepomp"/>
      <ProductCard route='solar' title="Zonnepanelen" image="solar" subtitle="Je andere duurzame installaties voeden met eigen opgewerkte energie"/>
      <ProductCard route="charge-points" title="Laadpaal" image="charge-points" subtitle="Je auto opladen met eigen opgewerkte energie"/>
    </div>
    <div id="quotes">
      <QuoteCard checkmark=1 title="Subsidie in ons beheer"
        description="Bij de meeste van onze duurzame installaties komt u in aanmerking voor subsidie. Wij verzorgen het volledige aanvraag- en afhandelingsproces, zodat u zich daar geen zorgen over hoeft te maken" />
      <QuoteCard checkmark=1 title="Snel terugverdiend"
        description="Klanten verdienen hun investering gemiddeld binnen 2 tot 5 jaar terug." />
      <QuoteCard checkmark=1 title="Snelle installatie"
        description="Direct leverbaar uit voorraad en geïnstalleerd door onze vakkundige en gecertificeerde installateurs." />
    </div>
    <ParagraphCard
    title="Een hybride warmtepomp."
    subtitle="Eenvoudig verduurzamen. Direct besparen."
    paragraphText="De snelste manier om duurzamer te gaan wonen is het combineren van je cv-ketel met een warmtepomp. Je start dan direct met verduurzamen én kan tot wel 70% op gas besparen. Omdat bij een hybride warmtepomp de cv-ketel zorgt voor het warme tapwater en de warmtepomp helpt om tijdens koude dagen je huis op temperatuur te houden, heb je hetzelfde comfort én een lagere energierekening. Benieuwd wat jij kan besparen?"
    buttonText="Meer info en producten "
    contactLink="/contact"
    image="home"
    imageAlt="Home"
    height="400px"
  />
  <Banner></Banner>
  </div>
</template>

<script>
import Banner from '@/components/Banner.vue';
import ParagraphCard from '@/components/Paragraph-card.vue';
import ProductCard from '@/components/Product-card.vue';
import QuoteCard from '@/components/Quote-card.vue';

export default {
  name: "Home",
  components: {
    ProductCard,
    QuoteCard,
    ParagraphCard
  }
};
</script>

<style lang="scss" scoped>
#home {
  margin: 0 auto;
  width: 100%;
  max-width: 1548px; /* Totale breedte van de container */
  padding: 0 20px; /* Padding aan de zijkanten */
}

.product-container {
  display: flex;
  flex-wrap: wrap;
  gap: 8px; /* Ruimte tussen de kaarten */
  justify-content: space-between; /* Zorg ervoor dat de kaarten gelijkmatig verdeeld zijn */
}

.product-container > * {
  flex: 1 1 calc(20% - 8px); /* 5 kaarten naast elkaar met een gap van 8px */
  box-sizing: border-box;
  margin-bottom: 20px; /* Ruimte onder elke kaart */
}

/* Mobiele aanpassingen */
@media (max-width: 1024px) {
  #home {
    width: 100%;
    padding: 0 10px; /* Zorg voor wat padding aan de zijkanten op kleinere schermen */
  }

  .product-container {
    flex-direction: column;
    gap: 10px; /* Verminder de ruimte tussen de kaarten op mobiele schermen */
  }

  .product-container > * {
    width: 100%; /* Op mobiele schermen vult elke kaart de volle breedte */
  }
}
</style>