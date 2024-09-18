<template>
  <div :class="['accordion-item', { 'closed': !isOpen }]">
    <div class="accordion-header" @click="toggle">
      <h3 :class="{ 'open': isOpen }">{{ title }}</h3>
      <i :class="['accordion-icon', isOpen ? 'fas fa-minus' : 'fas fa-plus']"></i>
    </div>
    <transition name="accordion" @before-enter="beforeEnter" @enter="enter" @leave="leave">
      <div v-show="isOpen" class="accordion-content-wrapper">
        <div class="accordion-content">
          <div class="content-sections">
            <div class="left-section">
              <h2 class="section-title">Algemene beschrijving</h2>
              <p v-if="paragraphText" class="paragraph-text">{{ paragraphText }}</p>
            </div>
            <!--
            <hr class="vertical-line">
            -->
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
  /* Standaard achtergrondkleur voor gesloten toestand */
  border: 1px solid rgba(40, 76, 120, 0.3);
  /* Border met opacity 0.3 */
  overflow: hidden;
  transition: background-color 0.3s ease, border-color 0.3s ease;
  /* Transition voor border-color */
}

/* Als het accordion-item geopend is, stel de borderkleur in op transparant */
.accordion-item:not(.closed) {
  border-color: transparent;
  /* Border wordt onzichtbaar voor geopende toestand */
}

/* Achtergrondkleur bij hover voor gesloten accordion-items */
.accordion-item.closed:hover {
  background-color: #eaeef3;
  /* Achtergrondkleur bij hover voor gesloten toestand */
}

/* Als het accordion-item gesloten is */
.accordion-item.closed {
  background-color: #fff;
  /* Achtergrondkleur wit voor gesloten toestand */
}

/* Tijdens de animatie, pas border-color aan */
.accordion-enter-active,
.accordion-leave-active {
  transition: max-height 0.5s ease, opacity 0.5s ease, border-color 0.5s ease;
}

/* Bij binnenkomst en vertrek, pas border-color aan */
.accordion-enter,
.accordion-leave-to {
  max-height: 0;
  opacity: 0;
  border-color: transparent;
  /* Zorg ervoor dat de border niet zichtbaar is tijdens de animatie */
}

.accordion-header {
  cursor: pointer;
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: opacity 0.5s ease;
}

/* Als het accordion-item gesloten is, pas stijl toe op de header */
.accordion-item.closed .accordion-header {
  opacity: 0.3;
  /* Zorg ervoor dat de opacity goed wordt toegepast */
}

.accordion-header h3 {
  margin: 0;
  color: #284c78;
  /* Kleur voor geopende toestand */
  font-size: 2rem;
  font-weight: 600;
  transition: color 0.3s ease, opacity 0.5s ease;
  /* Voeg overgang toe voor kleur en opacity */
}

.accordion-icon {
  font-size: 2.5rem;
  color: #284c78;
  /* Kleur voor geopende toestand */
  transition: color 0.3s ease, opacity 0.5s ease;
  /* Voeg overgang toe voor kleur en opacity */
}

/* Icoon kleur zwart en opacity 0.5 als de header gesloten is */
.accordion-item.closed .accordion-header .accordion-icon {
  color: #284c78;
  /* Kleur zwart voor gesloten toestand */
  opacity: 0.5;
  /* Zorg ervoor dat de opacity correct is */
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

.content-sections {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  min-height: 150px;
}

.left-section,
.right-section {
  width: 50%;
}

.right-section {
  padding: 0px 30px;
}

/* De verticale lijn */
.vertical-line {
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 1px;
  background-color: #ccc;
  margin: 0;
  align-self: stretch;
}

/* Styling voor de h2 in beide secties */
.section-title {
  font-size: 1.25rem;
  color: #284c78;
  font-weight: 600;
  margin: 0 0 10px 0;
  /* Ruimte onder de <h2> */
}

/* Styling voor de paragrafen */
.paragraph-text {
  color: #2c5484;
  font-size: 1.25rem;
  line-height: 1.6;
}

/* Styling voor de lijstitems */
.benefits-list {
  padding: 0;
  list-style: none;
}

.benefits-list li {
  color: #2c5484;
  font-size: 1.25rem;
  line-height: 1.6;
  margin-bottom: 8px;
  /* Ruimte tussen de lijstitems */
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

@media (max-width: 1024px) {
  #accordion-content-wrapper {
    max-height: initial;
  }
  
  .content-sections {
    display: block;
    text-align: center;
  }

  .left-section,
  .right-section {
    width: 100%;
  }

  .right-section {
    margin-top: 36px
  }

  li {
    display: block;
  }
}
</style>
