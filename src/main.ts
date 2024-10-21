import '@/assets/main.scss';
import {type App, createApp} from 'vue';
import AppElement from './App.vue';
import router from './router';

const app: App<Element> = createApp(AppElement);

app.use(router);

app.mount('#app');