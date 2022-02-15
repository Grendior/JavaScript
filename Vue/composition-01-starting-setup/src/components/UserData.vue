<template>
  <h2>{{ userName }}</h2>
  <h3>{{ age }}</h3>
</template>

<script>
import {
  computed,
  inject,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from 'vue';
export default {
  props: ['firstName', 'lastName'],
  setup(props, context) {
    const userName = computed(function () {
      return props.firstName + ' ' + props.lastName;
    });

    const age = inject('userAge');

    age.value = 55;

    console.log(context);

    onBeforeMount(function () {
      console.log('onBeforeMount');
    });
    onMounted(function () {
      console.log('onBeforeMount');
    });
    onBeforeUpdate(function () {
      console.log('onBeforeUpdate');
    });
    onUpdated(function () {
      console.log('onUpdated');
    });
    onBeforeUnmount(function () {
      console.log('onBeforeUnmount');
    });
    onUnmounted(function () {
      console.log('onUnmounted');
    });

    // context.emit('save-data', 1); //this.#emit('save-data', 1)

    return { userName, age };
  },
  //   computed: {
  //     userName() {
  //       return this.firstName + ' ' + this.lastName;
  //     },
  //   },
};
</script>
