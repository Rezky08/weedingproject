<template>
  <el-container>
    <el-header>
      <layout-header />
    </el-header>
    <el-main>
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
