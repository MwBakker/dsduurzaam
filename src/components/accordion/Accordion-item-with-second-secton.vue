<template>
  <div :class="['accordion-item', { 'closed': !isOpen }]">
    <div class="accordion-header" @click="toggle">
      <h3 :class="{ 'open': isOpen }">{{ title }}</h3>
      <span class="accordion-icon">
        <svg
          v-if="isOpen"
          xmlns="https://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
        <svg
          v-else
          xmlns="https://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 15l7-7 7 7"
          />
        </svg>
      </span>
    </div>
    <transition name="accordion" @before-enter="beforeEnter" @enter="enter" @leave="leave">
      <div v-show="isOpen" class="accordion-content-wrapper">
        <div class="accordion-content">
          <div class="content-sections">
            <div class="left-section">
              <h2 class="section-title">Algemene beschrijving</h2>
              <p v-if="paragraphText" class="paragraph-text">{{ paragraphText }}</p>
            </div>
            <div class="right-section">
              <h2 class="section-title">Voor- en nadelen</h2>
              <ul>
                <li v-for="(voordeel, index) in voordelen" :key="index">
                  <img src="../assets/icon/check.png">
                  {{ voordeel }}
                </li>
              </ul>
            </div>
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
    },
    voordelen: {
      type: Array,
      default: () => []
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
  width: 60%;
  max-width: 1548px; /* Limiteer de breedte van elke accordion-item tot 1548px */
  margin: 0 auto;
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.082); /* Alleen een border onderaan */
  overflow: hidden;
  transition: background-color 0.3s ease, border-color 0.3s ease;
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
}

.accordion-content-wrapper {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s ease, opacity 0.5s ease;
  font-size: 1.1rem;
  font-weight: 500;
}

.accordion-content {
  padding: 20px 30px; /* Padding staat hier zodat de padding niet geanimeerd wordt */
  opacity: 1;
  transition: opacity 0.5s ease;
}

.content-sections {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  min-height: 150px;
}

.left-section,
.right-section {
  width: 50%;
}

.right-section {
  padding: 0px 30px;
}

.section-title {
  font-size: 1.25rem;
  color: #08535e;
  font-weight: 600;
  margin: 0 0 10px 0;
}

ul {
  list-style-type: none;
}

li {
  display: flex;
  align-items: center;

  img {
    width: 24px;
    height: 24px;
    margin-right: 12px;
  }
}
</style>
