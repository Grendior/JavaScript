<template>
    <transition-group tag="ul" name="list-data">
      <li v-for="user in users" :key="user" @click="removeUser(user)">
        {{ user }}
      </li>
    </transition-group>
  <div>
    <input type="text" ref="userNameInput" />
    <button @click="addUsers">Add User</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: ['Max', 'Manu', 'Julie', 'Angel', 'Michael'],
    };
  },
  methods: {
    addUsers() {
      const enteredUserName = this.$refs.userNameInput.value;
      this.users.push(enteredUserName);
    },
    removeUser(user) {
      this.users = this.users.filter((usr) => usr !== user);
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 1rem 0;
  padding: 0;
}
li {
  border: 1px solid #ccc;
  padding: 1rem;
  text-align: center;
}
</style>