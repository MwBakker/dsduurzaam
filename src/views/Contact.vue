<template>
  <div id="contact">
    <Transition name="slide-fade-up" appear>
      <CustomForm id="contact-form" />
    </Transition>
    <CustomMap id="map" />
  </div>
</template>

<script>

import CustomMap from '../components/Map.vue';
import CustomForm from '../components/contact/Contact-form.vue';

export default {
  name: "Contact",
  components: {
    CustomMap,
    CustomForm
  },

};
</script>

<style lang="scss" scoped>
#contact {
  background-color: white;
  position: relative;
  margin-bottom: 40px;
  height: 1080px;

  #map {
    position: absolute;
    bottom: 0;
    height: 400px;
    width: 100%;
    -webkit-transform: translate3d(0px, 0px, 0px);
    -webkit-mask-image: -webkit-radial-gradient(white, black);
  }
}

@media (max-width: 1024px) {
  #contact {
    height: 1525px;
  }
}

</style>