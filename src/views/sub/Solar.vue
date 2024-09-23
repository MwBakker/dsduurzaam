<template>
  <SubProduct>
    <div class="sub-product-content">
      <div class="sub-product">
        <QuoteCard class="sub-product-quote" title="Schuin dak" description="Een populaire en efficiënte manier om zonne-
                                                        energie te benutten. Deze panelen worden geïnstalleerd op daken met een
                                                        hellingshoek, wat verschillende voordelen biedt. Ten eerste vangen schuine daken
                                                        meer zonlicht gedurende de dag, wat de energieopbrengst maximaliseert. Ten
                                                        tweede helpt de natuurlijke helling van het dak bij de zelfreiniging van de panelen,
                                                        aangezien regen en sneeuw gemakkelijker kunnen wegspoelen, waardoor het
                                                        onderhoud wordt verminderd." />
        <SubProductCard title="Schuin dak" amount="2500" image="solar" />
      </div>
      <div class="sub-product">
        <QuoteCard class="sub-product-quote" title="Plat dak" description="Bieden een flexibele en efficiënte manier om zonne-
                                                    energie te benutten. Deze installaties maken het mogelijk om de panelen onder de
                                                    optimale hoek en richting te plaatsen, waardoor de energieopbrengst kan worden
                                                    gemaximaliseerd. Op een plat dak worden de panelen meestal geplaatst in een
                                                    opstelling met een bepaalde hellingshoek, vaak met behulp van montagesystemen,
                                                    om de ideale blootstelling aan zonlicht te garanderen." />
        <SubProductCard title="Plat dak" amount="2500" image="solar" />
      </div>
    </div>
  </SubProduct>
</template>

<script>

import SubProduct from './Sub-product.vue';
import SubProductCard from '@/components/Sub-product-card.vue';
import QuoteCard from '@/components/Quote-card.vue';

export default {
  name: "Solar",
  components: {
    SubProduct,
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