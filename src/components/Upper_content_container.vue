<template>
    <div id="container-main">
        <div id="container-image"></div>
    </div>
    <div id="container-rounded">
        <div id="container-info">
            <titleIcon title="+31612345678" icon="telephone" />
            <div id='address'>
                <titleIcon title="Gaat je niks aan waus" icon="address" />
            </div>
            <div id="mail">
                <titleIcon title="info@dsduurzaam.nl" icon="mail" />
            </div>
        </div>

    </div>
</template>

<script>
import titleIcon from "./Title-icon.vue"

export default {
    name: "upper_content_container",
    data() {
        return {
            route: null,
        };
    },
    components: {
        titleIcon,
    }
};
</script>

<style lang="scss" scoped>
#container-main {
    position: relative;
    height: 640px;
    background-color: #e4effc;
    box-shadow: 0px -8px 12px #e4effc;
}

#container-image {
    position: absolute;
    right: 0;
    background: url(../assets/waterpomp.jpg);
    background-size: cover;
    height: 100%;
    width: 50%;
    -webkit-box-shadow: inset 50px 4px 5px 0px #e4effc;
    -moz-box-shadow: inset 50px 4px 5px 0px #e4effc;
    box-shadow: inset 50px 4px 5px 0px #e4effc;
}

#container-rounded {
    border-top-right-radius: 100%;
    bottom: 475px;
    outline-color: rgba(180, 185, 191, 0.089);
    outline-style: solid;
    outline-width: 50px;
    background-color: #f1f1f1;
    width: 64%;
    left: 0;
    height: 149px;
    position: absolute;
}

#container-info {
    margin: 30px 25px;
    margin-right: 225px;
}

#address {
    position: absolute;
    right: 0;
    bottom: 48px;
    margin-right: 45%;
}

#mail {
    margin-top: 42px;
}
</style>