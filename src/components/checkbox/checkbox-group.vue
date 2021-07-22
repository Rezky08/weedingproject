<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    checkAll: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      checkList: [],
    };
  },
  methods: {
    uncheckAllCheckbox() {
      this.checkList = [];
      this.$el.querySelectorAll("input[type=checkbox]")?.forEach((node) => {
        node.checked = false;
      });
    },
    checkAllCheckbox() {
      const checked = [];
      this.$el.querySelectorAll("input[type=checkbox]")?.forEach((node) => {
        node.checked = true;
        checked.push(node.value);
      });
      this.checkList = checked;
    },
    setCheckboxEvent() {
      this.$el.querySelectorAll("input[type=checkbox]")?.forEach((node) => {
        node.addEventListener("change", () => {
          if (node.checked == true) {
            this.checkList.push(node.value);
          } else if (node.checked == false) {
            this.checkList = this.checkList.filter((value) => value != node.value);
          }
        });
      });
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.setCheckboxEvent();
      if (this.checkAll) {
        this.checkAllCheckbox();
      }
    });
  },
  watch: {
    checkList: {
      handler: function (value) {
        this.$emit("update:modelValue", value);
      },
      deep: true,
    },
    checkAll: {
      handler: function (value) {
        if (value) {
          this.checkAllCheckbox();
        } else {
          this.uncheckAllCheckbox();
        }
      },
    },
  },
};
</script>
