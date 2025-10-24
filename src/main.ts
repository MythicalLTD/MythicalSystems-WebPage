import '@/style.css';
import { createApp } from 'vue';
import App from './App.vue';
import TawkMessengerVue from '@tawk.to/tawk-messenger-vue-3';
import router from './router';

const app = createApp(App);
app.use(router);  

app.use(TawkMessengerVue, {
    propertyId: '64482b5031ebfa0fe7fa65be',
    widgetId: '1gusuid04',
});

app.mount('#app');
