<template>
    <div id="contact-form" ref="contactForm">
        <div id="info">
            <infoLine icon="phone" title="Bel ons" text="0599 - 585 010" />
            <hr>
            <infoLine icon="mail" title="Mail ons" text="info@insteco.nl" />
            <hr>
            <infoLine icon="map" title="Bezoek ons" text="Straatnaam 1" additional-text="9999 XX Dorpnaam" />
        </div>
        <form id="vue-form" @submit.prevent="submit">
            <div class="contact-form-field double-field">
                <div class="input-wrapper">
                    <input v-model="firstName" placeholder="Voornaam" />
                </div>
                <div class="input-wrapper">
                    <input v-model="lastName" placeholder="Achternaam" />
                </div>
            </div>
            <div class="contact-form-field">
                <input v-model="email" placeholder="Email">
            </div>
            <div class="contact-form-field">
                <input v-model="phone" placeholder="Telefoonnummer (optioneel)">
            </div>
            <div class="contact-form-field">
                <input v-model="subject" placeholder="Onderwerp">
            </div>
            <div class="contact-form-field">
                <textarea v-model="description" placeholder="Hoe kunnen wij u van dienst zijn?" cols="40"
                    rows="5"></textarea>
            </div>
            <div id="privacy-field">
                <label for="privacy-checkbox" id="privacy-label">Ik heb de privacyverklaring gelezen</label>
                <input type="checkbox" id="privacy-checkbox" v-model="isPrivacyChecked" />
            </div>
            <div v-if="!sent" class="contact-form-field">
                <input id="button-send" type="submit" value="Verzenden" :disabled="!isPrivacyChecked" />
            </div>
            <div v-if="sent" class="contact-form-field">
                <p>Uw vraag is verzonden</p>
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
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            subject: '',
            description: '',
            sent: false,
            isPrivacyChecked: false,
        };
    },
    methods: {
        submit: function () {
            let form = {};
            form.firstName = this.firstName;
            form.lastName = this.lastName;
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
    justify-content: center;
    background: white;
    box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
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
    text-align: center;
    margin: 32px 0;
}

.double-field {
    display: flex;
    justify-content: space-between;
}

.input-wrapper {
    width: 48%;
}

.contact-form-field input,
.contact-form-field textarea {
    padding: 6px;
    border: solid 2px #6b76858f;
    background: none;
    margin-top: 5px;
}

input,
textarea {
    width: 100%;
    /* Zorgt ervoor dat de invoervelden 100% breed zijn */
}

#button-send {
    background-color: #2c5484;
    color: white;
    border: none;
}

#button-send:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
}

#privacy-field {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;

    #privacy-label {
        color: #2c5484;
        font-size: 0.9rem;
        font-weight: 100;
    }

    input {
        height: 24px;
        width: 24px;
    }
}

@media (max-width: 1024px) {
    #contact-form {
        height: 1200px;
        bottom: initial;
        top: 24px;
        width: 96%;
        height: 820px;
        flex-direction: column;
    }

    .contact-form-field {
        width: 95%;
        margin: 8px auto;
    }

    #info,
    #vue-form {
        width: 100%;
        margin: 12px 0;
    }

    .double-field {
        flex-direction: column;
    }

    .input-wrapper {
        width: 100%;
    }
}
</style>
