<template>
  <div id="subsidy">
    <div class="background-wrapper">
      <IntroductionCardSubFour centerTitle="Warmtepompen en verwarmende airco's" leftTitle="Investeringssubsidie"
        leftText="De belangrijkste subsidie is de Investeringssubsidie duurzame energie en energiebesparing (ISDE). Deze subsidie biedt een tegemoetkoming voor particulieren en bedrijven die een warmtepomp of een airconditioning met verwarmfunctie installeren, mits deze voldoen aan de eisen van de Rijksdienst voor Ondernemend Nederland (RVO). De subsidiebedragen variëren afhankelijk van het type systeem, zoals lucht-water of grond-water warmtepompen, en kunnen variëren tussen €1.000 en €4.500."
        rightTitle="Verlaagd BTW-tarief"
        rightText="U profiteert van een verlaagd btw-tarief van 9% op de installatiekosten van energiebesparende maatregelen, waaronder warmtepompen en airconditioning met verwarmfunctie. Dit verlaagt de totale installatiekosten aanzienlijk, waardoor de investering in duurzame installaties nog voordeliger wordt."
        thirdTitle="Energiebespaarlening"
        thirdText="U kunt, indien gewenst, gebruikmaken van de Energiebespaarlening via het Nationaal Warmtefonds. Deze lening biedt de mogelijkheid om tegen gunstige voorwaarden een financiering af te sluiten voor de aanschaf van duurzame installaties, zoals warmtepompen en airconditioning met verwarmfunctie."
        fourthTitle="Fiscale voordelen voor bedrijven"
        fourthText="Bedrijven kunnen profiteren van fiscale voordelen zoals de Energie-investeringsaftrek (EIA). Hiermee kan een deel van de investeringskosten van zowel warmtepompen als airconditioning met verwarmfunctie worden afgetrokken van de fiscale winst, waardoor de investering aantrekkelijker wordt." />
    </div>
    <div class="background-wrapper">
      <IntroductionCardSubFour centerTitle="Zonnepanelen" leftTitle="Investeringssubsidie"
        leftText="Airconditioningsystemen die zowel kunnen koelen als verwarmen als een warmtepomp, komen in aanmerking voor de Investeringssubsidie duurzame energie en energiebesparing (ISDE). De subsidiebedragen variëren afhankelijk van het type airco en de capaciteit van het systeem."
        rightTitle="BTW-teruggave"
        rightText="Als particulier kunt u ook de btw op de aanschaf en installatie van zonnepanelen terugvragen van de Belastingdienst. Dit kan een besparing van 21% op uw totale investering opleveren, wat de terugverdientijd aanzienlijk verkort."
        thirdTitle="Energiebespaarlening"
        thirdText="Via het Nationaal Warmtefonds kunt u gebruik maken van de Energiebespaarlening, waarmee u tegen gunstige voorwaarden een lening kunt afsluiten voor de aanschaf van duurzame installaties zoals zonnepanelen."
        fourthTitle="Subsidies voor bedrijven"
        fourthText="Voor bedrijven die willen investeren in zonnepanelen zijn er meerdere subsidies beschikbaar. De ISDE (Investeringssubsidie Duurzame Energie) biedt ondersteuning voor de aanschaf van zonnepanelen en andere duurzame energieprojecten. Daarnaast is de SDE++ (Stimulering Duurzame Energieproductie en Klimaattransitie) gericht op grotere installaties, zoals zonneparken. Via de MIA (Milieu-investeringsaftrek) en Vamil kunnen bedrijven fiscaal voordeel behalen op milieuvriendelijke investeringen, waardoor zonne-energie financieel aantrekkelijker wordt​." />
    </div>
  </div>
</template>

<script>
import IntroductionCardSubFour from '@/components/cards/introduction/Introduction-card-sub-four.vue';

export default {
  name: "Service",
  components: {
    IntroductionCardSubFour
  }
};
</script>

<style lang="scss" scoped>

@media (max-width: 800px) {
  #intro {
    height: 440px;
    padding: 0 16px;
  }

  #subdisy-intro-card {
    width: 100%;
    top: 0;
  }
}
</style>