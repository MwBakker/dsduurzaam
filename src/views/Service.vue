<template>
  <div id="service">
    <div class="background-wrapper">
      <IntroductionCardSubTwo centerTitle="Onze service" leftTitle="Op aanvraag" :leftText="[
          'Wij leveren service op aanvraag van de klant, precies wanneer u dat nodig heeft. Onze ervaren technici staan klaar om snel en efficiënt in te grijpen, zodat uw duurzame installaties optimaal blijven presteren. Of het nu gaat om onderhoud of reparatie, we zorgen ervoor dat uw systemen probleemloos blijven functioneren.'
        ]" rightTitle="Op contractbasis" :rightText="[
          'Wij bieden service op contractbasis aan, waarbij uw duurzame installaties periodiek worden onderhouden voor optimale prestaties. Dit servicecontract wordt aangeboden bij de oplevering van uw installatie, of op aanvraag van de klant. Met een contract bent u verzekerd van regelmatige controles en snelle ondersteuning, wat zorgt voor een langere levensduur van uw systemen.'
        ]" />
    </div>


    <WhyCards />
  </div>
</template>

<script>
import WhyCards from '@/components/Why-cards.vue';
import IntroductionCardSubTwo from '@/components/cards/introduction/Introduction-card-sub-two.vue';

export default {
  name: "Service",
  components: {
    WhyCards,
    IntroductionCardSubTwo
  }
};
</script>

<style lang="scss" scoped>

</style>