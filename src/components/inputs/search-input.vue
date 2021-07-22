<template>
  <el-input
    class="search-input shadow-sm"
    v-model="searchText"
    :placeholder="placeholder"
    @keyup.enter="search"
  >
    <template #suffix>
      <i class="el-icon-search el-input__icon" @click="search"></i>
    </template>
  </el-input>
</template>
<script>
export default {
  emits: ["search", "update:modelValue"],
  props: {
    modelValue: {
      default: "",
    },
    placeholder: {
      type: String,
      default: "Search....",
    },
  },
  data() {
    return {
      searchText: "",
    };
  },
  methods: {
    search() {
      this.$emit("search", this.searchText);
    },
  },
  watch: {
    searchText: {
      handler: function (value) {
        this.$emit("update:modelValue", value);
      },
    },
    modelValue: {
      handler: function (value) {
        this.searchText = value;
      },
    },
  },
};
</script>
