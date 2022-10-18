<template>
  <div class="footer flex justify-center space-x-2 items-center">
    <img src="@/assets/image/logo-sm.png" class="img"/>
    <div>Minible &copy; copyright</div>
  </div>
</template>

<script>
export default {
  name: "footer-components",
};
</script>

<style scoped lang="scss">
.footer {
  text-align: center;
  background-color: rgb(255, 255, 255);
  border-top: 1px solid rgba(255, 255, 255, 0.274);
  height: 40px;
}
.img{
  width: 25px;
}
</style>
