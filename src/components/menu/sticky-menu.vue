<template>
  <el-affix position="bottom" :offset="10">
    <el-popover placement="top" trigger="click">
      <template #reference>
        <el-button>
          Test
        </el-button>
      </template>
      <el-cascader-panel :options="options"></el-cascader-panel>
      <!-- <span>test popover</span> -->
    </el-popover>
  </el-affix>
</template>
<script>
export default {
  data() {
    return {
      options: [
        {
          value: "guide",
          label: "Guide",
          children: [
            {
              value: "disciplines",
              label: "Disciplines",
            },
          ],
        },
      ],
    };
  },
};
</script>
