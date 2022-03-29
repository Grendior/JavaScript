import { MutationTypes } from "./mutation-types";
import { MutationTree } from "vuex";
import { State } from "./state";

export type Mutations<S = State> = {
  [MutationTypes.SET_USER](state:S, payload: object):void,
  [MutationTypes.SET_AUTO_LOGOUT](state:S, payload: boolean)
}
export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_USER](state,payload: object){
    state.token = payload.token,
    state.userId = payload.userId,
    state.didAutoLogout = false
  }
}

// export default {
//   setUser(state:any, payload:any) {
//     state.token = payload.token;
//     state.userId = payload.userId;
//     state.didAutoLogout = false;
//   },
//   setAutoLogout(state:any) {
//     state.didAutoLogout = true;
//   }
// }