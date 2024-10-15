<template>
  <div :class="['accordion-item', { 'closed': !isOpen }]">
    <div class="accordion-header" @click="toggle">
      <h2 :class="{ 'open': isOpen }">{{ title }}</h2>
      <span class="accordion-icon">
        <svg v-if="isOpen" xmlns="https://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"
          stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
        </svg>
        <svg v-else xmlns="https://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"
          stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </span>
    </div>
    <transition name="accordion" @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter" @leave="leave">
      <div v-show="isOpen" class="accordion-content-wrapper">
        <div class="accordion-content">
          <div class="left-section">
            <p v-if="paragraphText">{{ paragraphText }}</p>
          </div>
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
    },
    paragraphText: {
      type: String,
      default: ''
    }
  },
  inject: ['registerItem'],
  computed: {
    isOpen() {
      return this.$parent.currentOpen.includes(this.id);
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
    afterEnter(el) {
      el.style.maxHeight = 'none'; // Zorg ervoor dat de content flexibel blijft na de animatie
    },
    leave(el) {
      el.style.transition = 'max-height 0.5s ease, opacity 0.5s ease';
      el.style.maxHeight = '0';
      el.style.opacity = '0';
    }
  },
  mounted() {
    this.registerItem(this);
    // Zorg dat de 'open' item bij laden de juiste hoogte krijgt
    if (this.isOpen) {
      const contentWrapper = this.$el.querySelector('.accordion-content-wrapper');
      contentWrapper.style.maxHeight = contentWrapper.scrollHeight + 'px'; // Stel de juiste hoogte in voor het geopende item
    }
  }
};
</script>

<style scoped>
.accordion-item {
  width: 60%;
  max-width: 1548px;
  margin: 0 auto;
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.082);
  overflow: hidden;
  transition: background-color 0.3s ease, border-color 0.3s ease;
}

h2 {
  font-weight: 600;

  &:hover {
    font-weight: 700;
  }
}

.open {
  font-weight: 700;
}

p {
  font-weight: 500;
  line-height: 1.6;
}

.accordion-header {
  cursor: pointer;
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.accordion-icon svg {
  width: 24px;
  height: 24px;
  stroke: #08535e !important;
}

.accordion-content-wrapper {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s ease, opacity 0.5s ease;
  font-weight: 500;
}

.accordion-content {
  padding: 20px 30px;
  opacity: 1;
  transition: opacity 0.5s ease;
}

.left-section {
  width: 100%;
}

.accordion-header:hover .accordion-icon svg {
  stroke: #2071b5 !important;
}

@media (max-width: 1280px) {
  .accordion-item {
    width: 100%;
  }

  p {
    margin-bottom: 16px;
  }

  .accordion-header {
    padding: 16px;
  }

  h2 {
    margin-right: 8px;
    text-align: left;
  }

  .accordion-content {
    padding: 0px 17.5px;
  }

  .accordion-icon svg {
    width: 20px;
    height: 20px;
  }
}
</style>
