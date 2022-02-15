import { createApp } from 'vue';

import App from './App.vue';
import router from './router.js';

export const app = createApp(App);

app.use(router);

app.mount('#app');