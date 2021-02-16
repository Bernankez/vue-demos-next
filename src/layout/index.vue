<template>
  <div class="page">
    <side-bar></side-bar>
    <div>
      <router-view v-slot="{Component}">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </div>
  </div>
</template>

<script>
  import sideBar from "./sideBar.vue";

  export default {
    name: "Layout",
    components: { sideBar },
  };
</script>

<style scoped>
  .page {
    display: flex;
  }
</style>