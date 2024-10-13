<template>
    <div id="contact-form">
        <div id="info">
            <InfoLine icon="phone" title="Bel ons" text="0599 - 585010" />
            <hr>
            <InfoLine icon="mail" title="Mail ons" text="info@insteq.nl" />
            <hr>
            <InfoLine icon="map" title="Bezoek ons" text="Straatnaam 1" additional-text="9999 XX Dorpnaam" />
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
                <input type="checkbox" id="privacy-checkbox" v-model="isPrivacyChecked" />
                <label for="privacy-checkbox" id="privacy-label">Ik heb de privacyverklaring gelezen</label>
            </div>
            <div v-if="!sent" class="contact-form-field" @click="submitForm()">
                <ButtonArrow text="Verzenden" />
            </div>
            <div v-if="sent" class="contact-form-field">
                <p>Uw vraag is verzonden</p>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
import InfoLine from './Info-line.vue';
import ButtonArrow from '@/components/Button-arrow.vue';

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
       async submitForm() {
            const response = await axios.post('https://insteq.nl/mail2.php', {
                name: this.firstName,
                email: this.email,
                message: this.description
            });
        },
        clearForm() {
            this.firstName = '';
            this.lastName = '';
            this.subject = '';
            this.email = '';
            this.phone = '';
            this.description = '';
        }
    },
    components: {
        InfoLine,
        ButtonArrow
    }
};
</script>

<style scoped>
#contact-form {
    display: flex;
    width: 50%;
    min-width: 750px;
    justify-content: center;
    background: white;
    box-shadow:
        rgba(255, 255, 255, 0.9) 0px 1px 1px 0px inset,
        rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
        rgba(0, 0, 0, 0.3) 0px 30px 60px 0px;
    top: 125px;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    height: 560px;
    margin-top: 50px;
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
    margin: 25px 0;
}

.double-field {
    display: flex;
    justify-content: space-between;
}

.input-wrapper {
    width: 48%;
}

button {
    max-width: 400px;
    width: 100%;
    margin: 0 auto;
}

input,
textarea,
label {
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

label {
    border: initial;
}

#privacy-field {
    display: flex;
    align-items: center;

    #privacy-label {
        margin-left: 16px;
        font-size: 0.9rem;
        font-weight: 100;
    }

    input {
        height: 24px;
        width: 24px;
    }
}

button:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
}


input::placeholder,
textarea::placeholder {
    /* Verander de grootte van de placeholder-tekst */
    font-weight: 500;
    /* Maak de placeholder-tekst dikker */
    color: #08535e69;
    /* Pas de kleur van de placeholder-tekst aan */
}

#privacy-field {
    display: flex;
    align-items: center;

    #privacy-label {
        margin-left: 16px;
        /* Pas dezelfde kleur als de placeholder toe */
        /* Verander de grootte van de tekst */
        font-weight: 500;
        /* Maak de tekst iets dikker */
    }

    input {
        height: 24px;
        width: 24px;
    }
}

#privacy-field input[type="checkbox"] {
    height: 24px;
    width: 24px;
    border: solid 2px #6b76858f;
    -webkit-appearance: none;
    appearance: none;
    background-color: white;
    cursor: pointer;
    display: flex;
    /* Gebruik flexbox */
    align-items: center;
    /* Centreer verticaal */
    justify-content: center;
    /* Centreer horizontaal */
    position: relative;
}

#privacy-field input[type="checkbox"]:checked {
    background-color: #08535e;
    /* Achtergrondkleur als de checkbox is aangevinkt */
    border-color: #08535e;
}

#privacy-field input[type="checkbox"]:checked::after {
    font-family: "Font Awesome 6 Free";
    /* Specificeer Font Awesome */
    content: "\f00c";
    /* Unicode voor Font Awesome 'fa-check' icoon */
    color: white;
    font-weight: 900;
    /* Pas de grootte aan indien nodig */
}

input,
textarea {
    font-size: 0.9rem;
    /* Zet de grootte van de ingevoerde tekst op 1.25rem */
    width: 100%;
    /* Zorgt ervoor dat de invoervelden 100% breed zijn */
    padding: 6px;
    border: solid 1.5px #08535e;
    background: none;
    margin-top: 5px;
    font-weight: 500;
}

@media (max-width: 1280px) {
    #contact-form {
        bottom: initial;
        min-width: initial;
        width: 100%;
        height: 942px;
        top: 24px;
        flex-direction: column;
    }

    .contact-form-field {
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

    #privacy-field {
        width: 80%;
        margin: 0 auto;
        justify-content: center;
        text-align: left;
    }
}

@media (max-width: 800px) {
    #contact-form {
        height: 872px;
        margin-top: 0;
    }

    button {
        font-size: 1em;
        height: 50px;
    }
}
</style>
