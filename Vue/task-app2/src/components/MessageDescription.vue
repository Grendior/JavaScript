<template>
  <div>
    <h3>Od {{ msg.from }}</h3>
    <h3>Temat {{ msg.subject }}</h3>
    <h3>Data {{ msg.data }}</h3>
    <p>{{ msg.context }}</p>
  </div>
</template>

<script>
export default {
  props: ["msg"],
};
</script>