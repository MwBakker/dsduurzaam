<template>
    <div class="line">
        <img :src="imageUrl" v-if="checkmark == '1'"></img>
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
    icon: String,
    checkmark: String
})

const imageUrl = computed(
    () => new URL(`../assets/icon/check.png`, import.meta.url).href
);
</script>

<style lang="scss" scoped>
.line {
    width: 30%;
    display: flex;

    img {
        margin: 0 20px;
        height: 32px;
    }

    h1 {
        color: #284c78;
        font-size: 1.25rem;
        margin-bottom: 8px;
        font-weight: 600;
    }

    p {
        margin: auto 0;
        color: #222222;
        // color: #2c54849c;
        font-size: 0.9rem;
        font-weight: 100;
        line-height: 1.875rem;
    }
}


@media (max-width: 1024px) {
    .line {
        width: 90%;
        margin: 0 auto;

        p {
            margin-bottom: 48px;
        }
    }
}
</style>