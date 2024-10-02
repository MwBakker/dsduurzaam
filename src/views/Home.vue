<template>
  <div id="home">
    <div class="background-wrapper">
      <IntroductionCardSub title="Duurzaam wonen: verlaag uw maandlasten"
        text="Bespaar op uw gas- en stroomkosten en vergroot uw onafhankelijkheid met onze duurzame installaties zoals warmtepompen, airco's, zonnepanelen, vloerverwarmingsystemen en laadpalen. Verlaag uw energierekening, verhoog de waarde van uw woning en bescherm uzelf tegen stijgende energieprijzen. Wij bieden oplossingen voor elk budget."
        buttonText="Je knoptekst hier" :showButton="false" />
    </div>

    <!--
    <IntroductionCard
      title1="Uw duurzame installatie, ons vakmanschap – met persoonlijke service en maatwerk vanaf de eerste stap"
      text1="" title2="Wat wij doen"
      text2="We leveren en installeren duurzame installaties, afgestemd op de specifieke wensen van onze klanten. Van zonnepanelen tot warmtepompen, wij bieden maatwerkoplossingen die voldoen aan de hoogste normen voor energiezuinigheid en functionaliteit."
      title3="Waar wij voor staan"
      text3="We geloven in de kracht van duurzaamheid en maatwerk. Onze missie is om klanten oplossingen te bieden die bijdragen aan een beter milieu en volledig aansluiten op hun behoeften. Als betrouwbare partner streven we altijd naar de beste resultaten." />
    -->
    

    <div class="background-wrapper products-background">
      <!-- Container voor de twee secties -->
      <div class="content-container">
        <!-- Tekst sectie (40% breedte) -->
        <div class="text-container">
          <h2>Onze producten</h2>
          <p>
            Onze professionals nemen de volledige verduurzaming van uw woning of bedrijfspand uit handen. Of u nu particulier of zakelijk klant bent, u profiteert altijd van de hoogste kwaliteit en persoonlijke service.
          </p>
          <p class="extra-margin">
            Nieuwsgierig naar ons aanbod? We vertellen u er graag meer over!
          </p>
          <!--
                      <button class="cta-button">
            <span>Neem contact op</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
              class="button-arrow">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
          -->

        </div>

        <!-- Productkaarten sectie (60% breedte) -->
        <div class="cards-container">
          <ProductCard route="heat-pump" title="Warmtepomp" image="home" subtitle="Van hybride tot en met all-electric."
            buttonText="Lees meer" />
          <ProductCard route="airco" title="Airconditioning" image="airco" subtitle="Zowel koelen als verwarmen"
            buttonText="Lees meer" />
          <ProductCard route="floor-heating" title="Vloerverwarming" image="floor-heating"
            subtitle="Nog duurzamer in combinatie met een warmtepomp" buttonText="Lees meer" />
          <ProductCard route="solar" title="Zonnepanelen" image="solar"
            subtitle="Je andere duurzame installaties voeden met eigen opgewerkte energie" buttonText="Lees meer" />
          <ProductCard route="charge-points" title="Laadpaal" image="charge-points"
            subtitle="Je auto opladen met eigen opgewerkte energie" buttonText="Lees meer" />
          <ProductCard route="service" title="Service" image="service" subtitle="Wij staan altijd voor u klaar"
            buttonText="Lees meer" />
        </div>
      </div>
    </div>

    <!-- TESTMEUK
        <div class="background-wrapper-white">
      <ContentCardTwo
      imageSrc="content-card-two-test.png"
      imageAlt="Voorbeeldafbeelding"
      title="Heerlijk koel in de zomer en aangenaam warm in de winter"
      feature1Title="Geen last van hete zomers"
      feature1Description="Door gebruik te maken van een warmtepomp & airconditioning combinatie blijft het heerlijk koel in de zomer en bespaar je op de kosten."
      feature2Title="Besparen in de winter"
      feature2Description="Onze airconditioners kunnen ook verwarmen voor in de koude wintermaanden. Gemiddeld verdienen klanten hun investering terug in 2 tot 5 jaar."
      iconSrc1="greencheck.png"
      iconSrc2="greencheck.png"
    />
    </div>
    -->


    <!-- Nieuwe container met content (zoals afbeelding) -->
    <ContentCardOne title="Daarom een warmtepomp via InsteQ" :listItems="[
      'Je krijgt gratis deskundig advies en een offerte op maat',
      'Installatie door vakbekwame en volledig gecertificeerde experts',
      'Ontvang tot € 500,-- korting als je bij ons je warmtepomp koopt',
      'Wij handelen het gehele subsidietraject voor je af'
    ]" buttonText="Gratis advies aanvragen" imageSrc="home.png" linkUrl="heat-pump" linkText="Lees meer" showButton="true" />


    <div class="background-wrapper-white">
      <Accordion title="Handig om te weten">
        <template v-slot="{ currentOpen, setOpen, refs }">
          <AccordionItem id="item1" :currentOpen="currentOpen" :setOpen="setOpen" title="Warmtepompen: Haal de warmte uit de lucht!"
            paragraphText="Wist u dat een warmtepomp zelfs bij temperaturen rond het vriespunt warmte uit de lucht kan halen? Warmtepompen gebruiken energie uit de lucht, bodem of grondwater om uw woning efficiënt te verwarmen, zelfs bij koud weer. Hierdoor bespaart u aanzienlijk op uw gasverbruik en verlaagt u uw CO2-uitstoot. Daarnaast werken warmtepompen perfect samen met zonnepanelen en vloerverwarming voor een nog duurzamer resultaat."
            :voordelen="['Voordeel 1', 'Voordeel 2', 'Voordeel 3']" />
          <AccordionItem id="item2" :currentOpen="currentOpen" :setOpen="setOpen" title="Airco’s: Niet alleen voor de zomer!"
            paragraphText="Airco’s kunnen tegenwoordig meer dan alleen koelen. Veel moderne airconditioningsystemen werken ook als verwarmingssysteem in de winter. Door gebruik te maken van dezelfde technologie als warmtepompen, kunt u met een airco energiezuinig verwarmen én koelen. Dit maakt het een slimme investering, want u bespaart op zowel de gas- als stroomrekening."
            :voordelen="['Voordeel 1', 'Voordeel 2', 'Voordeel 3']" />
          <AccordionItem id="item3" :currentOpen="currentOpen" :setOpen="setOpen" title="Vloerverwarming: Comfort en efficiëntie!"
            paragraphText="Vloerverwarming verdeelt warmte gelijkmatig door de hele ruimte, waardoor u efficiënter kunt verwarmen en minder energie verbruikt. Wist u dat vloerverwarming ideaal is in combinatie met een warmtepomp? Doordat vloerverwarming op lagere temperaturen werkt, verbruikt u minder gas of stroom, wat uw energiekosten flink kan verlagen."
            :voordelen="['Voordeel 1', 'Voordeel 2', 'Voordeel 3']" />
          <AccordionItem id="item4" :currentOpen="currentOpen" :setOpen="setOpen" title="Zonnepanelen: Slim gebruik voor andere duurzame installaties!"
            paragraphText="Zonnepanelen wekken stroom op uit zonlicht, waardoor u direct kunt besparen op uw energiekosten. Wist u dat de opgewekte stroom perfect kan worden gebruikt om andere duurzame installaties zoals een warmtepomp, airco of laadpaal van energie te voorzien? Hierdoor verbruikt u minder netstroom en verlaagt u uw energierekening nog verder. Door slim gebruik te maken van uw eigen zonne-energie, maximaliseert u de voordelen van uw duurzame installaties en draagt u bij aan een schonere toekomst!"
            :voordelen="['Voordeel 1', 'Voordeel 2', 'Voordeel 3']" />
          <AccordionItem id="item5" :currentOpen="currentOpen" :setOpen="setOpen" title="Laadpalen: Laad uw auto op met groene energie!"
            paragraphText="Wist u dat het opladen van uw elektrische auto met eigen opgewekte zonne-energie bijna niets kost? Door een laadpaal thuis te installeren, kunt u uw auto opladen wanneer de zon schijnt. Met een slimme laadpaal kunt u het laadproces zelfs zo instellen dat het optimaal gebruik maakt van uw zonnepanelen, wat u nog meer bespaart op energiekosten."
            :voordelen="['Voordeel 1', 'Voordeel 2', 'Voordeel 3']" />
        </template>
      </Accordion>
    </div>

    <div class="background-wrapper products-background">
      <div class="why-cards-container">
        <h2>Waarom kiest u voor InsteQ?</h2>
        <div class="why-cards">
          <WhyCard title="Duurzaam totaaladvies"
            description="Wij bieden advies op maat om uw woning of bedrijfspand duurzaam en comfortabel te maken, nu en in de toekomst."
            icon="sustainable" />
          <WhyCard title="Gecertificeerd"
            description="Onze experts combineren vakkennis met de juiste certificeringen, waardoor u altijd verzekerd bent van topkwaliteit."
            icon="certified" />
          <WhyCard title="Kwaliteit en garantie"
            description="Wij werken voornamelijk met A-merken zoals Vaillant en LG, die garant staan voor uitstekende prestaties en duurzaamheid."
            icon="quality" />
          <WhyCard title="Direct leverbaar"
            description="Onze producten en diensten zijn snel beschikbaar, zodat u direct kunt beginnen met het verduurzamen van uw woning of bedrijf."
            icon="delivery" />
        </div>
      </div>
    </div>

    <!--
        <ContentCardOne 
      title="Betrouwbare service, altijd paraat" 
      :listItems="['Van installatie tot onderhoud, wij begeleiden u in elke stap van het proces.',
          'Installatie door vakbekwame en volledig gecertificeerde experts',
          'Ontvang tot € 500,-- korting als je bij ons je warmtepomp koopt',
          'Wij handelen het gehele subsidietraject voor je af',
          'Wij handelen het gehele subsidietraject voor je af',
          'Wij handelen het gehele subsidietraject voor je af']" 
      imageSrc="service.png" 
      linkUrl="/advies" 
      :showButton="false" 
    />
    -->
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
import IntroductionCard from '@/components/cards/introduction/Introduction.vue';
import IntroductionCardSub from '@/components/cards/introduction/Introduction-card-sub.vue';
import ContentCardTwo from '@/components/cards/content/Card-two.vue';
import ContentCardOneRed from '@/components/cards/content/Card-one-red.vue';

