<template>
  <div class="core-container">
    <SidenavVue>
      <router-view class="router-view" />
      <FooterVue />
    </SidenavVue>
  </div>
</template>

<script>
import SidenavVue from "@/components/SideNav/Sidenav.vue";
import FooterVue from "@/components/Footer/Footer.vue";
export default {
  name: "CoreLayout",
  components: {
    SidenavVue,
    FooterVue,
  },
};
</script>

<style scoped lang="scss">
.core-container {
  height: 100vh;
  display: flex;
}

.router-view {
  height: calc(100vh - 90px);
}
</style>
