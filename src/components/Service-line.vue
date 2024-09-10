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
    display: flex;

    img {
        margin: 0 20px;
        height: 32px;
    }

    p {
        margin: auto 0;
        color: #2c5484;
        font-size: 0.9rem;
        font-weight: 600;
        text-align: center;
        line-height: 1.875rem;
    }
}

@media (max-width: 1024px) {
    .line {
        align-items: center;
        img {
            width: 56px;
            height: 56px;
            margin: 6px 56px;
        }
    }
}
</style>