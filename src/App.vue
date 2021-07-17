<template>
  <default-layout>
    <router-view />
  </default-layout>
</template>
<script>
import defaultLayout from "./layouts/default-layout.vue";
export default {
  components: { defaultLayout },
};
</script>
