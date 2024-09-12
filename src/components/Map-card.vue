<template>
    <div id="map-container">
      <svg :width="width" :height="height" xmlns="http://www.w3.org/2000/svg">
        <path
          v-for="(region, index) in regions"
          :key="index"
          :d="region.path"
          :fill="region.fill"
          :stroke="region.stroke"
          :stroke-width="region.strokeWidth"
          @click="selectRegion(region)"
          class="map-region"
        />
      </svg>
      <div v-if="selectedRegion" class="info">
        <h3>{{ selectedRegion.name }}</h3>
        <p>Coördinaten: {{ selectedRegion.coordinates }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const width = '100%';
  const height = '500px';
  
  const regions = ref([
    {
      name: 'Amsterdam',
      path: 'M100,100 L200,100 L200,200 L100,200 Z',
      fill: '#abcdef',
      stroke: '#000000',
      strokeWidth: 2,
      coordinates: '52.3676° N, 4.9041° E',
    },
    {
      name: 'Rotterdam',
      path: 'M300,300 L400,300 L400,400 L300,400 Z',
      fill: '#abcdef',
      stroke: '#000000',
      strokeWidth: 2,
      coordinates: '51.9225° N, 4.4792° E',
    },
  ]);
  
  const selectedRegion = ref(null);
  
  function selectRegion(region) {
    selectedRegion.value = region;
  }
  </script>
  
  <style scoped>
  #map-container {
    position: relative;
    width: 100%;
    height: auto;
  }
  
  .map-region {
    cursor: pointer;
    transition: fill 0.3s;
  }
  
  .map-region:hover {
    fill: #ffcc00;
  }
  
  .info {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: white;
    padding: 10px;
    border: 1px solid #cccccc;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  }
  </style>
  