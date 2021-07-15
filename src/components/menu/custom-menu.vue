<template>
  <el-menu @select="handleSelect" mode="horizontal">
    <custom-submenu
      v-for="menu in menus"
      :index="menu.key"
      :key="menu.key"
      :menu="menu"
      :menuKey="menu.key"
    />
  </el-menu>
</template>
<script>
import customSubmenu from "./custom-submenu.vue";
export default {
  components: { customSubmenu },
  props: {
    menus: {
      default: () => {
        return [];
      },
    },
  },
  methods: {
    handleSelect() {
      return true;
    },
  },
};
</script>
