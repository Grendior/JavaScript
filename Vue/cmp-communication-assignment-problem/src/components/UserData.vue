<template>
  <section>
  <form @submit.prevent="submitData">
    <div>
      <label>Username </label>
      <input v-model="enteredUsername" type="text" />
    </div>
    <div>
      <label>Age </label>
      <input v-model="enteredAge" type="number" />
    </div>
    <div><button>Add User</button></div>
  </form>
  </section>
</template>

<script>
export default {
  emits: ["add-user"],
  data() {
    return {
      enteredUsername: "",
      enteredAge: 0,
    };
  },
  methods: {
    submitData() {
      this.$emit("add-user", this.enteredUsername, this.enteredAge);
    },
  },
};
</script>