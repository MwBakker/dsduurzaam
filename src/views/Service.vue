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
import ParagraphCardSmall from '@/components/cards/paragraph/Small.vue';
import ParagraphCard from '@/components/cards/paragraph/Regular.vue';
import ProductCard from '@/components/cards/product/Regular.vue';
import QuoteCard from '@/components/cards/Quote.vue';
import ContentCardOne from '@/components/cards/content/Card-one.vue';
import Accordion from '@/components/accordion/Accordion.vue';
import AccordionItem from '@/components/accordion/Accordion-item.vue';
import WhyCard from '@/components/cards/Why-card.vue';
import IntroductionCardSub from '@/components/cards/introduction/Introduction-card-sub.vue';
import IntroductionCardSubTwo from '@/components/cards/introduction/Introduction-card-sub-two.vue';

export default {
  name: "Service",
  components: {
    ProductCard,
    QuoteCard,
    ParagraphCard,
    ParagraphCardSmall,
    ContentCardOne,
    Accordion,
    AccordionItem,
    WhyCard,
    IntroductionCardSub,
    IntroductionCardSubTwo
  }
};
</script>

<style lang="scss" scoped>
#home {
  margin: 0 auto;
  width: 100%;
  padding-top: 20px;
}

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

.background-wrapper-grey {
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% - 40px);
  background-color: #edf1f6ad;
  padding: 20px 0;
  box-sizing: border-box;
  margin: 0 auto 50px;
  position: relative;
}

.content-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.background-wrapper-white {
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% - 40px);
  background-color: #ffffff;
  padding: 20px 0;
  box-sizing: border-box;
  margin: 0 auto 50px;
  position: relative;
}

.product-cards-container {
  display: flex;
  justify-content: space-between;
  max-width: 1548px;
  /* Maximale breedte van de product-cards-container */
  width: 75%;
  /* Zorg ervoor dat de breedte 75% van de beschikbare ruimte is */
  margin: 0 auto;
}

.text-container {
  width: 50%;
  /* Zorgt ervoor dat de tekstcontainer 40% breed is */
  padding-top: 50px;
  padding-left: 170px;
  padding-right: 100px;
  line-height: 1.6;
}

.product-card {
  position: relative;
  cursor: pointer;
  overflow: hidden;
  aspect-ratio: 1 / 1;
  /* Zorg ervoor dat de kaart vierkant blijft */
  background-color: white;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  /* Zorg ervoor dat de inhoud netjes gestapeld wordt */
}

.product-card:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}

.product-cards-container .card-image {
  width: 100%;
  height: auto;
}

.product-cards-container .button {
  display: flex;
  justify-content: flex-start;
}

.card-title h2 {
  font-size: 1.2rem;
  font-weight: 800;
  margin-bottom: 10px;
}


.cards-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* 3 kolommen */
  grid-gap: 20px;
  /* Ruimte tussen kaarten */
  width: 50%;
  /* Zorg ervoor dat de kaartencontainer 60% breed is */
  padding-right: 20px;
  /* Voeg dezelfde padding toe als de bovenkant en onderkant */
}

.product-cards-container>* {
  flex: 1 1 calc(19.5% - 2px);
  box-sizing: border-box;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: auto;
  padding: 0;
  position: relative;
  z-index: 10;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.product-cards-container .card-image {
  width: 100%;
  height: auto;
  margin: 0;
  padding: 0;
  display: block;
}

.card-image {
  position: relative;
  width: 100%;
  height: 100%;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* Zorg ervoor dat de afbeelding zich aanpast aan de container */
}

.product-cards-container .button {
  display: flex;
  justify-content: flex-start;
}

.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  /* Semi-transparante zwarte achtergrond */
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.product-container {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: space-between;
  max-width: 1548px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
}

#quotes {
  display: flex;
  width: 78.8%;
  justify-content: center;
  background-color: #eaeef3;
  margin-bottom: 50px;
}

.cta-button {
  background-color: #ffda00;
  color: #08535e;
  padding: 15px 30px;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 800;
  text-align: center;
  margin-top: 20px;
  position: relative;
  overflow: hidden;
  /* Verberg wat buiten de knop valt */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  /* Zorg ervoor dat de tekst gecentreerd is */
  transition: background-color 0.3s ease, opacity 0.3s ease;
  width: 400px;
}

.cta-button span {
  position: relative;
}

.cta-button:hover {
  background-color: #ffe967;
  /* Pas de achtergrondkleur aan bij hover */
}

/* Zorg dat de pijl start buiten zicht, aan de rechterkant */
.button-arrow {
  position: absolute;
  right: 30px;
  width: 1.5rem;
  height: 1.5rem;
  opacity: 0;
  transition: transform 0.3s ease, opacity 0.3s ease;
  transform: translateX(-30px);
  /* Start buiten de knop */
}

/* Laat de pijl naar binnen schuiven en zichtbaar worden bij hover */
.cta-button:hover .button-arrow {
  transform: translateX(0);
  /* Schuift naar binnen */
  opacity: 1;
  /* Wordt zichtbaar */
}

.why-cards-container {
  padding: 40px 20px;
  text-align: center;
  max-width: 90%;
}

.why-cards-container h2 {
  font-size: 2.5rem;
  font-weight: 800;
  color: #08535e;
  margin-bottom: 40px;
}

.why-cards {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.card-button .btn-link {
  display: inline-flex;
  align-items: center;
  color: white;
  font-weight: 600;
  font-size: 1.1rem;
  transition: color 0.3s ease;
}

.btn-link:hover {
  color: #ffda00;
  /* Kleur bij hover */
}

.text-container h2 {
  font-size: 2.5rem;
  font-weight: 800;
  color: #08535e;
  margin-bottom: 20px;
}

.text-container p {
  font-size: 1.2rem;
  font-weight: 500;
  color: #08535e;
}

.extra-margin {
  margin-top: 40px;
  /* Verhoog de waarde als je meer ruimte wilt */
}

.cta-button .button-arrow {
  stroke: #08535e !important;
  /* Zorg ervoor dat de pijl zwart wordt */
}

.no-top-margin {
  top: 0 !important;
  /* Dit overschrijft de top: -150px; */
}

/* Media queries voor verschillende schermgroottes */
@media (max-width: 1920px) {
  .product-cards-container {
    max-width: 1548px;
    width: 200px;
  }

  .cta-button {
    width: 400px;
  }
}

@media (max-width: 1280px) {
  .cta-button {
    font-size: 1.2rem;
  }
}
</style>