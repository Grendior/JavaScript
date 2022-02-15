import { createRouter, createWebHistory } from 'vue-router';

import RecivedMessage from './pages/RecivedMessage.vue';
import BlankPage from './pages/BlankPage.vue';
import NewMessage from './pages/NewMessage.vue';

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: BlankPage },
        { path: '/recived', component: RecivedMessage, props: true },
        { path: '/new-message', component: NewMessage, props: true }
    ]
});

export default router