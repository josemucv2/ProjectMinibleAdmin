<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import handleError from "@/mixins/handleError";

export default {
  mixins: [handleError],
  components: {},
  mounted() {
    this.handleError();
  },
  methods: {},
};
</script>

<style lang="scss">

html {
  background-color: #8392a0;
}
</style>