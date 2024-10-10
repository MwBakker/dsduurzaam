<template>
    <GoogleMap api-key="AIzaSyBz_YKA-lUBLzqbm4sbLQaFGBKCFSgtby4" :center="center" :zoom="9" :map-type-control="false">
        <Marker :options="{ position: center }" />
    </GoogleMap>
</template>

<script>
import { GoogleMap, Marker } from 'vue3-google-map';

export default {
    name: "customMap",
    components: { GoogleMap, Marker },
    setup() {
        const center = { lat: 52.8760278, lng: 7.0320524 }
        return { center }
    },
};
</script>