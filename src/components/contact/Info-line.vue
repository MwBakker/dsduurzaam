<template>
    <div id="info-line">
        <img :src=imageUrl>
        <div id="text">
            <h1>{{ title }}</h1>
            <p>{{ text }}</p>
        </div>
    </div>
</template>

<script setup>

import { computed } from 'vue'

const props = defineProps({
    icon: String,
    title: String,
    text: String,
})

const imageUrl = computed(
    () => new URL(`../../assets/icon/${props.icon}.png`, import.meta.url).href
);

</script>

<style lang="scss" scoped>
#info-line {
    display: flex;
    padding: 28px;
}

img {
    height: 64px;
    width: 64px;
    margin-right: 24px;
}

h1 {
    font-size: 1.8rem;
    font-weight: 600;
    color: #2c5484;
}
</style>