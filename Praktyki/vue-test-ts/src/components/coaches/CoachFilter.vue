<template>
  <base-card>
    <h2>Find your coach</h2>
    <span class="filter-option">
      <input type="checkbox" id="frontend" checked @change="setFilter" />
      <label for="frontend">Frontend</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="backend" checked @change="setFilter" />
      <label for="backend">Backend</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="career" checked @change="setFilter" />
      <label for="career">Career</label>
    </span>
  </base-card>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import Filter from "@/types/IFiltersInfo";

// import { reactive } from '@vue/reactivity';
export default defineComponent({
  // const emit = defineEmits(['change', 'update']),
  emits: ["change-filter"],
  setup(props, { emit }) {
    const filters: Filter = {
      frontend: true,
      backend: true,
      career: true,
    };
    function setFilter(event: Event) {
      const inputId = (event.target as HTMLInputElement).id;
      const isActive = (event.target as HTMLInputElement).checked;
      const updatedFilters: Filter = {
        ...filters,
        [inputId]: isActive,
      };
      console.log(updatedFilters);
      Object.assign(filters, updatedFilters);
      emit("change-filter", updatedFilters);
    }
    return { setFilter };
  },
});
</script>