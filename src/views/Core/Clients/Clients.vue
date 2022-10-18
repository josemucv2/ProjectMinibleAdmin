<template>
  <ContainerVue :Title="'Clientes'" class="space-y-5">
    <div class="w-full flex justify-between">
      <div class="w-48 flex items-center">
        <ButtonVue :label="'Agregar Cliente'" @action="addClient" />
      </div>
      <div class="flex space-x-4 justify-center items-center">
        <InputVue
          :placeholder="'Buscar cliente'"
          :label="'Buscar cliente'"
          @action="
            filtersData(GET_CLIENTS, 'clients/SET_CLIENTS', filter_client)
          "
          :value="filter_client"
          :valueTo="filter_client"
          @value="SearchFilterClient"
        />
        <div class="flex justify-center items-center mt-6 space-x-5">
          <ButtonVue
            :label="'Buscar'"
            @action="
              filtersData(GET_CLIENTS, 'clients/SET_CLIENTS', filter_client)
            "
          />
          <ButtonVue
            :label="'Reiniciar'"
            @action="resestVars"
            :color1="false"
          />
        </div>
      </div>
    </div>
    <DataTableVue
      class="client-body"
      :thead="thead"
      :items="GET_CLIENTS"
      @details="viewDetails"
      @addRoullet="addRoullet"
    />

    <ModalsVue
      :showDialog="showDialog"
      :title="'Agregar Cliente'"
      @close="showDialog = false"
    >
      <AddClientVue @canceled="showDialog = false" />
    </ModalsVue>

    <ModalsVue
      :showDialog="showDialog1"
      :title="'Agregar Ruletas'"
      @close="showDialog1 = false"
    >
      <AddRoulleteVue />
    </ModalsVue>
  </ContainerVue>
</template>

<script>
import ContainerVue from "@/layouts/Container/Container.vue";
import DataTableVue from "./Components/DataTable";
import ButtonVue from "@/components/Button/Button.vue";
import InputVue from "@/components/Input/Input.vue";
import ModalsVue from "@/components/Modals/Modals.vue";
import AddClientVue from "./Components/AddClient.vue";
import AddRoulleteVue from "./Components/AddRoullete.vue";
import filtersData from "@/mixins/filtersData";

import { mapGetters } from "vuex";

export default {
  name: "clientes-app",
  mixins: [filtersData],
  components: {
    ContainerVue,
    DataTableVue,
    ButtonVue,
    InputVue,
    ModalsVue,
    AddClientVue,
    AddRoulleteVue,
  },

  data() {
    return {
      thead: ["Nombre", "Token", "Status", "Detalles", "Ruletas"],
      showDialog: false,
      showDialog1: false,
      clients_selected: {},
      filter_client: "",
      list_client: [],
    };
  },
  computed: {
    ...mapGetters("clients", ["GET_CLIENTS"]),
  },

  mounted() {
    this.$store.dispatch("clients/GET_CLIENTS");
  },

  methods: {
    SearchFilterClient(value) {
      this.filter_client = value;
    },

    resestVars() {
      this.filter_client = "";

      this.$store.dispatch("clients/GET_CLIENTS");
    },

    //Agregar cliente
    addClient() {
      this.showDialog = !this.showDialog;
    },
    //Agregar cliente
    addRoullet(value) {
      this.showDialog1 = !this.showDialog1;
      console.log(value);
    },
    // ver detalles de cliente

    viewDetails(value) {
      const loading = this.$vs.loading({
        text: "Cargando...",
      });
      const body = {
        _id: value._id,
      };

      this.$store
        .dispatch("clients/GET_CLIENT_BY_ID", body)
        .then((response) => {
          this.$router.push({
            name: "detailsClient",
            params: {
              id: response.client._id,
            },
          });
          loading.close();
        });
    },
  },
};
</script>

<style scoped>
.client-body {
  height: calc(100vh - 250px);
  overflow: auto;
}
</style>
