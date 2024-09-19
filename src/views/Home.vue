
<template>
  <div id="home">
    <div class="background-wrapper">
      <div class="product-cards-container">
        <ProductCard route="heat-pump" title="Warmtepomp" image="home" subtitle="Van hybride tot en met all-electric." buttonText="Lees meer" />
        <ProductCard route="airco" title="Airconditioning" image="airco" subtitle="Zowel koelen als verwarmen" buttonText="Ontdek meer" />
        <ProductCard route="floor-heating" title="Vloerverwarming" image="floor-heating" subtitle="Nog duurzamer in combinatie met een warmtepomp" buttonText="Bekijk opties" />
        <ProductCard route="solar" title="Zonnepanelen" image="solar" subtitle="Je andere duurzame installaties voeden met eigen opgewerkte energie" buttonText="Meer informatie" />
        <ProductCard route="charge-points" title="Laadpaal" image="charge-points" subtitle="Je auto opladen met eigen opgewerkte energie" buttonText="Lees meer" />
      </div>
    </div>

    <!-- Nieuwe container met content (zoals afbeelding) -->
    <ContentCardOne
      title="Daarom een warmtepomp via Insteco"
      :listItems="[ 
        'Je krijgt gratis advies en een offerte op maat',
        'Installatie door vakbekwame en volledig gecertificeerde experts', 
        'Ontvang tot € 500,-- korting als je bij ons je warmtepomp koopt', 
        'Wij handelen het gehele subsidietraject voor je af' 
      ]"
      buttonText="Vraag adviesgesprek aan"
      imageSrc="charge-points.png"
      linkUrl="heat-pump"
      linkText="Lees meer"
    />

    <div class="background-wrapper-white">
      <Accordion title="Alles wat je moet weten">
          <template v-slot="{ currentOpen, setOpen, refs }">
            <AccordionItem id="item1" :currentOpen="currentOpen" :setOpen="setOpen" title="Hybride warmtepomp"
              paragraphText="Een hybride warmtepomp combineert een warmtepomp met een bestaande verwarmingsketel op gas. Dit systeem schakelt automatisch tussen de warmtepomp en de ketel op basis van de buitentemperatuur."
              :voordelen="['Voordeel 1', 'Voordeel 2', 'Voordeel 3']" />
            <AccordionItem id="item2" :currentOpen="currentOpen" :setOpen="setOpen" title="Elektrische warmtepomp"
              paragraphText="Een volledig elektrische warmtepomp zorgt voor zowel het opwarmen van uw huis als voor warm water. Dit betekent dat u geen gasaansluiting meer nodig heeft."
              :voordelen="['Voordeel 1', 'Voordeel 2', 'Voordeel 3']" />
            <AccordionItem id="item3" :currentOpen="currentOpen" :setOpen="setOpen" title="Lucht/water-warmtepomp"
              paragraphText="Een buitenlucht warmtepomp haalt energie uit de buitenlucht en gebruikt deze om het verwarmingswater in uw cv-systeem op te warmen."
              :voordelen="['Voordeel 1', 'Voordeel 2', 'Voordeel 3']" />
            <AccordionItem id="item4" :currentOpen="currentOpen" :setOpen="setOpen" title="Lucht/lucht-warmtepomp"
              paragraphText="Een buitenlucht warmtepomp haalt energie uit de buitenlucht en gebruikt deze om het verwarmingswater in uw cv-systeem op te warmen."
              :voordelen="['Voordeel 1', 'Voordeel 2', 'Voordeel 3']" />
            <AccordionItem id="item5" :currentOpen="currentOpen" :setOpen="setOpen" title="Water/water-warmtepomp"
              paragraphText="Een buitenlucht warmtepomp haalt energie uit de buitenlucht en gebruikt deze om het verwarmingswater in uw cv-systeem op te warmen."
              :voordelen="['Voordeel 1', 'Voordeel 2', 'Voordeel 3']" />
          </template>
      </Accordion>
    </div>

    <div class="background-wrapper">
      <div class="why-cards-container">
    <h2>Waarom kiest u voor Insteco?</h2>
    <div class="why-cards">
      <WhyCard
        title="Duurzaam totaaladvies"
        description="Met onze producten en diensten helpen wij u vandaag bij uw volgende stap in duurzaam comfortabel wonen en werken."
        icon="sustainable"
      />
      <WhyCard
        title="Gecertificeerd"
        description="Wij combineren kennis met vakmanschap en dat maakt onze collega's echte specialisten met de juiste certificering."
        icon="certified"
      />
      <WhyCard
        title="Hoge kwaliteit en garantie"
        description="Wij werken met merken en fabrikanten die marktleider zijn in ons vakgebied. Denk aan; Vaillaint, LG, etc."
        icon="quality"
      />
      <WhyCard
        title="Direct leverbaar"
        description="Met onze producten en diensten helpen wij u vandaag bij uw volgende stap in duurzaam comfortabel wonen en werken."
        icon="delivery"
      />
    </div>
  </div>
    </div>


        <ContentCardOne
      title="Daarom een warmtepomp via Insteco"
      :listItems="[ 
        'Je krijgt gratis advies en een offerte op maat',
        'Installatie door vakbekwame en volledig gecertificeerde experts', 
        'Ontvang tot € 500,-- korting als je bij ons je warmtepomp koopt', 
        'Wij handelen het gehele subsidietraject voor je af' 
      ]"
      buttonText="Vraag adviesgesprek aan"
      imageSrc="charge-points.png"
      linkUrl="heat-pump"
      linkText="Lees meer"
    />
    
  </div>
