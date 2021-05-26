<template>
  <div class="page">
    <calculator></calculator>
  </div>
</template>

<script>
  import { defineComponent, reactive, computed, toRefs } from "vue";
  import calculator from "./calculator.vue";

  export default defineComponent({
    name: "calculatorIndex",
    components: { calculator },
    setup() {
      const state = reactive({});

      return {
        ...toRefs(state),
      };
    },
  });
</script>

<style lang="scss" scoped>
  .page {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #eee;
  }
</style>