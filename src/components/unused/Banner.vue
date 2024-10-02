<template>
    <div id="banner" :style="{ height: height }">
        <div id="content">
            <p :style="{ fontSize: fontSize }" v-if="text != null">{{ text }}</p>
            <p v-else>Weten wat u kunt besparen? Tijdens een vrijblijvend gesprek bespreken we samen de oplossing die het beste bij u past.</p>
            <button @click="scrollTo('contact-form-container')">Maak een afspraak</button>
        </div>
        <img src=" ../assets/tabs/contact.png" />
    </div>
</template>

<script setup>

const props = defineProps({
    text: String,
    fontSize: String,
    height: String,
})

</script>

<style lang="scss" scoped>
#banner {
    overflow: hidden;
    display: flex;
    width: 100%;
    height: 350px;
    margin: 32px auto;
    background-color: #3eaf3c;
    margin-bottom: 75px;
}

#content {
    width: 40%;
    margin: auto;

    p {
        color: white;
        font-size: 1.25rem;
        line-height: 1.6;
        margin: 12px auto 24px auto;
        font-weight: 600;
    }

    button {
        background-color: #ffffff;
        padding: 0;
        height: 50px;
        color: #222222;
    }
}

img {
    background-image: url('../assets/tabs/contact.png');
    width: 40%;
    margin-top: -60px;
    height: 480px;
}

@media (max-width: 1280px) {
    #banner {
        display: block;
        text-align: center;
    }

    img,
    #content {
        width: 100%;
    }

    #content {
        padding: 0 16px;
    }

    img {
        height: 200px;
        border-radius: initial;
        border-radius: 50% 50% 0 0;
    }
}
</style>