</template>

<script>
import ParagraphCardSmall from '@/components/paragraph-card/Paragraph-card-small.vue';
import ParagraphCard from '@/components/paragraph-card/Paragraph-card.vue';
import ProductCard from '@/components/Product-card.vue';
import QuoteCard from '@/components/Quote-card.vue';
import ContentCardOne from '@/components/Content-card-one.vue';
import Accordion from '@/components/accordion/Accordion.vue';
import AccordionItem from '@/components/accordion/Accordion-item.vue';
import WhyCard from '@/components/Why-card.vue';

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
    WhyCard
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
  background-color: #edf1f6;
  padding: 20px 0;
  box-sizing: border-box;
  margin: 0 auto 50px;
  position: relative;
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
  flex-wrap: wrap;
  gap: 2px;
  justify-content: space-between;
  max-width: 1548px;
  width: 100%;
  margin: 0 auto;
  padding: 10px;
  position: relative;
  z-index: 1;
  align-items: stretch;
}

.product-cards-container > * {
  flex: 1 1 calc(19.5% - 2px);
  box-sizing: border-box;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: auto;
  padding: 0;
  position: relative;
  top: -150px;
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

.product-cards-container .button {
  display: flex;
  justify-content: flex-start;
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

/* Media queries voor verschillende schermgroottes */
@media (max-width: 1920px) {
  .product-cards-container {
  max-width: 1548px;
  width: 100%;
}
}

@media (max-width: 1750px) {
  .product-cards-container {
  max-width: 1548px;
  width: 100%;
}
}

@media (max-width: 1600px) {
  .product-cards-container {
  max-width: 1548px;
  width: 85%;
}
}

@media (max-width: 1380px) {
  .product-cards-container {
  width: 85%;
}
}

@media (max-width: 1280px) {
}


@media (max-width: 1024px) {

}

@media (max-width: 768px) {
  
}

.why-cards-container {
  background-color: #edf1f6;
  padding: 40px 20px;
  text-align: center;
  max-width: 90%;
}

.why-cards-container h2 {
  font-size: 2.5rem;
  font-weight: 800;
  color: #222222;
  margin-bottom: 40px;
}

.why-cards {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

</style>
