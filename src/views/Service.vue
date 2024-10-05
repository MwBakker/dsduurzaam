<template>
  <div id="service">
    <div class="background-wrapper">
      <IntroductionCardSub class="no-top-margin" title="Zorgeloos besparen door uitstekende service"
        text="Goede service is essentieel voor het optimaal functioneren en de levensduur van uw duurzame installatie. Door het verlenen van onderhoud, verzekert u energiezuinig gebruik en maximaal rendement. Bij InsteQ staan vakprofessionals voor u klaar met diepgaande kennis en advies. Heeft u specifieke vragen over uw installatie of wilt u meer informatie over onze diensten? Neem gerust contact met ons op, wij helpen u graag verder om uw installatie in topconditie te houden."
        buttonText="Je knoptekst hier" :showButton="false" />
    </div>
    <div class="background-wrapper">
      <IntroductionCardSubTwo centerTitle="Onze service" leftTitle="Op aanvraag"
        leftText="Wij leveren service op aanvraag van de klant, precies wanneer u dat nodig heeft. Onze ervaren technici staan klaar om snel en efficiënt in te grijpen, zodat uw duurzame installaties optimaal blijven presteren. Of het nu gaat om onderhoud of reparatie, we zorgen ervoor dat uw systemen probleemloos blijven functioneren."
        rightTitle="Op contractbasis"
        rightText="Wij bieden service op contractbasis aan, waarbij uw duurzame installaties periodiek worden onderhouden voor optimale prestaties. Dit servicecontract wordt aangeboden bij de oplevering van uw installatie, of op aanvraag van de klant. Met een contract bent u verzekerd van regelmatige controles en snelle ondersteuning, wat zorgt voor een langere levensduur van uw systemen." />
    </div>
    <div class="background-wrapper">
      <div class="why-cards-container">
        <h2>Waarom is service belangrijk?</h2>
        <div class="why-cards">
          <WhyCard title="Langere levensduur"
            description="Regelmatig onderhoud verlengt de levensduur van de installatie en vermindert de kans op defecten."
            icon="lifetime" />
          <WhyCard title="Hoger rendement"
            description="Goed onderhoud zorgt voor een efficiëntere werking, wat resulteert in hoger rendement en lagere energiekosten."
            icon="interest-rate" />
          <WhyCard title="Voorkomt reparaties"
            description="Regelmatige controles voorkomen onverwachte, dure reparaties door problemen vroegtijdig te detecteren en op te lossen."
            icon="maintenance" />
          <WhyCard title="Garantiebehoud"
            description="Regelmatige service is vaak vereist door fabrikanten om de garantie op de installatie te behouden."
            icon="protection" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WhyCard from '@/components/cards/Why-card.vue';
import IntroductionCardSub from '@/components/cards/introduction/Introduction-card-sub.vue';
import IntroductionCardSubTwo from '@/components/cards/introduction/Introduction-card-sub-two.vue';

export default {
  name: "Service",
  components: {
    WhyCard,
    IntroductionCardSub,
    IntroductionCardSubTwo
  }
};
</script>

<style lang="scss" scoped>
.background-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% - 40px);
  background-color: rgba(238, 238, 238, 0.4117647059);
  padding: 20px 0;
  box-sizing: border-box;
  margin: 0 auto 50px;
  position: relative;
  margin-top: 20px;
}

.why-cards-container {
  padding: 40px 20px;
  text-align: center;
  max-width: 90%;

  h2 {
    font-weight: 800;
    margin-bottom: 40px;
  }
}

.why-cards {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.no-top-margin {
  top: 0 !important;
  /* Dit overschrijft de top: -150px; */
}

</style>