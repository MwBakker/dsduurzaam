<template>
    <div id="footer">
        <h1>D&S Duurzame installaties</h1>
        <div id="container-info">
            <div id="column-info">
                <div id="address-map">
                    <Address class="address"></Address>
                    <CustomMap id="map" />
                </div>
                <Contact class="contact" />
                <Privacy class="privacy" />
            </div>
            <div id='logos'>
                <a href='https://www.facebook.com/dsduurzaam/'><img class='logo'
                        src='../assets/icon/facebook.png' /></a>
                <a href='https://www.instagram.com/dsduurzaam/'><img class='logo'
                        src='../assets/icon/instagram.png' /></a>
            </div>
        </div>
    </div>
</template>

<script setup>
import Address from '@/components/Address.vue';
import CustomMap from '@/components/Map.vue'
import Contact from '@/components/Contact.vue';
import Privacy from './Privacy.vue';
</script>

<style lang="scss" scoped>
#footer {
    position: relative;
    height: 400px;
    background-color: #2c5484;
    box-shadow: inset 0px 8px 6px -6px #d7d7d778;
}

h1 {
    padding: 32px;
    font-size: 1.8rem;
    color: white;
}

p {
    font-weight: 1rem;
    color: white;
    margin: 16px 48px;
    font-size: 18px;
}

#column-info {
    display: flex;
    margin: 1vh 0;
    justify-content: space-between;
    padding: 0 20%;
}

#address-map {
    display: flex;
    align-items: flex-start;
}

#map {
    z-index: 1;
    overflow: hidden;
    margin: 0 56px;
    border-radius: 200px;
    width: 250px;
    height: 250px;
    -moz-border-radius: 200px;
    -webkit-mask-border-radius: 50%;
}

.address,
.contact,
.privacy {
    margin-top: 48px;
}

#logos {
    display: flex;
    justify-content: flex-end;
    position: absolute;
    bottom: 12px;
    right: 24px;

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


@media (max-width: 1548px) {
    #footer {
        height: 760px;
        text-align: center;
        margin-top: 64px;
    }

    #map{
        display: none;
    }

    #column-info {
        flex-direction: column;
    }

    #address-map {
        height: initial;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }
}
</style>