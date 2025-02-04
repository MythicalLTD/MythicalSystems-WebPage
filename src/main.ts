import '@/style.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import TawkMessengerVue from '@tawk.to/tawk-messenger-vue-3';
import VueGtag from "vue-gtag";

const app = createApp(App);

app.use(router);
app.use(VueSweetalert2);
app.use(TawkMessengerVue, {
    propertyId: '64482b5031ebfa0fe7fa65be',
    widgetId: '1gusuid04',
});
app.use(VueGtag, {
    config: { id: "G-SRX87PZ6GE" },
    appName: 'MythicalClient - HomePage',
    enabled: true,
});

app.mount('#app');
