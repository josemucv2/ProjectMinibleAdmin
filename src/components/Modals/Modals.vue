<template>
  <div>
    <vs-dialog class="modal-confirm" v-model="dialog">
      <!-- Header Modal -->
      <template #header>
        <div class="header-modal w-full" align="center">{{ title }}</div>
      </template>
      <!-- End Header Modal -->

      <!-- Modal Content -->
      <slot />
      <!-- End Modal Content -->
    </vs-dialog>
  </div>
</template>

<script>
export default {
  name: "modals-components",
  props: {
    showDialog: {
      type: Boolean,
      required: false,
      default: false,
    },

    title: {
      type: String,
    },
  },
  data: function () {
    return {
      dialog: false,

      currency: "",
    };
  },
  watch: {
    showDialog() {
      if (this.showDialog) {
        this.dialog = true;
      } else {
        this.dialog = false;
      }
    },

    dialog() {
      if (this.dialog === false) {
        this.$emit("close");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep .vs-dialog {
  padding: 30px;
  max-width: 100%;
}

.header-modal {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 30px;
  /* identical to box height */

  /* Fonts Gray */

  color: #585858;
}

.ammount {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;

  /* SimpleText */

  color: #3f3f3f;
}

.type-tag {
  background: #ffffff;
  border: 0.5px solid #cccccc;
  box-sizing: border-box;
  border-radius: 4px;
  width: 75px;
  height: 12px;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 8px;
  line-height: 11px;
  /* identical to box height */

  /* Fonts Gray */

  color: #585858;
  display: flex;
  justify-content: center;
  align-items: center;
}

.label-transaction {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;

  color: #29bb89;
}

.info-transaction {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 14px;
  /* identical to box height */

  /* Fonts Gray */

  color: #585858;
}

.color-circle {
  width: 5px;
  height: 5px;
  background: red;
  border-radius: 50%;
}

// .green-circle {
//   background: $primary-green;
// }

.red-circle {
  background: #e33f3f;
}

.yellow-circle {
  background: #f3e138;
}
</style>
