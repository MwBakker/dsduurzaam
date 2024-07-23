<template>
    <div class="line">
        <img :src="imageUrl">
        <div>
            <h1>{{ title }}</h1>
            <p>{{ description }}</p>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    title: String,
    description: String,
    icon: String
})

const imageUrl = computed(
    () => new URL(`../assets/icon/check.png`, import.meta.url).href
);
</script>

<style lang="scss" scoped>
.line {
    width: 30%;
    margin: 0 84px;
    display: flex;

    img {
        margin: 0 20px;
        height: 32px;
    }

    h1 {
        color: #284c78;
        font-size: 1.5rem;
        margin-bottom: 8px;
    }

    p {
        margin: auto 0;
        color: #2c54849c;
        font-size: 1rem;
        font-family: Manrope, Trebuchet MS, Helvetica, sans-serif;
        font-weight: 700;
        line-height: 1.875rem;
    }
}
</style>