<template>
  <div>
    <section>
      <base-card>
        <h2>{{ fullName }}</h2>
        <h3>${{ rate }}/hour</h3>
      </base-card>
    </section>
    <section>
      <base-card>
        <header>
          <h2>Interested? Reach out now!</h2>
          <base-button link :to="contactLink">Contact</base-button>
        </header>
        <router-view></router-view>
      </base-card>
    </section>
    <section>
      <base-card>
        <base-badge
          v-for="area in areas"
          :key="area"
          :type="area"
          :title="area"
        ></base-badge>
        <p>{{ description }}</p>
      </base-card>
    </section>
  </div>
</template>

<script lang="ts">
import { ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import ICoach from "@/types/ICoach";
export default {
  props: {
    id: String,
  },
  setup(props: any) {
    const route = useRoute();
    const store = useStore();
    const selectedCoach = ref();
    selectedCoach.value = store.getters["coaches/coaches"].find(
      (coach: ICoach) => coach.id === props.id
    );

    const fullName = computed(function () {
      return selectedCoach.value.firstName + " " + selectedCoach.value.lastName;
    });
    const areas = computed(function () {
      return selectedCoach.value.areas;
    });
    const rate = computed(function () {
      return selectedCoach.value.hourlyRate;
    });
    const description = computed(function () {
      return selectedCoach.value.description;
    });
    const contactLink = computed(function () {
      return route.path + "/contact";
    });
    return {
      selectedCoach,
      fullName,
      areas,
      description,
      contactLink,
      rate,
    };
  },
};
</script>