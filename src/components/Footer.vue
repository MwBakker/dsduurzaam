<template>
    <div id="footer">
        <div id="layer-one">
            <div id="row-1">
                <p>Algemene voorwaarden</p>
                <p>Privacy verklaring</p>
            </div>
            <div id="row-2">
                <p>KvK: 0123456789</p>
                <p>Btw: 012345678910111213</p>
            </div>
            <div id='logos'>
                <a href='https://www.facebook.com/dsduurzaam/'><img class='logo' src='../assets/icon/facebook.png' /></a>
                <a href='https://www.instagram.com/dsduurzaam/'><img class='logo' src='../assets/icon/instagram.png' /></a>
            </div>
        </div>
        <img id="branding" src="@/assets/logo.png" alt="" />
        <div id="layer-two"></div>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
    name: "Home",
    components: {},
};
</script>

<style lang="scss" scoped>
p {
    font-weight: 10;
}

#footer {
    display: flex;
    flex-direction: column;

    p {
        margin: 16px 48px;
        font-size: 18px;
    }
}

#layer-one {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    background-color: #29acdf1a;
    height: 356px;

    #row-1 {
        display: flex;
        margin-left: 5%;
        flex-direction: row;
    }

    #row-2 {
        display: flex;
        flex-direction: column;

        p {
            margin: 2px 36px;
        }
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