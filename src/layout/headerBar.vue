<template>
  <div class="header-bar">
    <a-button type="link" size="large" @click="onToggle">
      <MenuFoldOutlined v-if="!isCollapsed" />
      <MenuUnfoldOutlined v-else />
    </a-button>
    <a-page-header :title="title"></a-page-header>
  </div>
</template>

<script>
  import { defineComponent, reactive, computed, toRefs } from "vue";
  import { useRoute, useRouter } from "vue-router";
  import { useStore } from "vuex";
  import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons-vue";

  export default defineComponent({
    name: "headerBar",
    components: { MenuFoldOutlined, MenuUnfoldOutlined },
    setup() {
      const route = useRoute();
      // const router = useRouter();
      const store = useStore();

      const state = reactive({
        title: computed(() => {
          return route.meta.title;
        }),
        isCollapsed: computed(() => {
          return store.state.app.MenuCollapsed;
        }),
      });

      // const onBack = () => {
      //   router.go(-1);
      // };

      const onToggle = () => {
        store.dispatch("app/toggleCollapsed", !state.isCollapsed);
      };

      return {
        ...toRefs(state),
        // onBack,
        onToggle
      };
    },
  });
</script>

<style lang="scss" scoped>
  .header-bar {
    display: flex;
    align-items: center;
    height: 54px;
    border-style: solid;
    border-width: 1px;
    border-color: rgb(235, 237, 240);
  }

  .ant-page-header {
    padding: 0;
  }
</style>