<!-- src/components/Accordion.vue -->
<template>
  <div class="accordion">
    <slot :currentOpen="currentOpen" :setOpen="setOpen" :refs="refs"></slot>
  </div>
</template>

<script>
export default {
  name: "Accordion",
  data() {
    return {
      currentOpen: null, // Houdt bij welk item momenteel geopend is
      refs: [] // Houdt de referenties naar de AccordionItem componenten bij
    };
  },
  methods: {
    setOpen(itemId) {
      if (this.currentOpen === itemId) {
        return; // Niets doen als het item al open is
      }
      this.currentOpen = itemId;
    }
  },
  mounted() {
    this.$nextTick(() => {
      // Stel het eerste item als standaard geopend in
      if (this.refs.length > 0) {
        this.currentOpen = this.refs[0].id;
      }
    });
  },
  provide() {
    return {
      registerItem: (item) => {
        this.refs.push(item);
      }
    };
  }
};
</script>

<style scoped>
.accordion {
  display: flex;
  flex-direction: column; /* Zorgt ervoor dat de items onder elkaar staan */
  max-width: 50%; /* Maximaliseert de breedte van de accordion tot 50% van de container */
}
</style>
