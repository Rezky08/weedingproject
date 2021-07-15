<template>
  <el-container class="bg-wedding h-screen">
    <el-header>
      <layout-header />
    </el-header>
    <el-main>
      <el-header>
        <span class="font-contentTitle text-3xl text-primary">Home</span>
      </el-header>
      <slot />
    </el-main>
    <el-footer>
      <popover-menu />
    </el-footer>
  </el-container>
</template>
<script>
import PopoverMenu from "../components/menu/popover-menu.vue";

import layoutHeader from "./layout-header.vue";
export default {
  components: { layoutHeader, PopoverMenu },
};
</script>
