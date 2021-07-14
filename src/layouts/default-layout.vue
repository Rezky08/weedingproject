<template>
  <el-container>
    <el-header>
      <el-row justify="space-between" align="middle" class="pt-3 text-primary">
        <el-col :span="12">
          {{ $t("header.title") }}
        </el-col>
        <el-col :span="6">
          <el-row align="middle">
            <el-col :span="6" class="text-center">
              Bell Icon
            </el-col>
            <el-col :span="14" class="text-right">
              <span>
                {{ title }}
              </span>
            </el-col>
            <el-col :span="4" class="text-center">
              <el-avatar></el-avatar>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <slot />
    </el-main>
  </el-container>
</template>
<script>
import { capitalizeFirstLetter } from "../functions";
import { useI18n } from "../i18n";
export default {
  setup() {
    const i18n = useI18n();
    const title = capitalizeFirstLetter(
      i18n.$t("header.welcome", { name: "Nama" })
    );
    return { title };
  },
};
</script>
