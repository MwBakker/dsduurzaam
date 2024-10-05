<template>
  <div id="about">
    <div class="background-wrapper">
      <IntroductionCardSub class="no-top-margin" title="Leuk dat u er bent! Wij zijn InsteQ"
        text="Wij zijn een jong en dynamisch bedrijf dat zich inzet voor een duurzamere toekomst. Met jarenlange ervaring in de installatietechniek helpen we u graag met duurzame en slimme oplossingen. Ons doel? Uw woning of bedrijfspand energiezuiniger en comfortabeler maken, zonder in te leveren op kwaliteit."
        text2="We geloven in een persoonlijke aanpak, waarbij we altijd met u meedenken om de beste oplossingen te vinden. Of u nu kiest voor een volledig duurzame installatie of stapsgewijs wilt verduurzamen, wij staan voor u klaar. Samen maken we de wereld een stukje groener, één installatie tegelijk."
        buttonText="Je knoptekst hier" :showButton="false" />
    </div>
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
import IntroductionCardSub from '@/components/cards/introduction/Introduction-card-sub.vue';
// import IntroductionCardSubTwo from '@/components/cards/introduction/Introduction-card-sub-two.vue';
import IntroductionCardSubFour from '@/components/cards/introduction/Introduction-card-sub-four.vue';

export default {
  name: "Service",
  components: {
    IntroductionCardSub,
    // IntroductionCardSubTwo,
    IntroductionCardSubFour,
  }
};
</script>

<style lang="scss" scoped></style>