export default {
    computed: {
        imageUrl(src) {
            return new URL(`./assets/${src}`, import.meta.url).href;
        },
    },
    methods: {
        mounted() {
            // Event listener voor venstergrootte wijziging
            window.addEventListener('scroll', this.handleScroll);
            window.addEventListener('resize', this.handleResize);
        },
        beforeUnmount() {
            // Verwijder de event listener om geheugenlekken te voorkomen
            window.removeEventListener('resize', this.handleResize);
            window.removeEventListener('scroll', this.handleScroll);
        },
        scrollTo(id) {
            const elementToScrollTo = document.getElementById(id);
            elementToScrollTo.scrollIntoView({
                behavior: 'smooth', block:
                    'center',
            });
        },
    },
};
