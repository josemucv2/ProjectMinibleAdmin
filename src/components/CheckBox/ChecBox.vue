<template>
  <div class="center">
    <vs-checkbox v-model="value" @click="selecValue">{{ label }}</vs-checkbox>
  </div>
</template>

<script>
export default {
  name: "input-heckbox",

  props: {
    label: {
      type: String,
      required: false,
      default: "",
    },
  },

  data() {
    return {
      value: false,
    };
  },

  methods: {
    selecValue() {
      this.$emit("value", this.value);
    },
  },
};
</script>
