<template>
    <div class="card">
        <h2>{{ title }}</h2>
        <img :src="imageUrl">
        <button @click="route()">Meer informatie</button>
    </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    title: String,
    image: String,
    route: String,
})

function route() {
    this.$root.$refs.navBar.routeGo(route);
}

const imageUrl = computed(
    () => new URL(`../assets/cards/${props.image}.png`, import.meta.url).href
);
</script>

<style lang="scss" scoped>
.card {
    width: 20%;
    margin: 16px;
    margin-bottom: 24px;
    display: flex;
    flex-direction: column;
    background-color: #29acdf05;
    border-radius: 24px;
    box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 18%);

    img {
        padding: 32px;
        height: 320px;
    }

    h2 {
        margin: 0 auto;
        padding-top: 48px;
        color: #2c5484;
        font-weight: 600;
    }
}

button {
    margin: 0 auto;
    margin-bottom: 48px;
}


@media (max-width: 1548px) {
    .card {
        width: 90%;
        margin: 0 auto;
    }
}
</style>