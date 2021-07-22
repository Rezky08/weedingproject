<template>
  <el-container class="bg-wedding h-screen">
    <el-header>
      <layout-header />
    </el-header>
    <el-main class="pb-20">
      <pop-menu v-model:active_key="active_key" />

      <slot />
    </el-main>
  </el-container>
</template>
<script>
import layoutHeader from "./layout-header.vue";
import PopMenu from "../components/menu/pop-menu.vue";

export default {
  components: {
    PopMenu,
    layoutHeader,
  },
  data() {
    return {
      active_key: "",
    };
  },
  methods: {
    setActiveKey() {
      this.active_key = this.$route?.name ?? "";
    },
  },
  watch: {
    $route: {
      handler: function () {
        this.setActiveKey();
      },
      deep: true,
    },
  },
};
</script>
