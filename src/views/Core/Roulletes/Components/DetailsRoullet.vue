<template>
  <Container :Title="'Detalles del operador'">
    <div class="w-full flex justify-between">
      <div class="w-48 flex items-center">
        <ButtonVue :label="'Atras'" class="w-32 my-5" @action="goBack" />
      </div>
      <div class="w-48 flex justify-end">
        <ButtonVue
          :label="'Eliminar Operador'"
          class="w-32 my-5"
          @action="deleteOperator"
        />
      </div>
    </div>
    <div class="detail-container space-y-5">
      <InfoVue
        :title="'Nombre:'"
        @action="openDialog(1)"
        :detail="GET_OPERATOR_BY_ID.name"
      />

      <InfoVue
        :title="'Apuesta minima:'"
        @action="openDialog(2)"
        :detail="'Apuesta minima'"
      />

      <InfoVue
        :title="'Apuesta maxima:'"
        @action="openDialog(3)"
        :detail="'Apuesta maxima'"
      />
    </div>

    <ModalsVue
      :showDialog="showDialog"
      :title="'Editar'"
      @close="showDialog = false"
    >
      <div class="flex space-x-10 justify-center items-center">
        <InputVue :label="editLabel" :valueTo="editValueTo" />
        <ButtonVue :label="'Guardar'" class="mt-5" />
      </div>
    </ModalsVue>
  </Container>
</template>

<script>
import Container from "@/layouts/Container/Container.vue";
import ButtonVue from "@/components/Button/Button.vue";
import ModalsVue from "@/components/Modals/Modals.vue";
import notification from "@/mixins/notifications";
import InfoVue from "@/components/Info/Info.vue";
import InputVue from "@/components/Input/Input.vue";
import { mapGetters } from "vuex";

export default {
  mixins: [notification],

  name: "detail-operator",
  components: {
    Container,
    ButtonVue,
    ModalsVue,
    InfoVue,
    InputVue,
  },
  data() {
    return {
      showDialog: false,
      editLabel: "",
      editValueTo: "",
    };
  },

  computed: {
    ...mapGetters("operators", ["GET_OPERATOR_BY_ID"]),
  },

  methods: {
    goBack() {
      this.$router.push({ name: "Operator" });
    },

    openDialog(value) {
      this.showDialog = !this.showDialog;
      switch (value) {
        case 1:
          this.editLabel = "Nombre";
          this.editValueTo = this.GET_OPERATOR_BY_ID.name;
          break;
        case 2:
          this.editLabel = "Apuesta Minima";
          this.editValueTo = "Apuesta Minima";
          break;
        case 3:
          this.editLabel = "Apuesta Maxima";
          this.editValueTo = "Apuesta Maxima";
          break;
      }
    },

    deleteOperator() {
      this.notification("primary", "No disponible");
    },
  },
};
</script>

<style scoped lang="scss">
.detail-container {
  width: 100%;
  background: rgba(255, 255, 255, 0.404);
  border-radius: 5px;
  height: calc(100vh - 230px);
  padding: 25px 50px 50px 50px;
  overflow: auto;
}
</style>
