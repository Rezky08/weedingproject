<template>
  <div>
    <table-bubble
      :columns="columns"
      :translate="true"
      :dataSource="CustomersTableSimpleData"
    />
    <modal-confirmation>
      <template #trigger>
        <w-button>Test</w-button>
      </template>
      <template #title> title slot </template>
      ini percobaan
    </modal-confirmation>
    <div class="text-right">
      <el-pagination background layout="prev,pager,next" :total="50"></el-pagination>
    </div>
  </div>
</template>
<script>
import { CustomersTableSimpleData } from "../data/mock";
import columns from "../configs/tables/customer-table-columns";
import tableBubble from "../components/tables/table-bubble/table-bubble.vue";
import ModalConfirmation from "../components/modals/modal-confirmation.vue";
import WButton from "../components/buttons/w-button.vue";
export default {
  props: ["defaultLayout"],
  components: { tableBubble, ModalConfirmation, WButton },
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
