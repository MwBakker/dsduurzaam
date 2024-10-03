<template>
  <div class="accordion-wrapper">
    <div class="accordion">
      <h2 class="accordion-title">{{ title }}</h2>
      <slot :currentOpen="currentOpen" :setOpen="setOpen" :refs="refs"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Accordion",
  props: {
    title: {
      type: String,
      required: false,
      default: '', // Voeg een lege string toe als geen titel wordt gegeven
    },
  },
  data() {
    return {
      currentOpen: [], // Houdt een array bij van items die momenteel geopend zijn
      refs: [], // Houdt de referenties naar de AccordionItem componenten bij
    };
  },
  methods: {
    setOpen(itemId) {
      const index = this.currentOpen.indexOf(itemId);
      if (index > -1) {
        // Item is al geopend, verwijder het om het te sluiten
        this.currentOpen.splice(index, 1);
      } else {
        // Voeg het item toe om het te openen
        this.currentOpen.push(itemId);
      }
    },
  },
  provide() {
    return {
      registerItem: (item) => {
        this.refs.push(item);
      },
    };
  },
};
</script>

<style scoped>
.accordion-wrapper {
  display: flex;
  justify-content: center; /* Centreer de accordion in zijn container */
  width: 100%;
  max-width: 1548px; /* Limiteer de breedte tot 1548px */
  margin: 0 auto;
}

.accordion {
  width: 100%; /* Gebruik de volledige breedte van de container */
}

.accordion-title {
  font-size: 2.5rem;    /* Aangepaste grootte */
  font-weight: 800;     /* Aangepast gewicht */
  color: #08535e;    /* Aangepaste kleur */
  text-align: center;
  margin-bottom: 20px;  /* Voeg ruimte onder de titel toe */
}
</style>
