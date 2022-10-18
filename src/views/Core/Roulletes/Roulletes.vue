<template>
  <ContainerVue :Title="'Ruletas'" class="space-y-5">
    <div class="w-full flex justify-between">
      <div class="w-48 flex items-center">
        <ButtonVue :label="'Agregar Ruleta'" @action="addRoullete" />
      </div>
      <div class="w-48 mb-5">
        <InputVue :placeholder="'Buscar Ruleta'" />
      </div>
    </div>
    <DataTableVue
      :thead="thead"
      :items="GET_OPERATORS"
      @viewsRoullet="viewsRoullet"
    />

    <ModalsVue
      :showDialog="showDialog"
      :title="'Agregar Operador'"
      @close="showDialog = false"
    >
      <AddRoullete />
    </ModalsVue>

    <ModalsVue
      :showDialog="showDialog2"
      :title="'Agregar Ruleta'"
      @close="showDialog2 = false"
    >
      <DataTableVue2 :thead="thead2" :items="roulletes" />
    </ModalsVue>
  </ContainerVue>
</template>

<script>
import DataTableVue from "./Components/DataTable";
import DataTableVue2 from "@/components/DataTable/DataTable.vue";
import ContainerVue from "@/layouts/Container/Container.vue";
import InputVue from "@/components/Input/Input.vue";
import ButtonVue from "@/components/Button/Button.vue";
import notification from "@/mixins/notifications";
import ModalsVue from "@/components/Modals/Modals.vue";
import AddRoullete from "./Components/AddRoullete";

import { mapGetters } from "vuex";
export default {
  name: "list-Operator",
  mixins: [notification],
  components: {
    DataTableVue,
    ContainerVue,
    InputVue,
    ButtonVue,
    ModalsVue,
    AddRoullete,
    DataTableVue2,
  },

  data() {
    return {
      thead: ["Nombre", "Codigo", "Logo", "Interfaz", "Detalles"],
      showDialog: false,
      showDialog2: false,

      thead2: [
        "Ruleta",
        "Pleno",
        "Semi Plano",
        "Calle",
        "Cuadro",
        "Linea",
        "Columna",
        "Docena",
        "Chance simple",
        "Cubre",
        "Duracion de ronda",
        "Acciones",
      ],

      roulletes: [],
      name: "",
    };
  },

  computed: {
    ...mapGetters("operators", ["GET_OPERATORS"]),
  },
  mounted() {
    this.$store.dispatch("operators/GET_OPERATORS");
  },

  methods: {
    viewsRoullet(value) {
      this.showDialog2 = !this.showDialog2;
      this.roulletes = value.roulettes;
      this.name = value.name;
    },
    addRoullete() {
      this.showDialog = !this.showDialog;
      // this.notification("dark", "No Disponible");
    },
  },
};
</script>

<style scoped lang="scss"></style>
