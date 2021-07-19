<template>
  <el-popover
    placement="top"
    trigger="manual"
    v-model:visible="visible"
    popper-class="pop-menu rounded-xl font-contentTitle text-xl"
  >
    <template #reference>
      <span v-if="hasReference" @click="show">
        <slot name="reference"></slot>
      </span>
      <el-button v-else circle class="bg-primary pop-menu--trigger" @click="show">
        <svg-icon :component="LoveIcon" :classes="'fill-white'" />
      </el-button>
    </template>
    <el-space
      direction="vertical"
      alignment="start"
      class="w-full pop-menu--items rounded-xl overflow-hidden"
    >
      <pop-menu-item
        :parentVisible="visible"
        :openedKeys="openedKeys"
        :activeKeys="activeKeys"
        :activeKey="private_activeKey"
        v-for="menu in menus"
        :key="menu.key"
        :menu="menu"
        :menuKey="menu.key"
        @selected="selected"
        @opened="opened"
      />
    </el-space>
  </el-popover>
</template>
<script>
import { LoveIcon } from "../../assets/icons/wedding";
import SvgIcon from "../svg-icon.vue";
import PopMenuItem from "./pop-menu-item.vue";
import { defaultMenu } from "../../data/menu";

export default {
  components: { SvgIcon, PopMenuItem },
  props: {
    active_key: {
      default: "",
    },
  },
  data() {
    return {
      LoveIcon,
      menus: defaultMenu,
      visible: false,
      activeKeys: [],
      private_activeKey: "",
      openedKeys: [],
    };
  },
  computed: {
    hasReference() {
      return !!this.$slots.reference;
    },
  },
  methods: {
    show() {
      this.visible = !this.visible;
    },

    selected(value) {
      this.private_activeKey = value?.key;
      this.activeKeys = value?.selected.reverse();
      this.openedKeys = this.openedKeys.filter((k) => this.activeKeys.includes(k));
    },
    opened(value) {
      if (value?.opened == false) {
        this.openedKeys = this.openedKeys.filter((key) => key != value?.key);
      } else if (value?.opened == true && !this.openedKeys.includes(value?.key)) {
        this.openedKeys.push(value?.key);
      }
    },
  },
  watch: {
    active_key: {
      handler: function (value) {
        this.private_activeKey = value;
      },
    },
    private_activeKey: {
      handler: function (value) {
        this.$emit("update:active_key", value);
      },
    },
  },
};
</script>
