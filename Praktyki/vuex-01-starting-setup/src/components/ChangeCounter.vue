<template>
  <button @click="incr">Add 2</button>
  <button @click="inc({ value: 11 })">Add 11</button>
</template>


<script>
import { mapActions } from 'vuex';
export default {
  methods: {
    // addOne() {
    //   this.$store.dispatch('increase');
    // },
    // ...mapActions(['increase', 'increment']),
    ...mapActions('numbers', {
      inc: 'increment',
      incr: 'increase',
    }),
  },
};
</script>