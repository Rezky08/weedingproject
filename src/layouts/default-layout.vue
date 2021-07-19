<template>
  <el-container class="bg-wedding h-screen">
    <el-header>
      <layout-header />
    </el-header>
    <el-main class="pb-20">
      <pop-menu v-model:active_key="active_key" />
      <el-header>
        <span class="font-contentTitle text-3xl text-primary">{{ title }}</span>
      </el-header>
      <slot />
    </el-main>
  </el-container>
</template>
<script>
import PopMenu from "../components/menu/pop-menu.vue";
import { capitalizeEachFirstLetter } from "../functions";
import layoutHeader from "./layout-header.vue";
export default {
  data() {
    return {
      active_key: "",
    };
  },
  components: { layoutHeader, PopMenu },
  computed: {
    title() {
      if (this.$route.name) {
        return capitalizeEachFirstLetter(this.$t(`route.${this.$route.name}.title`));
      }
      return "";
    },
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
