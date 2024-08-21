<template>
  <div class="product">
    <div class="sub-product">
      <QuoteCard title="Ok dan" description="Een populaire en efficiënte manier om zonne-
                                                        energie te benutten. Deze panelen worden geïnstalleerd op daken met een
                                                        hellingshoek, wat verschillende voordelen biedt. Ten eerste vangen schuine daken
                                                        meer zonlicht gedurende de dag, wat de energieopbrengst maximaliseert. Ten
                                                        tweede helpt de natuurlijke helling van het dak bij de zelfreiniging van de panelen,
                                                        aangezien regen en sneeuw gemakkelijker kunnen wegspoelen, waardoor het
                                                        onderhoud wordt verminderd." />
      <SubProductCard class="sub-card" title="Schuin dak" amount="2500" image="solar" />
    </div>
    <hr>
    <div class="sub-product">
      <SubProductCard class="sub-card" title="Warmtepompboilers" amount="2500" image="heat-pump" />
      <QuoteCard title="Ah toe maar" description="Bieden een flexibele en efficiënte manier om zonne-
                                                    energie te benutten. Deze installaties maken het mogelijk om de panelen onder de
                                                    optimale hoek en richting te plaatsen, waardoor de energieopbrengst kan worden
                                                    gemaximaliseerd. Op een plat dak worden de panelen meestal geplaatst in een
                                                    opstelling met een bepaalde hellingshoek, vaak met behulp van montagesystemen,
                                                    om de ideale blootstelling aan zonlicht te garanderen." />
    </div>
  </div>
</template>

<script>

import SubProductCard from '@/components/Sub-product-card.vue';
import QuoteCard from '@/components/Quote-card.vue';

export default {
  name: "advice",
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