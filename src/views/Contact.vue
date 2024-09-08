<template>
  <div id="contact">
    <Transition name="slide-fade-up" appear>
      <CustomForm id="form" />
    </Transition>
    <CustomMap id="map" />
  </div>
</template>

<script>

import CustomMap from '../components/Map.vue';
import CustomForm from '../components/Contact-form.vue';

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
  position: relative;
  margin-bottom: 40px;
  height: 800px;

  #map {
    position: absolute;
    bottom: 0;
    height: 400px;
    width: 100%;
    -webkit-transform: translate3d(0px, 0px, 0px);
    -webkit-mask-image: -webkit-radial-gradient(white, black);
  }
}

#form {
  position: absolute;
  width: 50%;
  background: white;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  left: 0;
  right: 0;
  margin: 0 auto;
  top: -256px;
  height: 600px;
}
</style>