// import mutations from './mutations';
// import actions from './actions';
// import getters from './getters';

// export default {
//     namespaced: true,
//     state() {
//         return {
//             lastFetch: null,
//             coaches: []
//         };
//     },
//     mutations,
//     actions,
//     getters
// }

import { Coach } from "../../../types/Coach";
const coaches: Coach[] = [];
export const state = {
  lastFetch: 0,
  coaches: coaches
}

export type State = typeof state