<template>
  <div>
    <el-row :gutter="20" class="mx-auto sm:w-full md:w-1/2 gutter" justify="center">
      <el-col :lg="8" :md="12" :sm="12" :xs="12">
        <card-counter :title="$tc('menu.customer', { count: 2 })" :content="289" />
      </el-col>
      <el-col :lg="8" :md="12" :sm="12" :xs="12">
        <card-counter :title="$tc('menu.order', { count: 2 })" :content="289" />
      </el-col>
      <el-col :lg="8" :md="12" :sm="12" :xs="12">
        <card-counter :title="$tc('menu.invitation', { count: 2 })" :content="289" />
      </el-col>
    </el-row>
    <el-divider />
    <el-row :gutter="20" class="mx-auto sm:w-full md:w-1/2 gutter" justify="center">
      <el-col :lg="8" :md="12" :sm="12" :xs="12">
        <card-button :title="$tc('menu.partnership')" :icon="WeddingIcon" />
      </el-col>
      <el-col :lg="8" :md="12" :sm="12" :xs="12">
        <card-button :title="$tc('menu.invitation')" :icon="WeddingInvitation1" />
      </el-col>
    </el-row>
  </div>
</template>
<script>
import CardButton from "../components/cards/card-button.vue";
import CardCounter from "../components/cards/card-counter.vue";

import { WeddingIcon, WeddingInvitation1 } from "../assets/icons/wedding";
export default {
  components: { CardCounter, CardButton },
  data() {
    return {
      WeddingIcon,
      WeddingInvitation1,
    };
  },
};
</script>
