<template>
    <div id="contact-form">
        <div id="info">
            <infoLine icon="phone" title="Bel ons" text="0599 - 585010" />
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
                <input type="checkbox" id="privacy-checkbox" v-model="isPrivacyChecked" />
                <label for="privacy-checkbox" id="privacy-label">Ik heb de privacyverklaring gelezen</label>
            </div>
            <div v-if="!sent" class="contact-form-field">
                <button id="button-send" type="submit" class="cta-button">
                    <span>Verzenden</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#222222" class="button-arrow">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </button>
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
    margin: 25px 0;
}

.double-field {
    display: flex;
    justify-content: space-between;
}

.input-wrapper {
    width: 48%;
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
        color: #222222;
        font-size: 0.9rem;
        font-weight: 100;
    }

    input {
        height: 24px;
        width: 24px;
    }
}

#button-send {
    background-color: #222222;
    color: white;
    border: none;
}

#button-send:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
}

@media (max-width: 1024px) {
    #contact-form {
        bottom: initial;
        height: 786px;
        top: 24px;
        width: 96%;
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

    #privacy-field {
        justify-content: center;
    }
}

.info-line {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}

.info-content {
  margin-left: 12px;
}

.info-text {
  font-size: 1rem;
  font-weight: 600;
  margin: 0; /* Zorg ervoor dat er geen extra marges zijn */
}

.info-additional-text {
  font-size: 1rem;
  font-weight: 400;
  color: #555;
}

input::placeholder,
textarea::placeholder {
    font-size: 1rem; /* Verander de grootte van de placeholder-tekst */
    font-weight: 500;  /* Maak de placeholder-tekst dikker */
    color: #22222269;    /* Pas de kleur van de placeholder-tekst aan */
}

#privacy-field {
    display: flex;
    align-items: center;

    #privacy-label {
        margin-left: 16px;
        color: #222222;  /* Pas dezelfde kleur als de placeholder toe */
        font-size: 1rem; /* Verander de grootte van de tekst */
        font-weight: 500;  /* Maak de tekst iets dikker */
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
    display: flex; /* Gebruik flexbox */
    align-items: center; /* Centreer verticaal */
    justify-content: center; /* Centreer horizontaal */
    position: relative;
}

#privacy-field input[type="checkbox"]:checked {
    background-color: #2071b5; /* Achtergrondkleur als de checkbox is aangevinkt */
    border-color: #2071b5;
}

#privacy-field input[type="checkbox"]:checked::after {
    font-family: "Font Awesome 6 Free"; /* Specificeer Font Awesome */
    content: "\f00c"; /* Unicode voor Font Awesome 'fa-check' icoon */
    color: white;
    font-weight: 900;
    font-size: 18px; /* Pas de grootte aan indien nodig */
}


#button-send {
    background-color: #ffda00;
    color: #222222;
    padding: 15px 30px;
    border: none;
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: 800;
    text-align: center;
    position: relative;
    overflow: hidden; /* Verberg wat buiten de knop valt */
    display: inline-flex;
    align-items: center;
    justify-content: center; /* Zorg ervoor dat de tekst gecentreerd is */
    transition: background-color 0.3s ease, opacity 0.3s ease;
    width: 100%; /* Pas de breedte aan zoals je wilt */
    max-width: 400px; /* Max breedte indien nodig */
}

#button-send span {
    position: relative;
}

#button-send:hover {
    background-color: #ffe967; /* Pas de achtergrondkleur aan bij hover */
}

/* Zorg dat de pijl start buiten zicht, aan de rechterkant */
#button-send .button-arrow {
    position: absolute;
    right: 30px;
    width: 1.5rem;
    height: 1.5rem;
    opacity: 0;
    transition: transform 0.3s ease, opacity 0.3s ease;
    transform: translateX(-30px); /* Start buiten de knop */
    stroke: #222222 !important; /* Forceer de kleur van de pijl naar zwart */
}

/* Laat de pijl naar binnen schuiven en zichtbaar worden bij hover */
#button-send:hover .button-arrow {
    transform: translateX(0); /* Schuift naar binnen */
    opacity: 1; /* Wordt zichtbaar */
}

input, textarea {
    font-size: 1rem; /* Zet de grootte van de ingevoerde tekst op 1.25rem */
    width: 100%; /* Zorgt ervoor dat de invoervelden 100% breed zijn */
    padding: 6px;
    border: solid 2px #6b76858f;
    background: none;
    margin-top: 5px;
    font-weight: 500;
}

</style>
