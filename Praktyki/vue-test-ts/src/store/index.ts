import { createStore } from 'vuex';

import coachesModules from './modules/coaches/index';
import requestsModule from './modules/requests/index';
import authModule from './modules/auth/index';

const store = createStore({
  modules: {
    coaches: coachesModules,
    requests: requestsModule,
    auth: authModule,
  },
});



export default store;