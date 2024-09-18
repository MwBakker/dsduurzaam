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
        scrollTo(id) {
            const elementToScrollTo = document.getElementById(id);
            elementToScrollTo.scrollIntoView({
                behavior: 'smooth', block:
                    'center',
            });
        }
    },
};
