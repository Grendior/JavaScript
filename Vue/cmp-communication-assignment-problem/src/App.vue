<template>
    <ul>
      <active-user
        v-for="user in users"
        :key="user.id"
        :username="user.username"
        :age="user.age"
      ></active-user>
    </ul>
    <ul>
      <user-data @add-user="addUser"></user-data>
    </ul>
 
</template>

<script>
export default {
  data() {
    return {
        users: [],
    };
  },
  methods: {
      addUser(userName, age) {
          const newUser = {
              id: new Date().toISOString(),
              username: userName,
              age: age
          }
          this.users.push(newUser);
      },
  },

};
</script>

<style>

html{
    font-family: sans-serif;
}

section {
    margin: 2rem auto;
    max-width: 40rem;
    border-radius: 12px;
    border: 1px solid #ccc;
    padding: 1rem;
}


</style>