export default {
  name: "Home",
  components: {
    ProductCard,
    QuoteCard,
    ParagraphCard,
    ParagraphCardSmall,
    ContentCardOne,
    Accordion,
    AccordionItem,
    WhyCard,
    IntroductionCard,
    IntroductionCardSub,
    ContentCardTwo,
    ContentCardOneRed
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
  background-color: #2e8b57;
  color: #ffffff;
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
  margin-top: 50px;
}

.cta-button span {
  position: relative;
}

.cta-button:hover {
  background-color: #2e8b56dc;
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

@media (max-width: 1750px) {
  .product-cards-container {
    max-width: 1548px;
    width: 85%;
  }

  .cta-button {
    width: 400px;
  }
}

@media (max-width: 1600px) {
  .product-cards-container {
    max-width: 1548px;
    width: 85%;
  }

  .cta-button {
    width: 350px;
  }
}

@media (max-width: 1380px) {
  .product-cards-container {
    width: 85%;
  }

  .cta-button {
    width: 100%;
    /* Standaard vaste breedte */
  }
}

@media (max-width: 1280px) {
  .background-wrapper {
    margin: 8px auto 0 auto;
    padding: 0;

    .text-container {
      width: 90%;
      padding: 16px;
      text-align: center;
    }
  }

  .content-container {
    flex-direction: column;
    align-items: center;
  }

  .introduction-card {
    width: 90%;
  }

  .cards-container {
    width: 95%;
  }

  .cta-button {
    font-size: 1.2rem;
  }
}

.products-background {
  background-color: #eeeeee69;
}
</style>