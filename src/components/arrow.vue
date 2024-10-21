<template>
    <svg xmlns="https://www.w3.org/2000/svg" fill="none" :width="height" :height="height" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7" />
    </svg>
</template>


<script>
export default {
    name: "arrow",
    props: {
        height: {
            type: String,
        },
    },
};

</script>