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
            <!-- <p>{{ statements[0] }}</p>
            <p>{{ statements[1] }}</p>
            <p>{{ statements[2] }}</p> -->
        </div>
        <button @click="route('/contact')">Offerte aanvragen</button>
    </div>
</template>

<!-- <script>

export default {
    name: "sub-product-card",
    props: ['title', 'image', 'amount', 'brand', 'statements', 'route'],
    methods: {
        route(direction) {
            // must direct through navigation component

            this.$root.$refs.navBar.routeGo(direction);
            //this.$root.$refs.A.foo();
        }
    }
}; -->


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

function route(direction) {
    this.$root.$refs.navBar.routeGo(direction);
}

const imageUrl = computed(
    () => new URL(`../assets/cards/${props.image}.png`, import.meta.url).href
);
</script>

<style lang="scss" scoped>
.card-sub-product {
    padding: 24px;
    position: relative;
    width: 22.5%;
    margin: 16px;
    margin-bottom: 24px;
    background-color: #29acdf05;
    border-radius: 24px;
    box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 18%);

    img {
        position: absolute;
        top: -125px;
        left: 10px;
        height: 180px;
    }

    h1 {
        margin: 12px auto 32px auto;
        padding-top: 48px;
        color: #2c5484;
        font-size: 1.4rem;
        font-family: Manrope, Trebuchet MS, Helvetica, sans-serif;
        font-weight: 550;
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
    background-color: #2c5484;
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

button {
    width: 100%;
}
</style>