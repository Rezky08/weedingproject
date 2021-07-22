<template>
  <div>
    <el-header>
      <el-row>
        <el-col :span="12">
          <span class="font-contentTitle text-3xl text-primary">{{ title }}</span>
        </el-col>
        <el-col v-if="searchBox" :span="12" class="text-right">
          <search-input class="w-1/3" v-model="searchText" @search="search" />
        </el-col>
      </el-row>
    </el-header>
    <slot></slot>
  </div>
</template>
<script>
import SearchInput from "../components/inputs/search-input.vue";
export default {
  props: {
    searchBox: {
      default: false,
    },
  },
  data() {
    return {
      searchText: "",
    };
  },
  components: { SearchInput },
  computed: {
    title() {
      if (this.$route.name) {
        return this.capitalizeEachFirstLetter(this.$t(`route.${this.$route.name}.title`));
      }
      return "";
    },
  },
  methods: {
    search(value) {
      this.$router.push({
        query: {
          q: value,
        },
      });
    },
  },
};
</script>
