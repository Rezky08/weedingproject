<template>
  <default-content-layout :searchBox="true">
    <div>
      <table-bubble
        :columns="columns"
        :translate="true"
        :dataSource="PartnersTableSimpleData"
      >
        <template v-slot:action="{ record }">
          <modal-confirmation>
            <template #title> {{ $t("partnerSuspend") }} </template>
            <template #ok>{{ $t("suspend") }}</template>
            <template #trigger>
              <span class="font-contentTitle text-xl text-secondary-dark cursor-pointer">
                <i class="el-icon-close"></i>
              </span>
            </template>
            {{ $t("confirmations.suspendAccount", { name: record?.name }) }}
          </modal-confirmation>
        </template>
      </table-bubble>

      <div class="text-right">
        <el-pagination background layout="prev,pager,next" :total="50"></el-pagination>
      </div>
    </div>
  </default-content-layout>
</template>
<script>
import { PartnersTableSimpleData } from "../data/mock";
import columns from "../configs/tables/partner-table-columns";
import tableBubble from "../components/tables/table-bubble/table-bubble.vue";
import ModalConfirmation from "../components/modals/modal-confirmation.vue";
import DefaultContentLayout from "../layouts/default-content-layout.vue";
export default {
  props: ["defaultLayout"],
  components: { tableBubble, ModalConfirmation, DefaultContentLayout },
  data() {
    return {
      columns,
      PartnersTableSimpleData,
    };
  },
};
</script>
