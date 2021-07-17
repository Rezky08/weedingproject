<template>
  <div class="table-bubble">
    <el-affix target=".table-bubble" class="mb-4" :offset="60">
      <el-card
        class="rounded-2xl bg-primary-light text-white shadow-lg border-0"
      >
        <el-row align="middle">
          <el-col
            v-if="withCheckbox"
            :span="1"
            :class="[defaultHeaderClass, 'text-center']"
          >
            <checkbox
              v-model:checked="checkAll"
              labelClass="text-white"
              labelIconClass="text-primary"
            />
          </el-col>
          <el-col
            v-if="withNumber"
            :span="2"
            :class="[defaultHeaderClass, 'text-center']"
          >
            {{ $t("number") }}
          </el-col>
          <el-col
            v-for="(column, index) in columns"
            :key="index"
            :span="column.colspan ?? defaultSpan"
            :class="[column?.header?.class, defaultHeaderClass]"
          >
            {{ translate ? $t(column.label) : column.label }}
          </el-col>
        </el-row>
      </el-card>
    </el-affix>
    <checkbox-group v-model="checkList" :checkAll="checkAll">
      <el-space
        direction="vertical"
        size="large"
        class="w-full table-bubble--items"
      >
        <el-card
          v-for="(item, itemIndex) in dataSource"
          :key="itemIndex"
          class="rounded-2xl text-black shadow-lg border-0 w-full"
        >
          <el-row align="middle">
            <el-col :span="1" :class="['text-center']">
              <checkbox :label="checkListOptions[itemIndex]" />
            </el-col>
            <el-col :span="2" :class="['text-center']">
              {{ itemIndex + 1 }}
            </el-col>
            <el-col
              v-for="(column, columnIndex) in columns"
              :key="columnIndex"
              :span="column.colspan ?? defaultSpan"
            >
              <span
                v-if="
                  hasSlot(
                    column.scopedSlots
                      ? column.scopedSlots.customRender
                        ? column.scopedSlots.customRender
                        : null
                      : null
                  )
                "
                :class="[column?.item?.class]"
              >
                <slot
                  :name="column.scopedSlots.customRender"
                  :record="item"
                ></slot>
              </span>
              <!-- <div v-if="hasSlot(column.scopedSlot)">
          </div> -->
              <span
                v-else-if="column.customRender"
                :class="[column?.item?.class]"
              >
                {{ displayCustomRender(column, item, itemIndex) }}
              </span>
              <span
                v-else-if="column.dataIndex"
                :class="[column?.item?.class]"
                >{{ resolve(column.dataIndex, item) }}</span
              >
              <span v-else :class="[column?.item?.class]">
                {{ item }}
              </span>
            </el-col>
          </el-row>
        </el-card>
      </el-space>
    </checkbox-group>
  </div>
</template>
<script>
import CheckboxGroup from "../../checkbox/checkbox-group.vue";
import checkbox from "../../checkbox/checkbox.vue";
export default {
  components: { checkbox, CheckboxGroup },
  name: "table-bubble",
  props: {
    columns: {
      type: Array,
      default: () => {
        return [];
      },
    },
    dataSource: {
      type: Array,
      default: () => {
        return [];
      },
    },
    optionKey: {
      type: String,
      default: null,
    },
    withCheckbox: {
      default: true,
    },
    withNumber: {
      default: true,
    },
    translate: {
      default: false,
    },
  },
  data() {
    return {
      maxColumn: 24,
      defaultSpan: 4,
      defaultHeaderClass: ["font-content", "font-semibold"],
      checkAll: false,
      isIndeterminate: false,
      checkList: [],
      checkListOptions: [],
    };
  },
  computed: {
    getOptionKey() {
      if (this.dataSource.length > 0) {
        return this.resolve(this.optionKey, this.dataSource[0])
          ? this.optionKey
          : null;
      } else {
        return null;
      }
    },
  },
  methods: {
    hasSlot(slotName) {
      return !!this.$slots[slotName];
    },
    resolve(path, obj) {
      return path?.split(".").reduce(function(prev, curr) {
        return prev ? prev[curr] : null;
      }, obj || self);
    },
    setColspan() {
      this.maxColumn -= this.withCheckbox ? 1 : 0;
      this.maxColumn -= this.withNumber ? 2 : 0;
      const columnsWithColspan = this.columns.filter((o) => o.colspan);
      columnsWithColspan.forEach((column) => {
        this.maxColumn = this.maxColumn - column.colspan;
      });
    },
    setDefaultSpan() {
      const columnsWithoutColspan = this.columns.filter((o) => !o.colspan);
      this.defaultSpan = Math.floor(
        this.maxColumn / (columnsWithoutColspan.length ?? 1)
      );
    },

    setOptions() {
      const optionKey = this.getOptionKey;
      // index as default options
      if (!optionKey) {
        this.dataSource.forEach((element, index) => {
          this.checkListOptions.push(index);
        });
      } else {
        this.dataSource.forEach((element, index) => {
          this.checkListOptions.push(this.resolve(optionKey, element) ?? index);
        });
      }
    },

    displayCustomRender(column, row, index) {
      let text = column?.dataIndex ? this.resolve(column.dataIndex, row) : "";
      let result = column?.customRender(text, row, index);
      const { children } = result;
      return (children && children != "") || children != undefined
        ? children
        : result;
    },
  },
  mounted() {
    this.setColspan();
    this.setDefaultSpan();
    this.setOptions();
  },
  watch: {
    checkAll: {
      handler: function(value) {
        console.log(value, "checkAll");
      },
    },
    checkList: {
      handler: function(value) {
        console.log(value, "Checklist");
      },
      deep: true,
    },
  },
};
</script>
