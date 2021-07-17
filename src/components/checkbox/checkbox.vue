<template>
  <span class="checkbox">
    <label>
      <input
        type="checkbox"
        :value="label"
        class="checkbox--input"
        v-model="private_checked"
      />
      <span :class="['checkbox--label', labelClass]">
        <svg-icon
          :class="['checkbox--label-icon', 'text-white', labelIconClass]"
          :component="CheckedIcon"
          size="1rem"
        />
      </span>
    </label>
  </span>
</template>
<script>
import { CheckedIcon } from "../../assets/icons/general";
import svgIcon from "../svg-icon.vue";
export default {
  components: { svgIcon },
  props: {
    modelValue: {
      default: undefined,
    },
    label: {
      default: null,
    },
    labelClass: {
      default: ["text-primary"],
    },
    labelIconClass: {
      default: null,
    },
    checked: {
      default: false,
    },
  },
  data() {
    return {
      CheckedIcon,
      private_checked: false,
    };
  },
  watch: {
    private_checked: {
      handler: function(value) {
        this.$emit("update:checked", this.private_checked);
        if (value) {
          this.$emit("update:modelValue", this.label);
        } else {
          this.$emit("update:modelValue", undefined);
        }
      },
      deep: true,
    },
    checked: {
      handler: function(value) {
        this.private_checked = value;
      },
    },
  },
};
</script>
