<template>
  <default-layout>
    <el-row :gutter="20" class="w-1/2 mx-auto">
      <el-col :md="8">
        <card-counter
          :title="$tc('menu.customer', { count: 2 })"
          :content="289"
        />
      </el-col>
      <el-col :md="8">
        <card-counter :title="$tc('menu.order', { count: 2 })" :content="289" />
      </el-col>
      <el-col :md="8">
        <card-counter
          :title="$tc('menu.invitation', { count: 2 })"
          :content="289"
        />
      </el-col>
    </el-row>
    <el-divider />
    <el-row :gutter="20" class="w-1/2 mx-auto" justify="center">
      <el-col :md="8">
        <card-button :title="$tc('menu.partnership')" :icon="WeddingIcon" />
      </el-col>
      <el-col :md="8">
        <card-button
          :title="$tc('menu.invitation')"
          :icon="WeddingInvitation1"
        />
      </el-col>
    </el-row>
  </default-layout>
</template>
<script>
import CardButton from "../components/cards/card-button.vue";
import CardCounter from "../components/cards/card-counter.vue";
import DefaultLayout from "../layouts/default-layout.vue";
import { WeddingIcon, WeddingInvitation1 } from "../assets/icons/wedding";
export default {
  components: { DefaultLayout, CardCounter, CardButton },
  data() {
    return {
      WeddingIcon,
      WeddingInvitation1,
    };
  },
};
</script>
