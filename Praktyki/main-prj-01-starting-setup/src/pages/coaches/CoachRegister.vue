<template>
  <section>
    <base-card>
      <h2>Register as a coach now!</h2>
      <coach-form @save-data="saveData"></coach-form>
    </base-card>
  </section>
</template>


<script>
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import CoachForm from '../../components/coaches/CoachForm.vue';
export default {
  components: {
    CoachForm,
  },
  setup() {
    const store = useStore();
    const router = useRouter();

    function saveData(data) {
      store.dispatch('coaches/registerCoach', data);
      router.replace('/coaches');
    }
    return {
      saveData,
    };
  },
};
</script>