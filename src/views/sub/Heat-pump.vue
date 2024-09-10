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
      <QuoteCard title="Split" description="Bieden een uitstekende balans tussen prestaties en
                                            installatiegemak. Ideaal voor zowel nieuwbouw als renovaties, deze systemen
                                            zorgen voor een comfortabele en energiezuinige verwarming en koeling van uw
                                            woning." />
      <SubProductCard class="sub-card" title="Split" amount="2500" image="heat-pump" />
    </div>
    <hr>
    <div class="sub-product">
      <SubProductCard class="sub-card" title="Hydrosplit" amount="2500" image="heat-pump" />
      <QuoteCard title="Hydrosplit" description="De Hydrosplit warmtepompen combineren maximale efficiëntie met eenvoudige
                                                installatie. Perfect voor grotere woningen, deze systemen zorgen voor een stabiele
                                                en duurzame warmtevoorziening, met flexibele installatie-opties die aan uw
                                                behoeften voldoen." />
    </div>
    <hr>
    <div class="sub-product">
      <QuoteCard title="Monobloc" description="Bieden een alles-in-één oplossing voor verwarming en
                                              koeling. Met een compact ontwerp dat eenvoudig te installeren is, zijn deze systemen
                                              ideaal voor woningen met beperkte ruimte, zonder in te boeten op efficiëntie en
                                              comfort." />
      <SubProductCard class="sub-card" title="Monobloc" amount="2500" image="heat-pump" />
    </div>
    <hr>
    <div class="sub-product">
      <SubProductCard class="sub-card" title="Warmtepompboilers" amount="2500" image="heat-pump" />
      <QuoteCard title="Warmtepompboilers" description="Onze warmtepompboilers zorgen voor een constante toevoer van warm water op een
                                                  energiezuinige manier. Ze zijn eenvoudig te installeren en vormen een
                                                  milieuvriendelijk alternatief voor traditionele boilers, waardoor u op lange termijn
                                                  bespaart op energiekosten." />
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