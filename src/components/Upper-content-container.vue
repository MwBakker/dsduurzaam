<template>
    <div id="container-main">
        <div id="container-image" :style="{ backgroundImage: `url(${'src/assets/tabs/' + backgroundImage + '.png'})` }">
        </div>
        <div id="container-elements">
            <div id="container-text">
                <h1>{{ title }}</h1>
                <p>{{ description }}</p>
                <button id="contact-button" @click="route('contact')">Gratis advies ontvangen</button>
            </div>
            <!-- <div id="container-rounded">
                <Transition name="slide-fade-up" appear>
                    <div id="container-info">
                        <titleIcon title="+31612345678" icon="telephone" />
                        <div id='address'>
                            <titleIcon title="Ergens in Ter Apel" icon="address" />
                        </div>
                        <div id="mail">
                            <titleIcon title="info@dsduurzaam.nl" icon="mail" />
                        </div>
                    </div>
                </Transition>
            </div> -->
        </div>
        <div id="service-row">
            <div>
                <ServiceLine title="Hoge kwaliteit" icon="quality" />
                <ServiceLine title="Tot 10 jaar garantie" icon="warranty" />
                <ServiceLine title="Direct leverbaar" icon="delivery" />
                <ServiceLine title="Binnen 1-3 dagen geplaatst" icon="installation" />
            </div>
        </div>
    </div>
</template>

<script>
import titleIcon from "./Title-icon.vue"
import ServiceLine from '@/components/Service-line.vue';

export default {
    name: "upper_content_container",
    props: {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        backgroundImage: {
            type: String,
            required: true,
        }
    },
    components: {
        titleIcon,
        ServiceLine,
    },
    methods: {
        route(direction) {
            var array = this.headerText[direction];
            this.title = array[0];
            this.description = array[1];
            this.headerImg = direction;
            this.$router.push({
                name: direction,
            })
        }
    }
};
</script>

<style lang="scss" scoped>
#container-main {
    background-color: #29acdf05;
}

button {
    margin-top: 25px;
    width: 45%;
}

#container-elements {
    display: flex;
    max-width: 1548px;
    margin: 0 auto;
    position: relative;
    height: 640px;
}

#container-text {
    width: 48%;
    height: 400px;
    margin-top: 50px;
    padding: 50px;

    p {
        text-align: justify;
        font-size: 1.2rem;
    }

    h1 {
        margin-bottom: 28px;
        font-size: 48px;
        color: #2c5484;
        font-weight: 550;
    }
}

#container-image {
    position: absolute;
    right: 0;
    height: 658px;
    background-size: 100% 100%;
    width: 50%;
    -webkit-transition: background-image 0.4s ease-in-out;
}

#container-info {
    display: flex;
    flex-direction: column;
    margin: 32px;
    margin-top: 42px;
    margin-left: 38.5%;
}

#address {
    margin-left: 53.5%;
}

#service-row {
    height: 142px;
    border-radius: 50%/100px 100px 0 0;
    background-color: white;
    box-shadow: inset 0px 8px 6px -6px #d7d7d778;

    div {
        margin: 56px auto 0 auto;
        display: flex;
        max-width: 1548px;
        justify-content: space-between;
    }
}
</style>