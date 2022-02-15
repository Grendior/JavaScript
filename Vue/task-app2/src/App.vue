<template>
  <the-navigation></the-navigation>
  <router-view></router-view>
</template>




<script>
import TheNavigation from "./components/nav/Navigation.vue";
export default {
  components: {
    TheNavigation,
  },
};
</script>

<style>
table,
th,
td {
  border: 1px solid black;
}
</style>
