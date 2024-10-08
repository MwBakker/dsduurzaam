<template>
  <div v-if="!isCookieAccepted" class="cookie-overlay">
    <!-- Toon de container alleen als cookies niet geaccepteerd zijn -->
    <div class="cookie-container">
      <h2>Cookies instellen</h2>
      <p>Wij gebruiken cookies om u een betere ervaring te bieden en om gepersonaliseerde advertenties te tonen.</p>
      <p>Gaat u akkoord met het gebruik van marketingcookies?</p>
      <div class="cookie-buttons">
        <button @click="rejectCookies" class="reject-button">Weigeren</button>
        <button @click="acceptCookies" class="accept-button">Accepteren</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCookieAccepted: true, // Standaard is false totdat er cookies zijn geaccepteerd of geweigerd
    };
  },
  methods: {
    acceptCookies() {
      document.cookie = "marketing_cookies=accepted; path=/; max-age=" + 60 * 60 * 24 * 365;
      this.isCookieAccepted = true; // Zet de waarde op true na acceptatie
      this.enableTracking();
      this.unlockScroll();
    },
    rejectCookies() {
      document.cookie = "marketing_cookies=rejected; path=/; max-age=" + 60 * 60 * 24 * 365;
      this.isCookieAccepted = true; // Zet de waarde op true na weigering
      this.unlockScroll();
    },
    enableTracking() {
      const gtmScript = document.createElement('script');
      gtmScript.src = "https://www.googletagmanager.com/gtm.js?id=GTM-KP3LJSX2"; // Vervang 'GTM-XXXXXX' met jouw GTM ID
      document.head.appendChild(gtmScript);

      const gtmNoScript = document.createElement('noscript');
      gtmNoScript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KP3LJSX2"
                                height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
      document.body.appendChild(gtmNoScript);
    },
    checkCookieConsent() {
      const cookies = document.cookie.split(';').map(cookie => cookie.trim());
      const consentCookie = cookies.find(cookie => cookie.startsWith('marketing_cookies='));
      if (consentCookie && consentCookie.split('=')[1] === 'accepted') {
        this.isCookieAccepted = true; // Als cookies zijn geaccepteerd, verberg de container
        this.unlockScroll();
      } else if (consentCookie && consentCookie.split('=')[1] === 'rejected') {
        this.isCookieAccepted = true; // Als cookies zijn geweigerd, verberg de container
        this.unlockScroll();
      } else {
        this.lockScroll(); // Blokkeer scrollen zolang er geen keuze is gemaakt
      }
    },
    lockScroll() {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    },
    unlockScroll() {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }
  },
  mounted() {
    this.checkCookieConsent(); // Controleer de cookies bij het laden van de pagina
  }
};
</script>

<style scoped>
/* Overlay die de rest van de pagina onbruikbaar maakt */
.cookie-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  /* Semi-transparant zwart om de rest van de pagina af te schermen */
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: auto;
}

/* Cookie-container in het midden van het scherm */
.cookie-container {
  background-color: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  max-width: 550px;
  width: 100%;
  font-family: Arial, sans-serif;
}

.cookie-container h2 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 20px;
  color: #08535e;
}

.cookie-container p {
  font-weight: 500;
  line-height: 1.6;
  margin-bottom: 30px;
}

.cookie-buttons {
  display: flex;
  justify-content: space-between;
}

button {
  padding: 12px 24px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
  font-weight: 600;
}

.accept-button {
  background-color: #8dc63f;
  color: white;
}

.accept-button:hover {
  background-color: #8dc63f;
}

.reject-button {
  background-color: #08535e;
  color: white;
}

.reject-button:hover {
  background-color: #08535ec7;
}
</style>
