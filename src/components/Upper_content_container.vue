<template>
    <div id="container-main">
        <div id="container-elements">
            <div id="container-text">
                <h1>{{ title }}</h1>
                <p>{{ description }}</p>
            </div>
            <div id="container-image" :style="{ backgroundImage: `url(${'src/assets/' + backgroundImage + '.png'})` }">
            </div>
            <!-- <div id="container-rounded">
                <div id="container-info">
                    <titleIcon title="+31612345678" icon="telephone" />
                    <div id='address'>
                        <titleIcon title="Mars" icon="address" />
                    </div>
                    <div id="mail">
                        <titleIcon title="info@dsduurzaam.nl" icon="mail" />
                    </div>
                </div>
            </div> -->
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
    }
};
</script>

<style lang="scss" scoped>
#container-main {
    background-color: #d9e1ea;
}

#container-elements {
    display: flex;
    justify-content: flex-end;
    margin: 0 auto;
    position: relative;
    height: 640px;
}

#container-text {
    width: 30%;
    border: 2px solid red;
    margin: 2% 2.5% 11% 0;
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
    background-size: 100% 100%;
    height: 100%;
    width: 53.5%;
    -webkit-transition: background-image 0.4s ease-in-out;
}

#container-rounded {
    border-top-right-radius: 100%;
    bottom: 0;
    left: -30%;
    outline-color: #f1f1f16e;
    outline-style: solid;
    outline-width: 72px;
    background-color: #f1f1f1;
    width: 65%;
    height: 136px;
    position: absolute;
}

#container-info {
    display: flex;
    flex-direction: column;
    margin: 25px;
    margin-left: 26.5%;
}

#address {
    margin-left: 40%;
}
</style>