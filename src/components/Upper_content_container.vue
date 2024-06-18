<template>
    <div id="container-main">
        <div id="container-text">
            <h1>{{ title }}</h1>
            <p>{{ description }}</p>
        </div>
        <div id="container-image" :style="{ backgroundImage: `url(${'src/assets/' + backgroundImage + '.png'})` }"></div>
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
    display: flex;
    justify-content: space-between;
    position: relative;
    height: 640px;
    background-color: #e4effc;
    box-shadow: 0px -8px 12px #e4effc;
    margin-bottom: 72px;
}

#container-text {
    width: 35%;
    margin: 25px;
    padding-right: 10%;
    margin-left: 17%;

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
    background-size: 100% 100%;
    height: 100%;
    width: 55%;
    -webkit-transition: background-image 0.4s ease-in-out;
    transition: background-image 0.4s ease-in-out;
    -webkit-box-shadow: inset 50px 4px 5px 0px #e4effc;
    -moz-box-shadow: inset 50px 4px 5px 0px #e4effc;
    box-shadow: inset 50px 4px 5px 0px #e4effc;
}

#container-rounded {
    border-top-right-radius: 100%;
    bottom: 0;
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