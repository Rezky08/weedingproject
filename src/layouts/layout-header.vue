<template>
  <el-row justify="space-between" align="middle" class="pt-3 text-primary">
    <el-col :span="12">
      <router-link to="/">
        <span class="font-title text-5xl">
          {{ $t("header.title") }}
        </span>
      </router-link>
    </el-col>
    <el-col :span="12" class="font-contentTitle text-xl text-right">
      <el-space size="large">
        <el-badge :value="12">
          <svg-icon :component="BellIcon" />
        </el-badge>

        <span v-html="welcome" class="hidden md:block"> </span>

        <el-avatar size="large" class="border-2 border-primary bg-transparent shadow-md">
          <svg-icon :component="GroomIcon" size="2.3rem" classes="fill-primary" />
        </el-avatar>
      </el-space>
    </el-col>
  </el-row>
</template>

<script>
import svgIcon from "../components/svg-icon.vue";
import { BellIcon, GroomIcon } from "../assets/icons/wedding";
// import { capitalizeFirstLetter } from "../functions";
export default {
  components: { svgIcon },
  computed: {
    welcome() {
      return `<span class="text-black">${this.$t("greeting")}</span> Nama !`;
    },
  },
  data() {
    return {
      BellIcon,
      GroomIcon,
    };
  },
};
</script>
