<template>
    <div class="line">
        <img :src="imageUrl">
        <p>{{ title }}</p>
    </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    title: String,
    icon: String
})

const imageUrl = computed(
    () => new URL(`../assets/icon/${props.icon}.png`, import.meta.url).href
);
</script>

<style lang="scss" scoped>
.line {
    margin: 0 84px;
    display: flex;

    img {
        margin: 0 20px;
        height: 32px;
    }

    p {
        margin: auto 0;
        color: #2c5484;
        font-size: 1rem;
        font-family: Manrope, Trebuchet MS, Helvetica, sans-serif;
        font-weight: 700;
        text-align: center;
        line-height: 1.875rem;
    }
}

@media (max-width: 1024px) {
    .line {
        img {
            height: 9vh;
            margin: 0 56px;
        }
    }
}
</style>