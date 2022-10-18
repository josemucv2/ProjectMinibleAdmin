<template>
  <ContainerVue :Title="'Usuarios'" class="space-y-5">
    <div class="w-full flex justify-between">
      <div class="w-48 flex items-center">
        <ButtonVue :label="'Agregar Usuario'" @action="addUser" />
      </div>
      <div class="w-48 mb-5">
        <InputVue :placeholder="'Buscar usuario'" />
      </div>
    </div>
    <DataTableVue :thead="thead" :items="GET_USERS" />

    <ModalsVue
      :showDialog="showDialog"
      :title="'Agregar Usuarios'"
      @close="showDialog = false"
    >
      agregar usuarios
    </ModalsVue>
  </ContainerVue>
</template>

<script>
import DataTableVue from "./Components/DataTable";
import ContainerVue from "@/layouts/Container/Container.vue";
import InputVue from "@/components/Input/Input.vue";
import ButtonVue from "@/components/Button/Button.vue";
import notification from "@/mixins/notifications";
import ModalsVue from "@/components/Modals/Modals.vue";

import { mapGetters } from "vuex";
export default {
  name: "list-users",
  mixins: [notification],
  components: {
    DataTableVue,
    ContainerVue,
    InputVue,
    ButtonVue,
    ModalsVue,
  },

  data() {
    return {
      thead: [
        "Nombre",
        "Apellidos",
        "Usuario",
        "Email",
        "Currencies",
        "Cliente",
        "Fecha de Creacion",
        "Fecha de ultima actualizacion",
      ],
      showDialog: false,
    };
  },

  computed: {
    ...mapGetters("users", ["GET_USERS"]),
  },
  mounted() {
    this.$store.dispatch("users/GET_USERS");
  },

  methods: {
    addUser() {
      this.showDialog = !this.showDialog;
      // this.notification("dark", "No Disponible");
    },
  },
};
</script>

<style scoped lang="scss"></style>
