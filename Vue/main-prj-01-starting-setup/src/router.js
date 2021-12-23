import { createRouter, createWebHistory } from 'vue-router';

import Coaches from './pages/coaches/Coaches.vue';
import IdCoach from './pages/coaches/IdCoach.vue';
import Registration from './pages/coaches/Registration.vue';

import Contact from './pages/requests/Contact.vue';
import Requests from './pages/requests/Requests.vue';

import ErrorPage from './pages/ErrorPage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/coaches' },
        { path: '/coaches', component: Coaches },
        {
            path: '/coaches/:id',
            component: IdCoach,
            props: true,
                children: [
                { path: 'contact', component: Contact },
            ]
        },
        { path: '/register', component:  Registration},
        { path: '/requests', component: Requests },
        { path: '/:notFound(.*)', component: ErrorPage },
    ],
});

export default router;