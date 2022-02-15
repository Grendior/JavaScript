<template>
  <tr>
    <td>
      <input
        type="checkbox"
        :checked="message.checked"
        @change="check(!message.checked)"
      />
    </td>
    <td @click="clicked">
      {{ message.subject }}
    </td>
    <td>
      {{ message.from }}
    </td>
    <td>
      {{ message.data }}
    </td>
    <td>
      {{ message.size }}
    </td>
  </tr>
</template>
<script>
//  v-model="message.checked"
export default {
  props: ["message"],
  methods: {
    check(enable) {
      // this.$emit('input', 'test')
      this.$emit("check", enable);
    },
    clicked() {
      this.$emit("click");
    },
  },
};
</script>

