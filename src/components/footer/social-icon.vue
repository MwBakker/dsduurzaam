<template>
    <a :href="link">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16" height="16">
            <path :d=iconPath />
        </svg>
    </a>
</template>

<script setup>
const props = defineProps({
    socialLink: String,
    iconPath: String,
});
</script>