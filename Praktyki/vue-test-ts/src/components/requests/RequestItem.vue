<template>
  <li>
    <div>
      <a :href="emailLink">{{ email }}</a>
    </div>
    <p>{{ message }}</p>
  </li>
</template>

<script lang="ts">
import { computed } from "@vue/runtime-core";
export default {
  // props: ["email", "message"],
  props: {
    email: String,
    message: String,
  },
  setup(props: any) {
    const emailLink = computed(function () {
      return "mailto:" + props.email;
    });
    return {
      emailLink,
    };
  },
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #ccc;
  padding: 1rem;
}

a {
  color: #3d008d;
  text-decoration: none;
  font-weight: bold;
}

a:hover,
a:active {
  color: #8d007a;
}

p {
  margin: 0.5rem 0 0 0;
}
</style>