<template>
  <div id="floor-heating">
    <div class="background-wrapper">
      <IntroductionCardSub title="Comfortabel en efficiënt"
        text="Ervaar het ultieme comfort van vloerverwarming! Deze moderne verwarmingsoplossing werkt op lage temperaturen, waardoor het uiterst efficiënt is. Het zorgt voor een gelijkmatige warmteverdeling door uw hele huis, zonder koude plekken. Vloerverwarming is niet alleen energiezuinig, maar ook subtiel weggewerkt en geschikt voor verschillende soorten vloeren. Ontdek hoe deze duurzame manier van verwarmen uw huis aangenamer maakt en geniet het hele jaar door van een warm, comfortabel thuis."
        buttonText="Je knoptekst hier" :showButton="false" />
    </div>
    <div class="background-wrapper-white">
      <Accordion title="Welke soorten vloerverwarming zijn er?">
        <template v-slot="{ currentOpen, setOpen, refs }">
          <AccordionItem id="item1" :currentOpen="currentOpen" :setOpen="setOpen" title="Vloerverwarming op netten"
            paragraphText="Op netten gelegd vloerverwarming is een installatie waarbij verwarmingsbuizen op een speciaal gaasnet worden bevestigd. Dit zorgt voor een snelle en efficiënte installatie, ideaal voor renovaties. De netten bieden stabiliteit en maken het gemakkelijk om de buizen op de juiste afstand van elkaar te plaatsen voor optimale warmteverdeling. "
            :voordelen="['Voordeel 1', 'Voordeel 2', 'Voordeel 3']" />
          <AccordionItem id="item2" :currentOpen="currentOpen" :setOpen="setOpen" title="Noppenplaat vloerverwarming "
            paragraphText="Noppenplaat vloerverwarming maakt gebruik van speciale platen met noppen waarin verwarmingsbuizen eenvoudig kunnen worden geplaatst. Dit systeem zorgt voor een snelle installatie en optimale warmteverdeling. Het is lichtgewicht en perfect voor renovaties, omdat het de opbouwhoogte minimaliseert en goed samenwerkt met verschillende vloerbedekkingen. "
            :voordelen="['Voordeel 1', 'Voordeel 2', 'Voordeel 3']" />
          <AccordionItem id="item3" :currentOpen="currentOpen" :setOpen="setOpen" title="Droogopbouw vloerverwarming"
            paragraphText="Droogopbouw vloerverwarming is een snel en eenvoudig systeem waarbij verwarmingsbuizen in een droogbouwplaat worden gelegd, zonder natte mortel. Dit maakt het ideaal voor renovaties en verhoogt de snelheid van de installatie. Het zorgt voor een efficiënte warmteverdeling en minimaliseert de opbouwhoogte, waardoor het geschikt is voor verschillende vloerbedekkingen."
            :voordelen="['Voordeel 1', 'Voordeel 2', 'Voordeel 3']" />
        </template>
      </Accordion>
    </div>
    <!-- Nieuwe container met content (zoals afbeelding) -->
    <ContentCardOne title="Daarom vloerverwarming via InsteQ" :listItems="[
      'U krijgt gratis deskundig advies en een offerte op maat',
      'Installatie door vakbekwame en volledig gecertificeerde experts',
      'Perfect in combinatie met onze andere duurzame installaties'
    ]" buttonText="Gratis advies aanvragen" imageSrc="floor-heating.png" linkUrl="heat-pump" linkText="Lees meer" />
    <div class="background-wrapper-white">
      <Accordion title="Handig om te weten">
        <template v-slot="{ currentOpen, setOpen, refs }">
          <AccordionItem id="item1" :currentOpen="currentOpen" :setOpen="setOpen" title="Je warmte gelijkmatig verdelen"
            paragraphText="Vloerverwarming biedt een gelijkmatige warmteverdeling door de hele ruimte, waardoor koude plekken verleden tijd zijn. Dit betekent dat u altijd geniet van een constante, comfortabele temperatuur, zonder koude voeten. Dankzij de efficiënte werking van vloerverwarming ervaart u een aangename warmte in elke hoek van de kamer, het hele jaar door."
            :voordelen="['Voordeel 1', 'Voordeel 2', 'Voordeel 3']" />
          <AccordionItem id="item2" :currentOpen="currentOpen" :setOpen="setOpen" title="Koelen met vloerverwarming"
            paragraphText="Wist u dat vloerverwarming niet alleen verwarmt, maar ook kan koelen? In combinatie met een warmtepomp kan vloerverwarming in de zomer de temperatuur verlagen, waardoor uw woning heerlijk koel blijft. Zo geniet u het hele jaar door van optimaal comfort, zowel in de winter als in de zomer!"
            :voordelen="['Voordeel 1', 'Voordeel 2', 'Voordeel 3']" />
          <AccordionItem id="item3" :currentOpen="currentOpen" :setOpen="setOpen" title="Meer warmte, minder energie"
            paragraphText="Vloerverwarming werkt efficiënter dan traditionele radiatoren doordat het op lagere temperaturen functioneert. Dit betekent dat u minder energie verbruikt om uw woning op een comfortabele temperatuur te houden, wat resulteert in lagere stookkosten. Door deze duurzame verwarmingsmethode bespaart u aanzienlijk op uw energierekening, terwijl u geniet van constante warmte."
            :voordelen="['Voordeel 1', 'Voordeel 2', 'Voordeel 3']" />
        </template>
      </Accordion>
    </div>
    <WhyCards />
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
import WhyCards from '@/components/Why-cards.vue';
import IntroductionCardSub from '@/components/cards/introduction/Introduction-card-sub.vue';
import ContentCardOneRed from '@/components/cards/content/Card-one-red.vue';

export default {
  name: "floor-heating",
  components: {
    ProductCard,
    QuoteCard,
    ParagraphCard,
    ParagraphCardSmall,
    ContentCardOne,
    Accordion,
    AccordionItem,
    WhyCards,
    IntroductionCardSub,
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

.content-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
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
  font-weight: 800;
  margin-bottom: 20px;
}

.text-container p {
  font-weight: 500;
}

.extra-margin {
  margin-top: 40px;
  /* Verhoog de waarde als je meer ruimte wilt */
}

.cta-button .button-arrow {
  stroke: #08535e !important;
  /* Zorg ervoor dat de pijl zwart wordt */
}

.products-background {
  background-color: #eeeeee69;
}
</style>