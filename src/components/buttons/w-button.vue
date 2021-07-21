<template>
  <el-button :size="size" :class="classes" :round="round">
    <slot></slot>
  </el-button>
</template>
<script>
export default {
  props: {
    type: {
      default: "primary",
    },
    ghost: {
      default: false,
    },
    size: {
      default: null,
    },
    round: {
      default: false,
    },
  },
  data() {
    return {
      types: [
        {
          type: "primary",
          ghost: false,
          classes: [
            "border-0",
            "bg-primary",
            "text-white",
            "font-contentTitle",
            "text-base",
          ],
        },
        {
          type: "primary",
          ghost: true,
          classes: [
            "bg-transparent",
            "text-primary",
            "border-primary",
            "font-contentTitle",
            "text-base",
          ],
        },
        {
          type: "secondary",
          ghost: false,
          classes: [
            "border-0",
            "bg-secondary-dark",
            "text-white",
            "font-contentTitle",
            "text-base",
          ],
        },
        {
          type: "secondary",
          ghost: true,
          classes: [
            "bg-transparent",
            "text-secondary-dark",
            "border-secondary-dark",
            "font-contentTitle",
            "text-base",
          ],
        },
      ],
    };
  },
  computed: {
    classes() {
      const defaultClasses = [
        "bg-primary",
        "text-white",
        "font-contentTitle",
        "text-base",
      ];
      return (
        this.types.find((o) => o.type == this.type && o.ghost == this.ghost)?.classes ??
        defaultClasses
      );
    },
  },
};
</script>
