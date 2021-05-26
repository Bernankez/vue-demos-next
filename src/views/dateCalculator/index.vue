<template>
  <a-space direction="vertical">
    <a-range-picker v-model:value="dateRange" />
    <div>
      <a-checkbox v-model:checked="includeStart">包含开始日期</a-checkbox>
      <a-checkbox v-model:checked="includeEnd">包含结束日期</a-checkbox>
    </div>
    <div>共{{ days }}天</div>
  </a-space>
</template>

<script>
  import { defineComponent, reactive, toRefs, computed } from "vue";
  import moment from "moment";

  export default defineComponent({
    name: "dateCalculator",
    setup() {
      const state = reactive({
        dateRange: [],
        includeStart: true,
        includeEnd: true,
        days: computed(() => {
          if (state.dateRange.length > 0) {
            let startDate = moment(state.dateRange[0]._d);
            let endDate = moment(state.dateRange[1]._d);
            let days = endDate.diff(startDate, "day");
            if (state.includeStart && state.includeEnd) {
              days = days + 1;
            }
            if (!state.includeStart && !state.includeEnd) {
              days = days - 1;
            }
            if (days < 0) days = 0;
            return days;
          }
          return 0;
        }),
      });

      return {
        ...toRefs(state),
      };
    },
  });
</script>

<style lang="scss" scoped>
</style>
