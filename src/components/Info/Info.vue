<template>
  <div class="flex justify-between">
    <div>
      <h2 class="title-detail">{{ title }}</h2>
      <p class="detail-detail">{{ detail }}</p>
    </div>

    <ButtonVue
      :label="'Editar'"
      @action="action"
      :disabled="disabled"
      v-if="button"
    />
  </div>
</template>

<script>
import ButtonVue from "../Button/Button.vue";
export default {
  name: "info-component",
  components: {
    ButtonVue,
  },
  props: {
    title: {
      type: String,
    },
    detail: {
      type: String,
    },

    disabled: {
      tpye: Boolean,
      default: false,
    },
    button: {
      tpye: Boolean,
      default: true,
    },
  },

  methods: {
    action() {
      this.$emit("action");
    },
  },
};
</script>

<style scoped lang="scss">
.title-detail {
  font-size: 15px;
  font-weight: bold;
}

.detail-detail {
  font-size: 15px;
}
</style>
