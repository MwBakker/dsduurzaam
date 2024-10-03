<template>
  <div>
    <!-- Voeg een beheeroptie toe voor cookies -->
    <button @click="openCookieSettings">Beheer uw cookies</button>

    <div v-if="showCookieSettings" class="cookie-overlay">
      <div class="cookie-container">
        <h2>Cookies instellen</h2>
        <p>U kunt uw voorkeuren voor marketingcookies hier bijwerken.</p>
        <div class="cookie-buttons">
          <button @click="acceptCookies" class="accept-button">Accepteren</button>
          <button @click="rejectCookies" class="reject-button">Weigeren</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showCookieSettings: false,
      isCookieAccepted: false,
    };
  },
  methods: {
    openCookieSettings() {
      this.showCookieSettings = true; // Open de cookie-instellingen
    },
    acceptCookies() {
      document.cookie = "marketing_cookies=accepted; path=/; max-age=" + 60 * 60 * 24 * 365;
      this.isCookieAccepted = true;
      this.enableTracking();
      this.showCookieSettings = false; // Sluit de cookie-instellingen
    },
    rejectCookies() {
      document.cookie = "marketing_cookies=rejected; path=/; max-age=" + 60 * 60 * 24 * 365;
      this.isCookieAccepted = true;
      this.showCookieSettings = false; // Sluit de cookie-instellingen
    },
    enableTracking() {
      // Activeer Google Ads en Facebook Pixel tracking hier
    },
    checkCookieConsent() {
      const cookies = document.cookie.split(';').map(cookie => cookie.trim());
      const consentCookie = cookies.find(cookie => cookie.startsWith('marketing_cookies='));
      if (!consentCookie) {
        this.lockScroll();
      } else {
        this.unlockScroll();
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
    this.checkCookieConsent();
    this.lockScroll();
  }
};
</script>
