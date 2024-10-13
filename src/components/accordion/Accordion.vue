<template>
  <div class="accordion-wrapper">
    <div class="accordion">
      <h1>{{ title }}</h1>
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
      (index > -1) ? this.currentOpen.splice(index, 1) : this.currentOpen.push(itemId);
    },
  },
  provide() {
    return {
      registerItem: (item) => {
        this.refs.push(item);
      },
    };
  },
  mounted() {
    // Open alleen het eerste item bij het laden van de pagina
    if (this.refs.length > 0) {
      this.currentOpen = [this.refs[0].id]; // Zet alleen het eerste item in currentOpen
    }
  },
};
</script>

<style scoped>
.accordion-wrapper {
  display: flex;
  justify-content: center;
  /* Centreer de accordion in zijn container */
  width: 100%;
  max-width: 1548px;
  /* Limiteer de breedte tot 1548px */
  margin: 0 auto;
}

.accordion {
  width: 100%;
  /* Gebruik de volledige breedte van de container */
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

@media (max-width: 1280px) {
  .accordion {
    width: 98%;
    margin: 0 auto;
    /* Gebruik de volledige breedte van de container */
  }
}
</style>
