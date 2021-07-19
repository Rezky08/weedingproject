<template>
  <div>
    <table-bubble
      :columns="columns"
      :translate="true"
      :dataSource="CustomersTableSimpleData"
    />
    <div class="text-right">
      <el-pagination background layout="prev,pager,next" :total="50"></el-pagination>
    </div>
  </div>
</template>
<script>
import { CustomersTableSimpleData } from "../data/mock";
import columns from "../configs/tables/customer-table-columns";
import tableBubble from "../components/tables/table-bubble/table-bubble.vue";
export default {
  props: ["defaultLayout"],
  components: { tableBubble },
  data() {
    return {
      columns,
      CustomersTableSimpleData,
    };
  },
  mounted() {
    console.log(this.defaultLayout);

    // console.log(this.CustomersTableSimpleData);
  },
};
</script>
