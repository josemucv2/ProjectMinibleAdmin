<template>
  <div>
    <vs-button
      class="button-central relative"
      ref="contentButton"
      :disabled="disabled"
      color="rgb(60,74,80)"
      @click="action"
      v-if="color1"
    >
      <img :src="icon" class="mr-1" />
      {{ label }}
    </vs-button>

    <vs-button
      class="button-central relative"
      ref="contentButton"
      :disabled="disabled"
      @click="action"
      color="#636678"
      v-else
    >
      <img :src="icon" class="mr-1" />
      {{ label }}
    </vs-button>
  </div>
</template>

<script>
export default {
  name: "button-components",
  props: {
    label: {
      type: String,
      required: true,
      default: "",
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },

    icon: {
      icon: Object,
      required: false,
    },

    color1: {
      type: Boolean,
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

<style lang="scss">
.button-central {
  border-radius: 8px;
  width: 100%;
  max-height: 40px;
}
</style>
