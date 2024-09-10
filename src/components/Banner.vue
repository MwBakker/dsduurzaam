<template>
    <div id="banner">
        <div id="content">
            <p>Weten wat u kan besparen? Tijdens een vrijblijvend gesprek bespreken we samen de oplossing die het beste
                bij u
                past.</p>
            <button @click="route('/contact')">Maak een afspraak</button>
        </div>
        <img src=" ../assets/tabs/contact.png" />
    </div>
</template>

<script setup>

function route(direction) {
    this.$root.$refs.navBar.routeGo(direction);
}

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
    // background-color: #fbb536;
}

#content {
    width: 40%;
    height: 200px;
    margin: auto;

    p {
        color: white;
        font-size: 18px;
        line-height: 1.6;
        margin: 12px auto 24px auto;
        font-weight: 600;
    }

    button {
        background-color: #fbb536;
        padding: 0;
        height: 50px;
    }
}

img {
    background-image: url('../assets/tabs/contact.png');
    border-radius: 240px 0 0 240px;
    width: 45%;
    margin-top: -120px;
    height: 480px;
}
</style>