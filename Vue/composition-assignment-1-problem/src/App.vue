<template>
  <h2>My Course Goal</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <div v-if="visibleGoals">
    <!-- <h3>{{ goals.goalOne }}</h3>
    <h3>{{ goalTwo }}</h3>
    <h3>{{ goal }}</h3> -->
    <h3>{{ goalOne }}</h3>
    <h3>{{ goalTwo }}</h3>
  </div>
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button @click="toggleGoals">{{ visibleGoals ? 'Hide' : 'Show' }}</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
</template>

<script>
// import { ref, reactive } from 'vue';

export default {
  // setup() {
  //   const goal1 = ref('Learn Vue');
  //   const visibleGoals = ref(true);

  //   const goals = reactive({
  //     goalOne: 'Finish the course',
  //     goalTwo: 'Learn composition Api',
  //   });

  //   function toggleGoals() {
  //     visibleGoals.value = !visibleGoals.value;
  //   }

  //   return {
  //     goal: goal1,
  //     toggleGoals: toggleGoals,
  //     visibleGoals: visibleGoals,
  //     goals: goals,
  //     goalTwo: goals.goalTwo,
  //   };
  // },
  data() {
    return {
      goalOne: 'Finish the course',
      goalTwo: 'Learn composition Api',
      visibleGoals: true,
    };
  },
  methods: {
    toggleGoals() {
      this.visibleGoals = !this.visibleGoals;
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>