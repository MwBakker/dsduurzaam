<template>
    <div id="whys" class="background-wrapper products-background">
        <div class="why-cards-container">
            <h2>Waarom kiest u voor InsteQ?</h2>
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
import { computed } from 'vue';
import WhyCard from './cards/Why-card.vue';

</script>

<style lang="scss" scoped>
.why-cards-container {
    padding: 40px 20px;
    text-align: center;
    max-width: 90%;

    h2 {
        font-weight: 800;
        margin-bottom: 40px;
    }
}

.why-cards {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;

    div {
        display: flex;
    }
}

@media (max-width: 800px) {
    .why-cards {
        gap: 0;
        width: 97.5%;
    }
}
</style>