<template>
    <div id="container-main">
        <div id="container-image" :style="{ backgroundImage: `url(${'src/assets/' + backgroundImage + '.png'})` }">
        </div>
        <div id="container-elements">
            <div id="container-text">
                <h1>{{ title }}</h1>
                <p>{{ description }}</p>
                <button id="contact-button" @click="route('contact')">Gratis advies ontvangen</button>
            </div>
            <div id="container-rounded">
                <div id="container-info">
                    <titleIcon title="+31612345678" icon="telephone" />
                    <div id='address'>
                        <titleIcon title="Mars" icon="address" />
                    </div>
                    <div id="mail">
                        <titleIcon title="info@dsduurzaam.nl" icon="mail" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import titleIcon from "./Title-icon.vue"

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
 //   background-color: #d9e1ea;
 background-color: #29acdf1a;
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
    height: 360px;
    border: 4px solid rgb(199, 2, 2);
    border-radius: 40px;
    box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 18%);
    margin-top: 50px;
    padding: 50px;

    p {
        text-align: justify;
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

#container-rounded {
    border-top-right-radius: 100%;
    bottom: 0;
    left: -20%;
    outline-color: #f1f1f16e;
    outline-style: solid;
    outline-width: 72px;
    background-color: #f1f1f1;
    width: 68%;
    height: 136px;
    position: absolute;
}

#container-info {
    display: flex;
    flex-direction: column;
    margin: 38.5px;
    margin-left: 29.5%;
}

#address {
    margin-left: 53.5%;
}
</style>