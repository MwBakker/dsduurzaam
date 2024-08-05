<template>
    <div id="footer">
        <h1>D&S Duurzame installaties</h1>
        <div id="container-info">
            <div id="column-info">
                <Address id="address"></Address>
                <Contact id="contact" />
            </div>
            <CustomMap id="map" />
            <!-- <div id='logos'>
                <a href='https://www.facebook.com/dsduurzaam/'><img class='logo' src='../assets/icon/facebook.png' /></a>
                <a href='https://www.instagram.com/dsduurzaam/'><img class='logo' src='../assets/icon/instagram.png' /></a>
            </div>  -->
        </div>
        <CustomMap />
        <img id="branding" src="@/assets/logo.png" alt="" />
        <div id="layer-two"></div>
    </div>
</template>

<script>
import Address from '@/components/Address.vue';
import CustomMap from '@/components/Map.vue'
import Contact from '@/components/Contact.vue';

export default {
    name: "Home",
    components: { Address, Contact, CustomMap },
};
</script>

<style lang="scss" scoped>
h1 {
    margin-left: 48px;
    font-size: 1.8rem;
    color: #2c5484;
}

p {
    font-weight: 10;
}

#footer {
    position: relative;
    background-color: #29acdf05;
    box-shadow: inset 0px 8px 6px -6px #d7d7d778;
    margin-top: 24px;

    p {
        margin: 16px 48px;
        font-size: 18px;
    }
}

#column-info {
    display: flex;
    margin: 1vh 0;
    justify-content: space-evenly;
}

#map {
    position: absolute;
    top: 2px;
    right: 0;
    width: 18%;
    height: 89%;
    border-left: 5px solid #2c5484;
    border-bottom: 3px solid #2c5484;
}

#logos {
    display: flex;
    flex-direction: row;
    margin-right: 2%;

    img {
        margin: 6px;
        height: 42px;
    }
}

#branding {
    margin-left: 24px;
    height: 52px;
    position: absolute;
    bottom: 0;
}

#layer-two {
    height: 24px;
    background-color: #2c5484;
}
</style>