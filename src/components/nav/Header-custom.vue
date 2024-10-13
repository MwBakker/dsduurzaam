<template>
  <!-- Check of the header een titel heeft, anders geen header maar een vulop div -->
  <div v-if="mainTitle != ''">
    <div id="custom-header" :style="{ backgroundImage: `url(../src/assets/tabs/${mainImg}.png)` }">
      <div id="content">
        <h1>{{ mainTitle }}</h1>
        <span v-if="mainUrl != ''" id="link-with-arrow" @click="goRoute(mainUrl)">
          <svg xmlns=" https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7" />
          </svg>
          <p>Lees meer</p>
        </span>
      </div>
    </div>
  </div>
  <div :style="{ height: getHeaderHeight() }" v-else></div>
</template>

<script>
export default {
  name: "upper_content_container",
  props: {
    mainImg: {
      type: String,
      required: true,
    },
    mainTitle: {
      type: String,
      required: true
    },
    mainUrl: {
      type: String,
      required: true
    },
  },
  methods: {
    getHeaderHeight() {
      return this.windowWidth < 1280 ? '0px' : '150px';
    },
    goRoute(page) {
      this.$root.routeGo(page);
    },
  }
};
</script>

<style lang="scss" scoped>
#custom-header {
  height: 765px;
  padding-top: 245px;
  display: flex;
  justify-content: space-around;
  width: 98%;
  margin: 0 auto;
  position: relative;
  // maakt de afbeelding donkerder
  background-color: rgba(0, 0, 0, 0.2);
  background-blend-mode: darken;
  background-repeat: no-repeat;
  background-size: 100% 670px;
  background-position: bottom;
}

p,
h1 {
  color: white;
}

/* de 4 titels + link onder elkaar */
#content {
  margin: 12px 0 0 17.5%;
  display: flex;
  flex-direction: column;
  width: 35vw;
  color: white;
}

// titles
h1 {
  width: 65%;
  font-size: 54px;
  color: white;
  font-weight: 800;
  margin-bottom: 5px;
  text-align: left;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
  /* Donkere schaduw voor meer contrast */
}

// lees meer
p {
  margin-left: 20px;
}

svg {
  height: 24px;
}

#link-with-arrow {
  cursor: pointer;
  display: flex;
  font-weight: 600;
}

// /* Blauwe box */
// #overlay-square {
//   position: absolute;
//   right: 75px;
//   top: 50%;
//   transform: translateY(-50%);
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
//   padding-top: 40px;
//   padding-left: 40px;
//   padding-right: 20px;
//   width: 16vw;
//   height: 350px;
//   background-color: #3eaf3c;
//   box-sizing: border-box;
//   box-shadow: rgba(0, 0, 0, 0.5) 0px 10px 20px 0px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
//   color: white;

//   // title in box
//   h1 {
//     font-weight: 800;
//     margin-bottom: 20px;
//   }

//   // description
//   p {
//     font-weight: 500;
//     margin-bottom: 20px;
//   }
// }

@media (max-width: 1280px) {
  #custom-header {
    height: 670px;
    padding-top: 160px;
    background-size: cover;
  }

  #content {
    width: 50%;
    background-size: cover;
    margin: 0 auto;

    h1 {
      width: 100%;
    }
  }

  #titles {
    margin: 0;
    width: 80%;
  }

  #titles-header {
    width: 97.5%;
    margin: 0 auto;
    justify-content: center;

    h1 {
      // text-align: center;
      font-size: 2.6em;
      width: initial;
    }

    #link-with-arrow {
      justify-content: center;
      margin: 24px 24px 0 0;
    }
  }
}

@media (max-width: 800px) {

  #custom-header {
    width: 100%;
    height: 420px;
    padding-top: 80px;
  }

  #content {
    width: 75%;

    h1 {
      text-align: center;
    }
  }

  #titles-header {
    width: 90%;
    margin: 0 auto;
  }

  #link-with-arrow {
    margin: 0 auto;
    align-items: center;
  }

  h1 {
    font-size: 2.3em;
  }
}
</style>
