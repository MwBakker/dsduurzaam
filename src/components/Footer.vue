<template>
    <div id="footer">
        <img id='brand' src='../assets/logo.png' />
        <div id="column-info">
            <div id="address">
                <h1>Adres</h1>
                <p>Hoofdstraat 4</p>
                <p>9561 JA</p>
                <p>Ter Apel</p>
            </div>
            <div id="contact">
                <h1>Contact</h1>
                <p>088-7155733</p>
                <p>info@duureco.nl</p>
                <p>KvK: 12345 6789 101112</p>
                <p>Btw: 12345 6789 101112</p>
            </div>
            <div id="privacy">
                <h1>Beleid</h1>
                <p>Privacyverklaring</p>
                <p>Disclaimer</p>
            </div>
        </div>
        <div id='logos'>
            <a href='https://www.facebook.com/dsduurzaam/'><img class='logo' src='../assets/icon/facebook.png' /></a>
            <a href='https://www.instagram.com/dsduurzaam/'><img class='logo' src='../assets/icon/linkedin.png' /></a>
        </div>
    </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
#footer {
    position: relative;
    height: 186px;
    background-color: #2c5484;
    box-shadow: inset 0px 8px 6px -6px #d7d7d778;
}

#brand {
    position: absolute;
    height: 72px;
    top: -31px;
    left: 16px;
}

h1 {
    color: white;
    font-size: 1.05rem;
    font-weight: 600;
    margin: 32px 0 18px 0;
}

p {
    color: white;
    font-size: 1rem;
    font-weight: 100;
    margin: 6px 0;
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

    #column-info {
        flex-direction: column;
    }
}
</style>