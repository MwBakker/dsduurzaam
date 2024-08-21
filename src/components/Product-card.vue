<template>
    <div class="card">
        <p>{{ title }}</p>
        <img :src="imageUrl">
        <button>Meer informatie</button>
    </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    title: String,
    image: String,
    route: String,
})

const imageUrl = computed(
    () => new URL(`../assets/cards/${props.image}.png`, import.meta.url).href
);
</script>

<style lang="scss" scoped>
.card {
    width: 22.5%;
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

    p {
        margin: 0 auto;
        padding-top: 48px;
        color: #2c5484;
        font-size: 1.4rem;
        font-family: Manrope, Trebuchet MS, Helvetica, sans-serif;
    font-weight: 550;
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