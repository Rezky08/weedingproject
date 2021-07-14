<template>
  <component :is="component" :height="size" :width="size"></component>
</template>
<script>
export default {
  props: {
    component: {
      default: null,
    },
    size: {
      default: "2rem",
    },
  },
};
</script>
