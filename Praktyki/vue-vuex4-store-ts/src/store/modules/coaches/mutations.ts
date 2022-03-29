// export default {
//   addCoach(state:any, payload:any) {
//     state.coaches.push(payload)
//   },
//   setCoaches(state:any, payload:any) {
//     state.coaches = payload;
//   },
//   setFetchTimestamp(state: any) {
//     state.lastFetch = new Date().getTime();
//   }
// };


import { Coach } from "@/types/Coach";
import { MutationTree } from "vuex";
import { MutationTypes } from "./mutations-types";
import { State } from "./state";

export type Mutations<S = State> = {
  [MutationTypes.SET_COACH](state: S, payload: Coach): void
  [MutationTypes.SET_COACHES](state: S, payload: Array<Coach>): void
  [MutationTypes.SET_FETCH_TIMESTAMP](state: S): void
}

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_COACH](state, payload: Coach) {
    state.coaches.push(payload);
  },
  [MutationTypes.SET_COACHES](state, payload: Array<Coach>) {
    state.coaches = payload;
  },
  [MutationTypes.SET_FETCH_TIMESTAMP](state) {
    state.lastFetch = new Date().getTime();
  }

}