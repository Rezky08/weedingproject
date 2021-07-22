<template>
  <template v-if="menu.children.length == 0">
    <router-link v-if="to" :to="to">
      <div
        @click="selected"
        :class="['p-2', 'w-full', 'cursor-pointer', isActive ? 'is-active' : null]"
      >
        <span>{{ capitalizeEachFirstLetter($t(`menu.popup.${menuKey}.title`)) }}</span>
      </div>
    </router-link>
    <div
      v-else
      @click="selected"
      :class="['p-2', 'w-full', 'cursor-pointer', isActive ? 'is-active' : null]"
    >
      <span>{{ capitalizeEachFirstLetter($t(`menu.popup.${menuKey}.title`)) }}</span>
    </div>
  </template>
  <el-popover
    v-else-if="menu.children.length > 0"
    placement="right-end"
    popper-class="pop-menu rounded-xl font-contentTitle text-lg"
    :trigger="trigger"
    v-model:visible="visible"
    @after-enter="opened"
    @after-leave="opened"
  >
    <template #reference>
      <div
        @click="triggered"
        :class="['p-2', 'w-full', 'cursor-pointer', isActive ? 'is-active' : null]"
      >
        <el-row align="middle">
          <el-col :span="22">
            <span>{{
              capitalizeEachFirstLetter($t(`menu.popup.${menuKey}.title`))
            }}</span>
          </el-col>
          <el-col :span="2">
            <svg-icon :component="RightArrowAngleIcon" size="0.8rem" />
          </el-col>
        </el-row>
      </div>
    </template>
    <el-space
      direction="vertical"
      class="w-full pop-menu--items rounded-xl overflow-hidden"
      alignment="start"
    >
      <pop-menu-item
        v-for="child in menu.children"
        :parentVisible="visible"
        :openedKeys="openedKeys"
        :activeKeys="activeKeys"
        :menu="child"
        :menuKey="`${menuKey}.${child.key}`"
        :key="`${menuKey}.${child.key}`"
        @selected="selected"
        @opened="opened"
      />
    </el-space>
  </el-popover>
</template>
<script>
import { capitalizeEachFirstLetter } from "../../functions";
import { RightArrowAngleIcon } from "../../assets/icons/line";
import svgIcon from "../svg-icon.vue";

export default {
  components: { svgIcon },
  functional: true,
  emits: ["opened", "selected"],
  props: {
    parentVisible: {
      default: false,
    },
    openedKeys: {
      default: () => {
        return [];
      },
    },
    activeKey: {
      default: "",
    },
    activeKeys: {
      default: () => {
        return [];
      },
    },
    menuKey: {
      default: "",
    },
    menu: {
      default: () => {
        return {};
      },
    },
  },
  data() {
    return {
      RightArrowAngleIcon,
      trigger: "manual",
      visible: false,
      to: {},
    };
  },
  methods: {
    capitalizeEachFirstLetter,
    triggered() {
      this.visible = !this.visible;
      this.selected();
    },

    opened(value) {
      this.$emit("opened", {
        key: typeof value?.key == "string" ? value?.key : this.menuKey,
        opened: value?.opened ?? this.visible,
      });
    },
    selected(value) {
      this.$emit("selected", {
        key: typeof value?.key == "string" ? value?.key : this.menuKey,
        selected: Array.isArray(value?.selected)
          ? value?.selected?.concat([this.menuKey])
          : [this.menuKey],
      });
    },
    setDestinationRoute() {
      const to = this.menu?.to;
      try {
        const route = to
          ? this.$router.resolve(to)
          : this.$router.resolve({ name: this.menuKey });
        this.to = {
          name: route?.name,
        };
      } catch (error) {
        this.to = {};
      }

      return this.to;
    },
    setActiveKey() {
      if (this.activeKey == this.menuKey) {
        this.selected();
      }
    },
  },
  computed: {
    isActive() {
      return this.activeKeys.includes(this.menuKey);
    },
  },
  watch: {
    parentVisible: {
      handler: function (value) {
        if (!value) {
          this.visible = value;
        }
      },
    },
    activeKeys: {
      handler: function (value) {
        if (this.menu?.children?.length > 0) {
          this.visible = value.includes(this.menuKey);
          this.opened();
        }
      },
    },
    activeKey: {
      handler: function () {
        this.setActiveKey();
      },
    },
  },
  mounted() {
    this.setDestinationRoute();
    this.setActiveKey();
  },
};
</script>
