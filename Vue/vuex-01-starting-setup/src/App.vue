<template>
  <base-container title="Vuex" v-if="isAuth">
    <TheCounter />
    <FavouriteValue />
    <button @click="addOne">Add 10</button>
    <ChangeCounter />
  </base-container>
  <base-container title="Auth">
    <UserAuth />
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavouriteValue from './components/FavoriteValue.vue';
import UserAuth from './components/UserAuth.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavouriteValue,
    UserAuth,
  },
  computed:{
      isAuth(){
          return this.$store.getters.userIsAuthenticated;
      }
  },
  methods: {
    addOne() {
      // this.$store.commit('increase', {value: 10});
      this.$store.dispatch({
        type: 'increase',
        value: 10,
      });
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>