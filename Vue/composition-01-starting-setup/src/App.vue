<template>
  <section class="container">
    <user-data
      :first-name="firstName"
      :last-name="lastName"
      :age="age"
    ></user-data>
    <button @click="setNewAge">Change age</button>
    <div>
      <input type="text" placeholder="First Name" v-model="firstName" />
      <input type="text" placeholder="Last Name" ref="lastNameInput" />
      <button @click="setLastName">Set Last Name</button>
    </div>
  </section>
</template>

<script>
import { ref, computed, watch, provide } from 'vue';
import UserData from './components/UserData.vue';

export default {
  components: {
    UserData,
  },
  setup() {
    const firstName = ref('');
    const lastName = ref('');
    const lastNameInput = ref(null);
    const age = ref(23);

    provide('userAge', age);

    const uName = computed(function () {
      return firstName.value + ' ' + lastName.value;
    });

    watch([age, uName], function (newValues, oldValues) {
      console.log('Old age: ' + oldValues[0]);
      console.log('New age: ' + newValues[0]);
      console.log('Old name: ' + oldValues[1]);
      console.log('New name: ' + newValues[1]);
    });

    function setNewAge() {
      age.value = 32;
    }

    function setLastName() {
      lastName.value = lastNameInput.value.value;
    }

    return {
      setNewAge,
      name: uName,
      firstName,
      lastName,
      age,
      lastNameInput,
      setLastName,
    };
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

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>