<template>
  <table-bubble
    :columns="columns"
    :translate="true"
    :dataSource="CustomersTableSimpleData"
  />
</template>
<script>
import { CustomersTableSimpleData } from "../data/mock";
import columns from "../configs/tables/customer-table-columns";
import tableBubble from "../components/tables/table-bubble/table-bubble.vue";
export default {
  components: { tableBubble },
  data() {
    return {
      columns,
      CustomersTableSimpleData,
    };
  },
  mounted() {
    // console.log(this.CustomersTableSimpleData);
  },
};
</script>
