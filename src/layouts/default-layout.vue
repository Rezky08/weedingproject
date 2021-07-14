<template>
  <el-container class="bg-wedding">
    <el-header>
      <layout-header />
    </el-header>
    <el-main>
      <el-header>
        <span class="font-contentTitle text-3xl text-primary">Home</span>
      </el-header>
      <slot />
    </el-main>
  </el-container>
</template>
<script>
import layoutHeader from "./layout-header.vue";
export default {
  components: { layoutHeader },
};
</script>
