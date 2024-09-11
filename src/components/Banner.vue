<template>
    <div id="banner">
        <div id="content">
            <p>{{ text }}</p>
            <button @click="route('/contact')">Maak een afspraak</button>
        </div>
        <img src=" ../assets/tabs/contact.png" />
    </div>
</template>

<script setup>

function route(direction) {
    this.$root.$refs.navBar.routeGo(direction);
}


const props = defineProps({
    text: String,
})

</script>

<style lang="scss" scoped>
#banner {
    overflow: hidden;
    display: flex;
    width: 100%;
    height: 350px;
    border-radius: 12px;
    margin: 32px auto;
    background-color: #2c5484;
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
        color: #2c5484;
    }
}

img {
    background-image: url('../assets/tabs/contact.png');
    border-radius: 240px 0 0 240px;
    width: 40%;
    margin-top: -60px;
    height: 480px;
}
</style>