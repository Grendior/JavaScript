<template>
  <div>
    <base-dialog :show="!!error" title="An error occured" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
    <section>
      <coach-filter @change-filter="setFilters"></coach-filter>
    </section>
    <section>
      <base-card>
        <div class="controls">
          <base-button mode="outline" @click="loadCoaches(true)"
            >Refresh
          </base-button>
          <base-button link to="/auth?redirect=register" v-if="!isLoggedIn"
            >Login to Register as Coach</base-button
          >
          <base-button
            v-if="isLoggedIn && !isCoach && !isLoading"
            link
            to="/register"
            >Register as Coach</base-button
          >
        </div>
        <transition name="list">
          <div v-if="isLoading">
            <base-spinner></base-spinner>
          </div>
          <ul v-else-if="hasCoaches">
            <coach-item
              v-for="coach in filteredCoaches"
              :key="coach.id"
              :id="coach.id"
              :first-name="coach.firstName"
              :last-name="coach.lastName"
              :rate="coach.hourlyRate"
              :areas="coach.areas"
            >
            </coach-item>
          </ul>
          <h3 v-else>No coaches found.</h3>
        </transition>
      </base-card>
    </section>
  </div>
</template>

<script lang="ts">
import CoachItem from "../../components/coaches/CoachItem.vue";
import CoachFilter from "../../components/coaches/CoachFilter.vue";
import { reactive, ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
import Filter from "@/types/IFiltersInfo";
import ICoach from "@/types/ICoach";
export default {
  components: {
    CoachItem,
    CoachFilter,
  },
  setup() {
    const store = useStore();
    const isLoading = ref(false);
    const error = ref(null);
    const activeFilters: Filter = reactive({
      frontend: true,
      backend: true,
      career: true,
    });
    loadCoaches();
    const isLoggedIn = computed(() => {
      return store.getters.isAuthenticated;
    });
    const isCoach = computed(() => {
      return store.getters["coaches/isCoach"];
    });
    const filteredCoaches = computed<ICoach[]>(() => {
      const coaches = store.getters["coaches/coaches"];
      return coaches.filter((coach: ICoach) => {
        if (activeFilters.frontend && coach.areas.includes("frontend")) {
          // console.log(filteredCoaches);
          return true;
        }
        if (activeFilters.backend && coach.areas.includes("backend")) {
          // console.log(filteredCoaches);
          return true;
        }
        if (activeFilters.career && coach.areas.includes("career")) {
          // console.log(filteredCoaches);
          return true;
        }
        // console.log(filteredCoaches);
        return false;
      });
      // console.log(filteredCoaches);
    });
    const hasCoaches = computed(() => {
      return !isLoading.value && store.getters["coaches/hasCoaches"];
    });
    async function loadCoaches(refresh = false) {
      isLoading.value = true;
      try {
        await store.dispatch("coaches/loadCoaches", {
          forceRefresh: refresh,
        });
      } catch (err: any) {
        error.value = err.message || "Something went wrong!";
      }
      isLoading.value = false;
    }
    function handleError() {
      error.value = null;
    }
    function setFilters(updatedFilters: Filter) {
      Object.assign(activeFilters, updatedFilters);
    }
    return {
      isLoading,
      error,
      activeFilters,
      filteredCoaches,
      hasCoaches,
      isLoggedIn,
      isCoach,
      handleError,
      setFilters,
      loadCoaches,
    };
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.list-enter-form,
.list-leave-to {
  opacity: 0;
  transform: scale(0.8);
}
.list-enter-active {
  transition: all 0.3s ease-out;
}
.list-leave-active {
  transition: all 0.3s ease-in;
}
.list-enter-to,
.list-leave-from {
  opacity: 1;
  transform: scale(1);
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
