
import { ActionTypes } from "./action-types";
import { State } from "./state";
import { Mutations } from "./mutations";
import { ActionTree, ActionContext } from "vuex";
import { Coach } from "@/types/Coach";

type AugumentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>
} & Omit<ActionContext<State, State>, 'commit'>

export interface Actions {
  [ActionTypes.REGISTER_COACH](
    { commit }: AugumentedActionContext,
    state: State,
    payload: Coach
  ): Promise<Coach>
}

export const actions = {
  [ActionTypes.REGISTER_COACH]({ commit }) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const userId = 
      }, 500);
    })
  }
}


export default {
  async registerCoach(context: any, data: any) {
    const userId = context.rootGetters.userId
    const coachData = {
      firstName: data.firstName,
      lastName: data.lastName,
      description: data.description,
      hourlyRate: data.hourlyRate,
      areas: data.areas,
    };

    const token = context.rootGetters.token;

    const response = await fetch(
      `https://vue-demo-app-test-default-rtdb.europe-west1.firebasedatabase.app/coaches/${userId}.json?auth=` + token,
      {
        method: 'PUT',
        body: JSON.stringify(coachData),
      });

    // const responseData = await response.json();

    if (!response.ok) {
      //errrorrrororo
    }

    context.commit('addCoach', {
      ...coachData,
      id: userId,
    });
  },
  async loadCoaches(context: any, payload: any) {
    if (!payload.forceRefresh && !context.getters.shouldUpdate) {
      return;
    }

    const response = await fetch(
      `https://vue-demo-app-test-default-rtdb.europe-west1.firebasedatabase.app/coaches.json`
    );
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch!');
      throw error;
    }

    const coaches = [];

    for (const key in responseData) {
      const coach = {
        id: key,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        description: responseData[key].description,
        hourlyRate: responseData[key].hourlyRate,
        areas: responseData[key].areas,
      };
      coaches.push(coach);
    }

    context.commit('setCoaches', coaches);
    context.commit('setFetchTimestamp');

  }
};