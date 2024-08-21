<template>
    <div id="container-main">
        <div id="container-elements">
            <div id="container-text">
                <h1>{{ title }}</h1>
                <p>{{ description }}</p>
                <button id="contact-button" @click="route('contact')">Gratis advies ontvangen</button>
            </div>
        </div>
        <div id="container-image" :style="{ backgroundImage: `url(${'src/assets/tabs/' + backgroundImage + '.png'})` }">
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
    max-width: 1450px;
    margin: 0 auto;
    position: relative;
    height: 460px;
}

#container-text {
    width: 65%;
    padding: 115px 50px;

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
    top: 28px;
    // box-shadow:
    //     inset 60px 0 30px -30px white;
    right: 0;
    z-index: -1;
    height: 956px;
    background-size: 100% 80%;
    background-repeat: no-repeat;
    width: 35%;
    -webkit-transition: background-image 0.4s ease-in-out;
}

#container-image {
    border-top-left-radius: 45%;
    border-bottom-left-radius: 58%;
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
    // border-radius: 50%/100px 100px 0 0;
    background-color: white;
    box-shadow: inset 0px 8px 6px -6px #d7d7d778;

    div {
        margin: 56px auto 0 auto;
        display: flex;
        max-width: 1548px;
        justify-content: space-between;
    }
}

@media (max-width: 1548px) {
    #container-image {
        width: auto;
        inset: auto 0 auto;
        border-top-left-radius: 50%;
        border-top-right-radius: 50%;
        border-bottom-left-radius: 0;
        background-size: 100% 60%;
        height: 600px;
        top: 460px;
    }

    #container-elements {
        text-align: center;
        height: 600px;
    }

    #container-text {
        width: 75%;
        margin: auto;
        padding: 0;
        p {
            text-align: center;
        }
    }
    
    button {
        position: absolute;
        bottom: 18px;
        height: 72px;
        left: 0;
        right: 0;
        margin: auto;
    }

    #service-row {
        height: 74vh;

        div {
            flex-direction: column;
            margin-top: 0px;
            padding-top: 40px;
        }
    }
}
</style>