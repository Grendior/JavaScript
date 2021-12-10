import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';


const counterModule = {
    namespaced: true,
    state() {
        return {
            counter: 0,
        };
    },
    mutations: {
        increment(state) {

            state.counter += 2;
        },
        increase(state, payload) {
            state.counter += payload.value;
        },
        setAuth(state, payload) {
            state.isLoggedIn = payload.isAuth
        }
    },
    actions: {
        increment(context) {
            setTimeout(function () {
                context.commit({
                    type: 'increment',
                })
                // state.counter = state.counter + 2;
            }, 2000);
        },
        increase(context, payload) {
            console.log(context);
            context.commit('increase', payload);
        },
        login(context) {
            context.commit('setAuth', { isAuth: true })
        },
        logout(context) {
            context.commit('setAuth', { isAuth: false })
        }
    },

    getters: {
        testAuth(state) {
            return state.isLoggedIn;
        },
        finalCounter(state) {
            return state.counter * 3;
        },
        normalizedCounter(_, getters) {
            const finalCounter = getters.finalCounter;
            if (finalCounter < 0) {
                return 0;
            }
            if (finalCounter > 100) {
                return 100;
            }
            return finalCounter;
        },
        userIsAuthenticated(state) {
            return state.isLoggedIn;
        }
    }
};



const store = createStore({
    modules:{
        numbers: counterModule,
    },
    state() {
        return {
            counter: 0,
            isLoggedIn: false
        };
    },
    mutations: {},
    actions: {},
    getters: {},
});
const app = createApp(App);

app.use(store);

app.mount('#app');
