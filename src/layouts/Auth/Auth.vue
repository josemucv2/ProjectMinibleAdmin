<template>
  <div class="auth-container">
    <img
      src="@/assets/Icon/Home.svg"
      class="flex float-right cursor-pointer mr-5"
      @click="goHome"
    />
    <router-view />
    <FooterVue/>
  </div>
</template>

<script>
import FooterVue from "@/components/Footer/Footer.vue";
export default {
  name: "Auth-Layout",
  components: {
    FooterVue,
  },

  methods: {
    goHome() {
      this.$router.push({ name: "login" });
    },
  },
};
</script>

<style lang="scss" scoped>
.auth-container {
  width: 100%;
  height: 100vh;
  padding: 10px 0px 10px 0px;
}
</style>
