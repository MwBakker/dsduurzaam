<template>
  <div id="nav-container">
    <div id="label-main">
      <p>Direct uit voorraad leverbaar!</p>
    </div>
    <nav>
      <div class="branding">
        <img @click="routeGo('home')" src="@/assets/logo.png" alt="" />
      </div>
      <ul id="titles">
        <li id="upper-li" @click="routeGo('heat-pump')">Warmtepomp</li>
        <li @click="routeGo('airco')">Airconditioning</li>
        <li @click="routeGo('floor-heating')">Vloerverwarming</li>
        <li @click="routeGo('solar')">Zonnepanelen</li>
        <li @click="routeGo('charge-points')">Laadpaal</li>
        <!-- <li @click="routeGo('isolation')">Isolatie</li> -->
        <!-- <li @click="routeGo('advice')">Energielabel</li> -->
        <li @click="routeGo('service')">Service</li>
      </ul>
      <div id="button-tech" @click="scrollTo('contact-form-container')">
        <button>Advies aan huis</button>
        <img src="@/assets/tech.png" alt="Technisch icoon" />
      </div>
    </nav>
  </div>
  <upper_content_container :title="title" :description="description" :backgroundImage="headerImg">
    <h1 id="lol">Subsidie op al onze systemen! Laat ons uw voordeel berekenen!</h1>
  </upper_content_container>
</template>

<script>
import upper_content_container from "./Upper-content-container.vue";

export default {
  name: "navigation-bar",
  data() {
    return {
      title: 'Ontdek wat bij je huis past',
      headerImg: 'home',
      description: 'Heb je een koophuis en overweeg je een warmtepomp? Laat je gegevens achter en kom in contact met één van onze experts. Zij helpen je met een advies op maat en een offerte. Je ontvangt tot € 500,-- korting op je warmtepomp. ',
      headerText: {
        'home': ["Ontdek wat bij je huis past", "Uw asbolute partner voor een energiezuiniger leven en werken!"],
        'heat-pump': ["Verwarm en koel duurzaam met onze warmtepompen!", "Ontdek de toekomst van energie-efficiëntie."],
        'airco': ["Ervaar ultiem comfort met onze veelzijdige airco’s!", "Koel in de zomer, verwarm in de winter en bespaar."],
        'floor-heating': ["Ervaar luxe en comfort met onze vloerverwarming!", "Geniet van gelijkmatige warmte in de winter en koel in de zomer."],
        'solar': ["Maximaliseer uw besparingen met onze zonnepanelen!", "Combineer duurzame energie met andere installaties."],
        'charge-points': ["Laad uw elektrische voertuig gemakkelijk op!", "Onze op maat gemaakte oplossingen bieden snelle en betrouwbare oplading."],
        'isolation': ["Isolatie", "Warm spul"],
        'advice': ["Energielabel & advies", "Mooi spul"],
        'service': ["Blijf zorgeloos genieten met onze snelle service en onderhoud!", "Wij bieden deskundige ondersteuning en onderhoud."],
      },
    };
  },
  components: {
    upper_content_container
  },
  methods: {
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.handleScroll);
    },
    routeGo(direction) {
      var array = this.headerText[direction];
      this.title = array[0];
      this.description = array[1];
      this.headerImg = direction;
      this.$router.push({ name: direction });
    },
  },
};
</script>

<style lang="scss" scoped>
#nav-container {
  width: 100%;
  z-index: 999;
  background-color: white;
  transition: 0.5s ease all;
  position: fixed;
}

#label-main {
  height: 36px;
  background-color: #222222;

  p {
    text-align: center;
    font-size: 0.9rem;
    padding-top: 10px;
    color: #ffffff;
    font-weight: 400;
  }
}

nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1548px;
  margin: 0 auto;
  padding: 0 20px;
  padding-top: 20px;
  padding-bottom: 10px;
}

#titles {
  display: flex;
  align-items: center;
  margin: 0;
  margin-left: 48px;
  padding: 0;
  list-style: none;
  flex-grow: 1;
}

#titles li {
  cursor: pointer;
  margin-right: 10px;
  font-weight: 600;
  font-size: 1.2rem;
  line-height: 1.5rem;
  color: #222222; /* Standaard kleur #222222 */

  &:hover {
    color: #2071b5; /* Verander naar #2071b5 bij hover */
  }
}

#titles li:first-child {
  margin-left: 20px;
}

.branding {
  cursor: pointer;
  display: flex;
  align-items: center;

  img {
    width: 75px;
  }
}

ul,
.link {
  color: #222222;
  list-style: none;
  text-decoration: none;
}

#button-tech {
  position: relative;
  width: 240px;
  background-color: #3eaf3c;
  box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 18%);

  button {
    background-color: initial;
    transition: all .3s ease-in-out;
    box-shadow: none;
    border: transparent;
    margin-left: -36px;
  }

  img {
    position: absolute;
    right: 12px;
    bottom: 0;
    height: 86px;
  }
}

#button-tech:hover {
  animation: pulse 1s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(62, 175, 60, 0.4);
  }

  50% {
    transform: scale(1.03);
    box-shadow: 0 0 0 6px rgba(62, 175, 60, 0.25);
  }

  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(62, 175, 60, 0);
  }
}

h1,
.light {
  margin-bottom: 28px;
  color: #222222;
  font-weight: 600;
}

.light {
  color: #a3b9d5;
}

</style>