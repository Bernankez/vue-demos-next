<template>

</template>

<script>
  import { defineComponent, reactive, computed, toRefs } from "vue";

  export default defineComponent({
    name: "calculator",
    setup() {
      const state = reactive({});

      return {
        ...toRefs(state),
      };
    },
  });
</script>

<style scoped>
</style>