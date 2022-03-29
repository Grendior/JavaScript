// import { createStore } from 'vuex'

// export default createStore({
//   state: {
//   },
//   getters: {
//   },
//   mutations: {
//   },
//   actions: {
//   },
//   modules: {
//   }
// })


import coachesModules from './modules/coaches/index';
import requestsModule from './modules/requests/index';
import authModule from './modules/auth/index';

const state = {
  modules: {
    coaches: coachesModules,
    requests: requestsModule,
    auth: authModule,
  },
};



export type State = typeof state