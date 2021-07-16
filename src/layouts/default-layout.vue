<template>
  <el-container class="bg-wedding h-screen">
    <el-header>
      <layout-header />
    </el-header>
    <el-main>
      <pop-menu />
      <el-header>
        <span class="font-contentTitle text-3xl text-primary">Home</span>
      </el-header>
      <slot />
    </el-main>
  </el-container>
</template>
<script>
import PopMenu from "../components/menu/pop-menu.vue";

import layoutHeader from "./layout-header.vue";
export default {
  components: { layoutHeader, PopMenu },
};
</script>
