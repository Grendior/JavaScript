<template>
  <section>
    <base-dialog :show="!!error" title="An error occured" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
    <base-card>
      <header>
        <h2>Requests Received</h2>
      </header>
      <base-spinner v-if="isLoading"></base-spinner>
      <ul v-if="hasRequests && !isLoading">
        <request-item
          v-for="req in recivedRequests"
          :key="req.id"
          :email="req.userEmail"
          :message="req.message"
        ></request-item>
      </ul>
      <h3 v-else>You haven't received any requests yet!</h3>
    </base-card>
  </section>
</template>

<script>
import { ref } from '@vue/reactivity';
import RequestItem from '../../components/requests/RequestItem.vue';
import { computed } from '@vue/runtime-core';
import { useStore } from 'vuex';
export default {
  components: {
    RequestItem,
  },
  setup() {
    const store = useStore();
    const isLoading = ref(false);
    const error = ref(null);

    loadRequests();

    const recivedRequests = computed(() => {
      return store.getters['requests/requests'];
    });
    const hasRequests = computed(() => {
      return store.getters['requests/hasRequests'];
    });

    async function loadRequests() {
      isLoading.value = true;
      try {
        await store.dispatch('requests/fetchRequests');
      } catch (err) {
        error.value = err.message || 'Something failed';
      }
      isLoading.value = false;
    }
    function handleError() {
      error.value = null;
    }

    return {
      isLoading,
      error,
      recivedRequests,
      hasRequests,
      handleError,
    };
  },
};
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>