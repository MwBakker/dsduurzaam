<template>
    <div class="card-sub-product">
        <img :src="imageUrl">
        <div id="circle">
            <div>
                <h2>tot</h2>
                <h2 id="money">€ {{ amount }}</h2>
                <h2>subsidie</h2>
            </div>
        </div>
        <h1>{{ title }}</h1>
        <p>{{ brand }}</p>
        <p>4 tot 6KW jank op die handel</p>
        <img id="label" src="../assets/icon/label.png">
        <div id="statements">
            <div>
                <img src="../assets/icon/check.png">
                <p>Lorem ipsum toestanden</p>
            </div>
            <div>
                <img src="../assets/icon/check.png">
                <p>Lorem ipsum toestanden</p>
            </div>
            <div>
                <img src="../assets/icon/check.png">
                <p>Lorem ipsum toestanden</p>
            </div>
        </div>
        <div id="button-invoice">
            <button @click="scrollTo('contact-form-container')">Offerte aanvragen</button>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    title: String,
    image: String,
    amount: String,
    brand: String,
    statements: Array,
    route: String,
})

const imageUrl = computed(
    () => new URL(`../../../assets/cards/${props.image}.png`, import.meta.url).href
);
</script>

<style lang="scss" scoped>
.card-sub-product {
    padding: 24px;
    position: relative;
    width: 400px;
    margin: 0 16px;
    margin-bottom: 96px;
    background-color: #29acdf05;
    border-radius: 24px;
    box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 18%);

    img {
        position: absolute;
        top: -60px;
        left: 10px;
        height: 146px;
    }

    h1 {
        margin: 12px auto 32px auto;
        padding-top: 48px;
        color: #222222;
        font-size: 1.4rem;
        font-family: 'Montserrat', sans-serif !important;
        font-weight: 550;
        word-spacing: 0px !important;
    }
}

#label {
    position: initial;
    width: 72px;
    height: 24px;
    margin: 12px 0 6px 0;
}

#circle {
    position: absolute;
    right: 20px;
    top: -45px;
    background-color: #222222;
    height: 110px;
    width: 110px;
    border-radius: 70px;

    div {
        margin: 19px 0;
    }

    h2 {
        text-align: center;
        margin: 0;
        color: white;
    }

    #money {
        font-size: 1.4rem;
        font-weight: 600;
    }
}

#statements {
    margin: 0 auto;

    div {
        display: flex;
        margin: 12px 0;
        align-items: center;
    }

    img {
        position: inherit;
        height: 24px;
        margin-right: 8px;
    }
}

#button-invoice {
    width: 100%;
    text-align: center;
}

@media (max-width: 1024px) {
    .card-sub-product {
        width: 320px;
    }
}
</style>