<template>
  <div id="about">
    <div class="background-wrapper">
      <IntroductionCardSubTwo centerTitle="Waar wij voor staan" leftTitle="Samen werken aan uw duurzame installatie"
        :leftText="[
          'Bij InsteQ geloven we in een persoonlijke aanpak. We gaan samen met u een traject aan, waarbij we van begin tot eind nauw samenwerken. Het begint allemaal met een grondige opname van uw situatie. Hier bespreken we de gewenste installatie en kijken we naar de beste oplossing voor uw woning of bedrijfspand.',
          'Daarnaast nemen we de tijd om samen de beschikbare subsidies en financiële voordelen te bespreken. We berekenen ook de terugverdientijd van de investering, zodat u een helder beeld hebt van wat u kunt verwachten op de lange termijn. Vanaf de planning tot de uiteindelijke oplevering en zelfs daarna met onze nazorg, staan wij voor u klaar.',
          'Onze service stopt niet bij de installatie, maar gaat verder met advies en ondersteuning voor jarenlang optimaal gebruik van uw duurzame installatie.'
        ]" rightTitle="Hoogwaardige installaties voor de beste resultaten" :rightText="[
          'Bij InsteQ staat kwaliteit altijd voorop. Wij leveren enkel hoogwaardige installaties die voldoen aan de strengste normen op het gebied van duurzaamheid en efficiëntie. Of het nu gaat om een warmtepomp, laadpaal, airco, zonnepanelen of vloerverwarming, onze installaties zijn zorgvuldig geselecteerd om maximale prestaties en een lange levensduur te garanderen.',
          'Onze ervaren monteurs en installatietechnici zorgen ervoor dat elk project met precisie en vakmanschap wordt uitgevoerd. We maken gebruik van de nieuwste technieken en materialen om ervoor te zorgen dat uw installatie betrouwbaar en energiezuinig is.',
          'Na oplevering blijven wij beschikbaar voor onderhoud en eventuele vragen, zodat u kunt blijven vertrouwen op een systeem dat comfort en kostenbesparingen biedt, jaar in jaar uit.'
        ]" />
    </div>
  </div>
</template>

<script>
import IntroductionCardSubTwo from '@/components/cards/introduction/Introduction-card-sub-two.vue';

export default {
  name: "Service",
  components: {
    IntroductionCardSubTwo,
  }
};
</script>

<style lang="scss" scoped>
</style>