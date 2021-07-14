<template>
  <default-layout>
    <el-row :gutter="20" class="w-1/2 mx-auto">
      <el-col :md="8">
        <card-counter title="Customers" :content="289" />
      </el-col>
      <el-col :md="8">
        <card-counter title="Customers" :content="289" />
      </el-col>
      <el-col :md="8">
        <card-counter title="Customers" :content="289" />
      </el-col>
    </el-row>
  </default-layout>
</template>
<script>
import CardCounter from "../components/cards/card-counter.vue";
import DefaultLayout from "../layouts/default-layout.vue";
export default {
  components: { DefaultLayout, CardCounter },
  mounted() {},
};
</script>
