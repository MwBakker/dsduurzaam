import { createApp } from 'vue';
import App from './App.vue';
import mitt from 'mitt'
import router from './router';
import globalMixin from './globalMixin';

const emitter = mitt();
const app = createApp(App);
app.config.globalProperties.emitter = emitter;

app.mixin(globalMixin);

app.use(router);

app.mount('#app');
