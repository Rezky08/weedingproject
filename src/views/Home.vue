<template>
  <default-layout> </default-layout>
</template>
<script>
import DefaultLayout from "../layouts/default-layout.vue";
export default {
  components: { DefaultLayout },
  mounted() {
    console.log(this.$i18n.messages.en);
  },
};
</script>
