<template>
    <div id="whys" class="background-wrapper products-background">
        <div class="why-cards-container">
            <h1>Waarom kiest u voor InsteQ?</h1>
            <div class="why-cards">
                <div>
                    <WhyCard title="Duurzaam totaaladvies"
                        description="Wij bieden advies op maat om uw woning of bedrijfspand duurzaam en comfortabel te maken, nu en in de toekomst."
                        icon="sustainable" />
                    <WhyCard title="Gecertificeerd"
                        description="Onze experts combineren vakkennis met de juiste certificeringen, waardoor u altijd verzekerd bent van topkwaliteit."
                        icon="certified" />
                </div>
                <div>
                    <WhyCard title="Kwaliteit en garantie"
                        description="Wij werken voornamelijk met A-merken zoals Vaillant en LG, die garant staan voor uitstekende prestaties en duurzaamheid."
                        icon="quality" />
                    <WhyCard title="Direct leverbaar"
                        description="Onze producten en diensten zijn snel beschikbaar, zodat u direct kunt beginnen met het verduurzamen van uw woning of bedrijf."
                        icon="delivery" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import WhyCard from './cards/Why-card.vue';

</script>

<style lang="scss" scoped>
.why-cards-container {
    padding: 40px 2%;
    text-align: center;
    margin: 0 auto;

    h1 {
        font-weight: 800;
        margin-bottom: 40px;
    }
}

.why-cards {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    div {
        display: flex;
    }
}

@media (max-width: 800px) {
    .why-cards-container {
        max-width: initial;
        width: 98%;
    }

    .why-cards {
        gap: 0;
        width: 100%;

        div {
            flex-direction: column;
        }
    }
}
</style>