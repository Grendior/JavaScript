<template>
  <form @submit.prevent="submitForm">
    <div class="form-control" :class="{ invalid: !first.isValid }">
      <label for="firstname">Firstname</label>
      <input
        type="text"
        id="firstname"
        v-model.trim="first.val"
        @blur="clearValidity(first)"
      />
      <p v-if="!first.isValid">First Name must not be empty</p>
    </div>
    <div class="form-control" :class="{ invalid: !last.isValid }">
      <label for="lastname">Lastname</label>
      <input
        type="text"
        id="lastname"
        v-model.trim="last.val"
        @blur="clearValidity(last)"
      />
      <p v-if="!last.isValid">Last Name must not be empty</p>
    </div>
    <div class="form-control" :class="{ invalid: !desc.isValid }">
      <label for="description">Description</label>
      <textarea
        id="description"
        rows="5"
        v-model.trim="desc.val"
        @blur="clearValidity(desc)"
      ></textarea>
      <p v-if="!desc.isValid">Description must not be empty</p>
    </div>
    <div class="form-control" :class="{ invalid: !rate.isValid }">
      <label for="rate">Hourly Rate</label>
      <input
        type="number"
        id="rate"
        v-model.number="rate.val"
        @blur="clearValidity(rate)"
      />
      <p v-if="!rate.isValid">Rate must be greater than 0</p>
    </div>
    <div class="form-control" :class="{ invalid: !areas.isValid }">
      <h3>Areas of Expertise</h3>
      <div>
        <input
          type="checkbox"
          id="frontend"
          value="frontend"
          v-model="areas.val"
          @blur="clearValidity(areas)"
        />
        <label for="frontend">Frontend Developer</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="backend"
          value="backend"
          v-model="areas.val"
          @blur="clearValidity(areas)"
        />
        <label for="backend">Backend Developer</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="career"
          value="career"
          v-model="areas.val"
          @blur="clearValidity(areas)"
        />
        <label for="career">Career Advisor</label>
      </div>
      <p v-if="!areas.isValid">At least one expertise must be selected</p>
    </div>
    <p v-if="!formIsValid" class="invalid">
      Please fix the aboveerrors and submit again.
    </p>
    <base-button>Register</base-button>
  </form>
</template>

<script lang="ts">
import { reactive, ref } from "@vue/reactivity";
import { defineComponent } from "@vue/runtime-core";
// import formNames from "@/types/fromNames";
import ICoach from "@/types/ICoach";

interface IVariableWithValidation {
  val: string | string[] | null | number;
  isValid: boolean;
}

export default defineComponent({
  emits: ["save-data"],
  setup(props, { emit }) {
    const formIsValid = ref<Boolean>(true);
    const first: IVariableWithValidation = reactive({
      val: "",
      isValid: true,
    });
    const last: IVariableWithValidation = reactive({
      val: "",
      isValid: true,
    });
    const desc: IVariableWithValidation = reactive({
      val: "",
      isValid: true,
    });
    const rate: IVariableWithValidation = reactive({
      val: null,
      isValid: true,
    });
    const areas: IVariableWithValidation = reactive({
      val: [],
      isValid: true,
    });
    function clearValidity(input: IVariableWithValidation) {
      input.isValid = true;
    }
    function validateForm() {
      formIsValid.value = true;
      if (first.val === "") {
        first.isValid = false;
        formIsValid.value = false;
      }
      if (last.val === "") {
        last.isValid = false;
        formIsValid.value = false;
      }
      if (desc.val === "") {
        desc.isValid = false;
        formIsValid.value = false;
      }
      if (!rate.val || (rate.val as number) < 0) {
        rate.isValid = false;
        formIsValid.value = false;
      }
      if ((areas.val as []).length === 0) {
        areas.isValid = false;
        formIsValid.value = false;
      }
    }
    function submitForm() {
      validateForm();

      if (!formIsValid.value) {
        return;
      }

      const formData: ICoach = {
        firstName: first.val as string,
        lastName: last.val as string,
        description: desc.val as string,
        hourlyRate: rate.val as number,
        areas: areas.val as ("frontend" | "backend" | "career")[],
      };
      emit("save-data", formData);
    }
    return {
      formIsValid,
      first,
      last,
      desc,
      rate,
      areas,
      clearValidity,
      submitForm,
    };
  },
});
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type="checkbox"] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type="checkbox"] {
  display: inline;
  width: auto;
  border: none;
}

input[type="checkbox"]:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}
.invalid,
.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>