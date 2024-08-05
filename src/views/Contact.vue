<template>
  <div id="contact">
    <Transition name="slide-fade-right" appear>
      <div class="contact-div">
        <CustomForm />
      </div>
    </Transition>
    <Transition name="slide-fade-left" appear>
      <div class="contact-div">
        <CustomMap id="map" />
      </div>
    </Transition>
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
  width: 65%;
  margin: auto auto;
  height: 800px;
  display: flex;
  flex-direction: row;

  #map {
    height: 100%;
    border-radius: 72px;
    -webkit-transform: translate3d(0px, 0px, 0px);
    -webkit-mask-image: -webkit-radial-gradient(white, black);
  }
}

.contact-div {
  border-radius: 72px;
  border-style: solid;
  border-width: 1px;
  border-color: #2c5484;
  width: 46%;
  margin: 0 auto;
  height: 720px;
}
</style>