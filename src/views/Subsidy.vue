<template>
  <div id="subsidy">
    <div class="background-wrapper">
      <IntroductionCardSub class="no-top-margin" title="Wij berekenen uw voordeel"
        text="Er zijn verschillende subsidies en financiële voordelen beschikbaar die helpen bij het verduurzamen van je woning of bedrijf. Hieronder vertellen we per duurzame installatie meer over de beschikbare subsidies en andere financiële voordelen, om zodoende de aanschaf van uw duurzame installatie te verlagen."
        buttonText="Je knoptekst hier" :showButton="false" />
    </div>

      <div class="background-wrapper">
          <IntroductionCardSubFour
              centerTitle="Warmtepompen en verwarmende airco's"
              leftTitle="Investeringssubsidie"
              leftText="De belangrijkste subsidie is de Investeringssubsidie duurzame energie en energiebesparing (ISDE). Deze subsidie biedt een tegemoetkoming voor particulieren en bedrijven die een warmtepomp of een airconditioning met verwarmfunctie installeren, mits deze voldoen aan de eisen van de Rijksdienst voor Ondernemend Nederland (RVO). De subsidiebedragen variëren afhankelijk van het type systeem, zoals lucht-water of grond-water warmtepompen, en kunnen variëren tussen €1.000 en €4.500."
              rightTitle="Verlaagd BTW-tarief"
              rightText="U profiteert van een verlaagd btw-tarief van 9% op de installatiekosten van energiebesparende maatregelen, waaronder warmtepompen en airconditioning met verwarmfunctie. Dit verlaagt de totale installatiekosten aanzienlijk, waardoor de investering in duurzame installaties nog voordeliger wordt."
              thirdTitle="Energiebespaarlening"
              thirdText="U kunt, indien gewenst, gebruikmaken van de Energiebespaarlening via het Nationaal Warmtefonds. Deze lening biedt de mogelijkheid om tegen gunstige voorwaarden een financiering af te sluiten voor de aanschaf van duurzame installaties, zoals warmtepompen en airconditioning met verwarmfunctie."
              fourthTitle="Fiscale voordelen voor bedrijven"
              fourthText="Bedrijven kunnen profiteren van fiscale voordelen zoals de Energie-investeringsaftrek (EIA). Hiermee kan een deel van de investeringskosten van zowel warmtepompen als airconditioning met verwarmfunctie worden afgetrokken van de fiscale winst, waardoor de investering aantrekkelijker wordt."
              />
      </div>

      <div class="background-wrapper">
          <IntroductionCardSubFour
              centerTitle="Zonnepanelen"
              leftTitle="Investeringssubsidie"
              leftText="Airconditioningsystemen die zowel kunnen koelen als verwarmen als een warmtepomp, komen in aanmerking voor de Investeringssubsidie duurzame energie en energiebesparing (ISDE). De subsidiebedragen variëren afhankelijk van het type airco en de capaciteit van het systeem."
              rightTitle="BTW-teruggave"
              rightText="Als particulier kunt u ook de btw op de aanschaf en installatie van zonnepanelen terugvragen van de Belastingdienst. Dit kan een besparing van 21% op uw totale investering opleveren, wat de terugverdientijd aanzienlijk verkort."
              thirdTitle="Energiebespaarlening"
              thirdText="Via het Nationaal Warmtefonds kun je gebruik maken van de Energiebespaarlening, waarmee je tegen gunstige voorwaarden een lening kunt afsluiten voor de aanschaf van duurzame installaties zoals zonnepanelen."
              fourthTitle="Subsidies voor bedrijven"
              fourthText="Voor bedrijven die willen investeren in zonnepanelen zijn er meerdere subsidies beschikbaar. De ISDE (Investeringssubsidie Duurzame Energie) biedt ondersteuning voor de aanschaf van zonnepanelen en andere duurzame energieprojecten. Daarnaast is de SDE++ (Stimulering Duurzame Energieproductie en Klimaattransitie) gericht op grotere installaties, zoals zonneparken. Via de MIA (Milieu-investeringsaftrek) en Vamil kunnen bedrijven fiscaal voordeel behalen op milieuvriendelijke investeringen, waardoor zonne-energie financieel aantrekkelijker wordt​."
              />
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
import IntroductionCardSubFour from '@/components/cards/introduction/Introduction-card-sub-four.vue';

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
    IntroductionCardSubTwo,
    IntroductionCardSubFour
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
  top: 0 !important; /* Dit overschrijft de top: -150px; */
}

@media (max-width: 1280px) {
  .cta-button {
    font-size: 1.2rem;
  }
}

</style>