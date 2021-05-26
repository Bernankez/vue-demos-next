<template>
  <div class="page">
    <aside class="nav">
      <side-bar></side-bar>
    </aside>
    <div class="main">
      <header class="header">
        <header-bar></header-bar>
      </header>
      <main class="content">
        <router-view v-slot="{Component}">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </router-view>
      </main>
    </div>
  </div>
</template>

<script>
  import sideBar from "./sideBar.vue";
  import headerBar from "./headerBar.vue";

  export default {
    name: "Layout",
    components: { sideBar, headerBar },
  };
</script>

<style lang="scss" scoped>
  .page {
    display: flex;
    flex-wrap: nowrap;
    height: 100%;
    width: 100%;
    overflow: hidden;

    .main {
      position: relative;
      height: 100%;
      width: 100%;
      padding-top: 54px;
      box-sizing: border-box;

      .header {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
      }

      .content {
        height: 100%;
        width: 100%;
        overflow: auto;
      }
    }
  }
</style>