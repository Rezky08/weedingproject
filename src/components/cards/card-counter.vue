<template>
  <el-card class="text-center rounded-2xl">
    <el-space direction="vertical">
      <span class="font-contentTitle text-2xl text-primary ">{{
        capitalizeEachFirstLetter(title)
      }}</span>
      <span class="font-content text-3xl font-medium">{{ content }}</span>
    </el-space>
  </el-card>
</template>
<script>
import { capitalizeEachFirstLetter } from "../../functions";
export default {
  props: {
    title: {
      default: "",
    },
    content: {
      default: "",
    },
  },
  methods: {
    capitalizeEachFirstLetter,
  },
};
</script>
