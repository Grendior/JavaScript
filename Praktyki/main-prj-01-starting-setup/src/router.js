import { createRouter, createWebHistory } from 'vue-router';


import CoachDetail from './pages/coaches/CoachDetails.vue';
import CoachesList from './pages/coaches/CoachesList.vue';
import CoachRegister from './pages/coaches/CoachRegister.vue';
import ContactCoach from './pages/requests/ContactCoach.vue';
import RequestsRecived from './pages/requests/RequestsRecived.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/coaches', component: CoachesList },
        {
            path: '/coaches/:id', component: CoachDetail, children: [
                { path: 'contact', component: ContactCoach }
            ]
        },
        { path: '/register', component: CoachRegister },
        { path: '/requests', component: RequestsRecived },
        { path: '/:notFound(.*)', component: NotFound },
    ],
});

export default router;