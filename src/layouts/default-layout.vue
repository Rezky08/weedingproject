<template>
  <el-container>
    <el-header>
      <el-row justify="space-between" align="middle" class="pt-3 text-primary">
        <el-col :span="12">
          <span class="font-title text-5xl">
            {{ $t("header.title") }}
          </span>
        </el-col>
        <el-col :span="6" class="font-contentTitle text-xl text-right">
          <el-space size="large">
            <svg-icon :component="BellIcon" />

            <span v-html="welcome"> </span>

            <el-avatar></el-avatar>
          </el-space>
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <slot />
    </el-main>
  </el-container>
</template>

<script>
import svgIcon from "../components/svg-icon.vue";
import { BellIcon } from "../assets/icons/wedding";
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
    };
  },
};
</script>
