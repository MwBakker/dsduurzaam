<template>
    <button id="button-arrow" @click="scrollToContactForm">
        {{ text }}
        <svg xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7" />
        </svg>
    </button>
</template>


<script>
export default {
    name: "IntroductionCard",
    props: {
        text: {
            type: String,
            required: true,
        },
    },
};

</script>

<style lang="scss" scoped>

button {
    display: flex;
    width: 50%;
    height: 50px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    background-color: #8dc63f;
    color: white;
    font-size: 1.15em;
    font-weight: 700;
    box-shadow: 0 4px 4px #0000002e;
    border: none;
    padding: 10px 20px;
    position: relative;
    cursor: pointer;
    transition: background-color 0.3s ease, opacity 0.3s ease;

    &:hover {
        background-color: #8ec63fe5;
    }
}

/* Animatie bij hover */
button:hover svg {
    transform: translateX(0);
    /* Schuift naar binnen */
    opacity: 1;
    /* Wordt zichtbaar */
}


/* De pijl in de knop */
svg {
    position: absolute;
    right: 20px;
    width: 1.5rem;
    height: 1.5rem;
    opacity: 0;
    transition: transform 0.3s ease, opacity 0.3s ease;
    transform: translateX(-30px);
    /* Startpositie buiten de knop */
}
</style>
