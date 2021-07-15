<template>
  <div class="fixed">
    <el-popover placement="top">
      <template #reference>
        <span v-if="hasSlotReference">
          <slot name="reference"> </slot>
        </span>
        <el-button v-else circle class="bg-primary">
          <svg-icon :component="LoveIcon" :classes="'fill-white'" />
        </el-button>
      </template>
      <custom-menu :menus="menus"></custom-menu>
    </el-popover>
  </div>
</template>
<script>
import SvgIcon from "../svg-icon.vue";
import customMenu from "./custom-menu.vue";
import { LoveIcon } from "../../assets/icons/wedding";
export default {
  components: { customMenu, SvgIcon },
  data() {
    return {
      LoveIcon,
      menus: [
        {
          key: "guide",
          url: "guide",
          title: "Guide",
          children: [
            {
              key: "inner",
              url: "guide",
              title: "inner Guide",
              children: [
                {
                  key: "guide",
                  url: "guide",
                  title: "Guide",
                  children: [
                    {
                      key: "inner",
                      url: "guide",
                      title: "inner Guide",
                      children: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    };
  },
  computed: {
    hasSlotReference() {
      return !!this.$slots.reference;
    },
  },
};
</script>
