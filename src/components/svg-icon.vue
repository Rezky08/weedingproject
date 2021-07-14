<template>
  <component
    :is="component"
    :height="size"
    :width="size"
    :class="classes"
  ></component>
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
    classes: {
      default: "fill-current",
    },
  },
};
</script>
