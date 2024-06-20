<template>
    <div id="wrapper">
        <img :src="imageUrl">
        <p>
            {{ title }}
        </p>
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
    #wrapper {
        display: flex;
        img {
            height: 32px;
        }
        p {
            margin: auto 25px;
            color: #2c5484;
            font-size: 18px;
        }
    }
</style>