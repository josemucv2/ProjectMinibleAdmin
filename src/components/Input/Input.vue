<template>
  <div>
    <p class="label mb-2">{{ label }}</p>

    <vs-input
      class="input-central"
      v-model="value"
      :placeholder="placeholder"
      v-on:keyup.enter="action"
      :type="type"
      :disabled="disabled"
      :step="0.1"
    />
  </div>
</template>

<script>
export default {
  name: "inputText",
  props: {
    label: {
      type: String,
      required: false,
      default: "",
    },
    placeholder: {
      type: String,
      required: false,
      default: "",
    },

    type: {
      type: String,
      required: false,
      default: "text",
    },
    valueTo: {
      type: String,
      required: false,
      default: "",
    },

    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data: function () {
    return {
      value: "",
    };
  },
  methods: {
    action() {
      this.$emit("action");
    },
  },
  mounted() {
    this.value = this.valueTo ? this.valueTo : "";
  },
  watch: {
    value() {
      this.$emit("value", this.value);
    },
    valueTo() {
      this.value = this.valueTo;
    },
  },
};
</script>

<style lang="scss">
.input-central {
  .vs-input {
    background: #ffffff;
    border: 1px solid #cccccc;
    box-sizing: border-box;
    border-radius: 6px;
    width: 100%;
    max-height: 40px;
    font-size: 14px;
    overflow: hidden;
  }

  .vs-input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  .vs-input__label--label {
    color: #585858;
    left: 3px;
  }

  .vs-input:focus {
    background: white;
  }

  .vs-input::-webkit-scrollbar {
    display: none;
  }
}

.max {
  position: absolute;
  right: 20px;
  top: 35px;
}

.currency-indicator {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 15px;
  /* identical to box height */

  /* SimpleText */

  color: #3f3f3f;
}

.max-button {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 15px;
  /* identical to box height */

  display: flex;
  align-items: center;

  /* Primary */

  color: #29bb89;
  cursor: pointer;
}

.label {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;

  /* Fonts Gray */

  color: #000000;
}
</style>
