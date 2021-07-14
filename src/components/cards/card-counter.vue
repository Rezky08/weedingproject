<template>
  <el-card class="text-center">
    <el-space direction="vertical">
      <span class="font-contentTitle text-2xl text-primary ">{{ title }}</span>
      <span class="font-content text-3xl font-medium">{{ content }}</span>
    </el-space>
  </el-card>
</template>
<script>
export default {
  props: {
    title: {
      default: "",
    },
    content: {
      default: "",
    },
  },
};
</script>
