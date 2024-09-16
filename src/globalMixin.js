export default {
    methods: {
        mounted() {
            // Event listener voor venstergrootte wijziging
            window.addEventListener('resize', this.handleResize);
        },
        beforeUnmount() {
            // Verwijder de event listener om geheugenlekken te voorkomen
            window.removeEventListener('resize', this.handleResize);
        },
        scrollToContactForm() {
            const elementToScrollTo = document.getElementById('contact-form-container');
            elementToScrollTo.scrollIntoView({
                behavior: 'smooth', block:
                    'nearest',
            });
        }
    },
};
