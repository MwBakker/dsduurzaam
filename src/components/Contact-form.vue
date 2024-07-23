<template>
    <div id="contact-form">
        <form class="vue-form" @submit.prevent="submit">
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

};
</script>

<style scoped>
#contact-form {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
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
</style>