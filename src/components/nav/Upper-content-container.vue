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
            <div id="service-content">
                <div class="service-lines">
                    <ServiceLine title="Hoge kwaliteit" icon="quality" />
                    <ServiceLine title="Tot 10 jaar garantie" icon="warranty" />
                </div>
                <div class="service-lines">
                    <ServiceLine title="Direct leverbaar" icon="delivery" />
                    <ServiceLine title="Binnen 1-3 dagen geplaatst" icon="installation" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import titleIcon from "../Title-icon.vue"
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
    padding-top: 160px;
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
    width: 55%;
    padding: 115px 50px;

    p {
        text-align: justify;
        font-weight: 600;
        font-size: 1.05rem;
    }

    h1 {
        margin-bottom: 28px;
        color: #2c5484;
        font-weight: 600;
    }
}

#container-image {
    position: absolute;
    top: 72px;
    right: 0;
    z-index: -1;
    height: 732px;
    background-size: cover;
    background-repeat: no-repeat;
    width: 38%;
    -webkit-transition: background-image 0.4s ease-in-out;
}

#container-image {
    border-top-left-radius: 50%;
    border-bottom-left-radius: 50%;
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
    background-color: white;
    box-shadow: inset 0px 8px 6px -6px #d7d7d778;

    #service-content {
        display: flex;
        margin: 56px auto 0 auto;
        padding-top: 40px;
        max-width: 1548px;
        justify-content: center;
    }

    .service-lines {
        display: flex;
        align-items: center;
    }
}

@media (max-width: 1548px) {
    #container-elements {
        text-align: center;
        bottom: 0;
        height: 500px;
    }

    #container-image {
        width: auto;
        inset: auto 0 auto;
        border-top-left-radius: 50%;
        border-top-right-radius: 50%;
        border-bottom-left-radius: 0;
        background-size: 100% 75%;
        height: 420px;
        top: 380px;
    }

    #container-text {
        width: 97.5%;
        margin: auto;
        padding: 0;

        h1 {
            font-size: 28px;
        }

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

    #contact-button {
        display: none;
    }

    #service-row {
        height: 300px;
        padding: 0 16px;

        #service-content {
            margin: 0;
            justify-content: space-evenly;

            .service-lines {
                flex-direction: column;
            }

            .line {
                flex-direction: column;
                margin: 18px 0;
            }
        }
    }
}
</style>