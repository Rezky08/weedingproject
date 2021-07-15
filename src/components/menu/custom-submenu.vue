<template>
  <el-menu-item v-if="menu.children.length == 0" :index="menuKey">
    {{ capitalizeEachFirstLetter($t(`menu.popup.${menuKey}.title`)) }}
  </el-menu-item>
  <el-submenu :index="menuKey" v-else-if="menu.children.length > 0">
    <template #title>{{
      capitalizeEachFirstLetter($t(`menu.popup.${menuKey}.title`))
    }}</template>
    <custom-submenu
      v-for="child in menu.children"
      :menu="child"
      :menuKey="`${menuKey}.${child.key}`"
      :key="`${menuKey}.${child.key}`"
    />
  </el-submenu>
</template>
<script>
import { capitalizeEachFirstLetter } from "../../functions";
export default {
  functional: true,
  props: {
    menuKey: {
      default: "",
    },
    menu: {
      default: () => {
        return {};
      },
    },
  },
  methods: {
    capitalizeEachFirstLetter,
  },
};
</script>
