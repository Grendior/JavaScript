<template>
  <button @click="increment">Add 2</button>
  <button @click="increase({value: 10})">Add 10</button>
</template>


<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    // addOne() {
    //   this.$store.dispatch('increment');
    // },
    ...mapActions('numbers',['increment', 'increase']),
  },
};
</script>