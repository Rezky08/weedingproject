<template>
  <div>
    <span @click="show">
      <slot name="trigger"></slot>
    </span>
    <el-dialog v-model="visible" :custom-class="customClass">
      <template #title>
        <slot name="title"></slot>
      </template>
      <el-container>
        <el-main>
          <div class="font-content text-base">
            <slot></slot>
          </div>
        </el-main>
        <el-footer class="text-right">
          <el-space>
            <w-button size="small" type="secondary" :round="true" @click="ok">
              <span v-if="!hasSlot('ok')">{{
                capitalizeEachFirstLetter($t("yes"))
              }}</span>
              <span v-else>
                <slot name="ok"></slot>
              </span>
            </w-button>
            <w-button
              size="small"
              type="secondary"
              :ghost="true"
              :round="true"
              @click="hide"
            >
              <span v-if="!hasSlot('cancel')">{{
                capitalizeEachFirstLetter($t("no"))
              }}</span>
              <span v-else>
                <slot name="cancel"></slot>
              </span>
            </w-button>
          </el-space>
        </el-footer>
      </el-container>
    </el-dialog>
  </div>
</template>
<script>
import wButton from "../buttons/w-button.vue";
export default {
  components: { wButton },
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    show() {
      this.visible = true;
    },
    hide() {
      this.visible = false;
    },
    ok() {
      this.$emit("ok");
      this.hide();
    },
  },
  computed: {
    customClass() {
      return [
        "overflow-hidden",
        "rounded-lg",
        "modal-confirmation",
        !this.hasSlot("title") ? "modal-confirmation-no-title" : null,
      ].join(" ");
    },
  },
};
</script>
