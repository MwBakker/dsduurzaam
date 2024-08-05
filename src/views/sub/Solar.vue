<template>
  <div id="solar">
    <div id="quotes">
      <QuoteCard title="Spouwmuurisolatie" description="Een populaire en efficiënte manier om zonne-
                                                        energie te benutten. Deze panelen worden geïnstalleerd op daken met een
                                                        hellingshoek, wat verschillende voordelen biedt. Ten eerste vangen schuine daken
                                                        meer zonlicht gedurende de dag, wat de energieopbrengst maximaliseert. Ten
                                                        tweede helpt de natuurlijke helling van het dak bij de zelfreiniging van de panelen,
                                                        aangezien regen en sneeuw gemakkelijker kunnen wegspoelen, waardoor het
                                                        onderhoud wordt verminderd." />
      <QuoteCard title="Vloerisolatie" description="Bieden een flexibele en efficiënte manier om zonne-
                                                    energie te benutten. Deze installaties maken het mogelijk om de panelen onder de
                                                    optimale hoek en richting te plaatsen, waardoor de energieopbrengst kan worden
                                                    gemaximaliseerd. Op een plat dak worden de panelen meestal geplaatst in een
                                                    opstelling met een bepaalde hellingshoek, vaak met behulp van montagesystemen,
                                                    om de ideale blootstelling aan zonlicht te garanderen." />
    </div>
    <div class="product-row">
      <SubProductCard title="Schuin dak" amount="2500" image="solar" />
      <SubProductCard title="Pat dak" amount="2500" image="solar" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

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
      // must direct through navigation component

      this.$root.$refs.navBar.routeGo(direction);
      //this.$root.$refs.A.foo();
    }
  }
};
</script>

<style lang="scss" scoped>
#solar {
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