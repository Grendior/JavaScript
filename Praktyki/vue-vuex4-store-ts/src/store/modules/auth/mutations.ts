import { MutationTypes } from "./mutation-types";
import { MutationTree } from "vuex";
import { State } from "./state";
import { User } from "../../../types/User";

export type Mutations<S = State> = {
  [MutationTypes.SET_USER](state: S, payload: User): void,
  [MutationTypes.SET_AUTO_LOGOUT](state: S,): void
}
export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_USER](state, payload: User) {
    state.token = payload.token;
    state.userId = payload.userId;
    state.didAutoLogout = false;
  },
  [MutationTypes.SET_AUTO_LOGOUT](state) {
    state.didAutoLogout = true;
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