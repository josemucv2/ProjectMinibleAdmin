<template>
  <ContainerVue :Title="'Jugadores'" class="space-y-5">
    <div class="w-full flex justify-between">
      <div class="w-48 flex items-center">
        <ButtonVue :label="'Agregar jugador'" @action="addPlayer" />
      </div>
      <div class="w-48 mb-5">
        <InputVue :placeholder="'Buscar Jugadores'" />
      </div>
    </div>
    <DataTableVue :thead="thead" :items="[]" />

    <ModalsVue
      :showDialog="showDialog"
      :title="'Agregar Jugadores'"
      @close="showDialog = false"
    >
      <AddPlayers />
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
import AddPlayers from "./Components/AddPlayers.vue";

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
    AddPlayers,
  },

  data() {
    return {
      thead: ["Nombre"],
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
    addPlayer() {
      this.showDialog = !this.showDialog;
      // this.notification("dark", "No Disponible");
    },
  },
};
</script>

<style scoped lang="scss"></style>
