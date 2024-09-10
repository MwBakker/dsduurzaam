<template>
    <div id="contact-form">
        <div id="info">
            <infoLine icon="phone" title="Bel ons" text="0599 580 218" />
            <hr>
            <infoLine icon="mail" title="Stuur ons een mail" text="info@insteco.nl" />
            <hr>
            <infoLine icon="map" title="Kom langs" text="Ergens op mars" />
        </div>
        <form id="vue-form" @submit.prevent="submit">
            <div class="contact-form-field">
                <p>Uw naam</p>
                <input v-model="name">
            </div>
            <div class="contact-form-field">
                <p>Uw email adres</p>
                <input v-model="email">
            </div>
            <div class="contact-form-field">
                <p>Uw telefoonnummer (optioneel)</p>
                <input v-model="phone">
            </div>
            <div class="contact-form-field">
                <p>Onderwerp</p>
                <input v-model="subject">
            </div>
            <div class="contact-form-field">
                <p>Beschrijving</p>
                <textarea v-model="description" cols="40" rows="5"></textarea>
            </div>
            <div v-if="!sent" class="contact-form-field">
                <input id="button-send" type="submit" value="Verzenden">
            </div>
            <div v-if="sent" class="contact-form-field">
                <p>Uw bericht is verzonden</p>
            </div>
        </form>
    </div>
</template>

<script>

import axios from 'axios';
import infoLine from './Info-line.vue';

export default {
    name: "form",
    data() {
        return {
            name: '',
            email: '',
            phone: '',
            subject: '',
            description: '',
            sent: false,
        };
    },
    methods: {
        submit: function () {
            let form = {};
            form.name = this.name;
            form.subject = this.subject;
            form.email = this.email;
            form.phone = this.phone;
            form.message = this.description;
            axios({
                url: '../mail.php',
                method: "POST",
                data: form
            }).then(() => {
                this.sent = true;
            });
        },
    },
    components: {
        infoLine,
    }
};
</script>

<style scoped>
#contact-form {
    position: absolute;
    display: flex;
    width: 50%;
    height: 100%;
    justify-content: center;
    background: white;
    box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 0px;
    height: 600px;
}

#info {
    margin: 32px auto;
    width: 40%;

    hr {
        margin: 16px 16px;
    }
}

#vue-form {
    width: 70%;
}

.contact-form-field {
    width: 90%;
    margin: 32px auto;
}

.contact-form-field input {
    width: 100%;
    height: 32px;
    margin: auto;
    border: solid 2px #6b76858f;
    background: none;
    border-radius: 6px;
}

input {
    padding: 6px;
}

textarea {
    width: 100%;
    padding: 6px;
    border: solid 2px #6b76858f;
    background: none;
    border-radius: 6px;
}

#button-send {
    width: 100%;
    margin: auto auto;
}

@media (max-width: 1024px) {
    #contact-form {
        width: 96%;
        height: 1056px;
        flex-direction: column
    }

    #info,
    #vue-form {
        width: 100%;
    }
}
</style>