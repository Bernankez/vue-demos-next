<template>
  <a-menu
    style="height: 100%"
    mode="inline"
    theme="dark"
    :inline-collapsed="isCollapsed"
    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
  >
    <a-menu-item key="home">
      <router-link to="/home">
        <HomeFilled />
        <span>Home</span>
      </router-link>
    </a-menu-item>
    <a-menu-item key="calculator">
      <router-link to="/calculator">
        <CalculatorFilled />
        <span>Calculator</span>
      </router-link>
    </a-menu-item>
    <a-menu-item key="dateCalculator">
      <router-link to="/dateCalculator">
        <ScheduleFilled />
        <span>DateCalculator</span>
      </router-link>
    </a-menu-item>
  </a-menu>
</template>

<script>
  import { computed, defineComponent, reactive, toRefs, watch } from "vue";
  import { useStore } from "vuex";
  import { useRoute } from "vue-router";
  import {
    CalculatorFilled,
    HomeFilled,
    ScheduleFilled,
  } from "@ant-design/icons-vue";

  export default defineComponent({
    name: "sideBar",
    components: { CalculatorFilled, HomeFilled, ScheduleFilled },
    setup() {
      const store = useStore();
      const route = useRoute();

      const state = reactive({
        isCollapsed: computed(() => {
          return store.state.app.MenuCollapsed;
        }),
        selectedKeys: computed(() => {
          return [route.name];
        }),
        openKeys: [],
        preOpenKeys: [],
      });

      watch(
        () => state.openKeys,
        (newVal, oldVal) => {
          state.preOpenKeys = oldVal;
        }
      );

      return {
        ...toRefs(state),
      };
    },
  });
</script>

<style scoped>
</style>