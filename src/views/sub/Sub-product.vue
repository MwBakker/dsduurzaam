<template>
    <div class="product">
        <div id="product-description">
            <h1>Een pakkende titel</h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                rem
                aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                explicabo.
                Nemo
                enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
                dolores
                eos qui
                ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                consectetur,
                adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam
                quaerat
                voluptatem.</p>
        </div>
        <slot></slot>
    </div>
</template>

<script>
import SubProductCard from '@/components/Sub-product-card.vue';
import QuoteCard from '@/components/Quote-card.vue';

export default {
    name: "advice",
    components: {
        SubProductCard,
        QuoteCard,
    },
    methods: {
        route(direction) {
            this.$root.$refs.navBar.routeGo(direction);
        }
    }
};
</script>

<style lang="scss" scoped>
    #product-description {
        width: 85%;
        margin: 0 auto;
    }
</style>