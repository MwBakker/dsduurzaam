<template>
    <div id="footer">
        <div id="layer-one">
            <h1>D&S Duurzame installaties</h1>
            <!-- <div id="row-1">
                <p>D&S Duurzame installaties</p>
                <p>Privacy verklaring</p>
            </div>
            <div id="row-2">
                <p>KvK: 0123456789</p>
                <p>Btw: 012345678910111213</p>
            </div>
            <div id='logos'>
                <a href='https://www.facebook.com/dsduurzaam/'><img class='logo' src='../assets/icon/facebook.png' /></a>
                <a href='https://www.instagram.com/dsduurzaam/'><img class='logo' src='../assets/icon/instagram.png' /></a>
            </div> -->
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
h1 {
    margin-left: 48px;
    font-size: 1.8rem;
    color: #2c5484;
}

p {
    font-weight: 10;
}

#footer {
    display: flex;
    flex-direction: column;
    box-shadow: inset 0px 8px 6px -6px #d7d7d778;
    margin-top: 24px;

    p {
        margin: 16px 48px;
        font-size: 18px;
    }
}

#layer-one {
    padding-top: 20px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    background-color: #29acdf05;
    height: 264px;

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