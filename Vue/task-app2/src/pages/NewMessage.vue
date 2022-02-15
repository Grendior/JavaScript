<template>
  <form @submit.prevent="submitData">
    <div>
      <label for="">Temat</label>
      <input v-model="messageContext.enteredSubject" type="text" />
    </div>
    <div>
      <label for="">Od</label>
      <input v-model="messageContext.enteredFrom" type="text" />
    </div>
    <div>
      <label for="">Treść</label>
      <textarea v-model="messageContext.enteredContext" type="text"></textarea>
    </div>
    <div>
      <button>Add email</button>
    </div>
  </form>
</template>

<script>
import { reactive } from "vue";
export default {
  // emits: ["add-message"],
  setup(props, { emit }) {
    // setup(context) {

    const messageContext = reactive({
      enteredSubject: "",
      enteredFrom: "",
      enteredContext: "",
    });
    // const enteredSubject = ref("");
    // const enteredFrom = ref("");
    // const enteredContext = ref("");

    function submitData() {
      emit("add-message", messageContext);
    }
    // function submitData() {
    //   context.emit("add-message", {
    //     enteredSubject,
    //     enteredFrom,
    //     enteredContext,
    //   });
    // }

    return { messageContext, submitData };
  },
  // data() {
  //   return {
  //     enteredSubject: "",
  //     enteredFrom: "",
  //     enteredContext: "",
  //   };
  // },
  // methods: {
  // submitData() {
  //   this.$emit(
  //     "add-message",
  //     this.enteredSubject,
  //     this.enteredFrom,
  //     this.enteredContext
  //   );
  // },
  // },
};
</script>