<template>
  <div class="container-layout">
    <h1 class="title-container">{{ Title }}</h1>
    <slot />
  </div>
</template>

<script>
export default {
  name: "container-layout",

  props: {
    Title: {
      type: String,
    },
  },
};
</script>

<style scoped lang="scss">
.container-layout {
  width: 100%;
  padding: 20px 50px 50px 50px;
}

.title-container {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 33px;

  color: #000000;
}
</style>
