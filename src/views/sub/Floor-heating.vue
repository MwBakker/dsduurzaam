<template>
  <div id="floor-heating">
    <div id="quotes">
      <QuoteCard title="Ok" description="Bieden een uitstekende balans tussen prestaties en
                                            installatiegemak. Ideaal voor zowel nieuwbouw als renovaties, deze systemen
                                            zorgen voor een comfortabele en energiezuinige verwarming en koeling van uw
                                            woning." />
      <QuoteCard title="Jawel" description="De Hydrosplit warmtepompen combineren maximale efficiëntie met eenvoudige
                                                installatie. Perfect voor grotere woningen, deze systemen zorgen voor een stabiele
                                                en duurzame warmtevoorziening, met flexibele installatie-opties die aan uw
                                                behoeften voldoen." />
    </div>
    <div class="product-row">
      <SubProductCard title="Split" amount="2500" image="heat-pump" />
      <SubProductCard title="Hydrosplit" amount="2500" image="heat-pump" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import SubProductCard from '@/components/Sub-product-card.vue';
import QuoteCard from '@/components/Quote-card.vue';

export default {
  name: "floor-heating",
  components: {
    SubProductCard,
    QuoteCard,
  },
  methods: {
    route(direction) {
      // must direct through navigation component

      this.$root.$refs.navBar.routeGo(direction);
      //this.$root.$refs.A.foo();
    }
  }
};
</script>

<style lang="scss" scoped>
#floor-heating {
  margin: 0 auto;
  width: 1548px;
}

#quotes {
  display: flex;
  justify-content: space-around;
  margin: 64px 0;
}

.product-row {
  margin: 16vh 0 33vh 0;
}
</style>