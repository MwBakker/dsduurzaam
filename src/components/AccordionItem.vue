<!-- src/components/AccordionItem.vue -->
<template>
  <div class="accordion-item">
    <div
      class="accordion-header"
      :class="{ 'closed': !isOpen }"
      @click="toggle"
    >
      <h3 :class="{ 'open': isOpen }">{{ title }}</h3>
      <i :class="['accordion-icon', isOpen ? 'fas fa-minus' : 'fas fa-plus']"></i>
    </div>
    <transition name="accordion" @before-enter="beforeEnter" @enter="enter" @leave="leave">
      <div v-show="isOpen" class="accordion-content-wrapper">
        <div class="accordion-content">
          <slot></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "AccordionItem",
  props: {
    title: {
      type: String,
      required: true
    },
    id: {
      type: [String, Number],
      required: true
    }
  },
  inject: ['registerItem'],
  computed: {
    isOpen() {
      return this.$parent.currentOpen === this.id;
    }
  },
  methods: {
    toggle() {
      this.$parent.setOpen(this.id);
    },
    beforeEnter(el) {
      el.style.maxHeight = '0';
      el.style.opacity = '0';
    },
    enter(el) {
      el.offsetHeight; // Trigger reflow
      el.style.transition = 'max-height 0.5s ease, opacity 0.5s ease';
      el.style.maxHeight = el.scrollHeight + 'px';
      el.style.opacity = '1';
    },
    leave(el) {
      el.style.transition = 'max-height 0.5s ease, opacity 0.5s ease';
      el.style.maxHeight = '0';
      el.style.opacity = '0';
    }
  },
  mounted() {
    this.registerItem(this);
  }
};
</script>

<style scoped>
.accordion-item {
  margin-bottom: 15px;
  background-color: #eaeef3;
  overflow: hidden;
}

.accordion-header {
  cursor: pointer;
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: opacity 0.5s ease; /* Voeg overgang toe voor opacity */
}

.accordion-header.closed {
  opacity: 0.5; /* Verlaag de opacity voor gesloten items */
}

.accordion-header h3 {
  margin: 0;
  color: #284c78;
  font-size: 2rem;
  font-weight: 600;
  transition: opacity 0.5s ease; /* Voeg overgang toe voor opacity */
}

.accordion-header.closed h3 {
  opacity: 0.5; /* Verlaag de opacity voor gesloten headers */
}

.accordion-icon {
  font-size: 2.5rem;
  color: #284c78;
  transition: opacity 0.5s ease; /* Voeg overgang toe voor opacity */
}

.accordion-header.closed .accordion-icon {
  opacity: 0.5; /* Verlaag de opacity voor gesloten iconen */
}

.accordion-content-wrapper {
  max-height: 0;
  overflow: hidden;
}

.accordion-content {
  padding: 15px 30px;
  opacity: 1;
  transition: opacity 0.5s ease;
}

.accordion-enter-active, .accordion-leave-active {
  transition: max-height 0.5s ease, opacity 0.5s ease;
}

.accordion-enter, .accordion-leave-to {
  max-height: 0;
  opacity: 0;
}

/* Gebruik ::v-deep om stijlen door te voeren naar kinderen */
::v-deep .accordion-content p {
  color: #284c78;
  font-size: 1.25rem;
  margin-bottom: 8px;
  line-height: 1.875;
}
</style>
