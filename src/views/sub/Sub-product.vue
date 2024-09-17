<template>
    <div class="product">
        <div id="product-description">
        </div>
        <slot></slot>
        <!--
        <Banner :text=bannerText></Banner>
        -->

    </div>
</template>

<script>
import SubProductCard from '@/components/Sub-product-card.vue';
import QuoteCard from '@/components/Quote-card.vue';
import Banner from '../../components/Banner.vue';

export default {
    name: "advice",
    components: {
        SubProductCard,
        QuoteCard,
        Banner,
    },
    data() {
        return {
            showNav: false,
            bannerText: "Weten wat u kunt besparen? Tijdens een vrijblijvend gesprek bespreken we samen de oplossing die het beste bij u past."
        };
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