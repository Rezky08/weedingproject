<template>
  <el-card class="text-center rounded-2xl">
    <el-space direction="vertical" class="text-primary">
      <span v-if="hasIcon">
        <slot name="icon"></slot>
      </span>
      <span v-else-if="icon">
        <svg-icon size="4rem" :component="icon" />
      </span>
      <span class="font-contentTitle text-2xl ">{{
        capitalizeEachFirstLetter(title)
      }}</span>
    </el-space>
  </el-card>
</template>
<script>
import { capitalizeEachFirstLetter } from "../../functions";
import svgIcon from "../svg-icon.vue";
export default {
  components: { svgIcon },
  props: {
    icon: {
      default: null,
    },
    title: {
      default: "",
    },
  },
  computed: {
    hasIcon() {
      return !!this.$slots.icon;
    },
  },
  methods: {
    capitalizeEachFirstLetter,
  },
};
</script>
